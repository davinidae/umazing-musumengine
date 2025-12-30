# api/services/user-session.service

## Classes

### UserSession

Defined in:
[src/api/services/user-session.service.ts:11](https://github.com/davinidae/umazing-musumengine/blob/0f4b26a7c602290bed10e9aa2723b492bef975ef/src/api/services/user-session.service.ts#L11)

UserSession.

#### Constructors

##### Constructor

> **new UserSession**(`cfg`, `auth`, `trainerId`): [`UserSession`](#usersession)

Defined in:
[src/api/services/user-session.service.ts:31](https://github.com/davinidae/umazing-musumengine/blob/0f4b26a7c602290bed10e9aa2723b492bef975ef/src/api/services/user-session.service.ts#L31)

constructor.

###### Parameters

###### cfg

[`ClientConfig`](../models/uma-client.model.md#clientconfig) = `{}`

Type: `Partial<{ udid: Udid; authKey: AuthKey; base: RequestBase; }>`.

###### auth

[`AuthMode`](../models/uma-client.model.md#authmode) = `...`

Type: `AuthMode`.

###### trainerId

`number` = `0`

###### Returns

[`UserSession`](#usersession)

Type: `UserSession`.

#### Properties

##### auth

> `private` `readonly` **auth**: [`AuthMode`](../models/uma-client.model.md#authmode)

Defined in:
[src/api/services/user-session.service.ts:33](https://github.com/davinidae/umazing-musumengine/blob/0f4b26a7c602290bed10e9aa2723b492bef975ef/src/api/services/user-session.service.ts#L33)

Type: `AuthMode`.

##### baseUrl

> **baseUrl**: `string` = `'https://api.games.umamusume.com/umamusume/'`

Defined in:
[src/api/services/user-session.service.ts:23](https://github.com/davinidae/umazing-musumengine/blob/0f4b26a7c602290bed10e9aa2723b492bef975ef/src/api/services/user-session.service.ts#L23)

baseUrl.

###### Remarks

Type: `string`.

###### Default Value

`'https://api.games.umamusume.com/umamusume/'`

##### cfg

> `private` `readonly` **cfg**: [`ClientConfig`](../models/uma-client.model.md#clientconfig) = `{}`

Defined in:
[src/api/services/user-session.service.ts:32](https://github.com/davinidae/umazing-musumengine/blob/0f4b26a7c602290bed10e9aa2723b492bef975ef/src/api/services/user-session.service.ts#L32)

Type: `Partial<{ udid: Udid; authKey: AuthKey; base: RequestBase; }>`.

##### resVer

> **resVer**: `string` = `'10002800'`

Defined in:
[src/api/services/user-session.service.ts:17](https://github.com/davinidae/umazing-musumengine/blob/0f4b26a7c602290bed10e9aa2723b492bef975ef/src/api/services/user-session.service.ts#L17)

resVer.

###### Remarks

Type: `string`.

###### Default Value

`'10002800'`

##### trainerId

> `private` `readonly` **trainerId**: `number` = `0`

Defined in:
[src/api/services/user-session.service.ts:38](https://github.com/davinidae/umazing-musumengine/blob/0f4b26a7c602290bed10e9aa2723b492bef975ef/src/api/services/user-session.service.ts#L38)

#### Methods

##### assertSteamBase()

> `private` **assertSteamBase**(`base`): `void`

Defined in:
[src/api/services/user-session.service.ts:96](https://github.com/davinidae/umazing-musumengine/blob/0f4b26a7c602290bed10e9aa2723b492bef975ef/src/api/services/user-session.service.ts#L96)

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
[src/api/services/user-session.service.ts:48](https://github.com/davinidae/umazing-musumengine/blob/0f4b26a7c602290bed10e9aa2723b492bef975ef/src/api/services/user-session.service.ts#L48)

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
[src/api/services/user-session.service.ts:109](https://github.com/davinidae/umazing-musumengine/blob/0f4b26a7c602290bed10e9aa2723b492bef975ef/src/api/services/user-session.service.ts#L109)

initialize (async).

###### Returns

`Promise`\<[`UmaClient`](uma-client.service.md#umaclient)\>

Type: `Promise<UmaClient>`.

##### resolveBase()

> `private` **resolveBase**(`deviceType`):
> [`RequestBase`](../models/uma-client.model.md#requestbase)

Defined in:
[src/api/services/user-session.service.ts:88](https://github.com/davinidae/umazing-musumengine/blob/0f4b26a7c602290bed10e9aa2723b492bef975ef/src/api/services/user-session.service.ts#L88)

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
[src/api/services/user-session.service.ts:79](https://github.com/davinidae/umazing-musumengine/blob/0f4b26a7c602290bed10e9aa2723b492bef975ef/src/api/services/user-session.service.ts#L79)

resolveDeviceType.

###### Returns

`number`

Type: `number`.

##### resolveUdid()

> `private` **resolveUdid**(): [`Udid`](../../lib/utils/protocol.util.md#udid)

Defined in:
[src/api/services/user-session.service.ts:71](https://github.com/davinidae/umazing-musumengine/blob/0f4b26a7c602290bed10e9aa2723b492bef975ef/src/api/services/user-session.service.ts#L71)

resolveUdid.

###### Returns

[`Udid`](../../lib/utils/protocol.util.md#udid)

Type: `Udid`.
