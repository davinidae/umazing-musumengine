# api/services/user-session.service

## Classes

### UserSession

Defined in:
[src/api/services/user-session.service.ts:17](https://github.com/davinidae/umazing-musumengine/blob/aeab44e843910aee776ca8e80ac77feaac919c49/src/api/services/user-session.service.ts#L17)

UserSession.

#### Constructors

##### Constructor

> **new UserSession**(`umaData`, `auth`, `steamClient`, `userIdOverride?`, `lastResult?`):
> [`UserSession`](#usersession)

Defined in:
[src/api/services/user-session.service.ts:57](https://github.com/davinidae/umazing-musumengine/blob/aeab44e843910aee776ca8e80ac77feaac919c49/src/api/services/user-session.service.ts#L57)

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

###### lastResult?

[`RequestResult`](../models/uma-client.model.md#requestresult)

###### Returns

[`UserSession`](#usersession)

Type: `UserSession`.

#### Properties

##### auth

> `readonly` **auth**: [`AuthMode`](../models/uma-client.model.md#authmode)

Defined in:
[src/api/services/user-session.service.ts:59](https://github.com/davinidae/umazing-musumengine/blob/aeab44e843910aee776ca8e80ac77feaac919c49/src/api/services/user-session.service.ts#L59)

Type: `AuthMode`.

##### authKey

> `readonly` **authKey**: [`AuthKey`](../../lib/utils/protocol.util.md#authkey) \| `undefined`

Defined in:
[src/api/services/user-session.service.ts:32](https://github.com/davinidae/umazing-musumengine/blob/aeab44e843910aee776ca8e80ac77feaac919c49/src/api/services/user-session.service.ts#L32)

##### baseUrl

> **baseUrl**: `string` = `'https://api.games.umamusume.com/umamusume/'`

Defined in:
[src/api/services/user-session.service.ts:29](https://github.com/davinidae/umazing-musumengine/blob/aeab44e843910aee776ca8e80ac77feaac919c49/src/api/services/user-session.service.ts#L29)

baseUrl.

###### Remarks

Type: `string`.

###### Default Value

`'https://api.games.umamusume.com/umamusume/'`

##### carrier

> **carrier**: `string`

Defined in:
[src/api/services/user-session.service.ts:36](https://github.com/davinidae/umazing-musumengine/blob/aeab44e843910aee776ca8e80ac77feaac919c49/src/api/services/user-session.service.ts#L36)

##### client

> **client**: [`UmaClient`](uma-client.service.md#umaclient) \| `undefined`

Defined in:
[src/api/services/user-session.service.ts:97](https://github.com/davinidae/umazing-musumengine/blob/aeab44e843910aee776ca8e80ac77feaac919c49/src/api/services/user-session.service.ts#L97)

##### device

> **device**: `number`

Defined in:
[src/api/services/user-session.service.ts:37](https://github.com/davinidae/umazing-musumengine/blob/aeab44e843910aee776ca8e80ac77feaac919c49/src/api/services/user-session.service.ts#L37)

##### device_id

> **device_id**: `string`

Defined in:
[src/api/services/user-session.service.ts:38](https://github.com/davinidae/umazing-musumengine/blob/aeab44e843910aee776ca8e80ac77feaac919c49/src/api/services/user-session.service.ts#L38)

##### device_name

> **device_name**: `string`

Defined in:
[src/api/services/user-session.service.ts:44](https://github.com/davinidae/umazing-musumengine/blob/aeab44e843910aee776ca8e80ac77feaac919c49/src/api/services/user-session.service.ts#L44)

##### dmm_onetime_token

> **dmm_onetime_token**: `null`

Defined in:
[src/api/services/user-session.service.ts:42](https://github.com/davinidae/umazing-musumengine/blob/aeab44e843910aee776ca8e80ac77feaac919c49/src/api/services/user-session.service.ts#L42)

##### dmm_viewer_id

> **dmm_viewer_id**: `null`

Defined in:
[src/api/services/user-session.service.ts:43](https://github.com/davinidae/umazing-musumengine/blob/aeab44e843910aee776ca8e80ac77feaac919c49/src/api/services/user-session.service.ts#L43)

##### graphics_device_name

> **graphics_device_name**: `string`

Defined in:
[src/api/services/user-session.service.ts:45](https://github.com/davinidae/umazing-musumengine/blob/aeab44e843910aee776ca8e80ac77feaac919c49/src/api/services/user-session.service.ts#L45)

##### ip_address

> **ip_address**: `string`

Defined in:
[src/api/services/user-session.service.ts:46](https://github.com/davinidae/umazing-musumengine/blob/aeab44e843910aee776ca8e80ac77feaac919c49/src/api/services/user-session.service.ts#L46)

##### keychain

> **keychain**: `number`

Defined in:
[src/api/services/user-session.service.ts:39](https://github.com/davinidae/umazing-musumengine/blob/aeab44e843910aee776ca8e80ac77feaac919c49/src/api/services/user-session.service.ts#L39)

##### lastResult?

> `readonly` `optional` **lastResult**:
> [`RequestResult`](../models/uma-client.model.md#requestresult)

Defined in:
[src/api/services/user-session.service.ts:62](https://github.com/davinidae/umazing-musumengine/blob/aeab44e843910aee776ca8e80ac77feaac919c49/src/api/services/user-session.service.ts#L62)

##### locale

> **locale**: `string`

Defined in:
[src/api/services/user-session.service.ts:40](https://github.com/davinidae/umazing-musumengine/blob/aeab44e843910aee776ca8e80ac77feaac919c49/src/api/services/user-session.service.ts#L40)

##### platform_os_version

> **platform_os_version**: `string`

Defined in:
[src/api/services/user-session.service.ts:47](https://github.com/davinidae/umazing-musumengine/blob/aeab44e843910aee776ca8e80ac77feaac919c49/src/api/services/user-session.service.ts#L47)

##### resVer

> **resVer**: `string` = `RES_VERSION`

Defined in:
[src/api/services/user-session.service.ts:23](https://github.com/davinidae/umazing-musumengine/blob/aeab44e843910aee776ca8e80ac77feaac919c49/src/api/services/user-session.service.ts#L23)

resVer.

###### Remarks

Type: `string`.

###### Default Value

`'10002800'`

##### steam_id

> **steam_id**: `string` \| `null`

Defined in:
[src/api/services/user-session.service.ts:48](https://github.com/davinidae/umazing-musumengine/blob/aeab44e843910aee776ca8e80ac77feaac919c49/src/api/services/user-session.service.ts#L48)

##### steam_session_ticket

> **steam_session_ticket**: `string` \| `null`

Defined in:
[src/api/services/user-session.service.ts:49](https://github.com/davinidae/umazing-musumengine/blob/aeab44e843910aee776ca8e80ac77feaac919c49/src/api/services/user-session.service.ts#L49)

##### steamClient

> `readonly` **steamClient**: `__module`

Defined in:
[src/api/services/user-session.service.ts:60](https://github.com/davinidae/umazing-musumengine/blob/aeab44e843910aee776ca8e80ac77feaac919c49/src/api/services/user-session.service.ts#L60)

##### udid

> `readonly` **udid**: [`Udid`](../../lib/utils/protocol.util.md#udid)

Defined in:
[src/api/services/user-session.service.ts:31](https://github.com/davinidae/umazing-musumengine/blob/aeab44e843910aee776ca8e80ac77feaac919c49/src/api/services/user-session.service.ts#L31)

##### umaData

> `readonly` **umaData**: [`UmaData`](../models/api.model.md#umadata)

Defined in:
[src/api/services/user-session.service.ts:58](https://github.com/davinidae/umazing-musumengine/blob/aeab44e843910aee776ca8e80ac77feaac919c49/src/api/services/user-session.service.ts#L58)

##### userId

> **userId**: `` `${string}-${string}-${string}-${string}-${string}` ``

Defined in:
[src/api/services/user-session.service.ts:34](https://github.com/davinidae/umazing-musumengine/blob/aeab44e843910aee776ca8e80ac77feaac919c49/src/api/services/user-session.service.ts#L34)

##### userIdOverride?

> `readonly` `optional` **userIdOverride**:
> `` `${string}-${string}-${string}-${string}-${string}` ``

Defined in:
[src/api/services/user-session.service.ts:61](https://github.com/davinidae/umazing-musumengine/blob/aeab44e843910aee776ca8e80ac77feaac919c49/src/api/services/user-session.service.ts#L61)

##### viewer_id

> **viewer_id**: `number`

Defined in:
[src/api/services/user-session.service.ts:41](https://github.com/davinidae/umazing-musumengine/blob/aeab44e843910aee776ca8e80ac77feaac919c49/src/api/services/user-session.service.ts#L41)

#### Methods

##### hasClient()

> **hasClient**(): `this is InitializedUserSession`

Defined in:
[src/api/services/user-session.service.ts:102](https://github.com/davinidae/umazing-musumengine/blob/aeab44e843910aee776ca8e80ac77feaac919c49/src/api/services/user-session.service.ts#L102)

Returns `true` if this session has an initialized `UmaClient`.

###### Returns

`this is InitializedUserSession`

##### initialize()

> **initialize**(): `Promise`\<[`UmaClient`](uma-client.service.md#umaclient)\>

Defined in:
[src/api/services/user-session.service.ts:110](https://github.com/davinidae/umazing-musumengine/blob/aeab44e843910aee776ca8e80ac77feaac919c49/src/api/services/user-session.service.ts#L110)

initialize (async).

###### Returns

`Promise`\<[`UmaClient`](uma-client.service.md#umaclient)\>

Type: `Promise<UmaClient>`.

##### resolveSteamSessionTicket()

> **resolveSteamSessionTicket**(): `Promise`\<`void`\>

Defined in:
[src/api/services/user-session.service.ts:85](https://github.com/davinidae/umazing-musumengine/blob/aeab44e843910aee776ca8e80ac77feaac919c49/src/api/services/user-session.service.ts#L85)

###### Returns

`Promise`\<`void`\>

## Functions

### assertInitializedUserSession()

> **assertInitializedUserSession**(`session`): `asserts session is InitializedUserSession`

Defined in:
[src/api/services/user-session.service.ts:120](https://github.com/davinidae/umazing-musumengine/blob/aeab44e843910aee776ca8e80ac77feaac919c49/src/api/services/user-session.service.ts#L120)

Narrow a `UserSession` to an initialized session.

#### Parameters

##### session

[`UserSession`](#usersession)

#### Returns

`asserts session is InitializedUserSession`
