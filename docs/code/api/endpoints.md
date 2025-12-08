# api/endpoints

## Variables

### default

> `const` **default**: `Router`

Defined in: [api/endpoints/index.ts:14](https://github.com/davinidae/umazing-musumengine/blob/4536b89332574e81a0a13d54f9f64f9273072011/src/api/endpoints/index.ts#L14)

Root API router.

Mounts sub-routers for public endpoints.
- `/` and `/health` from `misc`
- `/login` from `login`

#### Remarks

This router is consumed by `src/api/index.ts`.
