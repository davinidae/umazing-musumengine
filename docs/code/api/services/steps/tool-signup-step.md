# api/services/steps/tool-signup.step

## Classes

### ToolSignupStep

Defined in:
[api/services/steps/tool-signup.step.ts:5](https://github.com/davinidae/umazing-musumengine/blob/23b121617aef679f48a8d2fac9ca051b023fc6da/src/api/services/steps/tool-signup.step.ts#L5)

Base class for a single API “step”.

A step:

- builds a request payload
- encodes it to the Uma wire format (Base64)
- posts it to the upstream endpoint
- decrypts + decodes the response
- optionally updates session state

#### Extends

- [`CoreStep`](core.step.md#corestep)\<[`ToolSignup`](../../../umatypes/namespaces/Umatypes/namespaces/Request.md#toolsignup),
  [`ToolSignup`](../../../umatypes/namespaces/Umatypes/namespaces/Response.md#toolsignup)\>

#### Constructors

##### Constructor

> **new ToolSignupStep**(`stepData`): [`ToolSignupStep`](#toolsignupstep)

Defined in:
[api/services/steps/core.step.ts:46](https://github.com/davinidae/umazing-musumengine/blob/23b121617aef679f48a8d2fac9ca051b023fc6da/src/api/services/steps/core.step.ts#L46)

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
[api/services/steps/tool-signup.step.ts:9](https://github.com/davinidae/umazing-musumengine/blob/23b121617aef679f48a8d2fac9ca051b023fc6da/src/api/services/steps/tool-signup.step.ts#L9)

###### Overrides

[`CoreStep`](core.step.md#corestep).[`endpoint`](core.step.md#endpoint)

##### stepData

> `protected` `readonly` **stepData**: [`StepData`](../../models/uma-client.model.md#stepdata)

Defined in:
[api/services/steps/core.step.ts:46](https://github.com/davinidae/umazing-musumengine/blob/23b121617aef679f48a8d2fac9ca051b023fc6da/src/api/services/steps/core.step.ts#L46)

###### Inherited from

[`CoreStep`](core.step.md#corestep).[`stepData`](core.step.md#stepdata)

#### Methods

##### afterExecute()

> **afterExecute**(`result`): `Promise`\<`void`\>

Defined in:
[api/services/steps/tool-signup.step.ts:23](https://github.com/davinidae/umazing-musumengine/blob/23b121617aef679f48a8d2fac9ca051b023fc6da/src/api/services/steps/tool-signup.step.ts#L23)

Optional hook executed after `request()` and before returning from `execute()`.

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
[api/services/steps/core.step.ts:110](https://github.com/davinidae/umazing-musumengine/blob/23b121617aef679f48a8d2fac9ca051b023fc6da/src/api/services/steps/core.step.ts#L110)

Execute the step end-to-end.

###### Returns

`Promise`\<[`RequestResult`](../../models/uma-client.model.md#requestresult)\<[`ToolSignup`](../../../umatypes/namespaces/Umatypes/namespaces/Response.md#toolsignup)\>\>

###### Inherited from

[`CoreStep`](core.step.md#corestep).[`execute`](core.step.md#execute)

##### getBody()

> `protected` **getBody**():
> [`ToolSignup`](../../../umatypes/namespaces/Umatypes/namespaces/Request.md#toolsignup) &
> [`RequestBase`](../../models/uma-client.model.md#requestbase)

Defined in:
[api/services/steps/core.step.ts:65](https://github.com/davinidae/umazing-musumengine/blob/23b121617aef679f48a8d2fac9ca051b023fc6da/src/api/services/steps/core.step.ts#L65)

Combine the step-specific body with common request fields from StepData.

###### Returns

[`ToolSignup`](../../../umatypes/namespaces/Umatypes/namespaces/Request.md#toolsignup) &
[`RequestBase`](../../models/uma-client.model.md#requestbase)

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
[api/services/steps/tool-signup.step.ts:11](https://github.com/davinidae/umazing-musumengine/blob/23b121617aef679f48a8d2fac9ca051b023fc6da/src/api/services/steps/tool-signup.step.ts#L11)

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
[api/services/steps/core.step.ts:73](https://github.com/davinidae/umazing-musumengine/blob/23b121617aef679f48a8d2fac9ca051b023fc6da/src/api/services/steps/core.step.ts#L73)

Execute the upstream HTTP request and return decoded response + diagnostics.

###### Returns

`Promise`\<\{ `body`:
[`ToolSignup`](../../../umatypes/namespaces/Umatypes/namespaces/Request.md#toolsignup) &
[`RequestBase`](../../models/uma-client.model.md#requestbase); `decoded`:
[`UmaResponse`](../../models/uma-client.model.md#umaresponse)\<[`ToolSignup`](../../../umatypes/namespaces/Umatypes/namespaces/Response.md#toolsignup)\>;
`headers`: \{ `Accept`: `string`; `APP-VER`: `string`; `Content-Type`: `string`; `Device`: `string`;
`RES-VER`: `string`; `SID`: `string`; `ViewerID`: `string`; `X-Unity-Version`: `string`; \}; \}\>

###### Inherited from

[`CoreStep`](core.step.md#corestep).[`request`](core.step.md#request)
