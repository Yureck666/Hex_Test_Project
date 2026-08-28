# Match-3 Project — Agent Guide

Unity match-3 playable (Luna / WebGL). Код: `Assets/Scripts/Match3/`. Документация: `Docs/`. Скиллы: `skills/`.

**Стандарты кода и Luna** — этот файл (`CLAUDE.md`). **Не компилировать Unity** без явной просьбы — [AGENTS.md](AGENTS.md).

---

## АКТУАЛЬНАЯ СИСТЕМА — сцена `New`

**Работаем с новой системой.** Рабочая сцена — [Assets/Scenes/New.unity](Assets/Scenes/New.unity).
Всё новое пишем в `Match3/Core` + `Match3/View`. Legacy (`Board.*.cs`, `Piece.cs`, `ScenarioManager`,
`UI_Scene.unity`) — **старая система**: живёт параллельно, не источник истины, трогаем только по явной просьбе.

### Два слоя

| Слой | Папка | Asmdef | Правила |
|------|-------|--------|---------|
| **Core** — вся логика | [Assets/Scripts/Match3/Core](Assets/Scripts/Match3/Core) | `Match3.Core`, `noEngineReferences: true` | **Никакого UnityEngine**: без `MonoBehaviour`, `Vector*`, `Time`, корутин, DOTween. Детерминированно, тестируемо. **`Simulation.Tick()` = один логический такт (beat)**, см. ниже. |
| **View** — только визуал | [Assets/Scripts/Match3/View](Assets/Scripts/Match3/View) | `Match3.View` → `Match3.Core`, `spine-unity`, `spine-csharp` | Зеркалит состояние Core + реагирует на `SimEvent`. Единственный, кто знает, сколько секунд длится beat (`BoardView.BeatsPerSecond = 60`). World space: `SpriteRenderer`, **без Canvas/UI** (booster-префабы legacy это предполагают). |

### Логическое время (beat) — читать перед любой правкой бустеров

Core — **симуляция с фиксированным логическим шагом**. `Tick()` продвигает ровно один beat; секунд Core не знает.
Эффект бустера **ничего не меняет** — он **планирует** операции на [EffectTimeline](Assets/Scripts/Match3/Core/Boosters/EffectTimeline.cs)
(`ScheduledOp`, порядок по `(DueBeat, Seq)`), а `Tick` применяет только то, что наступило на этом такте.
Отсюда всё остальное:

- Ракета чистит линию **расходящейся волной** (`TargetOrder.DistanceFromOrigin` + `StaggerBeats`), colorBomb — с задержками,
  мерж colorBomb+X **насыпает** бустеры (`StageAction.SpawnBooster`) и потом **поштучно поджигает** (`StageAction.Detonate` + `StageTiming.AfterPreviousStage`).
- Клетка, до которой волна ещё не дошла, — **обычная интерактивная клетка**. Игрок может её свапнуть, и волна ударит по тому, что там окажется.
- «Занятость» фишки — состояние Core (`PieceTable.BusyUntilBeat`, `PieceFlags.Activating/Swapping`), не эвристика View.
  Единственный вопрос ввода — `Simulation.IsCellInteractive(cell)`.
- Гравитация над клетками незакончившейся волны заперта (`GravityGate`, watermark в beat-ах), иначе волну «съедает» снизу.
- Детерминизм: шаг фиксирован, порядок операций — `(DueBeat, Seq)`, случайный порядок целей — sim-стрим `RngStream.Effect`
  (не `Cosmetic`). Replay пишет beat команды.

Подробно: [Docs/Booster-Timing-Model.md](Docs/Booster-Timing-Model.md).

Core-подсистемы: `Sim/` (`Simulation`, `MatchSystem`, `ClearSystem`, `GravitySystem`, `RefillSystem`, `ShuffleSystem`, `GravityGate`),
`Boosters/` (`BoosterProgram`/`BoosterStage`/`BoosterExecutor`/`EffectTimeline`/`BoosterLibrary`/`BoosterComboTable`, `MergeSystem`), `Cells/`, `Pieces/`, `Level/`,
`Events/` (`SimEvent`), `Commands/` (`InputCommand`), `Random/` (`Match3Rng` — только он, никогда `UnityEngine.Random`),
`Replay/`, `Diagnostics/` (`CoreInvariants`, `StateHash`), `Scenario/`.

View: [BoardView.cs](Assets/Scripts/Match3/View/BoardView.cs) (хост `Simulation` + Spine/DOTween/FX),
[BoardInputRouter.cs](Assets/Scripts/Match3/View/BoardInputRouter.cs) (тап/свайп → `InputCommand`),
[BoardLayout.cs](Assets/Scripts/Match3/View/BoardLayout.cs) (клетка↔мир, screen→cell),
[Match3LevelAsset.cs](Assets/Scripts/Match3/View/Match3LevelAsset.cs).

### Данные и сцена

- Уровень — **один** `Match3LevelAsset`: [Assets/Data/New/NewMatch3Level.asset](Assets/Data/New/NewMatch3Level.asset).
  Сетка, геометрия, префабы, pre-placed фишки строятся из него в рантайме — **в сцене ничего не расставлено руками**.
- Сцена `New`: `Main Camera` (ortho) + `Board` (`BoardView` + `BoardInputRouter`).
- Booster-префабы: [Assets/Prefabs/Match3View/Boosters](Assets/Prefabs/Match3View/Boosters).

### Меню `Match3/` (Editor)

| Пункт | Файл |
|-------|------|
| `Match3/Level Editor` | [Match3LevelEditorWindow.cs](Assets/Scripts/Match3/Editor/Match3LevelEditorWindow.cs) — редактор `Match3LevelAsset` |
| `Match3/Piece Paint` | [Match3PiecePaintWindow.cs](Assets/Scripts/Match3/Editor/Match3PiecePaintWindow.cs) |
| `Match3/Setup New Core Scene` | [Match3SceneSetup.cs](Assets/Scripts/Match3/Editor/Match3SceneSetup.cs) — idempotent bootstrap сцены |
| `Match3/Run BoardView Smoke Test` | [BoardViewSmokeTest.cs](Assets/Scripts/Match3/Editor/BoardViewSmokeTest.cs) |
| `Match3/Migrate Booster Prefabs` | [Match3BoosterPrefabMigrationTool.cs](Assets/Scripts/Match3/Editor/Match3BoosterPrefabMigrationTool.cs) |

**Правка живой доски (Play Mode / билд):** галка `TilesDebug` на `BoardView` → кнопка `TILES` в правом нижнем углу переключает режим `PLAY`/`EDIT`; в `EDIT` тап по тайлу открывает список всех типов, доска ввода не получает.
[BoardDebugTileMenu.cs](Assets/Scripts/Match3/View/BoardDebugTileMenu.cs) (ставится в сцену сам, работает и в билде)
+ [BoardDebugMutator.cs](Assets/Scripts/Match3/Core/Diagnostics/BoardDebugMutator.cs). Правит `BoardState`, **не** `Match3LevelAsset` — рестарт возвращает уровень.

### Новый код — куда

1. Правило игры / состояние доски → `Core/`, соответствующая подпапка. Никаких Unity-типов.
2. Анимация, Spine, звук, партиклы → `View/`. **Тайминг эффекта, который влияет на логику, — в Core, в тактах.**
3. Новый бустер / комбо → это **данные**: `BoosterStage[]` в `BoosterLibrary` / `BoosterComboTable`. Новый примитив (селектор,
   действие, порядок) — только если существующими не выражается.
4. Нужен новый визуальный сигнал из логики → новый `SimEventType` в Core, обработка в `BoardView`. Если View должен
   успеть проиграть что-то *до* удара (снаряд, луч) — это `EffectScheduled` с `Arg0 = сколько тактов до удара`.
5. Настройка уровня → поле в `Match3LevelAsset` + UI в `Match3LevelEditorWindow`, не в коде.

---

## Документация (`Docs/`)

Доки ниже, кроме `Booster-Timing-Model.md` / `M4-View-Layer-Status.md` / `M0-*`, описывают **старую систему** — читать как справку по legacy-поведению, которое портируется в Core.

| Документ | Когда читать |
|----------|--------------|
| **[Docs/Booster-Timing-Model.md](Docs/Booster-Timing-Model.md)** | **Новая система: логическое время (beat), таймлайн эффектов, язык программ бустеров, занятость, детерминизм.** Обязательно перед правкой бустеров |
| **[Docs/M4-View-Layer-Status.md](Docs/M4-View-Layer-Status.md)** | **Новая система: статус Core/View, что сознательно не сделано** (раздел «DOTween не подключен» устарел — DOTween работает; фазовая раскадровка View тоже устарела, см. Booster-Timing-Model) |
| [Docs/M0-Determinism-Spike-Results.md](Docs/M0-Determinism-Spike-Results.md) | Детерминизм Core, `StateHash`, replay |
| [Docs/M0-Reference-Capture-Checklist.md](Docs/M0-Reference-Capture-Checklist.md) | Что снимали с legacy как эталон |
| **[Docs/START-HERE.md](Docs/START-HERE.md)** | Маршрут по типу задачи (legacy) |
| [Docs/README.md](Docs/README.md) | Полное оглавление и покрытие |
| [Docs/System-Linkage-Audit.md](Docs/System-Linkage-Audit.md) | **Глобальные связи**, hot paths, чеклист новых механик |
| [Docs/Match3-Architecture.md](Docs/Match3-Architecture.md) | Слои: ввод, доска, колонки, события |
| [Docs/Board-Partial-Files.md](Docs/Board-Partial-Files.md) | Разбиение `Board.*.cs`, куда класть код |
| [Docs/Boosters.md](Docs/Boosters.md) | Все бустеры, мердж, тап, `BoosterCatalog` |
| [Docs/Stability-And-Regression-Plan.md](Docs/Stability-And-Regression-Plan.md) | Пустые ячейки, merge fail, snitch targets, `Board.Integrity` |
| [Docs/Water-Rising-Mechanic-Plan.md](Docs/Water-Rising-Mechanic-Plan.md) | План rising water (opt-in) |
| [Docs/Obstacles-And-Portals-Plan.md](Docs/Obstacles-And-Portals-Plan.md) | Куст 4 HP, портал, блок 2×2 с панелями |
| [Docs/BOARD_HOT_PATH_OPTIMIZATION.md](Docs/BOARD_HOT_PATH_OPTIMIZATION.md) | Recycle/orphan, pool return hot path |
| [Docs/POOL_AND_SPAWN_OPTIMIZATION.md](Docs/POOL_AND_SPAWN_OPTIMIZATION.md) | Prewarm `PiecePool` / `ParticlePool` |
| [Docs/Scripts-Index.md](Docs/Scripts-Index.md) | Индекс скриптов |
| [Docs/UI-Utilities.md](Docs/UI-Utilities.md) | UI и Utilities |
| [Docs/PieceBoosterSpineDriver.md](Docs/PieceBoosterSpineDriver.md) | Spine на бустерах |
| [Docs/Booster-Pattern-Editor-Tutorial.md](Docs/Booster-Pattern-Editor-Tutorial.md) | Редактор паттернов бустеров |
| [Docs/LUNA_RELEASE_BUILD_FIX.md](Docs/LUNA_RELEASE_BUILD_FIX.md) | Luna/WebGL особенности билда |

---

## Skills (`skills/`)

| Скилл | Когда |
|-------|-------|
| [skills/luna/SKILL.md](skills/luna/SKILL.md) | Luna SDK, C# 7.3, Bridge.NET, корутины |
| [skills/performance/SKILL.md](skills/performance/SKILL.md) | Hot path: Update, refill, tick |
| [skills/architecture/SKILL.md](skills/architecture/SKILL.md) | Структура папок, пакеты |
| [skills/serializable-curve/SKILL.md](skills/serializable-curve/SKILL.md) | `AnimationCurve` → Luna-safe curve |
| [skills/commit/SKILL.md](skills/commit/SKILL.md) | Коммиты |

---

## Критические связи legacy-системы (кратко)

Всё в этом разделе — **старая система** (`Board.*.cs`, `ScenarioManager`, `UI_Scene`). Нужно как эталон поведения при портировании в Core; новый код так не пишем.

### Точка входа

`GameManager` → `ScenarioManager.Init` → N × `Board` + **один shared** `PiecePool`.

### Три представления фишки (рассинхрон = баги)

`Tile[,].Piece` ↔ `Column.Stack[i]` ↔ `Piece.BoardPosition` / `RectTransform`.  
Синхронизация: `RefillColumn` / `RepackColumnSegments` в [Board.FillGravity.cs](Assets/Scripts/Match3/Board.FillGravity.cs).

### Порядок кадра `Board.Update` (не менять без причины)

1. `UpdateShuffleCheck`
2. `TickBoardFrameWorkQueue`
3. `TryMigrateDiagonally` (все колонки)
4. `RefillAllColumnsLightweight` — **пропускается** если `IsBoosterMergeInProgress`
5. `Column.Tick` → `Piece.TickFall` → `OnLanded` → `HandlePieceLanded` (может запустить новый clear)

### События (static на `Board`)

| Событие | Смысл |
|---------|--------|
| `OnMoveConsumed` | Один валидный свайп |
| `OnPiecesCleared(int)` | Каждый clear-батч (матч, бустер, snitch…) — подписчик `ScenarioManager` |

### Мердж бустера

`ReserveBoosterSlot` → fly → `HoldMergedBoosterInReservedStackSlot` → `RegisterMergedBoosterAtAnchor`.  
Между Reserve и Register **не** вызывать `StartFill`. Fail → `CleanupFailedMergedBooster`.

### Новая механика — обязательно

1. Opt-in флаг (default off) в `BoardStepConfig` / settings
2. Код в новом `Board.Feature.cs`, поля в `Board.cs`
3. В `RefillColumn` / `Update` — диспетчер: `if (!UsesFeature) { старый код; return; }`
4. Чеклист: [System-Linkage-Audit.md §13](Docs/System-Linkage-Audit.md), [Stability-And-Regression-Plan.md](Docs/Stability-And-Regression-Plan.md)

---

## Project Structure

```
Assets/Scripts/
├── Match3/
│   ├── Core/        # НОВАЯ система: логика, Match3.Core.asmdef, без UnityEngine
│   ├── View/        # НОВАЯ система: визуал, Match3.View.asmdef
│   ├── Editor/      # Level Editor, Scene Setup, smoke test, миграции
│   └── *.cs         # LEGACY: Board partial, Piece, ScenarioManager, BoosterCatalog
├── UI/              # GameUI, LunaIntegration, Tutorial, resolution
├── Utilities/       # AudioController, Easings, TimeScale
└── Editor/          # Только Unity Editor tools
```

Namespaces follow folder structure.

**Assembly Definitions:** только `Match3.Core` и `Match3.View`. Остальной код — `Assembly-CSharp`, и оттуда виден Core/View, но **не наоборот**: Core/View не могут ссылаться на legacy-типы (`Board`, `Piece`, `BoardSettings`, `BoosterCatalog` SO). Нужное значение из SO — дублировать константой во View или прокидывать через `Match3LevelAsset`. DOTween и Spine доступны из asmdef (precompiled DLL / свои asmdef).

---

## Dependencies

Required packages (verify installation):

- DOTween **v1.2.705**
- Cinemachine
- TextMeshPro (always `TMP_Text`, never legacy `Text`)

Api Compatibility Level: **.NET Framework**

---

## Naming Conventions

| Type | Convention | Example |
|------|------------|---------|
| Private fields | `_camelCase` | `_playerHealth` |
| Serialized fields | `camelCase` | `maxSpeed` |
| Public/Protected | `PascalCase` | `CurrentHealth` |
| Local variables | `camelCase` | `tempValue` |

---

## Error Handling Philosophy

**CRITICAL**: Fail-fast approach

- NO null checks unless null is valid business logic
- NO try-catch wrapping — let exceptions surface
- Missing references should crash immediately
- Errors indicate bugs that need fixing, not graceful degradation

---

## Performance Rules

- Cache all `GetComponent<T>()` calls in `Awake()`
- Never call `GetComponent` in `Update()` or frequent methods
- Hot paths: см. [skills/performance/SKILL.md](skills/performance/SKILL.md) и [BOARD_HOT_PATH_OPTIMIZATION.md](Docs/BOARD_HOT_PATH_OPTIMIZATION.md)

---

## Logging

`Debug.Log` / `Debug.LogWarning` / `Debug.LogError`

Отладка доски: `DebugSettings` — `LogGravityHoleDebug`, `LogBoosterMatchDebug`, `SnitchChainDebugEnabled`.

---

## Luna / Bridge.NET Compatibility

Luna transpiles C# via Bridge.NET — только **C# 7.3**. Ошибки в `LunaTemp/luna.log`, не в Unity Console.

**Запрещённый синтаксис:**

| Запрещено | Заменить на |
|-----------|-------------|
| `list[^1]` | `list[list.Count - 1]` |
| `new (args)` | `new TypeName(args)` |
| `HashCode.Combine(a, b)` | `a * 397 ^ b` |
| record types, switch expressions | не использовать |

**Правила:**

- Luna SDK **только** в [Assets/Scripts/UI/LunaIntegration.cs](Assets/Scripts/UI/LunaIntegration.cs) — без `#if` вокруг SDK в других файлах
- `using UnityEditor` → только в `Editor/`
- Неподдерживаемые пакеты удалять из `manifest.json`
- Бинарные данные в Resources: `.txt` + base64 → `TextAsset.text` → `Convert.FromBase64String` (не `.bytes` / не `TextAsset.bytes`)
- **Ввод: `Input` в билде теряет начало drag и быстрые тапы.** `mousePosition` на кадре нажатия — уже сдвинутая (позиция последнего `mousemove` пачки), `mouseup` в той же пачке стирает `GetMouseButtonDown`, `TouchPhase.Began` может не прийти. Пик цели — по пути указателя + латч нажатия, **никогда** одиночный `Raycast` по `mousePosition` на кадре press. Разбор и правила: [skills/luna/SKILL.md](skills/luna/SKILL.md#ввод-input-в-luna-теряет-начало-drag-и-быстрые-тапы--повторяется-в-каждом-проекте), референс — [PlayableInput.cs](Assets/Scripts/BridgeRescue/Controls/PlayableInput.cs)
- Доски при смене шага: предпочитать `Board.enabled = false`, не `gameObject.SetActive(false)` на board (Luna + Spine)

**Корутины: запрещён `yield return IEnumerator`**

| Запрещено | Заменить на |
|-----------|-------------|
| `yield return SomeRoutine(args)` | `var e = SomeRoutine(args);` `while (e.MoveNext()) yield return e.Current;` |

Unity должен видеть только `null`, `WaitForSeconds`, `YieldInstruction` — никогда `IEnumerator` как yield-значение.

Подробнее: [skills/luna/SKILL.md](skills/luna/SKILL.md).

---

## Testing

Not currently implemented. Регрессия — чеклисты в [Stability-And-Regression-Plan.md](Docs/Stability-And-Regression-Plan.md).

---

## Communication

- **Начинать каждый ответ с имени пользователя: `Юра`** — это канарейка, подтверждающая, что `CLAUDE.md` прочитан. Нет «Юра» в начале ответа = инструкция не в контексте.
- Always respond in Russian
- Code and technical terms in English
- NO code comments — code should be self-explanatory through clear naming
