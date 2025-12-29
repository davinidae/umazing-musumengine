# api/services/uma-client.service

## Classes

### UmaClient

Defined in:
[api/services/uma-client.service.ts:38](https://github.com/davinidae/umazing-musumengine/blob/8c2a93a99924070f3bed30bfbb56b7b18480c6b1/src/api/services/uma-client.service.ts#L38)

#### Constructors

##### Constructor

> **new UmaClient**(`cfg`, `auth`, `umaclientData`): [`UmaClient`](#umaclient)

Defined in:
[api/services/uma-client.service.ts:39](https://github.com/davinidae/umazing-musumengine/blob/8c2a93a99924070f3bed30bfbb56b7b18480c6b1/src/api/services/uma-client.service.ts#L39)

###### Parameters

###### cfg

[`ClientConfig`](../models/uma-client.model.md#clientconfig)

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
[api/services/uma-client.service.ts:41](https://github.com/davinidae/umazing-musumengine/blob/8c2a93a99924070f3bed30bfbb56b7b18480c6b1/src/api/services/uma-client.service.ts#L41)

##### cfg

> `private` `readonly` **cfg**: [`ClientConfig`](../models/uma-client.model.md#clientconfig)

Defined in:
[api/services/uma-client.service.ts:40](https://github.com/davinidae/umazing-musumengine/blob/8c2a93a99924070f3bed30bfbb56b7b18480c6b1/src/api/services/uma-client.service.ts#L40)

##### umaclientData

> `private` `readonly` **umaclientData**:
> [`UmaClientData`](../models/uma-client.model.md#umaclientdata)

Defined in:
[api/services/uma-client.service.ts:42](https://github.com/davinidae/umazing-musumengine/blob/8c2a93a99924070f3bed30bfbb56b7b18480c6b1/src/api/services/uma-client.service.ts#L42)

#### Methods

##### getStepData()

> `private` **getStepData**(`prevResults`): [`StepData`](../models/uma-client.model.md#stepdata)

Defined in:
[api/services/uma-client.service.ts:58](https://github.com/davinidae/umazing-musumengine/blob/8c2a93a99924070f3bed30bfbb56b7b18480c6b1/src/api/services/uma-client.service.ts#L58)

###### Parameters

###### prevResults

[`RequestResult`](../models/uma-client.model.md#requestresult)[] = `[]`

###### Returns

[`StepData`](../models/uma-client.model.md#stepdata)

##### logIn()

> **logIn**(): `Promise`\<[`RequestResult`](../models/uma-client.model.md#requestresult)[]\>

Defined in:
[api/services/uma-client.service.ts:107](https://github.com/davinidae/umazing-musumengine/blob/8c2a93a99924070f3bed30bfbb56b7b18480c6b1/src/api/services/uma-client.service.ts#L107)

###### Returns

`Promise`\<[`RequestResult`](../models/uma-client.model.md#requestresult)[]\>

##### regenSessionId()

> **regenSessionId**(): `void`

Defined in:
[api/services/uma-client.service.ts:47](https://github.com/davinidae/umazing-musumengine/blob/8c2a93a99924070f3bed30bfbb56b7b18480c6b1/src/api/services/uma-client.service.ts#L47)

###### Returns

`void`

##### signup()

> `private` **signup**():
> `Promise`\<[`RequestResult`](../models/uma-client.model.md#requestresult)[]\>

Defined in:
[api/services/uma-client.service.ts:78](https://github.com/davinidae/umazing-musumengine/blob/8c2a93a99924070f3bed30bfbb56b7b18480c6b1/src/api/services/uma-client.service.ts#L78)

###### Returns

`Promise`\<[`RequestResult`](../models/uma-client.model.md#requestresult)[]\>

##### tutorial()

> `private` **tutorial**(`results`):
> `Promise`\<[`RequestResult`](../models/uma-client.model.md#requestresult)[]\>

Defined in:
[api/services/uma-client.service.ts:89](https://github.com/davinidae/umazing-musumengine/blob/8c2a93a99924070f3bed30bfbb56b7b18480c6b1/src/api/services/uma-client.service.ts#L89)

###### Parameters

###### results

[`RequestResult`](../models/uma-client.model.md#requestresult)[]

###### Returns

`Promise`\<[`RequestResult`](../models/uma-client.model.md#requestresult)[]\>

##### updateAuthKey()

> **updateAuthKey**(`authKey`): `void`

Defined in:
[api/services/uma-client.service.ts:74](https://github.com/davinidae/umazing-musumengine/blob/8c2a93a99924070f3bed30bfbb56b7b18480c6b1/src/api/services/uma-client.service.ts#L74)

###### Parameters

###### authKey

[`AuthKey`](../../lib/api-protocol/protocol.util.md#authkey) | `undefined`

###### Returns

`void`

##### updateResVer()

> **updateResVer**(`resVer`): `void`

Defined in:
[api/services/uma-client.service.ts:66](https://github.com/davinidae/umazing-musumengine/blob/8c2a93a99924070f3bed30bfbb56b7b18480c6b1/src/api/services/uma-client.service.ts#L66)

###### Parameters

###### resVer

`string`

###### Returns

`void`

##### updateSessionId()

> **updateSessionId**(`sessionId`): `void`

Defined in:
[api/services/uma-client.service.ts:54](https://github.com/davinidae/umazing-musumengine/blob/8c2a93a99924070f3bed30bfbb56b7b18480c6b1/src/api/services/uma-client.service.ts#L54)

###### Parameters

###### sessionId

[`SessionId`](../../lib/api-protocol/protocol.util.md#sessionid)

###### Returns

`void`

##### updateViewerId()

> **updateViewerId**(`viewerId`): `void`

Defined in:
[api/services/uma-client.service.ts:70](https://github.com/davinidae/umazing-musumengine/blob/8c2a93a99924070f3bed30bfbb56b7b18480c6b1/src/api/services/uma-client.service.ts#L70)

###### Parameters

###### viewerId

`number`

###### Returns

`void`

## Functions

### createUmaClient()

> **createUmaClient**(`cfg`, `auth`, `udid`, `authKey`, `base`, `resVer`, `baseUrl`):
> [`UmaClient`](#umaclient)

Defined in:
[api/services/uma-client.service.ts:19](https://github.com/davinidae/umazing-musumengine/blob/8c2a93a99924070f3bed30bfbb56b7b18480c6b1/src/api/services/uma-client.service.ts#L19)

#### Parameters

##### cfg

[`ClientConfig`](../models/uma-client.model.md#clientconfig)

##### auth

[`AuthMode`](../models/uma-client.model.md#authmode)

##### udid

[`Udid`](../../lib/api-protocol/protocol.util.md#udid)

##### authKey

[`AuthKey`](../../lib/api-protocol/protocol.util.md#authkey) | `undefined`

##### base

[`RequestBase`](../models/uma-client.model.md#requestbase)

##### resVer

`string`

##### baseUrl

`string`

#### Returns

[`UmaClient`](#umaclient)
