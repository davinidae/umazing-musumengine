# api/services/steps/load-index.step

## Classes

### LoadIndexStep

Defined in:
[api/services/steps/load-index.step.ts:19](https://github.com/davinidae/umazing-musumengine/blob/214adb783384a11b15b86407e00e671feb1ec440/src/api/services/steps/load-index.step.ts#L19)

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
[api/services/steps/load-index.step.ts:25](https://github.com/davinidae/umazing-musumengine/blob/214adb783384a11b15b86407e00e671feb1ec440/src/api/services/steps/load-index.step.ts#L25)

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
[api/services/steps/load-index.step.ts:27](https://github.com/davinidae/umazing-musumengine/blob/214adb783384a11b15b86407e00e671feb1ec440/src/api/services/steps/load-index.step.ts#L27)

##### endpoint

> **endpoint**: `string` = `'load/index'`

Defined in:
[api/services/steps/load-index.step.ts:23](https://github.com/davinidae/umazing-musumengine/blob/214adb783384a11b15b86407e00e671feb1ec440/src/api/services/steps/load-index.step.ts#L23)

###### Overrides

[`CoreStep`](core.step.md#corestep).[`endpoint`](core.step.md#endpoint)

##### stepData

> `protected` `readonly` **stepData**: [`StepData`](../../models/uma-client.model.md#stepdata)

Defined in:
[api/services/steps/load-index.step.ts:26](https://github.com/davinidae/umazing-musumengine/blob/214adb783384a11b15b86407e00e671feb1ec440/src/api/services/steps/load-index.step.ts#L26)

###### Inherited from

[`CoreStep`](core.step.md#corestep).[`stepData`](core.step.md#stepdata)

#### Methods

##### afterExecute()

> `protected` **afterExecute**(): `Promise`\<`void`\>

Defined in:
[api/services/steps/load-index.step.ts:36](https://github.com/davinidae/umazing-musumengine/blob/214adb783384a11b15b86407e00e671feb1ec440/src/api/services/steps/load-index.step.ts#L36)

Optional hook executed after `request()` and before returning from `execute()`.

###### Returns

`Promise`\<`void`\>

###### Overrides

[`CoreStep`](core.step.md#corestep).[`afterExecute`](core.step.md#afterexecute)

##### execute()

> **execute**():
> `Promise`\<[`RequestResult`](../../models/uma-client.model.md#requestresult)\<[`LoadIndex`](../../../umatypes/namespaces/Umatypes/namespaces/Response.md#loadindex)\>\>

Defined in:
[api/services/steps/core.step.ts:139](https://github.com/davinidae/umazing-musumengine/blob/214adb783384a11b15b86407e00e671feb1ec440/src/api/services/steps/core.step.ts#L139)

Execute the step end-to-end.

###### Returns

`Promise`\<[`RequestResult`](../../models/uma-client.model.md#requestresult)\<[`LoadIndex`](../../../umatypes/namespaces/Umatypes/namespaces/Response.md#loadindex)\>\>

###### Inherited from

[`CoreStep`](core.step.md#corestep).[`execute`](core.step.md#execute)

##### getBody()

> `protected` **getBody**(): `Record`\<`string`, `unknown`\>

Defined in:
[api/services/steps/core.step.ts:66](https://github.com/davinidae/umazing-musumengine/blob/214adb783384a11b15b86407e00e671feb1ec440/src/api/services/steps/core.step.ts#L66)

Combine the step-specific body with common request fields from StepData.

###### Returns

`Record`\<`string`, `unknown`\>

###### Inherited from

[`CoreStep`](core.step.md#corestep).[`getBody`](core.step.md#getbody)

##### getHeaders()

> `protected` **getHeaders**(): `Record`\<`string`, `string`\>

Defined in:
[api/services/steps/core.step.ts:52](https://github.com/davinidae/umazing-musumengine/blob/214adb783384a11b15b86407e00e671feb1ec440/src/api/services/steps/core.step.ts#L52)

Build upstream headers expected by the game API.

###### Returns

`Record`\<`string`, `string`\>

###### Inherited from

[`CoreStep`](core.step.md#corestep).[`getHeaders`](core.step.md#getheaders)

##### getRequestBody()

> **getRequestBody**(): `object`

Defined in:
[api/services/steps/load-index.step.ts:32](https://github.com/davinidae/umazing-musumengine/blob/214adb783384a11b15b86407e00e671feb1ec440/src/api/services/steps/load-index.step.ts#L32)

###### Returns

`object`

###### Overrides

[`CoreStep`](core.step.md#corestep).[`getRequestBody`](core.step.md#getrequestbody)

##### request()

> `protected` **request**():
> `Promise`\<`Omit`\<[`RequestResult`](../../models/uma-client.model.md#requestresult)\<[`LoadIndex`](../../../umatypes/namespaces/Umatypes/namespaces/Response.md#loadindex)\>,
> `"endpoint"`\>\>

Defined in:
[api/services/steps/core.step.ts:117](https://github.com/davinidae/umazing-musumengine/blob/214adb783384a11b15b86407e00e671feb1ec440/src/api/services/steps/core.step.ts#L117)

Execute the upstream HTTP request and return decoded response + diagnostics.

###### Returns

`Promise`\<`Omit`\<[`RequestResult`](../../models/uma-client.model.md#requestresult)\<[`LoadIndex`](../../../umatypes/namespaces/Umatypes/namespaces/Response.md#loadindex)\>,
`"endpoint"`\>\>

###### Inherited from

[`CoreStep`](core.step.md#corestep).[`request`](core.step.md#request)
