# api/endpoints/login

## Functions

### loginHandler()

> **loginHandler**(`event`): `Promise`\<[`ApiResponse`](../utils/api.util.md#apiresponse)\>

Defined in:
[api/endpoints/login.ts:6](https://github.com/davinidae/umazing-musumengine/blob/c7165367514289ac3f84628f7086bb7b2e32980f/src/api/endpoints/login.ts#L6)

#### Parameters

##### event

[`HttpEvent`](../models/api.model.md#httpevent)\<`Partial`\<\{ `prevSessionId`: `number`;
`steam_id`: `string`; `steam_session_ticket`: `string`; \}\>\>

#### Returns

`Promise`\<[`ApiResponse`](../utils/api.util.md#apiresponse)\>
