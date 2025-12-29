# api/services/steps/start-session.step

## Classes

### StartSessionStep

Defined in:
[api/services/steps/start-session.step.ts:4](https://github.com/davinidae/umazing-musumengine/blob/80d3c8cc1b6a4bb7394b4c2aa6642f2fb6343d3b/src/api/services/steps/start-session.step.ts#L4)

Base class for a single API “step”.

A step:

- builds a request payload
- encodes it to the Uma wire format (Base64)
- posts it to the upstream endpoint
- decrypts + decodes the response
- optionally updates session state

#### Extends

- [`CoreStep`](core.step.md#corestep)\<[`ToolStartSession`](../../../umatypes/namespaces/Umatypes/namespaces/Request.md#toolstartsession),
  [`ToolStartSession`](../../../umatypes/namespaces/Umatypes/namespaces/Response.md#toolstartsession)\>

#### Constructors

##### Constructor

> **new StartSessionStep**(`stepData`, `attestationType`): [`StartSessionStep`](#startsessionstep)

Defined in:
[api/services/steps/start-session.step.ts:17](https://github.com/davinidae/umazing-musumengine/blob/80d3c8cc1b6a4bb7394b4c2aa6642f2fb6343d3b/src/api/services/steps/start-session.step.ts#L17)

###### Parameters

###### stepData

[`StepData`](../../models/uma-client.model.md#stepdata)

###### attestationType

`number`

###### Returns

[`StartSessionStep`](#startsessionstep)

###### Overrides

[`CoreStep`](core.step.md#corestep).[`constructor`](core.step.md#constructor)

#### Properties

##### attestationType

> `private` `readonly` **attestationType**: `number`

Defined in:
[api/services/steps/start-session.step.ts:19](https://github.com/davinidae/umazing-musumengine/blob/80d3c8cc1b6a4bb7394b4c2aa6642f2fb6343d3b/src/api/services/steps/start-session.step.ts#L19)

##### endpoint

> **endpoint**: `string` = `'tool/start_session'`

Defined in:
[api/services/steps/start-session.step.ts:8](https://github.com/davinidae/umazing-musumengine/blob/80d3c8cc1b6a4bb7394b4c2aa6642f2fb6343d3b/src/api/services/steps/start-session.step.ts#L8)

###### Overrides

[`CoreStep`](core.step.md#corestep).[`endpoint`](core.step.md#endpoint)

##### stepData

> `protected` `readonly` **stepData**: [`StepData`](../../models/uma-client.model.md#stepdata)

Defined in:
[api/services/steps/start-session.step.ts:18](https://github.com/davinidae/umazing-musumengine/blob/80d3c8cc1b6a4bb7394b4c2aa6642f2fb6343d3b/src/api/services/steps/start-session.step.ts#L18)

###### Inherited from

[`CoreStep`](core.step.md#corestep).[`stepData`](core.step.md#stepdata)

#### Methods

##### afterExecute()

> `protected` **afterExecute**(`result`): `void`

Defined in:
[api/services/steps/start-session.step.ts:24](https://github.com/davinidae/umazing-musumengine/blob/80d3c8cc1b6a4bb7394b4c2aa6642f2fb6343d3b/src/api/services/steps/start-session.step.ts#L24)

Optional hook executed after `request()` and before returning from `execute()`.

###### Parameters

###### result

[`RequestResult`](../../models/uma-client.model.md#requestresult)\<[`ToolStartSession`](../../../umatypes/namespaces/Umatypes/namespaces/Response.md#toolstartsession)\>

###### Returns

`void`

###### Overrides

[`CoreStep`](core.step.md#corestep).[`afterExecute`](core.step.md#afterexecute)

##### execute()

> **execute**():
> `Promise`\<[`RequestResult`](../../models/uma-client.model.md#requestresult)\<[`ToolStartSession`](../../../umatypes/namespaces/Umatypes/namespaces/Response.md#toolstartsession)\>\>

Defined in:
[api/services/steps/core.step.ts:139](https://github.com/davinidae/umazing-musumengine/blob/80d3c8cc1b6a4bb7394b4c2aa6642f2fb6343d3b/src/api/services/steps/core.step.ts#L139)

Execute the step end-to-end.

###### Returns

`Promise`\<[`RequestResult`](../../models/uma-client.model.md#requestresult)\<[`ToolStartSession`](../../../umatypes/namespaces/Umatypes/namespaces/Response.md#toolstartsession)\>\>

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
> [`ToolStartSession`](../../../umatypes/namespaces/Umatypes/namespaces/Request.md#toolstartsession)

Defined in:
[api/services/steps/start-session.step.ts:10](https://github.com/davinidae/umazing-musumengine/blob/80d3c8cc1b6a4bb7394b4c2aa6642f2fb6343d3b/src/api/services/steps/start-session.step.ts#L10)

###### Returns

[`ToolStartSession`](../../../umatypes/namespaces/Umatypes/namespaces/Request.md#toolstartsession)

###### Overrides

[`CoreStep`](core.step.md#corestep).[`getRequestBody`](core.step.md#getrequestbody)

##### request()

> `protected` **request**():
> `Promise`\<`Omit`\<[`RequestResult`](../../models/uma-client.model.md#requestresult)\<[`ToolStartSession`](../../../umatypes/namespaces/Umatypes/namespaces/Response.md#toolstartsession)\>,
> `"endpoint"`\>\>

Defined in:
[api/services/steps/core.step.ts:117](https://github.com/davinidae/umazing-musumengine/blob/80d3c8cc1b6a4bb7394b4c2aa6642f2fb6343d3b/src/api/services/steps/core.step.ts#L117)

Execute the upstream HTTP request and return decoded response + diagnostics.

###### Returns

`Promise`\<`Omit`\<[`RequestResult`](../../models/uma-client.model.md#requestresult)\<[`ToolStartSession`](../../../umatypes/namespaces/Umatypes/namespaces/Response.md#toolstartsession)\>,
`"endpoint"`\>\>

###### Inherited from

[`CoreStep`](core.step.md#corestep).[`request`](core.step.md#request)
