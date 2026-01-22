# api/services/user-session.service

## Classes

### UserSession

Defined in:
[src/api/services/user-session.service.ts:12](https://github.com/davinidae/umazing-musumengine/blob/e6f583dfe0091ce918b2c2e16354b5b128f202d9/src/api/services/user-session.service.ts#L12)

UserSession.

#### Constructors

##### Constructor

> **new UserSession**(`umaData`, `auth`, `steamClient`, `userIdOverride?`):
> [`UserSession`](#usersession)

Defined in:
[src/api/services/user-session.service.ts:40](https://github.com/davinidae/umazing-musumengine/blob/e6f583dfe0091ce918b2c2e16354b5b128f202d9/src/api/services/user-session.service.ts#L40)

constructor.

###### Parameters

###### umaData

[`UmaData`](../models/api.model.md#umadata)

###### auth

[`AuthMode`](../models/uma-client.model.md#authmode)

Type: `AuthMode`.

###### steamClient

`__module`

###### userIdOverride?

`` `${string}-${string}-${string}-${string}-${string}` ``

###### Returns

[`UserSession`](#usersession)

Type: `UserSession`.

#### Properties

##### auth

> `readonly` **auth**: [`AuthMode`](../models/uma-client.model.md#authmode)

Defined in:
[src/api/services/user-session.service.ts:42](https://github.com/davinidae/umazing-musumengine/blob/e6f583dfe0091ce918b2c2e16354b5b128f202d9/src/api/services/user-session.service.ts#L42)

Type: `AuthMode`.

##### authKey

> `readonly` **authKey**: [`AuthKey`](../../lib/utils/protocol.util.md#authkey) \| `undefined`

Defined in:
[src/api/services/user-session.service.ts:27](https://github.com/davinidae/umazing-musumengine/blob/e6f583dfe0091ce918b2c2e16354b5b128f202d9/src/api/services/user-session.service.ts#L27)

##### baseUrl

> **baseUrl**: `string` = `'https://api.games.umamusume.com/umamusume/'`

Defined in:
[src/api/services/user-session.service.ts:24](https://github.com/davinidae/umazing-musumengine/blob/e6f583dfe0091ce918b2c2e16354b5b128f202d9/src/api/services/user-session.service.ts#L24)

baseUrl.

###### Remarks

Type: `string`.

###### Default Value

`'https://api.games.umamusume.com/umamusume/'`

##### client

> **client**: [`UmaClient`](uma-client.service.md#umaclient) \| `undefined`

Defined in:
[src/api/services/user-session.service.ts:100](https://github.com/davinidae/umazing-musumengine/blob/e6f583dfe0091ce918b2c2e16354b5b128f202d9/src/api/services/user-session.service.ts#L100)

##### resVer

> **resVer**: `string` = `RES_VERSION`

Defined in:
[src/api/services/user-session.service.ts:18](https://github.com/davinidae/umazing-musumengine/blob/e6f583dfe0091ce918b2c2e16354b5b128f202d9/src/api/services/user-session.service.ts#L18)

resVer.

###### Remarks

Type: `string`.

###### Default Value

`'10002800'`

##### steamClient

> `readonly` **steamClient**: `__module`

Defined in:
[src/api/services/user-session.service.ts:43](https://github.com/davinidae/umazing-musumengine/blob/e6f583dfe0091ce918b2c2e16354b5b128f202d9/src/api/services/user-session.service.ts#L43)

##### steamId

> **steamId**: `bigint` \| `null` = `null`

Defined in:
[src/api/services/user-session.service.ts:31](https://github.com/davinidae/umazing-musumengine/blob/e6f583dfe0091ce918b2c2e16354b5b128f202d9/src/api/services/user-session.service.ts#L31)

##### steamSessionTicket

> **steamSessionTicket**: `string` \| `null` = `null`

Defined in:
[src/api/services/user-session.service.ts:32](https://github.com/davinidae/umazing-musumengine/blob/e6f583dfe0091ce918b2c2e16354b5b128f202d9/src/api/services/user-session.service.ts#L32)

##### udid

> `readonly` **udid**: [`Udid`](../../lib/utils/protocol.util.md#udid)

Defined in:
[src/api/services/user-session.service.ts:26](https://github.com/davinidae/umazing-musumengine/blob/e6f583dfe0091ce918b2c2e16354b5b128f202d9/src/api/services/user-session.service.ts#L26)

##### umaData

> `readonly` **umaData**: [`UmaData`](../models/api.model.md#umadata)

Defined in:
[src/api/services/user-session.service.ts:41](https://github.com/davinidae/umazing-musumengine/blob/e6f583dfe0091ce918b2c2e16354b5b128f202d9/src/api/services/user-session.service.ts#L41)

##### userId

> **userId**: `` `${string}-${string}-${string}-${string}-${string}` ``

Defined in:
[src/api/services/user-session.service.ts:29](https://github.com/davinidae/umazing-musumengine/blob/e6f583dfe0091ce918b2c2e16354b5b128f202d9/src/api/services/user-session.service.ts#L29)

##### userIdOverride?

> `readonly` `optional` **userIdOverride**:
> `` `${string}-${string}-${string}-${string}-${string}` ``

Defined in:
[src/api/services/user-session.service.ts:44](https://github.com/davinidae/umazing-musumengine/blob/e6f583dfe0091ce918b2c2e16354b5b128f202d9/src/api/services/user-session.service.ts#L44)

#### Methods

##### getBase()

> **getBase**(): [`RequestBase`](../models/uma-client.model.md#requestbase)

Defined in:
[src/api/services/user-session.service.ts:58](https://github.com/davinidae/umazing-musumengine/blob/e6f583dfe0091ce918b2c2e16354b5b128f202d9/src/api/services/user-session.service.ts#L58)

getBase.

###### Returns

[`RequestBase`](../models/uma-client.model.md#requestbase)

Type: `RequestBase`.

##### hasClient()

> **hasClient**(): `this is InitializedUserSession`

Defined in:
[src/api/services/user-session.service.ts:105](https://github.com/davinidae/umazing-musumengine/blob/e6f583dfe0091ce918b2c2e16354b5b128f202d9/src/api/services/user-session.service.ts#L105)

Returns `true` if this session has an initialized `UmaClient`.

###### Returns

`this is InitializedUserSession`

##### initialize()

> **initialize**(): `Promise`\<[`UmaClient`](uma-client.service.md#umaclient)\>

Defined in:
[src/api/services/user-session.service.ts:113](https://github.com/davinidae/umazing-musumengine/blob/e6f583dfe0091ce918b2c2e16354b5b128f202d9/src/api/services/user-session.service.ts#L113)

initialize (async).

###### Returns

`Promise`\<[`UmaClient`](uma-client.service.md#umaclient)\>

Type: `Promise<UmaClient>`.

##### resolveSteamSessionTicket()

> **resolveSteamSessionTicket**(): `Promise`\<`void`\>

Defined in:
[src/api/services/user-session.service.ts:88](https://github.com/davinidae/umazing-musumengine/blob/e6f583dfe0091ce918b2c2e16354b5b128f202d9/src/api/services/user-session.service.ts#L88)

###### Returns

`Promise`\<`void`\>

## Functions

### assertInitializedUserSession()

> **assertInitializedUserSession**(`session`): `asserts session is InitializedUserSession`

Defined in:
[src/api/services/user-session.service.ts:132](https://github.com/davinidae/umazing-musumengine/blob/e6f583dfe0091ce918b2c2e16354b5b128f202d9/src/api/services/user-session.service.ts#L132)

Narrow a `UserSession` to an initialized session.

#### Parameters

##### session

[`UserSession`](#usersession)

#### Returns

`asserts session is InitializedUserSession`
