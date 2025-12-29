# api/services/steps/tool/signup.step

## Classes

### ToolSignupStep

Defined in:
[src/api/services/steps/tool/signup.step.ts:9](https://github.com/davinidae/umazing-musumengine/blob/c700395cebb260e117f031a8c5db6db9062abc06/src/api/services/steps/tool/signup.step.ts#L9)

ToolSignupStep.

#### Remarks

Extends/implements: `extends CoreStep< Umatypes.Request.ToolSignup, Umatypes.Response.ToolSignup >`.

#### Extends

- [`CoreStep`](../core.step.md#corestep)\<[`ToolSignup`](../../../../umatypes/namespaces/Umatypes/namespaces/Request.md#toolsignup),
  [`ToolSignup`](../../../../umatypes/namespaces/Umatypes/namespaces/Response.md#toolsignup)\>

#### Constructors

##### Constructor

> **new ToolSignupStep**(`umaClient`, ...`_extra`): [`ToolSignupStep`](#toolsignupstep)

Defined in:
[src/api/services/steps/core.step.ts:87](https://github.com/davinidae/umazing-musumengine/blob/c700395cebb260e117f031a8c5db6db9062abc06/src/api/services/steps/core.step.ts#L87)

constructor.

###### Parameters

###### umaClient

[`UmaClient`](../../uma-client.service.md#umaclient)

Type: `UmaClient`.

###### \_extra

...`any`[]

Type: `any[]`.

###### Returns

[`ToolSignupStep`](#toolsignupstep)

Type: `CoreStep<TReq, TRes>`.

###### Inherited from

[`CoreStep`](../core.step.md#corestep).[`constructor`](../core.step.md#constructor)

#### Properties

##### endpoint

> **endpoint**: `string` = `'tool/signup'`

Defined in:
[src/api/services/steps/tool/signup.step.ts:18](https://github.com/davinidae/umazing-musumengine/blob/c700395cebb260e117f031a8c5db6db9062abc06/src/api/services/steps/tool/signup.step.ts#L18)

endpoint.

###### Remarks

Type: `string`.

###### Default Value

`'tool/signup'`

###### Overrides

[`CoreStep`](../core.step.md#corestep).[`endpoint`](../core.step.md#endpoint)

##### umaClient

> `protected` `readonly` **umaClient**: [`UmaClient`](../../uma-client.service.md#umaclient)

Defined in:
[src/api/services/steps/core.step.ts:88](https://github.com/davinidae/umazing-musumengine/blob/c700395cebb260e117f031a8c5db6db9062abc06/src/api/services/steps/core.step.ts#L88)

Type: `UmaClient`.

###### Inherited from

[`CoreStep`](../core.step.md#corestep).[`umaClient`](../core.step.md#umaclient)

#### Methods

##### afterExecute()

> `protected` **afterExecute**(`result`): `void`

Defined in:
[src/api/services/steps/tool/signup.step.ts:40](https://github.com/davinidae/umazing-musumengine/blob/c700395cebb260e117f031a8c5db6db9062abc06/src/api/services/steps/tool/signup.step.ts#L40)

afterExecute.

###### Parameters

###### result

[`RequestResult`](../../../models/uma-client.model.md#requestresult)\<[`ToolSignup`](../../../../umatypes/namespaces/Umatypes/namespaces/Response.md#toolsignup)\>

Type: `RequestResult<ToolSignup>`.

###### Returns

`void`

###### Overrides

[`CoreStep`](../core.step.md#corestep).[`afterExecute`](../core.step.md#afterexecute)

##### execute()

> **execute**():
> `Promise`\<[`RequestResult`](../../../models/uma-client.model.md#requestresult)\<[`ToolSignup`](../../../../umatypes/namespaces/Umatypes/namespaces/Response.md#toolsignup)\>\>

Defined in:
[src/api/services/steps/core.step.ts:277](https://github.com/davinidae/umazing-musumengine/blob/c700395cebb260e117f031a8c5db6db9062abc06/src/api/services/steps/core.step.ts#L277)

execute (async).

###### Returns

`Promise`\<[`RequestResult`](../../../models/uma-client.model.md#requestresult)\<[`ToolSignup`](../../../../umatypes/namespaces/Umatypes/namespaces/Response.md#toolsignup)\>\>

Type: `Promise<RequestResult<TRes>>`.

###### Inherited from

[`CoreStep`](../core.step.md#corestep).[`execute`](../core.step.md#execute)

##### getBody()

> `protected` **getBody**(): `Record`\<`string`, `unknown`\>

Defined in:
[src/api/services/steps/core.step.ts:121](https://github.com/davinidae/umazing-musumengine/blob/c700395cebb260e117f031a8c5db6db9062abc06/src/api/services/steps/core.step.ts#L121)

getBody.

Combine the step-specific body with common request fields from StepData.

###### Returns

`Record`\<`string`, `unknown`\>

Type: `Record<string, unknown>`.

###### Inherited from

[`CoreStep`](../core.step.md#corestep).[`getBody`](../core.step.md#getbody)

##### getHeaders()

> `protected` **getHeaders**(): `Record`\<`string`, `string`\>

Defined in:
[src/api/services/steps/core.step.ts:101](https://github.com/davinidae/umazing-musumengine/blob/c700395cebb260e117f031a8c5db6db9062abc06/src/api/services/steps/core.step.ts#L101)

getHeaders.

Build upstream headers expected by the game API.

###### Returns

`Record`\<`string`, `string`\>

Type: `Record<string, string>`.

###### Inherited from

[`CoreStep`](../core.step.md#corestep).[`getHeaders`](../core.step.md#getheaders)

##### getRequestBody()

> **getRequestBody**():
> [`ToolSignup`](../../../../umatypes/namespaces/Umatypes/namespaces/Request.md#toolsignup)

Defined in:
[src/api/services/steps/tool/signup.step.ts:24](https://github.com/davinidae/umazing-musumengine/blob/c700395cebb260e117f031a8c5db6db9062abc06/src/api/services/steps/tool/signup.step.ts#L24)

getRequestBody.

###### Returns

[`ToolSignup`](../../../../umatypes/namespaces/Umatypes/namespaces/Request.md#toolsignup)

Type: `ToolSignup`.

###### Overrides

[`CoreStep`](../core.step.md#corestep).[`getRequestBody`](../core.step.md#getrequestbody)

##### request()

> `protected` **request**():
> `Promise`\<`Omit`\<[`RequestResult`](../../../models/uma-client.model.md#requestresult)\<[`ToolSignup`](../../../../umatypes/namespaces/Umatypes/namespaces/Response.md#toolsignup)\>,
> `"endpoint"` \| `"name"`\>\>

Defined in:
[src/api/services/steps/core.step.ts:216](https://github.com/davinidae/umazing-musumengine/blob/c700395cebb260e117f031a8c5db6db9062abc06/src/api/services/steps/core.step.ts#L216)

request (async).

###### Returns

`Promise`\<`Omit`\<[`RequestResult`](../../../models/uma-client.model.md#requestresult)\<[`ToolSignup`](../../../../umatypes/namespaces/Umatypes/namespaces/Response.md#toolsignup)\>,
`"endpoint"` \| `"name"`\>\>

Type: `Promise<Omit<RequestResult<TRes>, "name" | "endpoint">>`.

###### Inherited from

[`CoreStep`](../core.step.md#corestep).[`request`](../core.step.md#request)
