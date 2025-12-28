# api/models/api.model

## Type Aliases

### HttpEvent

> **HttpEvent**\<`T`\> = `Omit`\<`APIGatewayProxyEventV2`, `"body"`\> & `object`

Defined in:
[api/models/api.model.ts:3](https://github.com/davinidae/umazing-musumengine/blob/cfd3e9ae4e3abb10b26497490639c3570af3d3eb/src/api/models/api.model.ts#L3)

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
[api/models/api.model.ts:7](https://github.com/davinidae/umazing-musumengine/blob/cfd3e9ae4e3abb10b26497490639c3570af3d3eb/src/api/models/api.model.ts#L7)
