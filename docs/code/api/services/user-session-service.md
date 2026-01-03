# api/services/user-session.service

## Classes

### UserSession

Defined in:
[src/api/services/user-session.service.ts:13](https://github.com/davinidae/umazing-musumengine/blob/7b7fb26e300246328ff4c87810f666ed56b6ab3f/src/api/services/user-session.service.ts#L13)

UserSession.

#### Constructors

##### Constructor

> **new UserSession**(`umaData`, `auth`): [`UserSession`](#usersession)

Defined in:
[src/api/services/user-session.service.ts:34](https://github.com/davinidae/umazing-musumengine/blob/7b7fb26e300246328ff4c87810f666ed56b6ab3f/src/api/services/user-session.service.ts#L34)

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
[src/api/services/user-session.service.ts:36](https://github.com/davinidae/umazing-musumengine/blob/7b7fb26e300246328ff4c87810f666ed56b6ab3f/src/api/services/user-session.service.ts#L36)

Type: `AuthMode`.

##### baseUrl

> **baseUrl**: `string` = `'https://api.games.umamusume.com/umamusume/'`

Defined in:
[src/api/services/user-session.service.ts:26](https://github.com/davinidae/umazing-musumengine/blob/7b7fb26e300246328ff4c87810f666ed56b6ab3f/src/api/services/user-session.service.ts#L26)

baseUrl.

###### Remarks

Type: `string`.

###### Default Value

`'https://api.games.umamusume.com/umamusume/'`

##### resVer

> **resVer**: `string` = `'10002800'`

Defined in:
[src/api/services/user-session.service.ts:20](https://github.com/davinidae/umazing-musumengine/blob/7b7fb26e300246328ff4c87810f666ed56b6ab3f/src/api/services/user-session.service.ts#L20)

resVer.

###### Remarks

Type: `string`.

###### Default Value

`'10002800'`

##### steamSessionTicket

> **steamSessionTicket**: `string` \| `null` = `null`

Defined in:
[src/api/services/user-session.service.ts:45](https://github.com/davinidae/umazing-musumengine/blob/7b7fb26e300246328ff4c87810f666ed56b6ab3f/src/api/services/user-session.service.ts#L45)

##### steamUser

> **steamUser**: `SteamUser`

Defined in:
[src/api/services/user-session.service.ts:14](https://github.com/davinidae/umazing-musumengine/blob/7b7fb26e300246328ff4c87810f666ed56b6ab3f/src/api/services/user-session.service.ts#L14)

##### umaData

> `private` `readonly` **umaData**: [`UmaData`](../models/api.model.md#umadata) = `{}`

Defined in:
[src/api/services/user-session.service.ts:35](https://github.com/davinidae/umazing-musumengine/blob/7b7fb26e300246328ff4c87810f666ed56b6ab3f/src/api/services/user-session.service.ts#L35)

#### Methods

##### getAuthKey()

> **getAuthKey**(): [`AuthKey`](../../lib/utils/protocol.util.md#authkey) \| `undefined`

Defined in:
[src/api/services/user-session.service.ts:125](https://github.com/davinidae/umazing-musumengine/blob/7b7fb26e300246328ff4c87810f666ed56b6ab3f/src/api/services/user-session.service.ts#L125)

###### Returns

[`AuthKey`](../../lib/utils/protocol.util.md#authkey) \| `undefined`

##### getDefaultBase()

> **getDefaultBase**(`deviceType`): [`RequestBase`](../models/uma-client.model.md#requestbase)

Defined in:
[src/api/services/user-session.service.ts:52](https://github.com/davinidae/umazing-musumengine/blob/7b7fb26e300246328ff4c87810f666ed56b6ab3f/src/api/services/user-session.service.ts#L52)

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
[src/api/services/user-session.service.ts:153](https://github.com/davinidae/umazing-musumengine/blob/7b7fb26e300246328ff4c87810f666ed56b6ab3f/src/api/services/user-session.service.ts#L153)

initialize (async).

###### Returns

`Promise`\<[`UmaClient`](uma-client.service.md#umaclient)\>

Type: `Promise<UmaClient>`.

##### logInSteam()

> **logInSteam**(): `Promise`\<`void`\> \| `undefined`

Defined in:
[src/api/services/user-session.service.ts:131](https://github.com/davinidae/umazing-musumengine/blob/7b7fb26e300246328ff4c87810f666ed56b6ab3f/src/api/services/user-session.service.ts#L131)

###### Returns

`Promise`\<`void`\> \| `undefined`

##### resolveBase()

> `private` **resolveBase**(`deviceType`):
> [`RequestBase`](../models/uma-client.model.md#requestbase)

Defined in:
[src/api/services/user-session.service.ts:121](https://github.com/davinidae/umazing-musumengine/blob/7b7fb26e300246328ff4c87810f666ed56b6ab3f/src/api/services/user-session.service.ts#L121)

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
[src/api/services/user-session.service.ts:112](https://github.com/davinidae/umazing-musumengine/blob/7b7fb26e300246328ff4c87810f666ed56b6ab3f/src/api/services/user-session.service.ts#L112)

resolveDeviceType.

###### Returns

`number`

Type: `number`.

##### resolveUdid()

> `private` **resolveUdid**(): [`Udid`](../../lib/utils/protocol.util.md#udid)

Defined in:
[src/api/services/user-session.service.ts:104](https://github.com/davinidae/umazing-musumengine/blob/7b7fb26e300246328ff4c87810f666ed56b6ab3f/src/api/services/user-session.service.ts#L104)

resolveUdid.

###### Returns

[`Udid`](../../lib/utils/protocol.util.md#udid)

Type: `Udid`.
