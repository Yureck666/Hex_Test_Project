# Iteration 1 Setup Guide

## Автоматическая настройка проекта

Все необходимые скрипты, материалы и префабы созданы. Осталось только запустить автоматическую настройку в Unity Editor.

---

## Шаг 1: Откройте проект в Unity

1. Откройте Unity Hub
2. Откройте проект **Hex** (Unity 2022.3.62f2)
3. Дождитесь компиляции всех скриптов

---

## Шаг 2: Создайте материалы и префабы

В Unity Editor:

**Menu → Tools → Hex → Setup All Assets**

Это создаст:
- 9 материалов в `Assets/Materials/`
- 3 префаба в `Assets/Prefabs/Grid/` и `Assets/Prefabs/Gameplay/`

**Проверка:**
- ✅ `Assets/Materials/` содержит 9 материалов (Mat_White, Mat_Blue, Mat_LightBlue, Mat_Yellow, Mat_Red, Mat_Purple, Mat_Green, Mat_Cell, Mat_CellHighlight)
- ✅ `Assets/Prefabs/Grid/HexCell.prefab` создан
- ✅ `Assets/Prefabs/Gameplay/HexElement.prefab` создан
- ✅ `Assets/Prefabs/Gameplay/HexStack.prefab` создан

---

## Шаг 3: Создайте ScriptableObjects

В Unity Editor:

**Menu → Tools → Hex → Create ScriptableObjects**

Это создаст:
- `Assets/Data/GameSettings.asset` - все настройки игры
- `Assets/Data/Levels/Level_Tutorial.asset` - тестовый уровень 5x5

**Проверка:**
- ✅ `Assets/Data/GameSettings.asset` существует
- ✅ `Assets/Data/Levels/Level_Tutorial.asset` существует

---

## Шаг 4: Настройте сцену

В Unity Editor:

**Menu → Tools → Hex → Setup Scene**

Это:
- Создаст GameObject "GameManager" с компонентами: GameFlowController, GridManager, DragDropController
- Назначит все references (settings, level, prefabs, materials)
- Настроит позицию камеры для обзора grid

**Проверка:**
- ✅ GameObject "GameManager" существует в Hierarchy
- ✅ Компонент GameFlowController содержит все references (не null)
- ✅ Main Camera позиционирована для обзора сетки

---

## Шаг 5: Запустите игру

Нажмите **Play** в Unity Editor.

**Ожидаемое поведение:**
- ✅ Генерируется hexagon grid 5x5
- ✅ 3 начальные стопки появляются на grid (синяя, красная, желтая)
- ✅ Можно кликнуть и взять стопку (она поднимается)
- ✅ Стопка следует за курсором
- ✅ Валидные ячейки подсвечиваются
- ✅ Можно опустить стопку на пустую ячейку
- ✅ Стопка возвращается обратно при отпускании над занятой/невалидной ячейкой

---

## Troubleshooting

### Ошибка компиляции

Если есть ошибки компиляции:
1. Проверьте что DOTween установлен (Assets/Plugins/Demigiant/DOTween/)
2. Откройте **Tools → Demigiant → DOTween Utility Panel → Setup DOTween**

### Prefabs не создаются

1. Проверьте что все скрипты компилируются без ошибок
2. Проверьте Console на предмет ошибок
3. Попробуйте создать материалы и префабы отдельно:
   - **Tools → Hex → Create Materials**
   - **Tools → Hex → Create Prefabs**

### Scene setup не работает

1. Убедитесь что материалы и префабы созданы (шаг 2)
2. Убедитесь что ScriptableObjects созданы (шаг 3)
3. Проверьте Console на предмет ошибок
4. Попробуйте вручную назначить references в Inspector на GameFlowController

---

## Следующие шаги

После успешной верификации Iteration 1:
- **Iteration 2**: Реакции и цепные эффекты
- **Iteration 3**: Полировка и туториал
- **Iteration 4**: Luna интеграция

---

## Структура проекта

```
Assets/
├── Scripts/
│   ├── Utils/             ✅ HexCoordinates, ObjectPool
│   ├── Data/              ✅ HexColor, StackData, LevelData, GameSettings
│   ├── Components/        ✅ HexCell, HexElement, HexStack
│   ├── Core/              ✅ GridManager, DragDropController, GameFlowController
│   └── Editor/            ✅ AssetSetupUtility, ScriptableObjectSetup, SceneSetup
│
├── Prefabs/
│   ├── Grid/              ✅ HexCell.prefab
│   └── Gameplay/          ✅ HexElement.prefab, HexStack.prefab
│
├── Data/                  ✅ GameSettings.asset
│   └── Levels/            ✅ Level_Tutorial.asset
│
└── Materials/             ✅ 9 материалов
```

---

## Критерии успешного завершения Iteration 1

- [x] Все скрипты созданы и компилируются
- [ ] Материалы и префабы созданы
- [ ] ScriptableObjects созданы
- [ ] Сцена настроена
- [ ] Grid генерируется в hexagon layout
- [ ] Начальные стопки на заданных позициях
- [ ] Drag & Drop работает
- [ ] Подсветка валидных ячеек работает
- [ ] Стопка опускается/возвращается корректно

После выполнения всех пунктов → переход к **Iteration 2**
