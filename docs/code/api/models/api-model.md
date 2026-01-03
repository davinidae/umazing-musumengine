# api/models/api.model

## Type Aliases

### HttpEvent

> **HttpEvent**\<`T`\> = `Omit`\<`APIGatewayProxyEventV2`, `"body"`\> & `object`

Defined in:
[src/api/models/api.model.ts:3](https://github.com/davinidae/umazing-musumengine/blob/27a67ead77e7e430a7a2f321d3db88cc32f51df1/src/api/models/api.model.ts#L3)

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
[src/api/models/api.model.ts:7](https://github.com/davinidae/umazing-musumengine/blob/27a67ead77e7e430a7a2f321d3db88cc32f51df1/src/api/models/api.model.ts#L7)
