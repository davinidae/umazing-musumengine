# api/models/api.model

## Type Aliases

### HttpEvent

> **HttpEvent**\<`T`\> = `Omit`\<`APIGatewayProxyEventV2`, `"body"`\> & `object`

Defined in:
[src/api/models/api.model.ts:7](https://github.com/davinidae/umazing-musumengine/blob/aeab44e843910aee776ca8e80ac77feaac919c49/src/api/models/api.model.ts#L7)

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
[src/api/models/api.model.ts:25](https://github.com/davinidae/umazing-musumengine/blob/aeab44e843910aee776ca8e80ac77feaac919c49/src/api/models/api.model.ts#L25)

A `UserSession` where `client` is guaranteed to be initialized.

#### Type Declaration

##### client

> **client**: [`UmaClient`](../services/uma-client.service.md#umaclient)

---

### UmaData

> **UmaData** = `object`

Defined in:
[src/api/models/api.model.ts:11](https://github.com/davinidae/umazing-musumengine/blob/aeab44e843910aee776ca8e80ac77feaac919c49/src/api/models/api.model.ts#L11)

#### Properties

##### authKey

> **authKey**:
> [`Blob1Json`](../../lib/decrypt/utils/request-context.util.md#blob1json)\[`"auth_key"`\]

Defined in:
[src/api/models/api.model.ts:13](https://github.com/davinidae/umazing-musumengine/blob/aeab44e843910aee776ca8e80ac77feaac919c49/src/api/models/api.model.ts#L13)

##### udidRaw

> **udidRaw**:
> [`Blob1Json`](../../lib/decrypt/utils/request-context.util.md#blob1json)\[`"udid_raw"`\]

Defined in:
[src/api/models/api.model.ts:14](https://github.com/davinidae/umazing-musumengine/blob/aeab44e843910aee776ca8e80ac77feaac919c49/src/api/models/api.model.ts#L14)

##### useSteam

> **useSteam**: `boolean`

Defined in:
[src/api/models/api.model.ts:15](https://github.com/davinidae/umazing-musumengine/blob/aeab44e843910aee776ca8e80ac77feaac919c49/src/api/models/api.model.ts#L15)

##### viewerId

> **viewerId**:
> [`Blob1Json`](../../lib/decrypt/utils/request-context.util.md#blob1json)\[`"viewer_id"`\]

Defined in:
[src/api/models/api.model.ts:12](https://github.com/davinidae/umazing-musumengine/blob/aeab44e843910aee776ca8e80ac77feaac919c49/src/api/models/api.model.ts#L12)

---

### UserData

> **UserData** = `object`

Defined in:
[src/api/models/api.model.ts:18](https://github.com/davinidae/umazing-musumengine/blob/aeab44e843910aee776ca8e80ac77feaac919c49/src/api/models/api.model.ts#L18)

#### Properties

##### userId

> **userId**: `UUID`

Defined in:
[src/api/models/api.model.ts:19](https://github.com/davinidae/umazing-musumengine/blob/aeab44e843910aee776ca8e80ac77feaac919c49/src/api/models/api.model.ts#L19)
