# api/endpoints

## Variables

### default

> `const` **default**: `Router`

Defined in:
[api/endpoints/index.ts:14](https://github.com/davinidae/umazing-musumengine/blob/3cc198efe37a04206371563dec0203f3801b1b85/src/api/endpoints/index.ts#L14)

Root API router.

Mounts sub-routers for public endpoints.

- `/` and `/health` from `misc`
- `/login` from `login`

#### Remarks

This router is consumed by `src/api/index.ts`.
