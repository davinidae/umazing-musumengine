# api/models/api.model

## Type Aliases

### HttpEvent

> **HttpEvent**\<`T`\> = `Omit`\<`APIGatewayProxyEventV2`, `"body"`\> & `object`

Defined in:
[src/api/models/api.model.ts:3](https://github.com/davinidae/umazing-musumengine/blob/0cdafb59e2857b4cc23f37a28f9086735e2a093a/src/api/models/api.model.ts#L3)

#### Type Declaration

##### body

> **body**: `T` \| `null`

#### Type Parameters

##### T

`T` = `unknown`

---

### UmaData

> **UmaData** = `Partial`\<\{ `authKey?`: `string`; `trainerId?`: `number`; `udid?`: `string`; \}\>

Defined in:
[src/api/models/api.model.ts:7](https://github.com/davinidae/umazing-musumengine/blob/0cdafb59e2857b4cc23f37a28f9086735e2a093a/src/api/models/api.model.ts#L7)
