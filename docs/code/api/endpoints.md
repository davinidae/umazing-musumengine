# api/endpoints

## Variables

### router

> `const` **router**: `Router`

Defined in:
[api/endpoints/index.ts:14](https://github.com/davinidae/umazing-musumengine/blob/321fd0b0cc12338ca5fd03434b7e49a484bb9190/src/api/endpoints/index.ts#L14)

Root API router.

Mounts sub-routers for public endpoints.

- `/` and `/health` from `misc`
- `/login` from `login`

#### Remarks

This router is consumed by `src/api/index.ts`.

## References

### default

Renames and re-exports [router](#router)
