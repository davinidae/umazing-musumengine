# api/models/api.model

## Type Aliases

### HttpEvent

> **HttpEvent**\<`T`\> = `Omit`\<`APIGatewayProxyEventV2`, `"body"`\> & `object`

Defined in:
[api/models/api.model.ts:3](https://github.com/davinidae/umazing-musumengine/blob/d3505fca22e9cc9337c67181003a80a301f9263f/src/api/models/api.model.ts#L3)

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
[api/models/api.model.ts:7](https://github.com/davinidae/umazing-musumengine/blob/d3505fca22e9cc9337c67181003a80a301f9263f/src/api/models/api.model.ts#L7)
