# api/endpoints

## Variables

### router

> `const` **router**: `Router`

Defined in:
[api/endpoints/index.ts:14](https://github.com/davinidae/umazing-musumengine/blob/b7f77ffa9f6e848316c4394a9c270b27863fc360/src/api/endpoints/index.ts#L14)

Root API router.

Mounts sub-routers for public endpoints.

- `/` and `/health` from `misc`
- `/login` from `login`

#### Remarks

This router is consumed by `src/api/index.ts`.

## References

### default

Renames and re-exports [router](#router)
