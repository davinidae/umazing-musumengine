# api/services/steps/user-change_name.step

## Classes

### UserChangeNameStep

Defined in:
[api/services/steps/user-change_name.step.ts:3](https://github.com/davinidae/umazing-musumengine/blob/214adb783384a11b15b86407e00e671feb1ec440/src/api/services/steps/user-change_name.step.ts#L3)

Base class for a single API “step”.

A step:

- builds a request payload
- encodes it to the Uma wire format (Base64)
- posts it to the upstream endpoint
- decrypts + decodes the response
- optionally updates session state

#### Extends

- [`CoreStep`](core.step.md#corestep)\<[`UserChangeName`](../../../umatypes/namespaces/Umatypes/namespaces/Request.md#userchangename),
  [`UserChangeName`](../../../umatypes/namespaces/Umatypes/namespaces/Response.md#userchangename)\>

#### Constructors

##### Constructor

> **new UserChangeNameStep**(`stepData`): [`UserChangeNameStep`](#userchangenamestep)

Defined in:
[api/services/steps/core.step.ts:47](https://github.com/davinidae/umazing-musumengine/blob/214adb783384a11b15b86407e00e671feb1ec440/src/api/services/steps/core.step.ts#L47)

###### Parameters

###### stepData

[`StepData`](../../models/uma-client.model.md#stepdata)

###### Returns

[`UserChangeNameStep`](#userchangenamestep)

###### Inherited from

[`CoreStep`](core.step.md#corestep).[`constructor`](core.step.md#constructor)

#### Properties

##### endpoint

> **endpoint**: `string` = `'user/change_name'`

Defined in:
[api/services/steps/user-change_name.step.ts:7](https://github.com/davinidae/umazing-musumengine/blob/214adb783384a11b15b86407e00e671feb1ec440/src/api/services/steps/user-change_name.step.ts#L7)

###### Overrides

[`CoreStep`](core.step.md#corestep).[`endpoint`](core.step.md#endpoint)

##### stepData

> `protected` `readonly` **stepData**: [`StepData`](../../models/uma-client.model.md#stepdata)

Defined in:
[api/services/steps/core.step.ts:47](https://github.com/davinidae/umazing-musumengine/blob/214adb783384a11b15b86407e00e671feb1ec440/src/api/services/steps/core.step.ts#L47)

###### Inherited from

[`CoreStep`](core.step.md#corestep).[`stepData`](core.step.md#stepdata)

#### Methods

##### afterExecute()

> `protected` **afterExecute**(`_result`): `void` \| `Promise`\<`void`\>

Defined in:
[api/services/steps/core.step.ts:134](https://github.com/davinidae/umazing-musumengine/blob/214adb783384a11b15b86407e00e671feb1ec440/src/api/services/steps/core.step.ts#L134)

Optional hook executed after `request()` and before returning from `execute()`.

###### Parameters

###### \_result

[`RequestResult`](../../models/uma-client.model.md#requestresult)\<`unknown`\>

###### Returns

`void` \| `Promise`\<`void`\>

###### Inherited from

[`CoreStep`](core.step.md#corestep).[`afterExecute`](core.step.md#afterexecute)

##### execute()

> **execute**():
> `Promise`\<[`RequestResult`](../../models/uma-client.model.md#requestresult)\<`unknown`\>\>

Defined in:
[api/services/steps/core.step.ts:139](https://github.com/davinidae/umazing-musumengine/blob/214adb783384a11b15b86407e00e671feb1ec440/src/api/services/steps/core.step.ts#L139)

Execute the step end-to-end.

###### Returns

`Promise`\<[`RequestResult`](../../models/uma-client.model.md#requestresult)\<`unknown`\>\>

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

> **getRequestBody**():
> [`UserChangeName`](../../../umatypes/namespaces/Umatypes/namespaces/Request.md#userchangename)

Defined in:
[api/services/steps/user-change_name.step.ts:9](https://github.com/davinidae/umazing-musumengine/blob/214adb783384a11b15b86407e00e671feb1ec440/src/api/services/steps/user-change_name.step.ts#L9)

###### Returns

[`UserChangeName`](../../../umatypes/namespaces/Umatypes/namespaces/Request.md#userchangename)

###### Overrides

[`CoreStep`](core.step.md#corestep).[`getRequestBody`](core.step.md#getrequestbody)

##### request()

> `protected` **request**():
> `Promise`\<`Omit`\<[`RequestResult`](../../models/uma-client.model.md#requestresult)\<`unknown`\>,
> `"endpoint"`\>\>

Defined in:
[api/services/steps/core.step.ts:117](https://github.com/davinidae/umazing-musumengine/blob/214adb783384a11b15b86407e00e671feb1ec440/src/api/services/steps/core.step.ts#L117)

Execute the upstream HTTP request and return decoded response + diagnostics.

###### Returns

`Promise`\<`Omit`\<[`RequestResult`](../../models/uma-client.model.md#requestresult)\<`unknown`\>,
`"endpoint"`\>\>

###### Inherited from

[`CoreStep`](core.step.md#corestep).[`request`](core.step.md#request)
