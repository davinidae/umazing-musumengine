# api/services/uma-client.service

## Classes

### UmaClient

Defined in:
[api/services/uma-client.service.ts:30](https://github.com/davinidae/umazing-musumengine/blob/80d3c8cc1b6a4bb7394b4c2aa6642f2fb6343d3b/src/api/services/uma-client.service.ts#L30)

#### Constructors

##### Constructor

> **new UmaClient**(`auth`, `umaclientData`): [`UmaClient`](#umaclient)

Defined in:
[api/services/uma-client.service.ts:31](https://github.com/davinidae/umazing-musumengine/blob/80d3c8cc1b6a4bb7394b4c2aa6642f2fb6343d3b/src/api/services/uma-client.service.ts#L31)

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
[api/services/uma-client.service.ts:32](https://github.com/davinidae/umazing-musumengine/blob/80d3c8cc1b6a4bb7394b4c2aa6642f2fb6343d3b/src/api/services/uma-client.service.ts#L32)

##### umaclientData

> `private` `readonly` **umaclientData**:
> [`UmaClientData`](../models/uma-client.model.md#umaclientdata)

Defined in:
[api/services/uma-client.service.ts:33](https://github.com/davinidae/umazing-musumengine/blob/80d3c8cc1b6a4bb7394b4c2aa6642f2fb6343d3b/src/api/services/uma-client.service.ts#L33)

#### Methods

##### getAttestationType()

> `private` **getAttestationType**(): `number`

Defined in:
[api/services/uma-client.service.ts:73](https://github.com/davinidae/umazing-musumengine/blob/80d3c8cc1b6a4bb7394b4c2aa6642f2fb6343d3b/src/api/services/uma-client.service.ts#L73)

###### Returns

`number`

##### getStepData()

> `private` **getStepData**(`prevResults`): [`StepData`](../models/uma-client.model.md#stepdata)

Defined in:
[api/services/uma-client.service.ts:49](https://github.com/davinidae/umazing-musumengine/blob/80d3c8cc1b6a4bb7394b4c2aa6642f2fb6343d3b/src/api/services/uma-client.service.ts#L49)

###### Parameters

###### prevResults

[`RequestResult`](../models/uma-client.model.md#requestresult)[] = `[]`

###### Returns

[`StepData`](../models/uma-client.model.md#stepdata)

##### hasActiveSession()

> `private` **hasActiveSession**(): `boolean`

Defined in:
[api/services/uma-client.service.ts:69](https://github.com/davinidae/umazing-musumengine/blob/80d3c8cc1b6a4bb7394b4c2aa6642f2fb6343d3b/src/api/services/uma-client.service.ts#L69)

###### Returns

`boolean`

##### logIn()

> **logIn**(): `Promise`\<[`RequestResult`](../models/uma-client.model.md#requestresult)[]\>

Defined in:
[api/services/uma-client.service.ts:120](https://github.com/davinidae/umazing-musumengine/blob/80d3c8cc1b6a4bb7394b4c2aa6642f2fb6343d3b/src/api/services/uma-client.service.ts#L120)

###### Returns

`Promise`\<[`RequestResult`](../models/uma-client.model.md#requestresult)[]\>

##### regenSessionId()

> **regenSessionId**(): `void`

Defined in:
[api/services/uma-client.service.ts:38](https://github.com/davinidae/umazing-musumengine/blob/80d3c8cc1b6a4bb7394b4c2aa6642f2fb6343d3b/src/api/services/uma-client.service.ts#L38)

###### Returns

`void`

##### runPostSignupFlow()

> `private` **runPostSignupFlow**(`signupResults`, `attestationType`):
> `Promise`\<[`RequestResult`](../models/uma-client.model.md#requestresult)[]\>

Defined in:
[api/services/uma-client.service.ts:88](https://github.com/davinidae/umazing-musumengine/blob/80d3c8cc1b6a4bb7394b4c2aa6642f2fb6343d3b/src/api/services/uma-client.service.ts#L88)

###### Parameters

###### signupResults

[`RequestResult`](../models/uma-client.model.md#requestresult)[]

###### attestationType

`number`

###### Returns

`Promise`\<[`RequestResult`](../models/uma-client.model.md#requestresult)[]\>

##### signup()

> `private` **signup**():
> `Promise`\<[`RequestResult`](../models/uma-client.model.md#requestresult)[]\>

Defined in:
[api/services/uma-client.service.ts:77](https://github.com/davinidae/umazing-musumengine/blob/80d3c8cc1b6a4bb7394b4c2aa6642f2fb6343d3b/src/api/services/uma-client.service.ts#L77)

###### Returns

`Promise`\<[`RequestResult`](../models/uma-client.model.md#requestresult)[]\>

##### tutorial()

> `private` **tutorial**(`results`):
> `Promise`\<[`RequestResult`](../models/uma-client.model.md#requestresult)[]\>

Defined in:
[api/services/uma-client.service.ts:102](https://github.com/davinidae/umazing-musumengine/blob/80d3c8cc1b6a4bb7394b4c2aa6642f2fb6343d3b/src/api/services/uma-client.service.ts#L102)

###### Parameters

###### results

[`RequestResult`](../models/uma-client.model.md#requestresult)[]

###### Returns

`Promise`\<[`RequestResult`](../models/uma-client.model.md#requestresult)[]\>

##### updateAuthKey()

> **updateAuthKey**(`authKey`): `void`

Defined in:
[api/services/uma-client.service.ts:65](https://github.com/davinidae/umazing-musumengine/blob/80d3c8cc1b6a4bb7394b4c2aa6642f2fb6343d3b/src/api/services/uma-client.service.ts#L65)

###### Parameters

###### authKey

[`AuthKey`](../../lib/utils/protocol.util.md#authkey) | `undefined`

###### Returns

`void`

##### updateResVer()

> **updateResVer**(`resVer`): `void`

Defined in:
[api/services/uma-client.service.ts:57](https://github.com/davinidae/umazing-musumengine/blob/80d3c8cc1b6a4bb7394b4c2aa6642f2fb6343d3b/src/api/services/uma-client.service.ts#L57)

###### Parameters

###### resVer

`string`

###### Returns

`void`

##### updateSessionId()

> **updateSessionId**(`sessionId`): `void`

Defined in:
[api/services/uma-client.service.ts:45](https://github.com/davinidae/umazing-musumengine/blob/80d3c8cc1b6a4bb7394b4c2aa6642f2fb6343d3b/src/api/services/uma-client.service.ts#L45)

###### Parameters

###### sessionId

[`SessionId`](../../lib/utils/protocol.util.md#sessionid)

###### Returns

`void`

##### updateViewerId()

> **updateViewerId**(`viewerId`): `void`

Defined in:
[api/services/uma-client.service.ts:61](https://github.com/davinidae/umazing-musumengine/blob/80d3c8cc1b6a4bb7394b4c2aa6642f2fb6343d3b/src/api/services/uma-client.service.ts#L61)

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
[api/services/uma-client.service.ts:12](https://github.com/davinidae/umazing-musumengine/blob/80d3c8cc1b6a4bb7394b4c2aa6642f2fb6343d3b/src/api/services/uma-client.service.ts#L12)

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
