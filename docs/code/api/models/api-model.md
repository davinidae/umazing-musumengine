# api/models/api.model

## Type Aliases

### HttpEvent

> **HttpEvent**\<`T`\> = `Omit`\<`APIGatewayProxyEventV2`, `"body"`\> & `object`

Defined in:
[src/api/models/api.model.ts:3](https://github.com/davinidae/umazing-musumengine/blob/8d9fa9473d811fefa3457f1bbad2aa6c3eb63afc/src/api/models/api.model.ts#L3)

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
[src/api/models/api.model.ts:7](https://github.com/davinidae/umazing-musumengine/blob/8d9fa9473d811fefa3457f1bbad2aa6c3eb63afc/src/api/models/api.model.ts#L7)
