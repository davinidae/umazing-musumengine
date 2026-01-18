# api/services/user-session.service

## Classes

### UserSession

Defined in:
[src/api/services/user-session.service.ts:13](https://github.com/davinidae/umazing-musumengine/blob/2b696d82fbabdc92d50663114c51adb9edb4509d/src/api/services/user-session.service.ts#L13)

UserSession.

#### Constructors

##### Constructor

> **new UserSession**(`umaData`, `auth`): [`UserSession`](#usersession)

Defined in:
[src/api/services/user-session.service.ts:39](https://github.com/davinidae/umazing-musumengine/blob/2b696d82fbabdc92d50663114c51adb9edb4509d/src/api/services/user-session.service.ts#L39)

constructor.

###### Parameters

###### umaData

[`UmaData`](../models/api.model.md#umadata)

###### auth

[`AuthMode`](../models/uma-client.model.md#authmode)

Type: `AuthMode`.

###### Returns

[`UserSession`](#usersession)

Type: `UserSession`.

#### Properties

##### auth

> `private` `readonly` **auth**: [`AuthMode`](../models/uma-client.model.md#authmode)

Defined in:
[src/api/services/user-session.service.ts:41](https://github.com/davinidae/umazing-musumengine/blob/2b696d82fbabdc92d50663114c51adb9edb4509d/src/api/services/user-session.service.ts#L41)

Type: `AuthMode`.

##### authKey

> `readonly` **authKey**: [`AuthKey`](../../lib/utils/protocol.util.md#authkey) \| `undefined`

Defined in:
[src/api/services/user-session.service.ts:31](https://github.com/davinidae/umazing-musumengine/blob/2b696d82fbabdc92d50663114c51adb9edb4509d/src/api/services/user-session.service.ts#L31)

##### baseUrl

> **baseUrl**: `string` = `'https://api.games.umamusume.com/umamusume/'`

Defined in:
[src/api/services/user-session.service.ts:28](https://github.com/davinidae/umazing-musumengine/blob/2b696d82fbabdc92d50663114c51adb9edb4509d/src/api/services/user-session.service.ts#L28)

baseUrl.

###### Remarks

Type: `string`.

###### Default Value

`'https://api.games.umamusume.com/umamusume/'`

##### resVer

> **resVer**: `string` = `'10002800'`

Defined in:
[src/api/services/user-session.service.ts:21](https://github.com/davinidae/umazing-musumengine/blob/2b696d82fbabdc92d50663114c51adb9edb4509d/src/api/services/user-session.service.ts#L21)

resVer.

###### Remarks

Type: `string`.

###### Default Value

`'10002800'`

##### steamUser

> **steamUser**: `SteamUser`

Defined in:
[src/api/services/user-session.service.ts:14](https://github.com/davinidae/umazing-musumengine/blob/2b696d82fbabdc92d50663114c51adb9edb4509d/src/api/services/user-session.service.ts#L14)

##### udid

> `readonly` **udid**: [`Udid`](../../lib/utils/protocol.util.md#udid)

Defined in:
[src/api/services/user-session.service.ts:30](https://github.com/davinidae/umazing-musumengine/blob/2b696d82fbabdc92d50663114c51adb9edb4509d/src/api/services/user-session.service.ts#L30)

##### umaData

> `private` `readonly` **umaData**: [`UmaData`](../models/api.model.md#umadata)

Defined in:
[src/api/services/user-session.service.ts:40](https://github.com/davinidae/umazing-musumengine/blob/2b696d82fbabdc92d50663114c51adb9edb4509d/src/api/services/user-session.service.ts#L40)

#### Methods

##### getBase()

> **getBase**(): [`RequestBase`](../models/uma-client.model.md#requestbase)

Defined in:
[src/api/services/user-session.service.ts:56](https://github.com/davinidae/umazing-musumengine/blob/2b696d82fbabdc92d50663114c51adb9edb4509d/src/api/services/user-session.service.ts#L56)

getBase.

###### Returns

[`RequestBase`](../models/uma-client.model.md#requestbase)

Type: `RequestBase`.

##### initialize()

> **initialize**(): `Promise`\<[`UmaClient`](uma-client.service.md#umaclient)\>

Defined in:
[src/api/services/user-session.service.ts:101](https://github.com/davinidae/umazing-musumengine/blob/2b696d82fbabdc92d50663114c51adb9edb4509d/src/api/services/user-session.service.ts#L101)

initialize (async).

###### Returns

`Promise`\<[`UmaClient`](uma-client.service.md#umaclient)\>

Type: `Promise<UmaClient>`.

##### resolveSteamSessionTicket()

> **resolveSteamSessionTicket**(): `Promise`\<`void`\>

Defined in:
[src/api/services/user-session.service.ts:86](https://github.com/davinidae/umazing-musumengine/blob/2b696d82fbabdc92d50663114c51adb9edb4509d/src/api/services/user-session.service.ts#L86)

###### Returns

`Promise`\<`void`\>
