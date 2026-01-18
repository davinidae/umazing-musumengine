# api/models/api.model

## Type Aliases

### HttpEvent

> **HttpEvent**\<`T`\> = `Omit`\<`APIGatewayProxyEventV2`, `"body"`\> & `object`

Defined in:
[src/api/models/api.model.ts:3](https://github.com/davinidae/umazing-musumengine/blob/2b696d82fbabdc92d50663114c51adb9edb4509d/src/api/models/api.model.ts#L3)

#### Type Declaration

##### body

> **body**: `T` \| `null`

#### Type Parameters

##### T

`T` = `unknown`

---

### UmaData

> **UmaData** = `Partial`\<\{ `authKeyB64`: `string`; `authKeyHex`: `string`; `steamId`: `string`;
> `steamSessionTicket`: `string`; `udidCanonical`: `string`; `viewerId`: `number`; \}\>

Defined in:
[src/api/models/api.model.ts:7](https://github.com/davinidae/umazing-musumengine/blob/2b696d82fbabdc92d50663114c51adb9edb4509d/src/api/models/api.model.ts#L7)
