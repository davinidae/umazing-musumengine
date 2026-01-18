# api/models/api.model

## Type Aliases

### HttpEvent

> **HttpEvent**\<`T`\> = `Omit`\<`APIGatewayProxyEventV2`, `"body"`\> & `object`

Defined in:
[src/api/models/api.model.ts:3](https://github.com/davinidae/umazing-musumengine/blob/ae91acd9f749df28e5b6996053e72ff3692b5518/src/api/models/api.model.ts#L3)

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
[src/api/models/api.model.ts:7](https://github.com/davinidae/umazing-musumengine/blob/ae91acd9f749df28e5b6996053e72ff3692b5518/src/api/models/api.model.ts#L7)
