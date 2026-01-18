# api/models/api.model

## Type Aliases

### HttpEvent

> **HttpEvent**\<`T`\> = `Omit`\<`APIGatewayProxyEventV2`, `"body"`\> & `object`

Defined in:
[src/api/models/api.model.ts:4](https://github.com/davinidae/umazing-musumengine/blob/ebaf158dd5679712f54ae827a19a292737f0c6a5/src/api/models/api.model.ts#L4)

#### Type Declaration

##### body

> **body**: `T` \| `null`

#### Type Parameters

##### T

`T` = `unknown`

---

### UmaData

> **UmaData** = `Partial`\<\{ `authKey`:
> [`Blob1Json`](../../lib/decrypt/utils/request-context.util.md#blob1json)\[`"auth_key"`\];
> `steamId`: `string`; `steamSessionTicket`: `string`; `udidRaw`:
> [`Blob1Json`](../../lib/decrypt/utils/request-context.util.md#blob1json)\[`"udid_raw"`\];
> `viewerId`:
> [`Blob1Json`](../../lib/decrypt/utils/request-context.util.md#blob1json)\[`"viewer_id"`\]; \}\>

Defined in:
[src/api/models/api.model.ts:8](https://github.com/davinidae/umazing-musumengine/blob/ebaf158dd5679712f54ae827a19a292737f0c6a5/src/api/models/api.model.ts#L8)
