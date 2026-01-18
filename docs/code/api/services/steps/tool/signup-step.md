# api/services/steps/tool/signup.step

## Classes

### ToolSignupStep

Defined in:
[src/api/services/steps/tool/signup.step.ts:10](https://github.com/davinidae/umazing-musumengine/blob/bfc4a80e82b79071340aa57781e33eb50ffad709/src/api/services/steps/tool/signup.step.ts#L10)

ToolSignupStep.

#### Remarks

Extends/implements: `extends CoreStep< Umatypes.Request.ToolSignup, Umatypes.Response.ToolSignup >`.

#### Extends

- [`CoreStep`](../core.step.md#corestep)\<[`ToolSignup`](../../../../umatypes/namespaces/Umatypes/namespaces/Request.md#toolsignup),
  [`ToolSignup`](../../../../umatypes/namespaces/Umatypes/namespaces/Response.md#toolsignup)\>

#### Constructors

##### Constructor

> **new ToolSignupStep**(`umaClient`, `attestationType`): [`ToolSignupStep`](#toolsignupstep)

Defined in:
[src/api/services/steps/tool/signup.step.ts:21](https://github.com/davinidae/umazing-musumengine/blob/bfc4a80e82b79071340aa57781e33eb50ffad709/src/api/services/steps/tool/signup.step.ts#L21)

###### Parameters

###### umaClient

[`UmaClient`](../../uma-client.service.md#umaclient)

###### attestationType

[`AttestationType`](../../../models/umamusume-api/enums.model.md#attestationtype)

###### Returns

[`ToolSignupStep`](#toolsignupstep)

###### Overrides

[`CoreStep`](../core.step.md#corestep).[`constructor`](../core.step.md#constructor)

#### Properties

##### attestationType

> `private` `readonly` **attestationType**:
> [`AttestationType`](../../../models/umamusume-api/enums.model.md#attestationtype)

Defined in:
[src/api/services/steps/tool/signup.step.ts:23](https://github.com/davinidae/umazing-musumengine/blob/bfc4a80e82b79071340aa57781e33eb50ffad709/src/api/services/steps/tool/signup.step.ts#L23)

##### endpoint

> **endpoint**: `string` = `'tool/signup'`

Defined in:
[src/api/services/steps/tool/signup.step.ts:19](https://github.com/davinidae/umazing-musumengine/blob/bfc4a80e82b79071340aa57781e33eb50ffad709/src/api/services/steps/tool/signup.step.ts#L19)

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
[src/api/services/steps/tool/signup.step.ts:22](https://github.com/davinidae/umazing-musumengine/blob/bfc4a80e82b79071340aa57781e33eb50ffad709/src/api/services/steps/tool/signup.step.ts#L22)

Type: `UmaClient`.

###### Inherited from

[`CoreStep`](../core.step.md#corestep).[`umaClient`](../core.step.md#umaclient)

#### Methods

##### afterExecute()

> `protected` **afterExecute**(`result`): `void`

Defined in:
[src/api/services/steps/tool/signup.step.ts:48](https://github.com/davinidae/umazing-musumengine/blob/bfc4a80e82b79071340aa57781e33eb50ffad709/src/api/services/steps/tool/signup.step.ts#L48)

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
[src/api/services/steps/core.step.ts:277](https://github.com/davinidae/umazing-musumengine/blob/bfc4a80e82b79071340aa57781e33eb50ffad709/src/api/services/steps/core.step.ts#L277)

execute (async).

###### Returns

`Promise`\<[`RequestResult`](../../../models/uma-client.model.md#requestresult)\<[`ToolSignup`](../../../../umatypes/namespaces/Umatypes/namespaces/Response.md#toolsignup)\>\>

Type: `Promise<RequestResult<TRes>>`.

###### Inherited from

[`CoreStep`](../core.step.md#corestep).[`execute`](../core.step.md#execute)

##### getBody()

> `protected` **getBody**(): `Record`\<`string`, `unknown`\>

Defined in:
[src/api/services/steps/core.step.ts:121](https://github.com/davinidae/umazing-musumengine/blob/bfc4a80e82b79071340aa57781e33eb50ffad709/src/api/services/steps/core.step.ts#L121)

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
[src/api/services/steps/core.step.ts:101](https://github.com/davinidae/umazing-musumengine/blob/bfc4a80e82b79071340aa57781e33eb50ffad709/src/api/services/steps/core.step.ts#L101)

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
[src/api/services/steps/tool/signup.step.ts:32](https://github.com/davinidae/umazing-musumengine/blob/bfc4a80e82b79071340aa57781e33eb50ffad709/src/api/services/steps/tool/signup.step.ts#L32)

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
[src/api/services/steps/core.step.ts:216](https://github.com/davinidae/umazing-musumengine/blob/bfc4a80e82b79071340aa57781e33eb50ffad709/src/api/services/steps/core.step.ts#L216)

request (async).

###### Returns

`Promise`\<`Omit`\<[`RequestResult`](../../../models/uma-client.model.md#requestresult)\<[`ToolSignup`](../../../../umatypes/namespaces/Umatypes/namespaces/Response.md#toolsignup)\>,
`"endpoint"` \| `"name"`\>\>

Type: `Promise<Omit<RequestResult<TRes>, "name" | "endpoint">>`.

###### Inherited from

[`CoreStep`](../core.step.md#corestep).[`request`](../core.step.md#request)
