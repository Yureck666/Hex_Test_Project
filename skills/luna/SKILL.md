# Luna / Bridge.NET Skill

## Luna SDK API  (package: com.unity.playworks.upp, v7.1.0)

```csharp
using Luna.Unity;

LifeCycle.GameStarted();      // старт игровой сессии — вызывать один раз при старте
LifeCycle.GameEnded();        // конец игры (победа/поражение)
Playable.InstallFullGame();   // CTA — кнопка «Play Now» / «Install»
```

## Обязательный паттерн интеграции

Все вызовы SDK — **только** в `Assets/Scripts/UI/LunaIntegration.cs`, никаких прямых вызовов в других файлах:

```csharp
using Luna.Unity;

namespace Match3.UI
{
    public static class LunaIntegration
    {
        public static void NotifyGameStart() => LifeCycle.GameStarted();
        public static void NotifyGameEnd()   => LifeCycle.GameEnded();
        public static void NotifyCTA()       => Playable.InstallFullGame();
    }
}
```

Вызывать из других классов:
```csharp
LunaIntegration.NotifyGameStart();
LunaIntegration.NotifyGameEnd();
LunaIntegration.NotifyCTA();
```

## Запреты

| Запрещено | Причина |
|-----------|---------|
| `#if` вокруг SDK-вызовов | Bridge.NET падает на `#if` внутри методов |
| Прямые вызовы `LifeCycle.*` вне `LunaIntegration.cs` | Нарушает централизацию |
| `using UnityEditor` вне папки `Editor/` | Ломает билд |
| `SortingGroup` для управления порядком отрисовки | В билде не работает для Spine и партиклов — см. ниже |

## Неполные компоненты Unity в Luna

### `SortingGroup` — не накрывает Spine и партиклы

`SortingGroupComponent._setupChildRenderers` (`engine/luna/script1.js`) забирает в группу только:

- `SpriteRendererComponent`;
- `MeshRendererComponent`, у которого **на том же объекте есть `CanvasRenderer`** (то есть UI).

Spine-скелет — это `MeshRenderer` **без** `CanvasRenderer`, поэтому в группу не попадает никогда: остаётся в глобальном списке сцены (`scene.addRenderer`) и сортируется своим авторским `sortingOrder`. Список только push-евый — при `AddComponent<SortingGroup>()` в рантайме ретро-скана уже существующих рендереров не происходит.

**В эдиторе всё работает** (нативный `SortingGroup` пересобирает иерархию сам), в билде — no-op. Это главная ловушка: расхождение видно только в билде.

Порядок отрисовки задавать **прямой записью `sortingOrder`** в каждый рендерер. В новой системе это делает [RenderLayerBinding](../../Assets/Scripts/Match3/View/RenderLayerBinding.cs) / [RenderLayers](../../Assets/Scripts/Match3/View/RenderLayers.cs): `sortingOrder = groupBase + авторский order`, авторское значение остаётся смещением внутри группы.

### `Animator` — часть API заглушки

Проверено по `LunaTemp/stage4/develop/engine/unity/bin/UnityEngine.js` (в dev-билде живые `TRACE("UnityEngine.Animator#...")`, по ним ищется реализация). Заглушки помечены `generateStubProxy("Animator").reportProperty/reportMethod`.

| API | В Luna |
|-----|--------|
| `Animator.parameters`, `parameterCount`, `GetParameter` | **заглушка**: пустой массив / 0 — перечислить параметры контроллера в рантайме нельзя, список имён держать в коде |
| `Animator.CrossFade`, `CrossFadeInFixedTime` | **заглушка** — плавно переключить состояние из кода нельзя |
| `SetTrigger` / `ResetTrigger` / `SetBool` / `SetFloat`, `Play`, `IsInTransition`, `GetCurrentAnimatorStateInfo` (+ `.length`, `.IsName`) | работают, `Any State`-переходы с условиями на триггеры тоже (`Animators.StateMachine#EvaluateAnyTransition`, триггер гасится при взятии перехода) |

Отсюда: **единственный способ получить бленд анимаций в билде — переходы внутри контроллера + триггеры**, не `CrossFade` из кода. Перезапуск того же состояния — тот же триггер + `Can Transition To Self` на переходе.

**`State.speed = 0` ломает скраб в билде.** `Animator.Play(state, layer, normalizedTime)` в Luna — это `StateMachine.SwitchToState(state)` + `AddTime(normalizedTime * clipLength)`, а `AnimatorStateInfo.AddTime(t)` делает `time += t * SpeedValue`, где `SpeedValue = State.speed * speedMultiplier`. На нулевой скорости состояния время остаётся 0 — клип навсегда замирает на первом кадре, ошибок в консоли нет. В эдиторе тот же код работает: Unity ставит время напрямую.

Ещё два следствия того же умножения:

- Переход **из** состояния с нулевой скоростью не проигрывается вообще: в `StateMachine.AddTimeToStates` шаг перехода считается как `t$.a$(dt * C$, dt) / C$` при `C$ != 0`, иначе берётся `0` и объект перехода не двигается. То же и для `animator.speed = 0` — там на ноль умножается весь `dt`.
- Держать скраб-состояние на `speed = 1` и просто перезадавать время каждый кадр **можно, но оно дрожит**: за кадр клип уезжает вперёд на `dt`, а `dt` в WebGL плавает, и поза каждый кадр смещена на разную величину.

Рабочая схема (см. [AnimatorDriver](../../Assets/Scripts/BridgeRescue/Actors/AnimatorDriver.cs)): `State.speed = 1` + float-параметр как **Speed Multiplier** с дефолтом `0`. Скраб ставит множитель в `1`, зовёт `Play(state, layer, t)`, возвращает `0`. Luna применяет `Play` синхронно (`UpdateStateParameters` внутри `AddTime` успевает прочитать `1`), Unity — при следующем расчёте, когда там уже `0`, а время выставлено напрямую. Итог одинаковый: поза ровно запрошенная, самохода между кадрами нет. При уходе из состояния множитель обязательно вернуть в `1`, иначе переход не проиграется. Таблица параметров в Luna лежит **по именам** (`ParameterState.b$[parameter.name]`), а `Animator.StringToHash` — не хеш, а лукап `name → hash`, заполняемый при загрузке DTO контроллера. Поэтому в этом проекте [AnimatorDriver](../../Assets/Scripts/BridgeRescue/Actors/AnimatorDriver.cs) работает **строковыми** перегрузками: они не зависят ни от `parameters`, ни от того, успела ли заполниться таблица хешей к `Awake`.

**Общее правило:** любое расхождение «в эдиторе ок, в билде нет» по отрисовке — сначала проверять, реализован ли компонент в `engine/luna/script1.js`. Класс может быть в `pipeline/templates/LunaCompiler/typemaps/unityengine.typemap.json` и при этом работать частично — наличие в typemap не значит полной реализации.

### Ввод: `Input` в Luna теряет начало Drag и быстрые тапы — **повторяется в каждом проекте**

Симптом (всегда одинаковый, всегда только в билде): начал drag и быстро увёл курсор — drag не начался. Быстрый тап иногда не считается вообще.

Причина — в реализации ввода, проверено по `engine/luna/script1.js`:

```js
_onMouseDown(e){ Input.mouseButtonsDown[0]=!0, Input.mouseButtons[0]=!0, Input.mouseButtonsUp[0]=!1,
                 Input.mousePosition = new Vec3(e.x, height - e.y, 0) }
_onMouseUp(e){   Input.mouseButtonsUp[0]=!0, Input.mouseButtons[0]=!1, Input.mouseButtonsDown[0]=!1, ... }
_updateInputFlags(){ Input.mouseButtonsDown[0]=!1; ... }   // подписано на "prerender"
```

Все DOM-события кадра прилетают **одной пачкой между кадрами**, каждое сразу мутирует статику `Input`. Отсюда три следствия:

| Что происходит в браузере | Что видит C# |
|---------------------------|--------------|
| `mousedown` + `mousemove` в одной пачке | `GetMouseButtonDown` = true, но **`mousePosition` уже сдвинута** — это позиция последнего `mousemove`, а не нажатия. Рейкаст на кадре нажатия бьёт мимо объекта → drag не начинается |
| `mousedown` + `mouseup` в одной пачке | `_onMouseUp` **сбрасывает** `mouseButtonsDown[0]` → `GetMouseButtonDown` **никогда не был true**, есть только `GetMouseButtonUp`. Быстрый тап теряется целиком |
| `touchstart` + `touchmove` в одной пачке | фаза тача перезаписана: `TouchPhase.Began` не наблюдается, только `Moved`. Код на `if (phase == Began)` не стартует вообще (`_onTouchStart`/`_onTouchMove` заодно дублируют события в мышь) |

Плюс `_handleDown` **не** обновляет `_lastX/_lastY` — координата самого нажатия в Unity-слой не попадает ни при каком раскладе, её физически нет.

**Правила (референс — [PlayableInput.cs](../../Assets/Scripts/BridgeRescue/Controls/PlayableInput.cs)):**

1. **Не доверять `mousePosition` на кадре нажатия.** Пик цели — не одним рейкастом в точку, а по **свёрнутому пути указателя**: сэмплы от позиции прошлого кадра до текущей (длина клампится, `pressPathMaxDistance`) + `SphereCast` с радиусом вместо тонкого `Raycast`.
2. **Нажатие латчить, а не читать одним кадром.** `_pressLatched` живёт ~0.15 с и гасится тем, кто его *потребил* (`PressedInteractable()`). Иначе порядок `Update` компонента и корутины-шага решает, увидят ли press вообще.
3. **Восстанавливать потерянный `Down`:** `if (GetMouseButtonDown(0) || (GetMouseButton(0) && !_held)) BeginPress();` и на `GetMouseButtonUp(0)` при `!_held` — тоже `BeginPress()` перед `EndPress()`.
4. **Тач начинать по факту наличия пальца, не по фазе:** `touchCount > 0 && (!_held || fingerId != _activeTouchId)` → `BeginPress()`. `Began` может не прийти никогда.
5. **Страховка от залипшего drag:** `if (_held && !GetMouseButton(0)) EndPress();` — потерянный `up` вешает drag-луп навсегда, это хуже пропущенного нажатия.

### Анимация не должна управлять физикой

Клип, который двигает объекты не сам, а через float-кривые на `Rigidbody.m_IsKinematic` / `m_UseGravity` (отпустил — дальше роняет PhysX), в эдиторе играет, в билде — **ничего, и без единой ошибки**. Проверено на `BridgeDestroy.anim`: в билде стейт активен, `norm` растёт 0 → 0.87 штатно, `GetComponentsInChildren<Rigidbody>()` возвращает те же 15 тел, что и в эдиторе, — а мировые позиции досок за 1.1 с не меняются ни на тысячную.

То есть компоненты доезжают (`UnityEngine.Rigidbody` обёрнут над `pc.RigidbodyComponent`, `isKinematic` / `useGravity` / `AddForce` из кода реализованы), и кривые в DTO клипа тоже (`["plank7", hash, "UnityEngine.Rigidbody", "m_UseGravity", …]` в `LunaTemp/stage1/assets/animation-clips/*.json`) — но связка «кривая → свойство физики → симуляция» не воспроизводится.

Проверка клипа: `grep -c "typeID: 54$"` по `.anim`. Если Rigidbody-кривых много, а transform-кривых почти нет — клип физический и в Luna мёртвый. Лечится запеканием симуляции в transform-кривые: [PhysicsCollapseBakeTool](../../Assets/Scripts/BridgeRescue/Editor/PhysicsCollapseBakeTool.cs) (`Bridge Rescue/9. Bake Physics Collapse Into Clip`).

## Bridge.NET — запрещённый синтаксис C#

| Запрещено | Заменить на |
|-----------|-------------|
| `list[^1]` | `list[list.Count - 1]` |
| `new (args)` | `new TypeName(args)` |
| `HashCode.Combine(a, b)` | `a * 397 ^ b` |
| record types | class |
| switch expressions | switch statement |

## Ресурсы и файлы

| Ситуация | Правило |
|----------|---------|
| Бинарные данные в `Resources/` | Сохранять как `.txt` + base64, читать через `TextAsset.text` → `Convert.FromBase64String` |
| `TextAsset.bytes` | **Не использовать** — Luna читает бинарные данные корректно только из текста |
| `File.WriteAllBytes` + `.bytes` расширение | **Не использовать** для ресурсов, которые читаются в runtime через Luna |

## Диагностика

- Ошибки Bridge.NET **не видны** в Unity Console — смотреть в `LunaTemp/luna.log`
- DOTween версия: **1.2.705**
- Api Compatibility Level: **.NET Framework**
- Неподдерживаемые пакеты удалять из `manifest.json` (пример: `com.unity.timeline`)
