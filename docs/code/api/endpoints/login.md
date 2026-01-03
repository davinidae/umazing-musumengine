# api/endpoints/login

## Functions

### loginHandler()

> **loginHandler**(`event`): `Promise`\<[`ApiResponse`](../utils/api.util.md#apiresponse)\>

Defined in:
[src/api/endpoints/login.ts:10](https://github.com/davinidae/umazing-musumengine/blob/b3f1e8e392a0fc341ec0633657c0dde131d6df19/src/api/endpoints/login.ts#L10)

loginHandler (async).

#### Parameters

##### event

[`HttpEvent`](../models/api.model.md#httpevent)\<`Partial`\<\{ `authKey`: `string`; `steamId`:
`number`; `trainerId`: `number`; `udid`: `string`; \}\>\>

#### Returns

`Promise`\<[`ApiResponse`](../utils/api.util.md#apiresponse)\>

Type: `Promise<ApiResponse>`.
