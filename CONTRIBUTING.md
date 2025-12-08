# Contributing and style guidelines

Thanks for contributing! This project prioritizes clarity and maintainability over terseness. Please
follow these guidelines:

## Code style

- Prefer multi-line control flow
  - Avoid one-liners like `if (x) throw new Error()`; use block form for readability.
- Keep comments concise and useful
  - Remove redundant narrations; add short rationale when behavior is non-obvious.
- Handle errors explicitly
  - Avoid empty catches. If intent is to probe heuristics, do:

```typescript
try {
  /* code */
} catch (_e) {
  /* ignore: heuristic probe */
}
```

- Small, named helpers over large functions
  - Break complex logic into small, focused functions with descriptive names.
- Binary in JSON
  - Use `base64:<...>` strings in JSON inputs. Converters `fromJsonFriendly` and `toJsonCompatible`
    handle roundtrips.

## Project conventions

- Runtime framing selection
  - Builders and runtime honor `blob1.framing` only (e.g., `"kv-stream"`); no path-based detection.
- Deterministic encryption key
  - AES-256 key is derived from `DETERMINISTIC_ENC_SECRET` (see `src/variables.ts`). This ensures
    reproducible builds.
- Tests
  - Write a small happy-path test and one edge case for new logic. Keep integration tests resilient
    and data-local.

## Folder layout

- `src/models/**` contains reusable TypeScript interfaces and type aliases.
- `src/**` keeps implementation modules lean by importing from `src/models`.

If in doubt, open a PR and we can iterate together.
