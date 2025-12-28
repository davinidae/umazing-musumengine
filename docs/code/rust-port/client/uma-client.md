# rust-port/client/uma-client

## Classes

### UmaClient

Defined in:
[rust-port/client/uma-client.ts:22](https://github.com/davinidae/umazing-musumengine/blob/5ab33fb89098eb733cdb60603508023e336b136a/src/rust-port/client/uma-client.ts#L22)

#### Constructors

##### Constructor

> **new UmaClient**(`header`, `base`): [`UmaClient`](#umaclient)

Defined in:
[rust-port/client/uma-client.ts:26](https://github.com/davinidae/umazing-musumengine/blob/5ab33fb89098eb733cdb60603508023e336b136a/src/rust-port/client/uma-client.ts#L26)

###### Parameters

###### header

[`UmaReqHeader`](../protocol/utils.md#umareqheader)

###### base

[`RequestBase`](model.md#requestbase)

###### Returns

[`UmaClient`](#umaclient)

#### Properties

##### base

> **base**: [`RequestBase`](model.md#requestbase)

Defined in:
[rust-port/client/uma-client.ts:28](https://github.com/davinidae/umazing-musumengine/blob/5ab33fb89098eb733cdb60603508023e336b136a/src/rust-port/client/uma-client.ts#L28)

##### baseUrl

> **baseUrl**: `string` = `'https://api.games.umamusume.com/umamusume/'`

Defined in:
[rust-port/client/uma-client.ts:24](https://github.com/davinidae/umazing-musumengine/blob/5ab33fb89098eb733cdb60603508023e336b136a/src/rust-port/client/uma-client.ts#L24)

##### header

> **header**: [`UmaReqHeader`](../protocol/utils.md#umareqheader)

Defined in:
[rust-port/client/uma-client.ts:27](https://github.com/davinidae/umazing-musumengine/blob/5ab33fb89098eb733cdb60603508023e336b136a/src/rust-port/client/uma-client.ts#L27)

##### resVer

> **resVer**: `string` = `'10002800'`

Defined in:
[rust-port/client/uma-client.ts:23](https://github.com/davinidae/umazing-musumengine/blob/5ab33fb89098eb733cdb60603508023e336b136a/src/rust-port/client/uma-client.ts#L23)

#### Methods

##### loadIndex()

> **loadIndex**(): `Promise`\<[`UmaResponse`](model.md#umaresponse)\<`unknown`\>\>

Defined in:
[rust-port/client/uma-client.ts:73](https://github.com/davinidae/umazing-musumengine/blob/5ab33fb89098eb733cdb60603508023e336b136a/src/rust-port/client/uma-client.ts#L73)

###### Returns

`Promise`\<[`UmaResponse`](model.md#umaresponse)\<`unknown`\>\>

##### regenSessionId()

> **regenSessionId**(): `void`

Defined in:
[rust-port/client/uma-client.ts:39](https://github.com/davinidae/umazing-musumengine/blob/5ab33fb89098eb733cdb60603508023e336b136a/src/rust-port/client/uma-client.ts#L39)

###### Returns

`void`

##### request()

> **request**\<`TReq`, `TRes`\>(`endpoint`, `req`):
> `Promise`\<[`UmaResponse`](model.md#umaresponse)\<`TRes`\>\>

Defined in:
[rust-port/client/uma-client.ts:77](https://github.com/davinidae/umazing-musumengine/blob/5ab33fb89098eb733cdb60603508023e336b136a/src/rust-port/client/uma-client.ts#L77)

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

`Promise`\<[`UmaResponse`](model.md#umaresponse)\<`TRes`\>\>

##### signup()

> **signup**():
> `Promise`\<[`UmaResponse`](model.md#umaresponse)\<[`SignupData`](model.md#signupdata)\>\>

Defined in:
[rust-port/client/uma-client.ts:43](https://github.com/davinidae/umazing-musumengine/blob/5ab33fb89098eb733cdb60603508023e336b136a/src/rust-port/client/uma-client.ts#L43)

###### Returns

`Promise`\<[`UmaResponse`](model.md#umaresponse)\<[`SignupData`](model.md#signupdata)\>\>

##### startSession()

> **startSession**(`attestationType`):
> `Promise`\<[`UmaResponse`](model.md#umaresponse)\<[`StartSessionResponse`](model.md#startsessionresponse)\>\>

Defined in:
[rust-port/client/uma-client.ts:62](https://github.com/davinidae/umazing-musumengine/blob/5ab33fb89098eb733cdb60603508023e336b136a/src/rust-port/client/uma-client.ts#L62)

###### Parameters

###### attestationType

`number`

###### Returns

`Promise`\<[`UmaResponse`](model.md#umaresponse)\<[`StartSessionResponse`](model.md#startsessionresponse)\>\>

##### create()

> `static` **create**(`udid`, `authKey`, `base`): [`UmaClient`](#umaclient)

Defined in:
[rust-port/client/uma-client.ts:33](https://github.com/davinidae/umazing-musumengine/blob/5ab33fb89098eb733cdb60603508023e336b136a/src/rust-port/client/uma-client.ts#L33)

###### Parameters

###### udid

[`Udid`](../protocol/utils.md#udid)

###### authKey

[`AuthKey`](../protocol/utils.md#authkey) | `undefined`

###### base

[`RequestBase`](model.md#requestbase)

###### Returns

[`UmaClient`](#umaclient)
