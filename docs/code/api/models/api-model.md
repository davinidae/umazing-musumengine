# api/models/api.model

## Type Aliases

### HttpEvent

> **HttpEvent**\<`T`\> = `Omit`\<`APIGatewayProxyEventV2`, `"body"`\> & `object`

Defined in:
[src/api/models/api.model.ts:3](https://github.com/davinidae/umazing-musumengine/blob/bfc4a80e82b79071340aa57781e33eb50ffad709/src/api/models/api.model.ts#L3)

#### Type Declaration

##### body

> **body**: `T` \| `null`

#### Type Parameters

##### T

`T` = `unknown`

---

### UmaData

> **UmaData** = `Partial`\<\{ `authKeyB64`: `string`; `authKeyHex`: `string`; `steamId`: `number`;
> `steamSessionTicket`: `string`; `udidCanonical`: `string`; `viewerId`: `number`; \}\>

Defined in:
[src/api/models/api.model.ts:7](https://github.com/davinidae/umazing-musumengine/blob/bfc4a80e82b79071340aa57781e33eb50ffad709/src/api/models/api.model.ts#L7)
