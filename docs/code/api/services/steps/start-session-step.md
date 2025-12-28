# api/services/steps/start-session.step

## Classes

### StartSessionStepService

Defined in:
[api/services/steps/start-session.step.ts:4](https://github.com/davinidae/umazing-musumengine/blob/3287c40709f1f448cf5e0c1e301ea35ff5829e19/src/api/services/steps/start-session.step.ts#L4)

#### Extends

- [`CoreStepService`](core.step.md#corestepservice)\<[`StartSessionRequest`](../../models/uma-client.model.md#startsessionrequest),
  [`StartSessionResponse`](../../models/uma-client.model.md#startsessionresponse)\>

#### Constructors

##### Constructor

> **new StartSessionStepService**(`stepData`, `attestationType`):
> [`StartSessionStepService`](#startsessionstepservice)

Defined in:
[api/services/steps/start-session.step.ts:17](https://github.com/davinidae/umazing-musumengine/blob/3287c40709f1f448cf5e0c1e301ea35ff5829e19/src/api/services/steps/start-session.step.ts#L17)

###### Parameters

###### stepData

[`StepData`](../../models/uma-client.model.md#stepdata)

###### attestationType

`number`

###### Returns

[`StartSessionStepService`](#startsessionstepservice)

###### Overrides

[`CoreStepService`](core.step.md#corestepservice).[`constructor`](core.step.md#constructor)

#### Properties

##### attestationType

> `private` `readonly` **attestationType**: `number`

Defined in:
[api/services/steps/start-session.step.ts:19](https://github.com/davinidae/umazing-musumengine/blob/3287c40709f1f448cf5e0c1e301ea35ff5829e19/src/api/services/steps/start-session.step.ts#L19)

##### endpoint

> **endpoint**: `string` = `'tool/start_session'`

Defined in:
[api/services/steps/start-session.step.ts:8](https://github.com/davinidae/umazing-musumengine/blob/3287c40709f1f448cf5e0c1e301ea35ff5829e19/src/api/services/steps/start-session.step.ts#L8)

###### Overrides

[`CoreStepService`](core.step.md#corestepservice).[`endpoint`](core.step.md#endpoint)

##### stepData

> `protected` `readonly` **stepData**: [`StepData`](../../models/uma-client.model.md#stepdata)

Defined in:
[api/services/steps/start-session.step.ts:18](https://github.com/davinidae/umazing-musumengine/blob/3287c40709f1f448cf5e0c1e301ea35ff5829e19/src/api/services/steps/start-session.step.ts#L18)

###### Inherited from

[`CoreStepService`](core.step.md#corestepservice).[`stepData`](core.step.md#stepdata)

#### Methods

##### execute()

> **execute**():
> `Promise`\<[`RequestResult`](../../models/uma-client.model.md#requestresult)\<[`StartSessionResponse`](../../models/uma-client.model.md#startsessionresponse)\>
> & `object`\>

Defined in:
[api/services/steps/start-session.step.ts:24](https://github.com/davinidae/umazing-musumengine/blob/3287c40709f1f448cf5e0c1e301ea35ff5829e19/src/api/services/steps/start-session.step.ts#L24)

###### Returns

`Promise`\<[`RequestResult`](../../models/uma-client.model.md#requestresult)\<[`StartSessionResponse`](../../models/uma-client.model.md#startsessionresponse)\>
& `object`\>

###### Overrides

[`CoreStepService`](core.step.md#corestepservice).[`execute`](core.step.md#execute)

##### getBody()

> `protected` **getBody**():
> [`StartSessionRequest`](../../models/uma-client.model.md#startsessionrequest) &
> [`RequestBase`](../../models/uma-client.model.md#requestbase)

Defined in:
[api/services/steps/core.step.ts:26](https://github.com/davinidae/umazing-musumengine/blob/3287c40709f1f448cf5e0c1e301ea35ff5829e19/src/api/services/steps/core.step.ts#L26)

###### Returns

[`StartSessionRequest`](../../models/uma-client.model.md#startsessionrequest) &
[`RequestBase`](../../models/uma-client.model.md#requestbase)

###### Inherited from

[`CoreStepService`](core.step.md#corestepservice).[`getBody`](core.step.md#getbody)

##### getHeaders()

> `protected` **getHeaders**(): `object`

Defined in:
[api/services/steps/core.step.ts:13](https://github.com/davinidae/umazing-musumengine/blob/3287c40709f1f448cf5e0c1e301ea35ff5829e19/src/api/services/steps/core.step.ts#L13)

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

[`CoreStepService`](core.step.md#corestepservice).[`getHeaders`](core.step.md#getheaders)

##### getRequestBody()

> **getRequestBody**(): `object`

Defined in:
[api/services/steps/start-session.step.ts:10](https://github.com/davinidae/umazing-musumengine/blob/3287c40709f1f448cf5e0c1e301ea35ff5829e19/src/api/services/steps/start-session.step.ts#L10)

###### Returns

`object`

###### attestation_type

> **attestation_type**: `number`

###### device_token

> **device_token**: `null` = `null`

###### Overrides

[`CoreStepService`](core.step.md#corestepservice).[`getRequestBody`](core.step.md#getrequestbody)

##### request()

> `protected` **request**(): `Promise`\<\{ `body`:
> [`StartSessionRequest`](../../models/uma-client.model.md#startsessionrequest) &
> [`RequestBase`](../../models/uma-client.model.md#requestbase); `decoded`:
> [`UmaResponse`](../../models/uma-client.model.md#umaresponse)\<[`StartSessionResponse`](../../models/uma-client.model.md#startsessionresponse)\>;
> `headers`: \{ `Accept`: `string`; `APP-VER`: `string`; `Content-Type`: `string`; `Device`:
> `string`; `RES-VER`: `string`; `SID`: `string`; `ViewerID`: `string`; `X-Unity-Version`: `string`;
> \}; \}\>

Defined in:
[api/services/steps/core.step.ts:33](https://github.com/davinidae/umazing-musumengine/blob/3287c40709f1f448cf5e0c1e301ea35ff5829e19/src/api/services/steps/core.step.ts#L33)

###### Returns

`Promise`\<\{ `body`: [`StartSessionRequest`](../../models/uma-client.model.md#startsessionrequest)
& [`RequestBase`](../../models/uma-client.model.md#requestbase); `decoded`:
[`UmaResponse`](../../models/uma-client.model.md#umaresponse)\<[`StartSessionResponse`](../../models/uma-client.model.md#startsessionresponse)\>;
`headers`: \{ `Accept`: `string`; `APP-VER`: `string`; `Content-Type`: `string`; `Device`: `string`;
`RES-VER`: `string`; `SID`: `string`; `ViewerID`: `string`; `X-Unity-Version`: `string`; \}; \}\>

###### Inherited from

[`CoreStepService`](core.step.md#corestepservice).[`request`](core.step.md#request)
