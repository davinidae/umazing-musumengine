# api/endpoints

## Variables

### router

> `const` **router**: `Router`

Defined in:
[api/endpoints/index.ts:14](https://github.com/davinidae/umazing-musumengine/blob/1003449b1f6810e8bebb1a1895d923aead233e40/src/api/endpoints/index.ts#L14)

Root API router.

Mounts sub-routers for public endpoints.

- `/` and `/health` from `misc`
- `/login` from `login`

#### Remarks

This router is consumed by `src/api/index.ts`.

## References

### default

Renames and re-exports [router](#router)
