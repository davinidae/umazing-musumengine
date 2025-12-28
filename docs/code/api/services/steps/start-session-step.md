# api/services/steps/start-session.step

## Classes

### StartSessionStep

Defined in:
[api/services/steps/start-session.step.ts:4](https://github.com/davinidae/umazing-musumengine/blob/f24ccabc8ff8469c9450c4a9272c4cd9c6be182a/src/api/services/steps/start-session.step.ts#L4)

#### Extends

- [`CoreStep`](core.step.md#corestep)\<[`ToolStartSession`](../../../umatypes/namespaces/Umatypes/namespaces/Request.md#toolstartsession),
  [`ToolStartSession`](../../../umatypes/namespaces/Umatypes/namespaces/Response.md#toolstartsession)\>

#### Constructors

##### Constructor

> **new StartSessionStep**(`stepData`, `attestationType`): [`StartSessionStep`](#startsessionstep)

Defined in:
[api/services/steps/start-session.step.ts:17](https://github.com/davinidae/umazing-musumengine/blob/f24ccabc8ff8469c9450c4a9272c4cd9c6be182a/src/api/services/steps/start-session.step.ts#L17)

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
[api/services/steps/start-session.step.ts:19](https://github.com/davinidae/umazing-musumengine/blob/f24ccabc8ff8469c9450c4a9272c4cd9c6be182a/src/api/services/steps/start-session.step.ts#L19)

##### endpoint

> **endpoint**: `string` = `'tool/start_session'`

Defined in:
[api/services/steps/start-session.step.ts:8](https://github.com/davinidae/umazing-musumengine/blob/f24ccabc8ff8469c9450c4a9272c4cd9c6be182a/src/api/services/steps/start-session.step.ts#L8)

###### Overrides

[`CoreStep`](core.step.md#corestep).[`endpoint`](core.step.md#endpoint)

##### stepData

> `protected` `readonly` **stepData**: [`StepData`](../../models/uma-client.model.md#stepdata)

Defined in:
[api/services/steps/start-session.step.ts:18](https://github.com/davinidae/umazing-musumengine/blob/f24ccabc8ff8469c9450c4a9272c4cd9c6be182a/src/api/services/steps/start-session.step.ts#L18)

###### Inherited from

[`CoreStep`](core.step.md#corestep).[`stepData`](core.step.md#stepdata)

#### Methods

##### afterExecute()

> `protected` **afterExecute**(`result`): `Promise`\<`void`\>

Defined in:
[api/services/steps/start-session.step.ts:24](https://github.com/davinidae/umazing-musumengine/blob/f24ccabc8ff8469c9450c4a9272c4cd9c6be182a/src/api/services/steps/start-session.step.ts#L24)

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
[api/services/steps/core.step.ts:68](https://github.com/davinidae/umazing-musumengine/blob/f24ccabc8ff8469c9450c4a9272c4cd9c6be182a/src/api/services/steps/core.step.ts#L68)

###### Returns

`Promise`\<[`RequestResult`](../../models/uma-client.model.md#requestresult)\<[`ToolStartSession`](../../../umatypes/namespaces/Umatypes/namespaces/Response.md#toolstartsession)\>\>

###### Inherited from

[`CoreStep`](core.step.md#corestep).[`execute`](core.step.md#execute)

##### getBody()

> `protected` **getBody**():
> [`ToolStartSession`](../../../umatypes/namespaces/Umatypes/namespaces/Request.md#toolstartsession)
> & [`RequestBase`](../../models/uma-client.model.md#requestbase)

Defined in:
[api/services/steps/core.step.ts:26](https://github.com/davinidae/umazing-musumengine/blob/f24ccabc8ff8469c9450c4a9272c4cd9c6be182a/src/api/services/steps/core.step.ts#L26)

###### Returns

[`ToolStartSession`](../../../umatypes/namespaces/Umatypes/namespaces/Request.md#toolstartsession) &
[`RequestBase`](../../models/uma-client.model.md#requestbase)

###### Inherited from

[`CoreStep`](core.step.md#corestep).[`getBody`](core.step.md#getbody)

##### getHeaders()

> `protected` **getHeaders**(): `object`

Defined in:
[api/services/steps/core.step.ts:13](https://github.com/davinidae/umazing-musumengine/blob/f24ccabc8ff8469c9450c4a9272c4cd9c6be182a/src/api/services/steps/core.step.ts#L13)

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
[api/services/steps/start-session.step.ts:10](https://github.com/davinidae/umazing-musumengine/blob/f24ccabc8ff8469c9450c4a9272c4cd9c6be182a/src/api/services/steps/start-session.step.ts#L10)

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
[api/services/steps/core.step.ts:33](https://github.com/davinidae/umazing-musumengine/blob/f24ccabc8ff8469c9450c4a9272c4cd9c6be182a/src/api/services/steps/core.step.ts#L33)

###### Returns

`Promise`\<\{ `body`:
[`ToolStartSession`](../../../umatypes/namespaces/Umatypes/namespaces/Request.md#toolstartsession) &
[`RequestBase`](../../models/uma-client.model.md#requestbase); `decoded`:
[`UmaResponse`](../../models/uma-client.model.md#umaresponse)\<[`ToolStartSession`](../../../umatypes/namespaces/Umatypes/namespaces/Response.md#toolstartsession)\>;
`headers`: \{ `Accept`: `string`; `APP-VER`: `string`; `Content-Type`: `string`; `Device`: `string`;
`RES-VER`: `string`; `SID`: `string`; `ViewerID`: `string`; `X-Unity-Version`: `string`; \}; \}\>

###### Inherited from

[`CoreStep`](core.step.md#corestep).[`request`](core.step.md#request)
