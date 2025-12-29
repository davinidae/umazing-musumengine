# api/services/steps/tool/pre_signup.step

## Classes

### ToolPreSignupStep

Defined in:
[src/api/services/steps/tool/pre_signup.step.ts:7](https://github.com/davinidae/umazing-musumengine/blob/70c65772a693b9af9eb32a052402dfc126c355a3/src/api/services/steps/tool/pre_signup.step.ts#L7)

ToolPreSignupStep.

#### Remarks

Extends/implements:
`extends CoreStep< Umatypes.Request.ToolPreSignup, Umatypes.Response.ToolPreSignup >`.

#### Extends

- [`CoreStep`](../core.step.md#corestep)\<[`ToolPreSignup`](../../../../umatypes/namespaces/Umatypes/namespaces/Request.md#toolpresignup),
  [`ToolPreSignup`](../../../../umatypes/namespaces/Umatypes/namespaces/Response.md#toolpresignup)\>

#### Constructors

##### Constructor

> **new ToolPreSignupStep**(`umaClient`, ...`_extra`): [`ToolPreSignupStep`](#toolpresignupstep)

Defined in:
[src/api/services/steps/core.step.ts:87](https://github.com/davinidae/umazing-musumengine/blob/70c65772a693b9af9eb32a052402dfc126c355a3/src/api/services/steps/core.step.ts#L87)

constructor.

###### Parameters

###### umaClient

[`UmaClient`](../../uma-client.service.md#umaclient)

Type: `UmaClient`.

###### \_extra

...`any`[]

Type: `any[]`.

###### Returns

[`ToolPreSignupStep`](#toolpresignupstep)

Type: `CoreStep<TReq, TRes>`.

###### Inherited from

[`CoreStep`](../core.step.md#corestep).[`constructor`](../core.step.md#constructor)

#### Properties

##### endpoint

> **endpoint**: `string` = `'tool/pre_signup'`

Defined in:
[src/api/services/steps/tool/pre_signup.step.ts:16](https://github.com/davinidae/umazing-musumengine/blob/70c65772a693b9af9eb32a052402dfc126c355a3/src/api/services/steps/tool/pre_signup.step.ts#L16)

endpoint.

###### Remarks

Type: `string`.

###### Default Value

`'tool/pre_signup'`

###### Overrides

[`CoreStep`](../core.step.md#corestep).[`endpoint`](../core.step.md#endpoint)

##### umaClient

> `protected` `readonly` **umaClient**: [`UmaClient`](../../uma-client.service.md#umaclient)

Defined in:
[src/api/services/steps/core.step.ts:88](https://github.com/davinidae/umazing-musumengine/blob/70c65772a693b9af9eb32a052402dfc126c355a3/src/api/services/steps/core.step.ts#L88)

Type: `UmaClient`.

###### Inherited from

[`CoreStep`](../core.step.md#corestep).[`umaClient`](../core.step.md#umaclient)

#### Methods

##### afterExecute()

> `protected` **afterExecute**(): `void`

Defined in:
[src/api/services/steps/tool/pre_signup.step.ts:29](https://github.com/davinidae/umazing-musumengine/blob/70c65772a693b9af9eb32a052402dfc126c355a3/src/api/services/steps/tool/pre_signup.step.ts#L29)

afterExecute.

###### Returns

`void`

###### Overrides

[`CoreStep`](../core.step.md#corestep).[`afterExecute`](../core.step.md#afterexecute)

##### execute()

> **execute**():
> `Promise`\<[`RequestResult`](../../../models/uma-client.model.md#requestresult)\<[`ToolPreSignup`](../../../../umatypes/namespaces/Umatypes/namespaces/Response.md#toolpresignup)\>\>

Defined in:
[src/api/services/steps/core.step.ts:277](https://github.com/davinidae/umazing-musumengine/blob/70c65772a693b9af9eb32a052402dfc126c355a3/src/api/services/steps/core.step.ts#L277)

execute (async).

###### Returns

`Promise`\<[`RequestResult`](../../../models/uma-client.model.md#requestresult)\<[`ToolPreSignup`](../../../../umatypes/namespaces/Umatypes/namespaces/Response.md#toolpresignup)\>\>

Type: `Promise<RequestResult<TRes>>`.

###### Inherited from

[`CoreStep`](../core.step.md#corestep).[`execute`](../core.step.md#execute)

##### getBody()

> `protected` **getBody**(): `Record`\<`string`, `unknown`\>

Defined in:
[src/api/services/steps/core.step.ts:121](https://github.com/davinidae/umazing-musumengine/blob/70c65772a693b9af9eb32a052402dfc126c355a3/src/api/services/steps/core.step.ts#L121)

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
[src/api/services/steps/core.step.ts:101](https://github.com/davinidae/umazing-musumengine/blob/70c65772a693b9af9eb32a052402dfc126c355a3/src/api/services/steps/core.step.ts#L101)

getHeaders.

Build upstream headers expected by the game API.

###### Returns

`Record`\<`string`, `string`\>

Type: `Record<string, string>`.

###### Inherited from

[`CoreStep`](../core.step.md#corestep).[`getHeaders`](../core.step.md#getheaders)

##### getRequestBody()

> **getRequestBody**(): `object`

Defined in:
[src/api/services/steps/tool/pre_signup.step.ts:22](https://github.com/davinidae/umazing-musumengine/blob/70c65772a693b9af9eb32a052402dfc126c355a3/src/api/services/steps/tool/pre_signup.step.ts#L22)

getRequestBody.

###### Returns

`object`

Type: `object`.

###### Overrides

[`CoreStep`](../core.step.md#corestep).[`getRequestBody`](../core.step.md#getrequestbody)

##### request()

> `protected` **request**():
> `Promise`\<`Omit`\<[`RequestResult`](../../../models/uma-client.model.md#requestresult)\<[`ToolPreSignup`](../../../../umatypes/namespaces/Umatypes/namespaces/Response.md#toolpresignup)\>,
> `"endpoint"` \| `"name"`\>\>

Defined in:
[src/api/services/steps/core.step.ts:216](https://github.com/davinidae/umazing-musumengine/blob/70c65772a693b9af9eb32a052402dfc126c355a3/src/api/services/steps/core.step.ts#L216)

request (async).

###### Returns

`Promise`\<`Omit`\<[`RequestResult`](../../../models/uma-client.model.md#requestresult)\<[`ToolPreSignup`](../../../../umatypes/namespaces/Umatypes/namespaces/Response.md#toolpresignup)\>,
`"endpoint"` \| `"name"`\>\>

Type: `Promise<Omit<RequestResult<TRes>, "name" | "endpoint">>`.

###### Inherited from

[`CoreStep`](../core.step.md#corestep).[`request`](../core.step.md#request)
