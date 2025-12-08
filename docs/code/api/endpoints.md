# api/endpoints

## Variables

### default

> `const` **default**: `Router`

Defined in: [api/endpoints/index.ts:14](https://github.com/davinidae/umazing-musumengine/blob/ac700cde9d3d8cec8a7f0bbd50d917295bf5bc90/src/api/endpoints/index.ts#L14)

Root API router.

Mounts sub-routers for public endpoints.
- `/` and `/health` from `misc`
- `/login` from `login`

#### Remarks

This router is consumed by `src/api/index.ts`.
