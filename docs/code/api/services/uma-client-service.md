# api/services/uma-client.service

## Classes

### UmaClient

Defined in:
[api/services/uma-client.service.ts:22](https://github.com/davinidae/umazing-musumengine/blob/de45d1d49605fea07b4cf710c5fa2284e2c9d18c/src/api/services/uma-client.service.ts#L22)

#### Constructors

##### Constructor

> **new UmaClient**(`header`, `base`): [`UmaClient`](#umaclient)

Defined in:
[api/services/uma-client.service.ts:26](https://github.com/davinidae/umazing-musumengine/blob/de45d1d49605fea07b4cf710c5fa2284e2c9d18c/src/api/services/uma-client.service.ts#L26)

###### Parameters

###### header

[`UmaReqHeader`](../utils/protocol.util.md#umareqheader)

###### base

[`RequestBase`](../models/uma-client.model.md#requestbase)

###### Returns

[`UmaClient`](#umaclient)

#### Properties

##### base

> **base**: [`RequestBase`](../models/uma-client.model.md#requestbase)

Defined in:
[api/services/uma-client.service.ts:28](https://github.com/davinidae/umazing-musumengine/blob/de45d1d49605fea07b4cf710c5fa2284e2c9d18c/src/api/services/uma-client.service.ts#L28)

##### baseUrl

> **baseUrl**: `string` = `'https://api.games.umamusume.com/umamusume/'`

Defined in:
[api/services/uma-client.service.ts:24](https://github.com/davinidae/umazing-musumengine/blob/de45d1d49605fea07b4cf710c5fa2284e2c9d18c/src/api/services/uma-client.service.ts#L24)

##### header

> **header**: [`UmaReqHeader`](../utils/protocol.util.md#umareqheader)

Defined in:
[api/services/uma-client.service.ts:27](https://github.com/davinidae/umazing-musumengine/blob/de45d1d49605fea07b4cf710c5fa2284e2c9d18c/src/api/services/uma-client.service.ts#L27)

##### resVer

> **resVer**: `string` = `'10002800'`

Defined in:
[api/services/uma-client.service.ts:23](https://github.com/davinidae/umazing-musumengine/blob/de45d1d49605fea07b4cf710c5fa2284e2c9d18c/src/api/services/uma-client.service.ts#L23)

#### Methods

##### loadIndex()

> **loadIndex**():
> `Promise`\<[`UmaResponse`](../models/uma-client.model.md#umaresponse)\<`unknown`\>\>

Defined in:
[api/services/uma-client.service.ts:73](https://github.com/davinidae/umazing-musumengine/blob/de45d1d49605fea07b4cf710c5fa2284e2c9d18c/src/api/services/uma-client.service.ts#L73)

###### Returns

`Promise`\<[`UmaResponse`](../models/uma-client.model.md#umaresponse)\<`unknown`\>\>

##### regenSessionId()

> **regenSessionId**(): `void`

Defined in:
[api/services/uma-client.service.ts:39](https://github.com/davinidae/umazing-musumengine/blob/de45d1d49605fea07b4cf710c5fa2284e2c9d18c/src/api/services/uma-client.service.ts#L39)

###### Returns

`void`

##### request()

> **request**\<`TReq`, `TRes`\>(`endpoint`, `req`):
> `Promise`\<[`UmaResponse`](../models/uma-client.model.md#umaresponse)\<`TRes`\>\>

Defined in:
[api/services/uma-client.service.ts:77](https://github.com/davinidae/umazing-musumengine/blob/de45d1d49605fea07b4cf710c5fa2284e2c9d18c/src/api/services/uma-client.service.ts#L77)

###### Type Parameters

###### TReq

`TReq` _extends_ `object`

###### TRes

`TRes`

###### Parameters

###### endpoint

`string`

###### req

`TReq`

###### Returns

`Promise`\<[`UmaResponse`](../models/uma-client.model.md#umaresponse)\<`TRes`\>\>

##### signup()

> **signup**():
> `Promise`\<[`UmaResponse`](../models/uma-client.model.md#umaresponse)\<[`SignupData`](../models/uma-client.model.md#signupdata)\>\>

Defined in:
[api/services/uma-client.service.ts:43](https://github.com/davinidae/umazing-musumengine/blob/de45d1d49605fea07b4cf710c5fa2284e2c9d18c/src/api/services/uma-client.service.ts#L43)

###### Returns

`Promise`\<[`UmaResponse`](../models/uma-client.model.md#umaresponse)\<[`SignupData`](../models/uma-client.model.md#signupdata)\>\>

##### startSession()

> **startSession**(`attestationType`):
> `Promise`\<[`UmaResponse`](../models/uma-client.model.md#umaresponse)\<[`StartSessionResponse`](../models/uma-client.model.md#startsessionresponse)\>\>

Defined in:
[api/services/uma-client.service.ts:62](https://github.com/davinidae/umazing-musumengine/blob/de45d1d49605fea07b4cf710c5fa2284e2c9d18c/src/api/services/uma-client.service.ts#L62)

###### Parameters

###### attestationType

`number`

###### Returns

`Promise`\<[`UmaResponse`](../models/uma-client.model.md#umaresponse)\<[`StartSessionResponse`](../models/uma-client.model.md#startsessionresponse)\>\>

##### create()

> `static` **create**(`udid`, `authKey`, `base`): [`UmaClient`](#umaclient)

Defined in:
[api/services/uma-client.service.ts:33](https://github.com/davinidae/umazing-musumengine/blob/de45d1d49605fea07b4cf710c5fa2284e2c9d18c/src/api/services/uma-client.service.ts#L33)

###### Parameters

###### udid

[`Udid`](../utils/protocol.util.md#udid)

###### authKey

[`AuthKey`](../utils/protocol.util.md#authkey) | `undefined`

###### base

[`RequestBase`](../models/uma-client.model.md#requestbase)

###### Returns

[`UmaClient`](#umaclient)
