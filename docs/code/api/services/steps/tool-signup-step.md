# api/services/steps/tool-signup.step

## Classes

### ToolSignupStep

Defined in:
[api/services/steps/tool-signup.step.ts:5](https://github.com/davinidae/umazing-musumengine/blob/8c2a93a99924070f3bed30bfbb56b7b18480c6b1/src/api/services/steps/tool-signup.step.ts#L5)

#### Extends

- [`CoreStep`](core.step.md#corestep)\<[`ToolSignup`](../../../umatypes/namespaces/Umatypes/namespaces/Request.md#toolsignup),
  [`ToolSignup`](../../../umatypes/namespaces/Umatypes/namespaces/Response.md#toolsignup)\>

#### Constructors

##### Constructor

> **new ToolSignupStep**(`stepData`): [`ToolSignupStep`](#toolsignupstep)

Defined in:
[api/services/steps/core.step.ts:10](https://github.com/davinidae/umazing-musumengine/blob/8c2a93a99924070f3bed30bfbb56b7b18480c6b1/src/api/services/steps/core.step.ts#L10)

###### Parameters

###### stepData

[`StepData`](../../models/uma-client.model.md#stepdata)

###### Returns

[`ToolSignupStep`](#toolsignupstep)

###### Inherited from

[`CoreStep`](core.step.md#corestep).[`constructor`](core.step.md#constructor)

#### Properties

##### endpoint

> **endpoint**: `string` = `'tool/signup'`

Defined in:
[api/services/steps/tool-signup.step.ts:9](https://github.com/davinidae/umazing-musumengine/blob/8c2a93a99924070f3bed30bfbb56b7b18480c6b1/src/api/services/steps/tool-signup.step.ts#L9)

###### Overrides

[`CoreStep`](core.step.md#corestep).[`endpoint`](core.step.md#endpoint)

##### stepData

> `protected` `readonly` **stepData**: [`StepData`](../../models/uma-client.model.md#stepdata)

Defined in:
[api/services/steps/core.step.ts:10](https://github.com/davinidae/umazing-musumengine/blob/8c2a93a99924070f3bed30bfbb56b7b18480c6b1/src/api/services/steps/core.step.ts#L10)

###### Inherited from

[`CoreStep`](core.step.md#corestep).[`stepData`](core.step.md#stepdata)

#### Methods

##### afterExecute()

> **afterExecute**(`result`): `Promise`\<`void`\>

Defined in:
[api/services/steps/tool-signup.step.ts:23](https://github.com/davinidae/umazing-musumengine/blob/8c2a93a99924070f3bed30bfbb56b7b18480c6b1/src/api/services/steps/tool-signup.step.ts#L23)

###### Parameters

###### result

[`RequestResult`](../../models/uma-client.model.md#requestresult)\<[`ToolSignup`](../../../umatypes/namespaces/Umatypes/namespaces/Response.md#toolsignup)\>

###### Returns

`Promise`\<`void`\>

###### Overrides

[`CoreStep`](core.step.md#corestep).[`afterExecute`](core.step.md#afterexecute)

##### execute()

> **execute**():
> `Promise`\<[`RequestResult`](../../models/uma-client.model.md#requestresult)\<[`ToolSignup`](../../../umatypes/namespaces/Umatypes/namespaces/Response.md#toolsignup)\>\>

Defined in:
[api/services/steps/core.step.ts:69](https://github.com/davinidae/umazing-musumengine/blob/8c2a93a99924070f3bed30bfbb56b7b18480c6b1/src/api/services/steps/core.step.ts#L69)

###### Returns

`Promise`\<[`RequestResult`](../../models/uma-client.model.md#requestresult)\<[`ToolSignup`](../../../umatypes/namespaces/Umatypes/namespaces/Response.md#toolsignup)\>\>

###### Inherited from

[`CoreStep`](core.step.md#corestep).[`execute`](core.step.md#execute)

##### getBody()

> `protected` **getBody**():
> [`ToolSignup`](../../../umatypes/namespaces/Umatypes/namespaces/Request.md#toolsignup) &
> [`RequestBase`](../../models/uma-client.model.md#requestbase)

Defined in:
[api/services/steps/core.step.ts:27](https://github.com/davinidae/umazing-musumengine/blob/8c2a93a99924070f3bed30bfbb56b7b18480c6b1/src/api/services/steps/core.step.ts#L27)

###### Returns

[`ToolSignup`](../../../umatypes/namespaces/Umatypes/namespaces/Request.md#toolsignup) &
[`RequestBase`](../../models/uma-client.model.md#requestbase)

###### Inherited from

[`CoreStep`](core.step.md#corestep).[`getBody`](core.step.md#getbody)

##### getHeaders()

> `protected` **getHeaders**(): `object`

Defined in:
[api/services/steps/core.step.ts:14](https://github.com/davinidae/umazing-musumengine/blob/8c2a93a99924070f3bed30bfbb56b7b18480c6b1/src/api/services/steps/core.step.ts#L14)

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
[api/services/steps/tool-signup.step.ts:11](https://github.com/davinidae/umazing-musumengine/blob/8c2a93a99924070f3bed30bfbb56b7b18480c6b1/src/api/services/steps/tool-signup.step.ts#L11)

###### Returns

`object`

###### attestation_type

> **attestation_type**: `number` = `0`

###### country

> **country**: `string` = `'Canada'`

###### credential

> **credential**: `string` = `''`

###### dma_state

> **dma_state**: `number` = `0`

###### error_code

> **error_code**: `number` = `0`

###### error_message

> **error_message**: `string` = `''`

###### optin_user_birth

> **optin_user_birth**: `number` = `199801`

###### Overrides

[`CoreStep`](core.step.md#corestep).[`getRequestBody`](core.step.md#getrequestbody)

##### request()

> `protected` **request**(): `Promise`\<\{ `body`:
> [`ToolSignup`](../../../umatypes/namespaces/Umatypes/namespaces/Request.md#toolsignup) &
> [`RequestBase`](../../models/uma-client.model.md#requestbase); `decoded`:
> [`UmaResponse`](../../models/uma-client.model.md#umaresponse)\<[`ToolSignup`](../../../umatypes/namespaces/Umatypes/namespaces/Response.md#toolsignup)\>;
> `headers`: \{ `Accept`: `string`; `APP-VER`: `string`; `Content-Type`: `string`; `Device`:
> `string`; `RES-VER`: `string`; `SID`: `string`; `ViewerID`: `string`; `X-Unity-Version`: `string`;
> \}; \}\>

Defined in:
[api/services/steps/core.step.ts:34](https://github.com/davinidae/umazing-musumengine/blob/8c2a93a99924070f3bed30bfbb56b7b18480c6b1/src/api/services/steps/core.step.ts#L34)

###### Returns

`Promise`\<\{ `body`:
[`ToolSignup`](../../../umatypes/namespaces/Umatypes/namespaces/Request.md#toolsignup) &
[`RequestBase`](../../models/uma-client.model.md#requestbase); `decoded`:
[`UmaResponse`](../../models/uma-client.model.md#umaresponse)\<[`ToolSignup`](../../../umatypes/namespaces/Umatypes/namespaces/Response.md#toolsignup)\>;
`headers`: \{ `Accept`: `string`; `APP-VER`: `string`; `Content-Type`: `string`; `Device`: `string`;
`RES-VER`: `string`; `SID`: `string`; `ViewerID`: `string`; `X-Unity-Version`: `string`; \}; \}\>

###### Inherited from

[`CoreStep`](core.step.md#corestep).[`request`](core.step.md#request)
