# api/endpoints/login

## Functions

### loginHandler()

> **loginHandler**(`event`): `Promise`\<[`ApiResponse`](../utils/api.util.md#apiresponse)\>

Defined in:
[src/api/endpoints/login.ts:10](https://github.com/davinidae/umazing-musumengine/blob/0cdafb59e2857b4cc23f37a28f9086735e2a093a/src/api/endpoints/login.ts#L10)

loginHandler (async).

#### Parameters

##### event

[`HttpEvent`](../models/api.model.md#httpevent)\<`Partial`\<\{ `authKey?`: `string`; `trainerId?`:
`number`; `udid?`: `string`; \}\>\>

#### Returns

`Promise`\<[`ApiResponse`](../utils/api.util.md#apiresponse)\>

Type: `Promise<ApiResponse>`.
