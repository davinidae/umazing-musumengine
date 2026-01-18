# api/services/user-session.service

## Classes

### UserSession

Defined in:
[src/api/services/user-session.service.ts:12](https://github.com/davinidae/umazing-musumengine/blob/bfc4a80e82b79071340aa57781e33eb50ffad709/src/api/services/user-session.service.ts#L12)

UserSession.

#### Constructors

##### Constructor

> **new UserSession**(`umaData`, `auth`): [`UserSession`](#usersession)

Defined in:
[src/api/services/user-session.service.ts:38](https://github.com/davinidae/umazing-musumengine/blob/bfc4a80e82b79071340aa57781e33eb50ffad709/src/api/services/user-session.service.ts#L38)

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
[src/api/services/user-session.service.ts:40](https://github.com/davinidae/umazing-musumengine/blob/bfc4a80e82b79071340aa57781e33eb50ffad709/src/api/services/user-session.service.ts#L40)

Type: `AuthMode`.

##### authKey

> `readonly` **authKey**: [`AuthKey`](../../lib/utils/protocol.util.md#authkey) \| `undefined`

Defined in:
[src/api/services/user-session.service.ts:30](https://github.com/davinidae/umazing-musumengine/blob/bfc4a80e82b79071340aa57781e33eb50ffad709/src/api/services/user-session.service.ts#L30)

##### baseUrl

> **baseUrl**: `string` = `'https://api.games.umamusume.com/umamusume/'`

Defined in:
[src/api/services/user-session.service.ts:27](https://github.com/davinidae/umazing-musumengine/blob/bfc4a80e82b79071340aa57781e33eb50ffad709/src/api/services/user-session.service.ts#L27)

baseUrl.

###### Remarks

Type: `string`.

###### Default Value

`'https://api.games.umamusume.com/umamusume/'`

##### resVer

> **resVer**: `string` = `'10002800'`

Defined in:
[src/api/services/user-session.service.ts:20](https://github.com/davinidae/umazing-musumengine/blob/bfc4a80e82b79071340aa57781e33eb50ffad709/src/api/services/user-session.service.ts#L20)

resVer.

###### Remarks

Type: `string`.

###### Default Value

`'10002800'`

##### steamUser

> **steamUser**: `SteamUser`

Defined in:
[src/api/services/user-session.service.ts:13](https://github.com/davinidae/umazing-musumengine/blob/bfc4a80e82b79071340aa57781e33eb50ffad709/src/api/services/user-session.service.ts#L13)

##### udid

> `readonly` **udid**: [`Udid`](../../lib/utils/protocol.util.md#udid)

Defined in:
[src/api/services/user-session.service.ts:29](https://github.com/davinidae/umazing-musumengine/blob/bfc4a80e82b79071340aa57781e33eb50ffad709/src/api/services/user-session.service.ts#L29)

##### umaData

> `private` `readonly` **umaData**: [`UmaData`](../models/api.model.md#umadata) = `{}`

Defined in:
[src/api/services/user-session.service.ts:39](https://github.com/davinidae/umazing-musumengine/blob/bfc4a80e82b79071340aa57781e33eb50ffad709/src/api/services/user-session.service.ts#L39)

#### Methods

##### getBase()

> **getBase**(): [`RequestBase`](../models/uma-client.model.md#requestbase)

Defined in:
[src/api/services/user-session.service.ts:59](https://github.com/davinidae/umazing-musumengine/blob/bfc4a80e82b79071340aa57781e33eb50ffad709/src/api/services/user-session.service.ts#L59)

getBase.

###### Returns

[`RequestBase`](../models/uma-client.model.md#requestbase)

Type: `RequestBase`.

##### initialize()

> **initialize**(): `Promise`\<[`UmaClient`](uma-client.service.md#umaclient)\>

Defined in:
[src/api/services/user-session.service.ts:111](https://github.com/davinidae/umazing-musumengine/blob/bfc4a80e82b79071340aa57781e33eb50ffad709/src/api/services/user-session.service.ts#L111)

initialize (async).

###### Returns

`Promise`\<[`UmaClient`](uma-client.service.md#umaclient)\>

Type: `Promise<UmaClient>`.
