# api/models/api.model

## Type Aliases

### HttpEvent

> **HttpEvent**\<`T`\> = `Omit`\<`APIGatewayProxyEventV2`, `"body"`\> & `object`

Defined in:
[src/api/models/api.model.ts:3](https://github.com/davinidae/umazing-musumengine/blob/7b7fb26e300246328ff4c87810f666ed56b6ab3f/src/api/models/api.model.ts#L3)

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
[src/api/models/api.model.ts:7](https://github.com/davinidae/umazing-musumengine/blob/7b7fb26e300246328ff4c87810f666ed56b6ab3f/src/api/models/api.model.ts#L7)
