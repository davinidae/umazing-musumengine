# api/services/user-session.service

## Classes

### UserSession

Defined in:
[src/api/services/user-session.service.ts:11](https://github.com/davinidae/umazing-musumengine/blob/0cdafb59e2857b4cc23f37a28f9086735e2a093a/src/api/services/user-session.service.ts#L11)

UserSession.

#### Constructors

##### Constructor

> **new UserSession**(`umaData`, `auth`): [`UserSession`](#usersession)

Defined in:
[src/api/services/user-session.service.ts:31](https://github.com/davinidae/umazing-musumengine/blob/0cdafb59e2857b4cc23f37a28f9086735e2a093a/src/api/services/user-session.service.ts#L31)

constructor.

###### Parameters

###### umaData

[`UmaData`](../models/api.model.md#umadata) = `{}`

###### auth

[`AuthMode`](../models/uma-client.model.md#authmode) = `...`

Type: `AuthMode`.

###### Returns

[`UserSession`](#usersession)

Type: `UserSession`.

#### Properties

##### auth

> `private` `readonly` **auth**: [`AuthMode`](../models/uma-client.model.md#authmode)

Defined in:
[src/api/services/user-session.service.ts:33](https://github.com/davinidae/umazing-musumengine/blob/0cdafb59e2857b4cc23f37a28f9086735e2a093a/src/api/services/user-session.service.ts#L33)

Type: `AuthMode`.

##### baseUrl

> **baseUrl**: `string` = `'https://api.games.umamusume.com/umamusume/'`

Defined in:
[src/api/services/user-session.service.ts:23](https://github.com/davinidae/umazing-musumengine/blob/0cdafb59e2857b4cc23f37a28f9086735e2a093a/src/api/services/user-session.service.ts#L23)

baseUrl.

###### Remarks

Type: `string`.

###### Default Value

`'https://api.games.umamusume.com/umamusume/'`

##### resVer

> **resVer**: `string` = `'10002800'`

Defined in:
[src/api/services/user-session.service.ts:17](https://github.com/davinidae/umazing-musumengine/blob/0cdafb59e2857b4cc23f37a28f9086735e2a093a/src/api/services/user-session.service.ts#L17)

resVer.

###### Remarks

Type: `string`.

###### Default Value

`'10002800'`

##### umaData

> `private` `readonly` **umaData**: [`UmaData`](../models/api.model.md#umadata) = `{}`

Defined in:
[src/api/services/user-session.service.ts:32](https://github.com/davinidae/umazing-musumengine/blob/0cdafb59e2857b4cc23f37a28f9086735e2a093a/src/api/services/user-session.service.ts#L32)

#### Methods

##### assertSteamBase()

> `private` **assertSteamBase**(`base`): `void`

Defined in:
[src/api/services/user-session.service.ts:95](https://github.com/davinidae/umazing-musumengine/blob/0cdafb59e2857b4cc23f37a28f9086735e2a093a/src/api/services/user-session.service.ts#L95)

assertSteamBase.

###### Parameters

###### base

[`RequestBase`](../models/uma-client.model.md#requestbase)

Type: `RequestBase`.

###### Returns

`void`

##### getDefaultBase()

> **getDefaultBase**(`deviceType`): [`RequestBase`](../models/uma-client.model.md#requestbase)

Defined in:
[src/api/services/user-session.service.ts:47](https://github.com/davinidae/umazing-musumengine/blob/0cdafb59e2857b4cc23f37a28f9086735e2a093a/src/api/services/user-session.service.ts#L47)

getDefaultBase.

###### Parameters

###### deviceType

`number`

Type: `number`.

###### Returns

[`RequestBase`](../models/uma-client.model.md#requestbase)

Type: `RequestBase`.

##### initialize()

> **initialize**(): `Promise`\<[`UmaClient`](uma-client.service.md#umaclient)\>

Defined in:
[src/api/services/user-session.service.ts:108](https://github.com/davinidae/umazing-musumengine/blob/0cdafb59e2857b4cc23f37a28f9086735e2a093a/src/api/services/user-session.service.ts#L108)

initialize (async).

###### Returns

`Promise`\<[`UmaClient`](uma-client.service.md#umaclient)\>

Type: `Promise<UmaClient>`.

##### resolveBase()

> `private` **resolveBase**(`deviceType`):
> [`RequestBase`](../models/uma-client.model.md#requestbase)

Defined in:
[src/api/services/user-session.service.ts:87](https://github.com/davinidae/umazing-musumengine/blob/0cdafb59e2857b4cc23f37a28f9086735e2a093a/src/api/services/user-session.service.ts#L87)

resolveBase.

###### Parameters

###### deviceType

`number`

Type: `number`.

###### Returns

[`RequestBase`](../models/uma-client.model.md#requestbase)

Type: `RequestBase`.

##### resolveDeviceType()

> `private` **resolveDeviceType**(): `number`

Defined in:
[src/api/services/user-session.service.ts:78](https://github.com/davinidae/umazing-musumengine/blob/0cdafb59e2857b4cc23f37a28f9086735e2a093a/src/api/services/user-session.service.ts#L78)

resolveDeviceType.

###### Returns

`number`

Type: `number`.

##### resolveUdid()

> `private` **resolveUdid**(): [`Udid`](../../lib/utils/protocol.util.md#udid)

Defined in:
[src/api/services/user-session.service.ts:70](https://github.com/davinidae/umazing-musumengine/blob/0cdafb59e2857b4cc23f37a28f9086735e2a093a/src/api/services/user-session.service.ts#L70)

resolveUdid.

###### Returns

[`Udid`](../../lib/utils/protocol.util.md#udid)

Type: `Udid`.
