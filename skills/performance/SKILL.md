# Performance Rules

## Forbidden in Update(), FixedUpdate(), LateUpdate() and any hot path methods

- `new` for reference types (List, array, class) — cache as field or use ObjectPool<T>
- `GetComponent<T>()` — cache in Awake()
- Any LINQ (Where, Select, FirstOrDefault, ToList, ToArray...) — use for loops
- `Find()`, `FindObjectOfType()`, `Camera.main` — cache in Awake()
- String concatenation — cache Animator hashes via Animator.StringToHash()
- `Instantiate()` / `Destroy()` if called frequently — use Unity ObjectPool<T>
- `Debug.Log` — remove from hot paths entirely

## Before writing any frequently-called method
Explicitly verify none of the above are present.
