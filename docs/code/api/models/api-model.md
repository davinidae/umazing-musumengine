# api/models/api.model

## Type Aliases

### HttpEvent

> **HttpEvent**\<`T`\> = `Omit`\<`APIGatewayProxyEventV2`, `"body"`\> & `object`

Defined in:
[api/models/api.model.ts:3](https://github.com/davinidae/umazing-musumengine/blob/f24ccabc8ff8469c9450c4a9272c4cd9c6be182a/src/api/models/api.model.ts#L3)

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
[api/models/api.model.ts:7](https://github.com/davinidae/umazing-musumengine/blob/f24ccabc8ff8469c9450c4a9272c4cd9c6be182a/src/api/models/api.model.ts#L7)
