# api/services/steps/start-session.step

## Classes

### StartSessionStep

Defined in:
[api/services/steps/start-session.step.ts:4](https://github.com/davinidae/umazing-musumengine/blob/23b121617aef679f48a8d2fac9ca051b023fc6da/src/api/services/steps/start-session.step.ts#L4)

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
[api/services/steps/start-session.step.ts:17](https://github.com/davinidae/umazing-musumengine/blob/23b121617aef679f48a8d2fac9ca051b023fc6da/src/api/services/steps/start-session.step.ts#L17)

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
[api/services/steps/start-session.step.ts:19](https://github.com/davinidae/umazing-musumengine/blob/23b121617aef679f48a8d2fac9ca051b023fc6da/src/api/services/steps/start-session.step.ts#L19)

##### endpoint

> **endpoint**: `string` = `'tool/start_session'`

Defined in:
[api/services/steps/start-session.step.ts:8](https://github.com/davinidae/umazing-musumengine/blob/23b121617aef679f48a8d2fac9ca051b023fc6da/src/api/services/steps/start-session.step.ts#L8)

###### Overrides

[`CoreStep`](core.step.md#corestep).[`endpoint`](core.step.md#endpoint)

##### stepData

> `protected` `readonly` **stepData**: [`StepData`](../../models/uma-client.model.md#stepdata)

Defined in:
[api/services/steps/start-session.step.ts:18](https://github.com/davinidae/umazing-musumengine/blob/23b121617aef679f48a8d2fac9ca051b023fc6da/src/api/services/steps/start-session.step.ts#L18)

###### Inherited from

[`CoreStep`](core.step.md#corestep).[`stepData`](core.step.md#stepdata)

#### Methods

##### afterExecute()

> `protected` **afterExecute**(`result`): `Promise`\<`void`\>

Defined in:
[api/services/steps/start-session.step.ts:24](https://github.com/davinidae/umazing-musumengine/blob/23b121617aef679f48a8d2fac9ca051b023fc6da/src/api/services/steps/start-session.step.ts#L24)

Optional hook executed after `request()` and before returning from `execute()`.

###### Parameters

###### result

[`RequestResult`](../../models/uma-client.model.md#requestresult)\<[`ToolStartSession`](../../../umatypes/namespaces/Umatypes/namespaces/Response.md#toolstartsession)\>

###### Returns

`Promise`\<`void`\>

###### Overrides

[`CoreStep`](core.step.md#corestep).[`afterExecute`](core.step.md#afterexecute)

##### execute()

> **execute**():
> `Promise`\<[`RequestResult`](../../models/uma-client.model.md#requestresult)\<[`ToolStartSession`](../../../umatypes/namespaces/Umatypes/namespaces/Response.md#toolstartsession)\>\>

Defined in:
[api/services/steps/core.step.ts:110](https://github.com/davinidae/umazing-musumengine/blob/23b121617aef679f48a8d2fac9ca051b023fc6da/src/api/services/steps/core.step.ts#L110)

Execute the step end-to-end.

###### Returns

`Promise`\<[`RequestResult`](../../models/uma-client.model.md#requestresult)\<[`ToolStartSession`](../../../umatypes/namespaces/Umatypes/namespaces/Response.md#toolstartsession)\>\>

###### Inherited from

[`CoreStep`](core.step.md#corestep).[`execute`](core.step.md#execute)

##### getBody()

> `protected` **getBody**():
> [`ToolStartSession`](../../../umatypes/namespaces/Umatypes/namespaces/Request.md#toolstartsession)
> & [`RequestBase`](../../models/uma-client.model.md#requestbase)

Defined in:
[api/services/steps/core.step.ts:65](https://github.com/davinidae/umazing-musumengine/blob/23b121617aef679f48a8d2fac9ca051b023fc6da/src/api/services/steps/core.step.ts#L65)

Combine the step-specific body with common request fields from StepData.

###### Returns

[`ToolStartSession`](../../../umatypes/namespaces/Umatypes/namespaces/Request.md#toolstartsession) &
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
[api/services/steps/start-session.step.ts:10](https://github.com/davinidae/umazing-musumengine/blob/23b121617aef679f48a8d2fac9ca051b023fc6da/src/api/services/steps/start-session.step.ts#L10)

###### Returns

`object`

###### attestation_type

> **attestation_type**: `number`

###### device_token

> **device_token**: `null` = `null`

###### Overrides

[`CoreStep`](core.step.md#corestep).[`getRequestBody`](core.step.md#getrequestbody)

##### request()

> `protected` **request**(): `Promise`\<\{ `body`:
> [`ToolStartSession`](../../../umatypes/namespaces/Umatypes/namespaces/Request.md#toolstartsession)
> & [`RequestBase`](../../models/uma-client.model.md#requestbase); `decoded`:
> [`UmaResponse`](../../models/uma-client.model.md#umaresponse)\<[`ToolStartSession`](../../../umatypes/namespaces/Umatypes/namespaces/Response.md#toolstartsession)\>;
> `headers`: \{ `Accept`: `string`; `APP-VER`: `string`; `Content-Type`: `string`; `Device`:
> `string`; `RES-VER`: `string`; `SID`: `string`; `ViewerID`: `string`; `X-Unity-Version`: `string`;
> \}; \}\>

Defined in:
[api/services/steps/core.step.ts:73](https://github.com/davinidae/umazing-musumengine/blob/23b121617aef679f48a8d2fac9ca051b023fc6da/src/api/services/steps/core.step.ts#L73)

Execute the upstream HTTP request and return decoded response + diagnostics.

###### Returns

`Promise`\<\{ `body`:
[`ToolStartSession`](../../../umatypes/namespaces/Umatypes/namespaces/Request.md#toolstartsession) &
[`RequestBase`](../../models/uma-client.model.md#requestbase); `decoded`:
[`UmaResponse`](../../models/uma-client.model.md#umaresponse)\<[`ToolStartSession`](../../../umatypes/namespaces/Umatypes/namespaces/Response.md#toolstartsession)\>;
`headers`: \{ `Accept`: `string`; `APP-VER`: `string`; `Content-Type`: `string`; `Device`: `string`;
`RES-VER`: `string`; `SID`: `string`; `ViewerID`: `string`; `X-Unity-Version`: `string`; \}; \}\>

###### Inherited from

[`CoreStep`](core.step.md#corestep).[`request`](core.step.md#request)
