# api/services/user-session.service

## Classes

### UserSession

Defined in:
[src/api/services/user-session.service.ts:13](https://github.com/davinidae/umazing-musumengine/blob/2fd0a7ae5bcd71fb665112d795849ae0ada2b9de/src/api/services/user-session.service.ts#L13)

UserSession.

#### Constructors

##### Constructor

> **new UserSession**(`umaData`, `auth`): [`UserSession`](#usersession)

Defined in:
[src/api/services/user-session.service.ts:39](https://github.com/davinidae/umazing-musumengine/blob/2fd0a7ae5bcd71fb665112d795849ae0ada2b9de/src/api/services/user-session.service.ts#L39)

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
[src/api/services/user-session.service.ts:41](https://github.com/davinidae/umazing-musumengine/blob/2fd0a7ae5bcd71fb665112d795849ae0ada2b9de/src/api/services/user-session.service.ts#L41)

Type: `AuthMode`.

##### authKey

> `readonly` **authKey**: [`AuthKey`](../../lib/utils/protocol.util.md#authkey) \| `undefined`

Defined in:
[src/api/services/user-session.service.ts:29](https://github.com/davinidae/umazing-musumengine/blob/2fd0a7ae5bcd71fb665112d795849ae0ada2b9de/src/api/services/user-session.service.ts#L29)

##### baseUrl

> **baseUrl**: `string` = `'https://api.games.umamusume.com/umamusume/'`

Defined in:
[src/api/services/user-session.service.ts:26](https://github.com/davinidae/umazing-musumengine/blob/2fd0a7ae5bcd71fb665112d795849ae0ada2b9de/src/api/services/user-session.service.ts#L26)

baseUrl.

###### Remarks

Type: `string`.

###### Default Value

`'https://api.games.umamusume.com/umamusume/'`

##### client

> **client**: [`UmaClient`](uma-client.service.md#umaclient) \| `undefined`

Defined in:
[src/api/services/user-session.service.ts:99](https://github.com/davinidae/umazing-musumengine/blob/2fd0a7ae5bcd71fb665112d795849ae0ada2b9de/src/api/services/user-session.service.ts#L99)

##### resVer

> **resVer**: `string` = `'10002800'`

Defined in:
[src/api/services/user-session.service.ts:19](https://github.com/davinidae/umazing-musumengine/blob/2fd0a7ae5bcd71fb665112d795849ae0ada2b9de/src/api/services/user-session.service.ts#L19)

resVer.

###### Remarks

Type: `string`.

###### Default Value

`'10002800'`

##### udid

> `readonly` **udid**: [`Udid`](../../lib/utils/protocol.util.md#udid)

Defined in:
[src/api/services/user-session.service.ts:28](https://github.com/davinidae/umazing-musumengine/blob/2fd0a7ae5bcd71fb665112d795849ae0ada2b9de/src/api/services/user-session.service.ts#L28)

##### umaData

> `private` `readonly` **umaData**: [`UmaData`](../models/api.model.md#umadata)

Defined in:
[src/api/services/user-session.service.ts:40](https://github.com/davinidae/umazing-musumengine/blob/2fd0a7ae5bcd71fb665112d795849ae0ada2b9de/src/api/services/user-session.service.ts#L40)

##### userId

> **userId**: `` `${string}-${string}-${string}-${string}-${string}` ``

Defined in:
[src/api/services/user-session.service.ts:31](https://github.com/davinidae/umazing-musumengine/blob/2fd0a7ae5bcd71fb665112d795849ae0ada2b9de/src/api/services/user-session.service.ts#L31)

#### Methods

##### getBase()

> **getBase**(): [`RequestBase`](../models/uma-client.model.md#requestbase)

Defined in:
[src/api/services/user-session.service.ts:58](https://github.com/davinidae/umazing-musumengine/blob/2fd0a7ae5bcd71fb665112d795849ae0ada2b9de/src/api/services/user-session.service.ts#L58)

getBase.

###### Returns

[`RequestBase`](../models/uma-client.model.md#requestbase)

Type: `RequestBase`.

##### hasClient()

> **hasClient**(): `this is InitializedUserSession`

Defined in:
[src/api/services/user-session.service.ts:104](https://github.com/davinidae/umazing-musumengine/blob/2fd0a7ae5bcd71fb665112d795849ae0ada2b9de/src/api/services/user-session.service.ts#L104)

Returns `true` if this session has an initialized `UmaClient`.

###### Returns

`this is InitializedUserSession`

##### initialize()

> **initialize**(): `Promise`\<[`UmaClient`](uma-client.service.md#umaclient)\>

Defined in:
[src/api/services/user-session.service.ts:112](https://github.com/davinidae/umazing-musumengine/blob/2fd0a7ae5bcd71fb665112d795849ae0ada2b9de/src/api/services/user-session.service.ts#L112)

initialize (async).

###### Returns

`Promise`\<[`UmaClient`](uma-client.service.md#umaclient)\>

Type: `Promise<UmaClient>`.

##### resolveSteamSessionTicket()

> **resolveSteamSessionTicket**(): `Promise`\<`void`\>

Defined in:
[src/api/services/user-session.service.ts:88](https://github.com/davinidae/umazing-musumengine/blob/2fd0a7ae5bcd71fb665112d795849ae0ada2b9de/src/api/services/user-session.service.ts#L88)

###### Returns

`Promise`\<`void`\>

## Functions

### assertInitializedUserSession()

> **assertInitializedUserSession**(`session`): `asserts session is InitializedUserSession`

Defined in:
[src/api/services/user-session.service.ts:131](https://github.com/davinidae/umazing-musumengine/blob/2fd0a7ae5bcd71fb665112d795849ae0ada2b9de/src/api/services/user-session.service.ts#L131)

Narrow a `UserSession` to an initialized session.

#### Parameters

##### session

[`UserSession`](#usersession)

#### Returns

`asserts session is InitializedUserSession`
