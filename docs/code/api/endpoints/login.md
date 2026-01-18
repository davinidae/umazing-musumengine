# api/endpoints/login

## Functions

### loginHandler()

> **loginHandler**(`event`): `Promise`\<[`ApiResponse`](../utils/api.util.md#apiresponse)\>

Defined in:
[src/api/endpoints/login.ts:10](https://github.com/davinidae/umazing-musumengine/blob/ede291a885f081feee7d488c29b346fd43d8d8b3/src/api/endpoints/login.ts#L10)

loginHandler (async).

#### Parameters

##### event

[`HttpEvent`](../models/api.model.md#httpevent)\<`Partial`\<\{ `authKeyB64`: `string`; `authKeyHex`:
`string`; `steamId`: `string`; `steamSessionTicket`: `string`; `udidCanonical`: `string`;
`viewerId`: `number`; \}\>\>

#### Returns

`Promise`\<[`ApiResponse`](../utils/api.util.md#apiresponse)\>

Type: `Promise<ApiResponse>`.
