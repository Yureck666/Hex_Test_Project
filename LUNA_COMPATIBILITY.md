# Luna / Bridge.NET Compatibility Rules

Luna transpiles C# to JavaScript via **Bridge.NET**, which supports **C# up to 7.3**.
Any modern C# feature that doesn't compile under C# 7.3 will fail in Luna build but pass in Unity.

## Forbidden syntax

| Forbidden | Use instead |
|-----------|-------------|
| `list[^1]` | `list[list.Count - 1]` |
| `new (args)` target-typed new | `new TypeName(args)` |
| `HashCode.Combine(a, b)` | `a * 397 ^ b` |
| `#if !UNITY_EDITOR` (for Luna-only code) | `#if UNITY_LUNA` |
| Record types, switch expressions, pattern matching `is` with var | Avoid entirely |

## Define symbols

- `UNITY_LUNA` — defined during Luna build.
- Do **not** use `#if` inside method bodies — Bridge.NET re-processes source files and fails with "Preprocessor directives must appear as the first non-whitespace character on a line" even if the directive IS at column 1.
- Do **not** use `!UNITY_EDITOR` as a proxy for "running in Luna".
- **Correct pattern**: wrap all Luna SDK calls in a dedicated static class without any `#if`. Since Luna SDK is installed in Unity, `Luna.*` compiles in the editor too.

```csharp
// LunaIntegration.cs — no #if anywhere
public static class LunaIntegration
{
    public static void GameEnded() => Luna.Unity.LifeCycle.GameEnded();
    public static void InstallFullGame() => Luna.Unity.Playable.InstallFullGame();
}

// Elsewhere — just call directly
LunaIntegration.GameEnded();
```

## Version requirements

- DOTween: **1.2.705** (other versions break Luna build — LP1027)
- .NET Framework: **4.7 Developer Pack** must be installed on the machine (LP3016)
- Api Compatibility Level in Player Settings: **.NET Framework** (not Standard 2.x)

## Editor-only scripts

Scripts that use `UnityEditor` (e.g. `[InitializeOnLoad]`, `[MenuItem]`, `MenuCommand`) must live inside an **`Editor/` folder**.
Luna excludes `Editor/` folders from the build automatically — without it, the build fails with CS0246.

**Rule:** If a file has `using UnityEditor;` → it belongs in `Editor/`.

## Unsupported packages (LP1032)

Some Unity packages are not supported by Luna. Remove them from `Packages/manifest.json` if not used:
- `com.unity.timeline` — not supported (removed from this project)
- `com.unity.visualscripting` — check if needed, may cause issues

## How to catch these errors early

Run a Luna build after each significant feature. Bridge.NET errors appear in:
`C:\UnityProjects\Hex\LunaTemp\luna.log`

Unity itself will not show these errors — they only appear during Luna compilation.
