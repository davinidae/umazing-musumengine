# api/endpoints/login

## Functions

### loginHandler()

> **loginHandler**(`event`): `Promise`\<[`ApiResponse`](../utils/api.util.md#apiresponse)\>

Defined in:
[src/api/endpoints/login.ts:10](https://github.com/davinidae/umazing-musumengine/blob/7b7fb26e300246328ff4c87810f666ed56b6ab3f/src/api/endpoints/login.ts#L10)

loginHandler (async).

#### Parameters

##### event

[`HttpEvent`](../models/api.model.md#httpevent)\<`Partial`\<\{ `authKey`: `string`; `steamId`:
`number`; `trainerId`: `number`; `udid`: `string`; \}\>\>

#### Returns

`Promise`\<[`ApiResponse`](../utils/api.util.md#apiresponse)\>

Type: `Promise<ApiResponse>`.
