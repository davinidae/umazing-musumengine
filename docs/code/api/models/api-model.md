# api/models/api.model

## Type Aliases

### HttpEvent

> **HttpEvent**\<`T`\> = `Omit`\<`APIGatewayProxyEventV2`, `"body"`\> & `object`

Defined in:
[api/models/api.model.ts:3](https://github.com/davinidae/umazing-musumengine/blob/8c2a93a99924070f3bed30bfbb56b7b18480c6b1/src/api/models/api.model.ts#L3)

#### Type Declaration

##### body

> **body**: `T` \| `null`

#### Type Parameters

##### T

`T` = `Record`\<`string`, `unknown`\>

---

### StoredData

> **StoredData** = \{ `authKey`: `string`; `udid`: `string`; `viewerId`: `number`; \} \| `undefined`

Defined in:
[api/models/api.model.ts:7](https://github.com/davinidae/umazing-musumengine/blob/8c2a93a99924070f3bed30bfbb56b7b18480c6b1/src/api/models/api.model.ts#L7)
