# api/services/uma-client.service

## Classes

### UmaClient

Defined in:
[api/services/uma-client.service.ts:22](https://github.com/davinidae/umazing-musumengine/blob/3287c40709f1f448cf5e0c1e301ea35ff5829e19/src/api/services/uma-client.service.ts#L22)

#### Constructors

##### Constructor

> **new UmaClient**(`header`, `base`, `resVer`, `baseUrl`): [`UmaClient`](#umaclient)

Defined in:
[api/services/uma-client.service.ts:23](https://github.com/davinidae/umazing-musumengine/blob/3287c40709f1f448cf5e0c1e301ea35ff5829e19/src/api/services/uma-client.service.ts#L23)

###### Parameters

###### header

[`UmaReqHeader`](../utils/protocol.util.md#umareqheader)

###### base

[`RequestBase`](../models/uma-client.model.md#requestbase)

###### resVer

`string`

###### baseUrl

`string`

###### Returns

[`UmaClient`](#umaclient)

#### Properties

##### base

> **base**: [`RequestBase`](../models/uma-client.model.md#requestbase)

Defined in:
[api/services/uma-client.service.ts:25](https://github.com/davinidae/umazing-musumengine/blob/3287c40709f1f448cf5e0c1e301ea35ff5829e19/src/api/services/uma-client.service.ts#L25)

##### baseUrl

> **baseUrl**: `string`

Defined in:
[api/services/uma-client.service.ts:27](https://github.com/davinidae/umazing-musumengine/blob/3287c40709f1f448cf5e0c1e301ea35ff5829e19/src/api/services/uma-client.service.ts#L27)

##### header

> **header**: [`UmaReqHeader`](../utils/protocol.util.md#umareqheader)

Defined in:
[api/services/uma-client.service.ts:24](https://github.com/davinidae/umazing-musumengine/blob/3287c40709f1f448cf5e0c1e301ea35ff5829e19/src/api/services/uma-client.service.ts#L24)

##### resVer

> **resVer**: `string`

Defined in:
[api/services/uma-client.service.ts:26](https://github.com/davinidae/umazing-musumengine/blob/3287c40709f1f448cf5e0c1e301ea35ff5829e19/src/api/services/uma-client.service.ts#L26)

#### Methods

##### getStepData()

> **getStepData**(): `object`

Defined in:
[api/services/uma-client.service.ts:40](https://github.com/davinidae/umazing-musumengine/blob/3287c40709f1f448cf5e0c1e301ea35ff5829e19/src/api/services/uma-client.service.ts#L40)

###### Returns

`object`

###### base

> **base**: [`RequestBase`](../models/uma-client.model.md#requestbase)

###### baseUrl

> **baseUrl**: `string`

###### header

> **header**: [`UmaReqHeader`](../utils/protocol.util.md#umareqheader)

###### resVer

> **resVer**: `string`

###### updateSessionId()

> **updateSessionId**: (`sessionId`) => `void`

###### Parameters

###### sessionId

[`SessionId`](../utils/protocol.util.md#sessionid)

###### Returns

`void`

##### logIn()

> **logIn**(`attestationType`):
> `Promise`\<[`RequestResult`](../models/uma-client.model.md#requestresult)[]\>

Defined in:
[api/services/uma-client.service.ts:65](https://github.com/davinidae/umazing-musumengine/blob/3287c40709f1f448cf5e0c1e301ea35ff5829e19/src/api/services/uma-client.service.ts#L65)

###### Parameters

###### attestationType

[`AttestationType`](../models/umamusume-api/enums.model.md#attestationtype)

###### Returns

`Promise`\<[`RequestResult`](../models/uma-client.model.md#requestresult)[]\>

##### regenSessionId()

> **regenSessionId**(): `void`

Defined in:
[api/services/uma-client.service.ts:32](https://github.com/davinidae/umazing-musumengine/blob/3287c40709f1f448cf5e0c1e301ea35ff5829e19/src/api/services/uma-client.service.ts#L32)

###### Returns

`void`

##### signup()

> **signup**(): `Promise`\<[`RequestResult`](../models/uma-client.model.md#requestresult)[]\>

Defined in:
[api/services/uma-client.service.ts:52](https://github.com/davinidae/umazing-musumengine/blob/3287c40709f1f448cf5e0c1e301ea35ff5829e19/src/api/services/uma-client.service.ts#L52)

###### Returns

`Promise`\<[`RequestResult`](../models/uma-client.model.md#requestresult)[]\>

##### updateSessionId()

> **updateSessionId**(`sessionId`): `void`

Defined in:
[api/services/uma-client.service.ts:36](https://github.com/davinidae/umazing-musumengine/blob/3287c40709f1f448cf5e0c1e301ea35ff5829e19/src/api/services/uma-client.service.ts#L36)

###### Parameters

###### sessionId

[`SessionId`](../utils/protocol.util.md#sessionid)

###### Returns

`void`

## Functions

### createUmaClient()

> **createUmaClient**(`udid`, `authKey`, `base`, `resVer`, `baseUrl`): [`UmaClient`](#umaclient)

Defined in:
[api/services/uma-client.service.ts:11](https://github.com/davinidae/umazing-musumengine/blob/3287c40709f1f448cf5e0c1e301ea35ff5829e19/src/api/services/uma-client.service.ts#L11)

#### Parameters

##### udid

[`Udid`](../utils/protocol.util.md#udid)

##### authKey

[`AuthKey`](../utils/protocol.util.md#authkey) | `undefined`

##### base

[`RequestBase`](../models/uma-client.model.md#requestbase)

##### resVer

`string`

##### baseUrl

`string`

#### Returns

[`UmaClient`](#umaclient)
