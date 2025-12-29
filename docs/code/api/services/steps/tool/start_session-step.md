# api/services/steps/tool/start_session.step

## Classes

### StartSessionStep

Defined in:
[src/api/services/steps/tool/start_session.step.ts:9](https://github.com/davinidae/umazing-musumengine/blob/70c65772a693b9af9eb32a052402dfc126c355a3/src/api/services/steps/tool/start_session.step.ts#L9)

StartSessionStep.

#### Remarks

Extends/implements:
`extends CoreStep< Umatypes.Request.ToolStartSession, Umatypes.Response.ToolStartSession >`.

#### Extends

- [`CoreStep`](../core.step.md#corestep)\<[`ToolStartSession`](../../../../umatypes/namespaces/Umatypes/namespaces/Request.md#toolstartsession),
  [`ToolStartSession`](../../../../umatypes/namespaces/Umatypes/namespaces/Response.md#toolstartsession)\>

#### Constructors

##### Constructor

> **new StartSessionStep**(`umaClient`, `attestationType`): [`StartSessionStep`](#startsessionstep)

Defined in:
[src/api/services/steps/tool/start_session.step.ts:37](https://github.com/davinidae/umazing-musumengine/blob/70c65772a693b9af9eb32a052402dfc126c355a3/src/api/services/steps/tool/start_session.step.ts#L37)

constructor.

###### Parameters

###### umaClient

[`UmaClient`](../../uma-client.service.md#umaclient)

Type: `UmaClient`.

###### attestationType

`number`

Type: `number`.

###### Returns

[`StartSessionStep`](#startsessionstep)

Type: `StartSessionStep`.

###### Overrides

[`CoreStep`](../core.step.md#corestep).[`constructor`](../core.step.md#constructor)

#### Properties

##### attestationType

> `private` `readonly` **attestationType**: `number`

Defined in:
[src/api/services/steps/tool/start_session.step.ts:39](https://github.com/davinidae/umazing-musumengine/blob/70c65772a693b9af9eb32a052402dfc126c355a3/src/api/services/steps/tool/start_session.step.ts#L39)

Type: `number`.

##### endpoint

> **endpoint**: `string` = `'tool/start_session'`

Defined in:
[src/api/services/steps/tool/start_session.step.ts:18](https://github.com/davinidae/umazing-musumengine/blob/70c65772a693b9af9eb32a052402dfc126c355a3/src/api/services/steps/tool/start_session.step.ts#L18)

endpoint.

###### Remarks

Type: `string`.

###### Default Value

`'tool/start_session'`

###### Overrides

[`CoreStep`](../core.step.md#corestep).[`endpoint`](../core.step.md#endpoint)

##### umaClient

> `protected` `readonly` **umaClient**: [`UmaClient`](../../uma-client.service.md#umaclient)

Defined in:
[src/api/services/steps/tool/start_session.step.ts:38](https://github.com/davinidae/umazing-musumengine/blob/70c65772a693b9af9eb32a052402dfc126c355a3/src/api/services/steps/tool/start_session.step.ts#L38)

Type: `UmaClient`.

###### Inherited from

[`CoreStep`](../core.step.md#corestep).[`umaClient`](../core.step.md#umaclient)

#### Methods

##### afterExecute()

> `protected` **afterExecute**(`result`): `void`

Defined in:
[src/api/services/steps/tool/start_session.step.ts:48](https://github.com/davinidae/umazing-musumengine/blob/70c65772a693b9af9eb32a052402dfc126c355a3/src/api/services/steps/tool/start_session.step.ts#L48)

afterExecute.

###### Parameters

###### result

[`RequestResult`](../../../models/uma-client.model.md#requestresult)\<[`ToolStartSession`](../../../../umatypes/namespaces/Umatypes/namespaces/Response.md#toolstartsession)\>

Type: `RequestResult<ToolStartSession>`.

###### Returns

`void`

###### Overrides

[`CoreStep`](../core.step.md#corestep).[`afterExecute`](../core.step.md#afterexecute)

##### execute()

> **execute**():
> `Promise`\<[`RequestResult`](../../../models/uma-client.model.md#requestresult)\<[`ToolStartSession`](../../../../umatypes/namespaces/Umatypes/namespaces/Response.md#toolstartsession)\>\>

Defined in:
[src/api/services/steps/core.step.ts:277](https://github.com/davinidae/umazing-musumengine/blob/70c65772a693b9af9eb32a052402dfc126c355a3/src/api/services/steps/core.step.ts#L277)

execute (async).

###### Returns

`Promise`\<[`RequestResult`](../../../models/uma-client.model.md#requestresult)\<[`ToolStartSession`](../../../../umatypes/namespaces/Umatypes/namespaces/Response.md#toolstartsession)\>\>

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

> **getRequestBody**():
> [`ToolStartSession`](../../../../umatypes/namespaces/Umatypes/namespaces/Request.md#toolstartsession)

Defined in:
[src/api/services/steps/tool/start_session.step.ts:24](https://github.com/davinidae/umazing-musumengine/blob/70c65772a693b9af9eb32a052402dfc126c355a3/src/api/services/steps/tool/start_session.step.ts#L24)

getRequestBody.

###### Returns

[`ToolStartSession`](../../../../umatypes/namespaces/Umatypes/namespaces/Request.md#toolstartsession)

Type: `ToolStartSession`.

###### Overrides

[`CoreStep`](../core.step.md#corestep).[`getRequestBody`](../core.step.md#getrequestbody)

##### request()

> `protected` **request**():
> `Promise`\<`Omit`\<[`RequestResult`](../../../models/uma-client.model.md#requestresult)\<[`ToolStartSession`](../../../../umatypes/namespaces/Umatypes/namespaces/Response.md#toolstartsession)\>,
> `"endpoint"` \| `"name"`\>\>

Defined in:
[src/api/services/steps/core.step.ts:216](https://github.com/davinidae/umazing-musumengine/blob/70c65772a693b9af9eb32a052402dfc126c355a3/src/api/services/steps/core.step.ts#L216)

request (async).

###### Returns

`Promise`\<`Omit`\<[`RequestResult`](../../../models/uma-client.model.md#requestresult)\<[`ToolStartSession`](../../../../umatypes/namespaces/Umatypes/namespaces/Response.md#toolstartsession)\>,
`"endpoint"` \| `"name"`\>\>

Type: `Promise<Omit<RequestResult<TRes>, "name" | "endpoint">>`.

###### Inherited from

[`CoreStep`](../core.step.md#corestep).[`request`](../core.step.md#request)
