# api/services/steps/load-index.step

## Classes

### LoadIndexStep

Defined in:
[api/services/steps/load-index.step.ts:5](https://github.com/davinidae/umazing-musumengine/blob/f24ccabc8ff8469c9450c4a9272c4cd9c6be182a/src/api/services/steps/load-index.step.ts#L5)

#### Extends

- [`CoreStep`](core.step.md#corestep)\<[`LoadIndex`](../../../umatypes/namespaces/Umatypes/namespaces/Request.md#loadindex),
  [`LoadIndex`](../../../umatypes/namespaces/Umatypes/namespaces/Response.md#loadindex)\>

#### Constructors

##### Constructor

> **new LoadIndexStep**(`stepData`, `doSleep`): [`LoadIndexStep`](#loadindexstep)

Defined in:
[api/services/steps/load-index.step.ts:11](https://github.com/davinidae/umazing-musumengine/blob/f24ccabc8ff8469c9450c4a9272c4cd9c6be182a/src/api/services/steps/load-index.step.ts#L11)

###### Parameters

###### stepData

[`StepData`](../../models/uma-client.model.md#stepdata)

###### doSleep

`boolean` = `true`

###### Returns

[`LoadIndexStep`](#loadindexstep)

###### Overrides

[`CoreStep`](core.step.md#corestep).[`constructor`](core.step.md#constructor)

#### Properties

##### doSleep

> `private` `readonly` **doSleep**: `boolean` = `true`

Defined in:
[api/services/steps/load-index.step.ts:13](https://github.com/davinidae/umazing-musumengine/blob/f24ccabc8ff8469c9450c4a9272c4cd9c6be182a/src/api/services/steps/load-index.step.ts#L13)

##### endpoint

> **endpoint**: `string` = `'load/index'`

Defined in:
[api/services/steps/load-index.step.ts:9](https://github.com/davinidae/umazing-musumengine/blob/f24ccabc8ff8469c9450c4a9272c4cd9c6be182a/src/api/services/steps/load-index.step.ts#L9)

###### Overrides

[`CoreStep`](core.step.md#corestep).[`endpoint`](core.step.md#endpoint)

##### stepData

> `protected` `readonly` **stepData**: [`StepData`](../../models/uma-client.model.md#stepdata)

Defined in:
[api/services/steps/load-index.step.ts:12](https://github.com/davinidae/umazing-musumengine/blob/f24ccabc8ff8469c9450c4a9272c4cd9c6be182a/src/api/services/steps/load-index.step.ts#L12)

###### Inherited from

[`CoreStep`](core.step.md#corestep).[`stepData`](core.step.md#stepdata)

#### Methods

##### afterExecute()

> `protected` **afterExecute**(): `Promise`\<`void`\>

Defined in:
[api/services/steps/load-index.step.ts:22](https://github.com/davinidae/umazing-musumengine/blob/f24ccabc8ff8469c9450c4a9272c4cd9c6be182a/src/api/services/steps/load-index.step.ts#L22)

###### Returns

`Promise`\<`void`\>

###### Overrides

[`CoreStep`](core.step.md#corestep).[`afterExecute`](core.step.md#afterexecute)

##### execute()

> **execute**():
> `Promise`\<[`RequestResult`](../../models/uma-client.model.md#requestresult)\<[`LoadIndex`](../../../umatypes/namespaces/Umatypes/namespaces/Response.md#loadindex)\>\>

Defined in:
[api/services/steps/core.step.ts:68](https://github.com/davinidae/umazing-musumengine/blob/f24ccabc8ff8469c9450c4a9272c4cd9c6be182a/src/api/services/steps/core.step.ts#L68)

###### Returns

`Promise`\<[`RequestResult`](../../models/uma-client.model.md#requestresult)\<[`LoadIndex`](../../../umatypes/namespaces/Umatypes/namespaces/Response.md#loadindex)\>\>

###### Inherited from

[`CoreStep`](core.step.md#corestep).[`execute`](core.step.md#execute)

##### getBody()

> `protected` **getBody**(): `object` &
> [`RequestBase`](../../models/uma-client.model.md#requestbase)

Defined in:
[api/services/steps/core.step.ts:26](https://github.com/davinidae/umazing-musumengine/blob/f24ccabc8ff8469c9450c4a9272c4cd9c6be182a/src/api/services/steps/core.step.ts#L26)

###### Returns

`object` & [`RequestBase`](../../models/uma-client.model.md#requestbase)

###### Inherited from

[`CoreStep`](core.step.md#corestep).[`getBody`](core.step.md#getbody)

##### getHeaders()

> `protected` **getHeaders**(): `object`

Defined in:
[api/services/steps/core.step.ts:13](https://github.com/davinidae/umazing-musumengine/blob/f24ccabc8ff8469c9450c4a9272c4cd9c6be182a/src/api/services/steps/core.step.ts#L13)

###### Returns

`object`

###### Accept

> **Accept**: `string` = `'*/*'`

###### APP-VER

> **APP-VER**: `string` = `'1.20.11'`

###### Content-Type

> **Content-Type**: `string` = `'application/x-msgpack'`

###### Device

> **Device**: `string`

###### RES-VER

> **RES-VER**: `string`

###### SID

> **SID**: `string`

###### ViewerID

> **ViewerID**: `string`

###### X-Unity-Version

> **X-Unity-Version**: `string` = `'2022.3.62f2'`

###### Inherited from

[`CoreStep`](core.step.md#corestep).[`getHeaders`](core.step.md#getheaders)

##### getRequestBody()

> **getRequestBody**(): `object`

Defined in:
[api/services/steps/load-index.step.ts:18](https://github.com/davinidae/umazing-musumengine/blob/f24ccabc8ff8469c9450c4a9272c4cd9c6be182a/src/api/services/steps/load-index.step.ts#L18)

###### Returns

`object`

###### Overrides

[`CoreStep`](core.step.md#corestep).[`getRequestBody`](core.step.md#getrequestbody)

##### request()

> `protected` **request**(): `Promise`\<\{ `body`: `object` &
> [`RequestBase`](../../models/uma-client.model.md#requestbase); `decoded`:
> [`UmaResponse`](../../models/uma-client.model.md#umaresponse)\<[`LoadIndex`](../../../umatypes/namespaces/Umatypes/namespaces/Response.md#loadindex)\>;
> `headers`: \{ `Accept`: `string`; `APP-VER`: `string`; `Content-Type`: `string`; `Device`:
> `string`; `RES-VER`: `string`; `SID`: `string`; `ViewerID`: `string`; `X-Unity-Version`: `string`;
> \}; \}\>

Defined in:
[api/services/steps/core.step.ts:33](https://github.com/davinidae/umazing-musumengine/blob/f24ccabc8ff8469c9450c4a9272c4cd9c6be182a/src/api/services/steps/core.step.ts#L33)

###### Returns

`Promise`\<\{ `body`: `object` & [`RequestBase`](../../models/uma-client.model.md#requestbase);
`decoded`:
[`UmaResponse`](../../models/uma-client.model.md#umaresponse)\<[`LoadIndex`](../../../umatypes/namespaces/Umatypes/namespaces/Response.md#loadindex)\>;
`headers`: \{ `Accept`: `string`; `APP-VER`: `string`; `Content-Type`: `string`; `Device`: `string`;
`RES-VER`: `string`; `SID`: `string`; `ViewerID`: `string`; `X-Unity-Version`: `string`; \}; \}\>

###### Inherited from

[`CoreStep`](core.step.md#corestep).[`request`](core.step.md#request)
