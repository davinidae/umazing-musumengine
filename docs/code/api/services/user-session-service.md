# api/services/user-session.service

## Classes

### UserSession

Defined in:
[api/services/user-session.service.ts:8](https://github.com/davinidae/umazing-musumengine/blob/80d3c8cc1b6a4bb7394b4c2aa6642f2fb6343d3b/src/api/services/user-session.service.ts#L8)

#### Constructors

##### Constructor

> **new UserSession**(`cfg`, `auth`): [`UserSession`](#usersession)

Defined in:
[api/services/user-session.service.ts:12](https://github.com/davinidae/umazing-musumengine/blob/80d3c8cc1b6a4bb7394b4c2aa6642f2fb6343d3b/src/api/services/user-session.service.ts#L12)

###### Parameters

###### cfg

[`ClientConfig`](../models/uma-client.model.md#clientconfig) = `{}`

###### auth

[`AuthMode`](../models/uma-client.model.md#authmode) = `...`

###### Returns

[`UserSession`](#usersession)

#### Properties

##### auth

> `private` `readonly` **auth**: [`AuthMode`](../models/uma-client.model.md#authmode)

Defined in:
[api/services/user-session.service.ts:14](https://github.com/davinidae/umazing-musumengine/blob/80d3c8cc1b6a4bb7394b4c2aa6642f2fb6343d3b/src/api/services/user-session.service.ts#L14)

##### baseUrl

> **baseUrl**: `string` = `'https://api.games.umamusume.com/umamusume/'`

Defined in:
[api/services/user-session.service.ts:10](https://github.com/davinidae/umazing-musumengine/blob/80d3c8cc1b6a4bb7394b4c2aa6642f2fb6343d3b/src/api/services/user-session.service.ts#L10)

##### cfg

> `private` `readonly` **cfg**: [`ClientConfig`](../models/uma-client.model.md#clientconfig) = `{}`

Defined in:
[api/services/user-session.service.ts:13](https://github.com/davinidae/umazing-musumengine/blob/80d3c8cc1b6a4bb7394b4c2aa6642f2fb6343d3b/src/api/services/user-session.service.ts#L13)

##### resVer

> **resVer**: `string` = `'10002800'`

Defined in:
[api/services/user-session.service.ts:9](https://github.com/davinidae/umazing-musumengine/blob/80d3c8cc1b6a4bb7394b4c2aa6642f2fb6343d3b/src/api/services/user-session.service.ts#L9)

#### Methods

##### assertSteamBase()

> `private` **assertSteamBase**(`base`): `void`

Defined in:
[api/services/user-session.service.ts:54](https://github.com/davinidae/umazing-musumengine/blob/80d3c8cc1b6a4bb7394b4c2aa6642f2fb6343d3b/src/api/services/user-session.service.ts#L54)

###### Parameters

###### base

[`RequestBase`](../models/uma-client.model.md#requestbase)

###### Returns

`void`

##### getDefaultBase()

> **getDefaultBase**(`deviceType`): [`RequestBase`](../models/uma-client.model.md#requestbase)

Defined in:
[api/services/user-session.service.ts:23](https://github.com/davinidae/umazing-musumengine/blob/80d3c8cc1b6a4bb7394b4c2aa6642f2fb6343d3b/src/api/services/user-session.service.ts#L23)

###### Parameters

###### deviceType

`number`

###### Returns

[`RequestBase`](../models/uma-client.model.md#requestbase)

##### initialize()

> **initialize**(): `Promise`\<[`UmaClient`](uma-client.service.md#umaclient)\>

Defined in:
[api/services/user-session.service.ts:63](https://github.com/davinidae/umazing-musumengine/blob/80d3c8cc1b6a4bb7394b4c2aa6642f2fb6343d3b/src/api/services/user-session.service.ts#L63)

###### Returns

`Promise`\<[`UmaClient`](uma-client.service.md#umaclient)\>

##### resolveBase()

> `private` **resolveBase**(`deviceType`):
> [`RequestBase`](../models/uma-client.model.md#requestbase)

Defined in:
[api/services/user-session.service.ts:50](https://github.com/davinidae/umazing-musumengine/blob/80d3c8cc1b6a4bb7394b4c2aa6642f2fb6343d3b/src/api/services/user-session.service.ts#L50)

###### Parameters

###### deviceType

`number`

###### Returns

[`RequestBase`](../models/uma-client.model.md#requestbase)

##### resolveDeviceType()

> `private` **resolveDeviceType**(): `number`

Defined in:
[api/services/user-session.service.ts:46](https://github.com/davinidae/umazing-musumengine/blob/80d3c8cc1b6a4bb7394b4c2aa6642f2fb6343d3b/src/api/services/user-session.service.ts#L46)

###### Returns

`number`

##### resolveUdid()

> `private` **resolveUdid**(): [`Udid`](../../lib/utils/protocol.util.md#udid)

Defined in:
[api/services/user-session.service.ts:42](https://github.com/davinidae/umazing-musumengine/blob/80d3c8cc1b6a4bb7394b4c2aa6642f2fb6343d3b/src/api/services/user-session.service.ts#L42)

###### Returns

[`Udid`](../../lib/utils/protocol.util.md#udid)
