# api/services/uma-client.service

## Classes

### UmaClient

Defined in:
[api/services/uma-client.service.ts:36](https://github.com/davinidae/umazing-musumengine/blob/23b121617aef679f48a8d2fac9ca051b023fc6da/src/api/services/uma-client.service.ts#L36)

#### Constructors

##### Constructor

> **new UmaClient**(`auth`, `umaclientData`): [`UmaClient`](#umaclient)

Defined in:
[api/services/uma-client.service.ts:37](https://github.com/davinidae/umazing-musumengine/blob/23b121617aef679f48a8d2fac9ca051b023fc6da/src/api/services/uma-client.service.ts#L37)

###### Parameters

###### auth

[`AuthMode`](../models/uma-client.model.md#authmode)

###### umaclientData

[`UmaClientData`](../models/uma-client.model.md#umaclientdata)

###### Returns

[`UmaClient`](#umaclient)

#### Properties

##### auth

> `private` `readonly` **auth**: [`AuthMode`](../models/uma-client.model.md#authmode)

Defined in:
[api/services/uma-client.service.ts:38](https://github.com/davinidae/umazing-musumengine/blob/23b121617aef679f48a8d2fac9ca051b023fc6da/src/api/services/uma-client.service.ts#L38)

##### umaclientData

> `private` `readonly` **umaclientData**:
> [`UmaClientData`](../models/uma-client.model.md#umaclientdata)

Defined in:
[api/services/uma-client.service.ts:39](https://github.com/davinidae/umazing-musumengine/blob/23b121617aef679f48a8d2fac9ca051b023fc6da/src/api/services/uma-client.service.ts#L39)

#### Methods

##### getStepData()

> `private` **getStepData**(`prevResults`): [`StepData`](../models/uma-client.model.md#stepdata)

Defined in:
[api/services/uma-client.service.ts:55](https://github.com/davinidae/umazing-musumengine/blob/23b121617aef679f48a8d2fac9ca051b023fc6da/src/api/services/uma-client.service.ts#L55)

###### Parameters

###### prevResults

[`RequestResult`](../models/uma-client.model.md#requestresult)[] = `[]`

###### Returns

[`StepData`](../models/uma-client.model.md#stepdata)

##### logIn()

> **logIn**(): `Promise`\<[`RequestResult`](../models/uma-client.model.md#requestresult)[]\>

Defined in:
[api/services/uma-client.service.ts:104](https://github.com/davinidae/umazing-musumengine/blob/23b121617aef679f48a8d2fac9ca051b023fc6da/src/api/services/uma-client.service.ts#L104)

###### Returns

`Promise`\<[`RequestResult`](../models/uma-client.model.md#requestresult)[]\>

##### regenSessionId()

> **regenSessionId**(): `void`

Defined in:
[api/services/uma-client.service.ts:44](https://github.com/davinidae/umazing-musumengine/blob/23b121617aef679f48a8d2fac9ca051b023fc6da/src/api/services/uma-client.service.ts#L44)

###### Returns

`void`

##### signup()

> `private` **signup**():
> `Promise`\<[`RequestResult`](../models/uma-client.model.md#requestresult)[]\>

Defined in:
[api/services/uma-client.service.ts:75](https://github.com/davinidae/umazing-musumengine/blob/23b121617aef679f48a8d2fac9ca051b023fc6da/src/api/services/uma-client.service.ts#L75)

###### Returns

`Promise`\<[`RequestResult`](../models/uma-client.model.md#requestresult)[]\>

##### tutorial()

> `private` **tutorial**(`results`):
> `Promise`\<[`RequestResult`](../models/uma-client.model.md#requestresult)[]\>

Defined in:
[api/services/uma-client.service.ts:86](https://github.com/davinidae/umazing-musumengine/blob/23b121617aef679f48a8d2fac9ca051b023fc6da/src/api/services/uma-client.service.ts#L86)

###### Parameters

###### results

[`RequestResult`](../models/uma-client.model.md#requestresult)[]

###### Returns

`Promise`\<[`RequestResult`](../models/uma-client.model.md#requestresult)[]\>

##### updateAuthKey()

> **updateAuthKey**(`authKey`): `void`

Defined in:
[api/services/uma-client.service.ts:71](https://github.com/davinidae/umazing-musumengine/blob/23b121617aef679f48a8d2fac9ca051b023fc6da/src/api/services/uma-client.service.ts#L71)

###### Parameters

###### authKey

[`AuthKey`](../../lib/utils/protocol.util.md#authkey) | `undefined`

###### Returns

`void`

##### updateResVer()

> **updateResVer**(`resVer`): `void`

Defined in:
[api/services/uma-client.service.ts:63](https://github.com/davinidae/umazing-musumengine/blob/23b121617aef679f48a8d2fac9ca051b023fc6da/src/api/services/uma-client.service.ts#L63)

###### Parameters

###### resVer

`string`

###### Returns

`void`

##### updateSessionId()

> **updateSessionId**(`sessionId`): `void`

Defined in:
[api/services/uma-client.service.ts:51](https://github.com/davinidae/umazing-musumengine/blob/23b121617aef679f48a8d2fac9ca051b023fc6da/src/api/services/uma-client.service.ts#L51)

###### Parameters

###### sessionId

[`SessionId`](../../lib/utils/protocol.util.md#sessionid)

###### Returns

`void`

##### updateViewerId()

> **updateViewerId**(`viewerId`): `void`

Defined in:
[api/services/uma-client.service.ts:67](https://github.com/davinidae/umazing-musumengine/blob/23b121617aef679f48a8d2fac9ca051b023fc6da/src/api/services/uma-client.service.ts#L67)

###### Parameters

###### viewerId

`number`

###### Returns

`void`

## Functions

### createUmaClient()

> **createUmaClient**(`auth`, `udid`, `authKey`, `base`, `resVer`, `baseUrl`):
> [`UmaClient`](#umaclient)

Defined in:
[api/services/uma-client.service.ts:18](https://github.com/davinidae/umazing-musumengine/blob/23b121617aef679f48a8d2fac9ca051b023fc6da/src/api/services/uma-client.service.ts#L18)

#### Parameters

##### auth

[`AuthMode`](../models/uma-client.model.md#authmode)

##### udid

[`Udid`](../../lib/utils/protocol.util.md#udid)

##### authKey

[`AuthKey`](../../lib/utils/protocol.util.md#authkey) | `undefined`

##### base

[`RequestBase`](../models/uma-client.model.md#requestbase)

##### resVer

`string`

##### baseUrl

`string`

#### Returns

[`UmaClient`](#umaclient)
