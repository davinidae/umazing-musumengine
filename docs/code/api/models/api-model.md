# api/models/api.model

## Type Aliases

### HttpEvent

> **HttpEvent**\<`T`\> = `Omit`\<`APIGatewayProxyEventV2`, `"body"`\> & `object`

Defined in:
[src/api/models/api.model.ts:6](https://github.com/davinidae/umazing-musumengine/blob/2fd0a7ae5bcd71fb665112d795849ae0ada2b9de/src/api/models/api.model.ts#L6)

#### Type Declaration

##### body

> **body**: `T` \| `null`

#### Type Parameters

##### T

`T` = `unknown`

---

### InitializedUserSession

> **InitializedUserSession** = [`UserSession`](../services/user-session.service.md#usersession) &
> `object`

Defined in:
[src/api/models/api.model.ts:25](https://github.com/davinidae/umazing-musumengine/blob/2fd0a7ae5bcd71fb665112d795849ae0ada2b9de/src/api/models/api.model.ts#L25)

A `UserSession` where `client` is guaranteed to be initialized.

#### Type Declaration

##### client

> **client**: [`UmaClient`](../services/uma-client.service.md#umaclient)

---

### UmaData

> **UmaData** = `Partial`\<\{ `authKey`:
> [`Blob1Json`](../../lib/decrypt/utils/request-context.util.md#blob1json)\[`"auth_key"`\];
> `steamId`: `string`; `steamSessionTicket`: `string`; `udidRaw`:
> [`Blob1Json`](../../lib/decrypt/utils/request-context.util.md#blob1json)\[`"udid_raw"`\];
> `viewerId`:
> [`Blob1Json`](../../lib/decrypt/utils/request-context.util.md#blob1json)\[`"viewer_id"`\]; \}\>

Defined in:
[src/api/models/api.model.ts:10](https://github.com/davinidae/umazing-musumengine/blob/2fd0a7ae5bcd71fb665112d795849ae0ada2b9de/src/api/models/api.model.ts#L10)

---

### UserData

> **UserData** = `object`

Defined in:
[src/api/models/api.model.ts:18](https://github.com/davinidae/umazing-musumengine/blob/2fd0a7ae5bcd71fb665112d795849ae0ada2b9de/src/api/models/api.model.ts#L18)

#### Properties

##### userId

> **userId**: `string`

Defined in:
[src/api/models/api.model.ts:19](https://github.com/davinidae/umazing-musumengine/blob/2fd0a7ae5bcd71fb665112d795849ae0ada2b9de/src/api/models/api.model.ts#L19)
