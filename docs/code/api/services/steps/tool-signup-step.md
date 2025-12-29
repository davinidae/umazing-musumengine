# api/services/steps/tool-signup.step

## Classes

### ToolSignupStep

Defined in:
[api/services/steps/tool-signup.step.ts:5](https://github.com/davinidae/umazing-musumengine/blob/80d3c8cc1b6a4bb7394b4c2aa6642f2fb6343d3b/src/api/services/steps/tool-signup.step.ts#L5)

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
[api/services/steps/core.step.ts:47](https://github.com/davinidae/umazing-musumengine/blob/80d3c8cc1b6a4bb7394b4c2aa6642f2fb6343d3b/src/api/services/steps/core.step.ts#L47)

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
[api/services/steps/tool-signup.step.ts:9](https://github.com/davinidae/umazing-musumengine/blob/80d3c8cc1b6a4bb7394b4c2aa6642f2fb6343d3b/src/api/services/steps/tool-signup.step.ts#L9)

###### Overrides

[`CoreStep`](core.step.md#corestep).[`endpoint`](core.step.md#endpoint)

##### stepData

> `protected` `readonly` **stepData**: [`StepData`](../../models/uma-client.model.md#stepdata)

Defined in:
[api/services/steps/core.step.ts:47](https://github.com/davinidae/umazing-musumengine/blob/80d3c8cc1b6a4bb7394b4c2aa6642f2fb6343d3b/src/api/services/steps/core.step.ts#L47)

###### Inherited from

[`CoreStep`](core.step.md#corestep).[`stepData`](core.step.md#stepdata)

#### Methods

##### afterExecute()

> `protected` **afterExecute**(`result`): `void`

Defined in:
[api/services/steps/tool-signup.step.ts:23](https://github.com/davinidae/umazing-musumengine/blob/80d3c8cc1b6a4bb7394b4c2aa6642f2fb6343d3b/src/api/services/steps/tool-signup.step.ts#L23)

Optional hook executed after `request()` and before returning from `execute()`.

###### Parameters

###### result

[`RequestResult`](../../models/uma-client.model.md#requestresult)\<[`ToolSignup`](../../../umatypes/namespaces/Umatypes/namespaces/Response.md#toolsignup)\>

###### Returns

`void`

###### Overrides

[`CoreStep`](core.step.md#corestep).[`afterExecute`](core.step.md#afterexecute)

##### execute()

> **execute**():
> `Promise`\<[`RequestResult`](../../models/uma-client.model.md#requestresult)\<[`ToolSignup`](../../../umatypes/namespaces/Umatypes/namespaces/Response.md#toolsignup)\>\>

Defined in:
[api/services/steps/core.step.ts:139](https://github.com/davinidae/umazing-musumengine/blob/80d3c8cc1b6a4bb7394b4c2aa6642f2fb6343d3b/src/api/services/steps/core.step.ts#L139)

Execute the step end-to-end.

###### Returns

`Promise`\<[`RequestResult`](../../models/uma-client.model.md#requestresult)\<[`ToolSignup`](../../../umatypes/namespaces/Umatypes/namespaces/Response.md#toolsignup)\>\>

###### Inherited from

[`CoreStep`](core.step.md#corestep).[`execute`](core.step.md#execute)

##### getBody()

> `protected` **getBody**(): `Record`\<`string`, `unknown`\>

Defined in:
[api/services/steps/core.step.ts:66](https://github.com/davinidae/umazing-musumengine/blob/80d3c8cc1b6a4bb7394b4c2aa6642f2fb6343d3b/src/api/services/steps/core.step.ts#L66)

Combine the step-specific body with common request fields from StepData.

###### Returns

`Record`\<`string`, `unknown`\>

###### Inherited from

[`CoreStep`](core.step.md#corestep).[`getBody`](core.step.md#getbody)

##### getHeaders()

> `protected` **getHeaders**(): `Record`\<`string`, `string`\>

Defined in:
[api/services/steps/core.step.ts:52](https://github.com/davinidae/umazing-musumengine/blob/80d3c8cc1b6a4bb7394b4c2aa6642f2fb6343d3b/src/api/services/steps/core.step.ts#L52)

Build upstream headers expected by the game API.

###### Returns

`Record`\<`string`, `string`\>

###### Inherited from

[`CoreStep`](core.step.md#corestep).[`getHeaders`](core.step.md#getheaders)

##### getRequestBody()

> **getRequestBody**():
> [`ToolSignup`](../../../umatypes/namespaces/Umatypes/namespaces/Request.md#toolsignup)

Defined in:
[api/services/steps/tool-signup.step.ts:11](https://github.com/davinidae/umazing-musumengine/blob/80d3c8cc1b6a4bb7394b4c2aa6642f2fb6343d3b/src/api/services/steps/tool-signup.step.ts#L11)

###### Returns

[`ToolSignup`](../../../umatypes/namespaces/Umatypes/namespaces/Request.md#toolsignup)

###### Overrides

[`CoreStep`](core.step.md#corestep).[`getRequestBody`](core.step.md#getrequestbody)

##### request()

> `protected` **request**():
> `Promise`\<`Omit`\<[`RequestResult`](../../models/uma-client.model.md#requestresult)\<[`ToolSignup`](../../../umatypes/namespaces/Umatypes/namespaces/Response.md#toolsignup)\>,
> `"endpoint"`\>\>

Defined in:
[api/services/steps/core.step.ts:117](https://github.com/davinidae/umazing-musumengine/blob/80d3c8cc1b6a4bb7394b4c2aa6642f2fb6343d3b/src/api/services/steps/core.step.ts#L117)

Execute the upstream HTTP request and return decoded response + diagnostics.

###### Returns

`Promise`\<`Omit`\<[`RequestResult`](../../models/uma-client.model.md#requestresult)\<[`ToolSignup`](../../../umatypes/namespaces/Umatypes/namespaces/Response.md#toolsignup)\>,
`"endpoint"`\>\>

###### Inherited from

[`CoreStep`](core.step.md#corestep).[`request`](core.step.md#request)
