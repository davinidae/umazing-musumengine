# api/services/user-session.service

## Classes

### UserSession

Defined in:
[api/services/user-session.service.ts:13](https://github.com/davinidae/umazing-musumengine/blob/57e727b3c2cba8f6b015598291ecad23e61d967f/src/api/services/user-session.service.ts#L13)

#### Constructors

##### Constructor

> **new UserSession**(`cfg`, `auth`): [`UserSession`](#usersession)

Defined in:
[api/services/user-session.service.ts:17](https://github.com/davinidae/umazing-musumengine/blob/57e727b3c2cba8f6b015598291ecad23e61d967f/src/api/services/user-session.service.ts#L17)

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
[api/services/user-session.service.ts:19](https://github.com/davinidae/umazing-musumengine/blob/57e727b3c2cba8f6b015598291ecad23e61d967f/src/api/services/user-session.service.ts#L19)

##### baseUrl

> **baseUrl**: `string` = `'https://api.games.umamusume.com/umamusume/'`

Defined in:
[api/services/user-session.service.ts:15](https://github.com/davinidae/umazing-musumengine/blob/57e727b3c2cba8f6b015598291ecad23e61d967f/src/api/services/user-session.service.ts#L15)

##### cfg

> `private` `readonly` **cfg**: [`ClientConfig`](../models/uma-client.model.md#clientconfig) = `{}`

Defined in:
[api/services/user-session.service.ts:18](https://github.com/davinidae/umazing-musumengine/blob/57e727b3c2cba8f6b015598291ecad23e61d967f/src/api/services/user-session.service.ts#L18)

##### resVer

> **resVer**: `string` = `'10002800'`

Defined in:
[api/services/user-session.service.ts:14](https://github.com/davinidae/umazing-musumengine/blob/57e727b3c2cba8f6b015598291ecad23e61d967f/src/api/services/user-session.service.ts#L14)

#### Methods

##### getDefaultBase()

> **getDefaultBase**(`deviceType`): [`RequestBase`](../models/uma-client.model.md#requestbase)

Defined in:
[api/services/user-session.service.ts:28](https://github.com/davinidae/umazing-musumengine/blob/57e727b3c2cba8f6b015598291ecad23e61d967f/src/api/services/user-session.service.ts#L28)

###### Parameters

###### deviceType

`number`

###### Returns

[`RequestBase`](../models/uma-client.model.md#requestbase)

##### initialize()

> **initialize**(): `Promise`\<[`RequestResult`](../models/uma-client.model.md#requestresult)[]\>

Defined in:
[api/services/user-session.service.ts:47](https://github.com/davinidae/umazing-musumengine/blob/57e727b3c2cba8f6b015598291ecad23e61d967f/src/api/services/user-session.service.ts#L47)

###### Returns

`Promise`\<[`RequestResult`](../models/uma-client.model.md#requestresult)[]\>
