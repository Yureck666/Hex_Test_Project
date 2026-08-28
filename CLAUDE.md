# Unity Code Standards

## Project Structure
```
Assets/Scripts/
├── [Feature]/
    ├── Models/
    ├── Extensions/
    └── ...
```

## Dependencies
Required packages (verify installation):
- DOTween
- Cinemachine  
- TextMeshPro (always use `TMP_Text`, never `Text`)

## Naming Conventions
| Type | Convention | Example |
|------|------------|---------|
| Private fields | `_camelCase` | `_playerHealth` |
| Serialized fields | `camelCase` | `maxSpeed` |
| Public/Protected | `PascalCase` | `CurrentHealth` |
| Local variables | `camelCase` | `tempValue` |

## Code Organization
- Namespaces follow folder structure
- No Assembly Definitions

## Error Handling Philosophy
**CRITICAL**: Fail-fast approach
- NO null checks unless null is valid business logic
- NO try-catch wrapping - let exceptions surface
- Missing references should crash immediately
- Errors indicate bugs that need fixing, not graceful degradation

## Performance Rules
- Cache all `GetComponent<T>()` calls in `Awake()`
- Never call `GetComponent` in `Update()` or frequent methods

## Logging
Standard `Debug.Log` / `Debug.LogWarning` / `Debug.LogError`

## Luna / Bridge.NET Compatibility

Luna transpiles C# via Bridge.NET — поддерживается только **C# 7.3**. Unity ошибок не покажет, они видны только в `LunaTemp/luna.log`.

**Запрещённый синтаксис:**
| Запрещено | Заменить на |
|-----------|-------------|
| `list[^1]` | `list[list.Count - 1]` |
| `new (args)` | `new TypeName(args)` |
| `HashCode.Combine(a, b)` | `a * 397 ^ b` |
| record types, switch expressions | не использовать |

**Правила:**
- Luna SDK вызовы **не оборачивать** в `#if` — Bridge.NET падает на `#if` внутри методов. Вынести в `LunaIntegration.cs` без `#if`
- `using UnityEditor` → файл обязан лежать в папке `Editor/`
- Неподдерживаемые пакеты удалять из `manifest.json` (пример: `com.unity.timeline`)
- DOTween версия: **1.2.705**; Api Compatibility Level: **.NET Framework**

## Testing
Not currently implemented

## Communication
- Always respond in Russian
- Code and technical terms in English
- NO code comments - code should be self-explanatory through clear naming
