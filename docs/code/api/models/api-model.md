# api/models/api.model

## Type Aliases

### HttpEvent

> **HttpEvent**\<`T`\> = `Omit`\<`APIGatewayProxyEventV2`, `"body"`\> & `object`

Defined in:
[src/api/models/api.model.ts:3](https://github.com/davinidae/umazing-musumengine/blob/b3f1e8e392a0fc341ec0633657c0dde131d6df19/src/api/models/api.model.ts#L3)

#### Type Declaration

##### body

> **body**: `T` \| `null`

#### Type Parameters

##### T

`T` = `unknown`

---

### UmaData

> **UmaData** = `Partial`\<\{ `authKey`: `string`; `steamId`: `number`; `trainerId`: `number`;
> `udid`: `string`; \}\>

Defined in:
[src/api/models/api.model.ts:7](https://github.com/davinidae/umazing-musumengine/blob/b3f1e8e392a0fc341ec0633657c0dde131d6df19/src/api/models/api.model.ts#L7)
