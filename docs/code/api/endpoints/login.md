# api/endpoints/login

## Functions

### loginHandler()

> **loginHandler**(`event`): `Promise`\<[`ApiResponse`](../utils/api.util.md#apiresponse)\>

Defined in:
[api/endpoints/login.ts:6](https://github.com/davinidae/umazing-musumengine/blob/597f437b525cf870a83f149525066e220aca93bd/src/api/endpoints/login.ts#L6)

#### Parameters

##### event

[`HttpEvent`](../models/api.model.md#httpevent)\<`Partial`\<\{ `prevSessionId`: `number`;
`steam_id`: `string`; `steam_session_ticket`: `string`; \}\>\>

#### Returns

`Promise`\<[`ApiResponse`](../utils/api.util.md#apiresponse)\>
