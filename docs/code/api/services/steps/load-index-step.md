# api/services/steps/load-index.step

## Classes

### LoadIndexStep

Defined in:
[api/services/steps/load-index.step.ts:19](https://github.com/davinidae/umazing-musumengine/blob/23b121617aef679f48a8d2fac9ca051b023fc6da/src/api/services/steps/load-index.step.ts#L19)

`load/index` step.

Some upstream flows behave more reliably with a small delay after the call, so this step optionally
sleeps in `afterExecute()`.

#### Extends

- [`CoreStep`](core.step.md#corestep)\<[`LoadIndex`](../../../umatypes/namespaces/Umatypes/namespaces/Request.md#loadindex),
  [`LoadIndex`](../../../umatypes/namespaces/Umatypes/namespaces/Response.md#loadindex)\>

#### Constructors

##### Constructor

> **new LoadIndexStep**(`stepData`, `doSleep`): [`LoadIndexStep`](#loadindexstep)

Defined in:
[api/services/steps/load-index.step.ts:25](https://github.com/davinidae/umazing-musumengine/blob/23b121617aef679f48a8d2fac9ca051b023fc6da/src/api/services/steps/load-index.step.ts#L25)

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
[api/services/steps/load-index.step.ts:27](https://github.com/davinidae/umazing-musumengine/blob/23b121617aef679f48a8d2fac9ca051b023fc6da/src/api/services/steps/load-index.step.ts#L27)

##### endpoint

> **endpoint**: `string` = `'load/index'`

Defined in:
[api/services/steps/load-index.step.ts:23](https://github.com/davinidae/umazing-musumengine/blob/23b121617aef679f48a8d2fac9ca051b023fc6da/src/api/services/steps/load-index.step.ts#L23)

###### Overrides

[`CoreStep`](core.step.md#corestep).[`endpoint`](core.step.md#endpoint)

##### stepData

> `protected` `readonly` **stepData**: [`StepData`](../../models/uma-client.model.md#stepdata)

Defined in:
[api/services/steps/load-index.step.ts:26](https://github.com/davinidae/umazing-musumengine/blob/23b121617aef679f48a8d2fac9ca051b023fc6da/src/api/services/steps/load-index.step.ts#L26)

###### Inherited from

[`CoreStep`](core.step.md#corestep).[`stepData`](core.step.md#stepdata)

#### Methods

##### afterExecute()

> `protected` **afterExecute**(): `Promise`\<`void`\>

Defined in:
[api/services/steps/load-index.step.ts:36](https://github.com/davinidae/umazing-musumengine/blob/23b121617aef679f48a8d2fac9ca051b023fc6da/src/api/services/steps/load-index.step.ts#L36)

Optional hook executed after `request()` and before returning from `execute()`.

###### Returns

`Promise`\<`void`\>

###### Overrides

[`CoreStep`](core.step.md#corestep).[`afterExecute`](core.step.md#afterexecute)

##### execute()

> **execute**():
> `Promise`\<[`RequestResult`](../../models/uma-client.model.md#requestresult)\<[`LoadIndex`](../../../umatypes/namespaces/Umatypes/namespaces/Response.md#loadindex)\>\>

Defined in:
[api/services/steps/core.step.ts:110](https://github.com/davinidae/umazing-musumengine/blob/23b121617aef679f48a8d2fac9ca051b023fc6da/src/api/services/steps/core.step.ts#L110)

Execute the step end-to-end.

###### Returns

`Promise`\<[`RequestResult`](../../models/uma-client.model.md#requestresult)\<[`LoadIndex`](../../../umatypes/namespaces/Umatypes/namespaces/Response.md#loadindex)\>\>

###### Inherited from

[`CoreStep`](core.step.md#corestep).[`execute`](core.step.md#execute)

##### getBody()

> `protected` **getBody**(): `object` &
> [`RequestBase`](../../models/uma-client.model.md#requestbase)

Defined in:
[api/services/steps/core.step.ts:65](https://github.com/davinidae/umazing-musumengine/blob/23b121617aef679f48a8d2fac9ca051b023fc6da/src/api/services/steps/core.step.ts#L65)

Combine the step-specific body with common request fields from StepData.

###### Returns

`object` & [`RequestBase`](../../models/uma-client.model.md#requestbase)

###### Inherited from

[`CoreStep`](core.step.md#corestep).[`getBody`](core.step.md#getbody)

##### getHeaders()

> `protected` **getHeaders**(): `object`

Defined in:
[api/services/steps/core.step.ts:51](https://github.com/davinidae/umazing-musumengine/blob/23b121617aef679f48a8d2fac9ca051b023fc6da/src/api/services/steps/core.step.ts#L51)

Build upstream headers expected by the game API.

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
[api/services/steps/load-index.step.ts:32](https://github.com/davinidae/umazing-musumengine/blob/23b121617aef679f48a8d2fac9ca051b023fc6da/src/api/services/steps/load-index.step.ts#L32)

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
[api/services/steps/core.step.ts:73](https://github.com/davinidae/umazing-musumengine/blob/23b121617aef679f48a8d2fac9ca051b023fc6da/src/api/services/steps/core.step.ts#L73)

Execute the upstream HTTP request and return decoded response + diagnostics.

###### Returns

`Promise`\<\{ `body`: `object` & [`RequestBase`](../../models/uma-client.model.md#requestbase);
`decoded`:
[`UmaResponse`](../../models/uma-client.model.md#umaresponse)\<[`LoadIndex`](../../../umatypes/namespaces/Umatypes/namespaces/Response.md#loadindex)\>;
`headers`: \{ `Accept`: `string`; `APP-VER`: `string`; `Content-Type`: `string`; `Device`: `string`;
`RES-VER`: `string`; `SID`: `string`; `ViewerID`: `string`; `X-Unity-Version`: `string`; \}; \}\>

###### Inherited from

[`CoreStep`](core.step.md#corestep).[`request`](core.step.md#request)
