# api/endpoints/login

## Functions

### loginHandler()

> **loginHandler**(`_event`): `Promise`\<[`ApiResponse`](../utils/api.util.md#apiresponse)\>

Defined in:
[api/endpoints/login.ts:5](https://github.com/davinidae/umazing-musumengine/blob/f24ccabc8ff8469c9450c4a9272c4cd9c6be182a/src/api/endpoints/login.ts#L5)

#### Parameters

##### \_event

[`HttpEvent`](../models/api.model.md#httpevent)\<`Partial`\<\{ `prevSessionId`: `string` \|
`number`; `steam_id`: `string`; `steam_session_ticket`: `string`; \}\>\>

#### Returns

`Promise`\<[`ApiResponse`](../utils/api.util.md#apiresponse)\>
