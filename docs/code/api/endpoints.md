# api/endpoints

## Variables

### router

> `const` **router**: `Router`

Defined in:
[api/endpoints/index.ts:14](https://github.com/davinidae/umazing-musumengine/blob/72a445c87666bde51d6843fdd11e9cb9c9204b2b/src/api/endpoints/index.ts#L14)

Root API router.

Mounts sub-routers for public endpoints.

- `/` and `/health` from `misc`
- `/login` from `login`

#### Remarks

This router is consumed by `src/api/index.ts`.

## References

### default

Renames and re-exports [router](#router)
