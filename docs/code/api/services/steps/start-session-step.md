# api/services/steps/start-session.step

## Classes

### StartSessionStep

Defined in:
[api/services/steps/start-session.step.ts:4](https://github.com/davinidae/umazing-musumengine/blob/57e727b3c2cba8f6b015598291ecad23e61d967f/src/api/services/steps/start-session.step.ts#L4)

#### Extends

- [`CoreStep`](core.step.md#corestep)\<[`StartSessionRequest`](../../models/uma-client.model.md#startsessionrequest),
  [`StartSessionResponse`](../../models/uma-client.model.md#startsessionresponse)\>

#### Constructors

##### Constructor

> **new StartSessionStep**(`stepData`, `attestationType`): [`StartSessionStep`](#startsessionstep)

Defined in:
[api/services/steps/start-session.step.ts:14](https://github.com/davinidae/umazing-musumengine/blob/57e727b3c2cba8f6b015598291ecad23e61d967f/src/api/services/steps/start-session.step.ts#L14)

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
[api/services/steps/start-session.step.ts:16](https://github.com/davinidae/umazing-musumengine/blob/57e727b3c2cba8f6b015598291ecad23e61d967f/src/api/services/steps/start-session.step.ts#L16)

##### endpoint

> **endpoint**: `string` = `'tool/start_session'`

Defined in:
[api/services/steps/start-session.step.ts:5](https://github.com/davinidae/umazing-musumengine/blob/57e727b3c2cba8f6b015598291ecad23e61d967f/src/api/services/steps/start-session.step.ts#L5)

###### Overrides

[`CoreStep`](core.step.md#corestep).[`endpoint`](core.step.md#endpoint)

##### stepData

> `protected` `readonly` **stepData**: [`StepData`](../../models/uma-client.model.md#stepdata)

Defined in:
[api/services/steps/start-session.step.ts:15](https://github.com/davinidae/umazing-musumengine/blob/57e727b3c2cba8f6b015598291ecad23e61d967f/src/api/services/steps/start-session.step.ts#L15)

###### Inherited from

[`CoreStep`](core.step.md#corestep).[`stepData`](core.step.md#stepdata)

#### Methods

##### execute()

> **execute**():
> `Promise`\<[`RequestResult`](../../models/uma-client.model.md#requestresult)\<[`StartSessionResponse`](../../models/uma-client.model.md#startsessionresponse)\>
> & `object`\>

Defined in:
[api/services/steps/start-session.step.ts:21](https://github.com/davinidae/umazing-musumengine/blob/57e727b3c2cba8f6b015598291ecad23e61d967f/src/api/services/steps/start-session.step.ts#L21)

###### Returns

`Promise`\<[`RequestResult`](../../models/uma-client.model.md#requestresult)\<[`StartSessionResponse`](../../models/uma-client.model.md#startsessionresponse)\>
& `object`\>

###### Overrides

[`CoreStep`](core.step.md#corestep).[`execute`](core.step.md#execute)

##### getBody()

> `protected` **getBody**():
> [`StartSessionRequest`](../../models/uma-client.model.md#startsessionrequest) &
> [`RequestBase`](../../models/uma-client.model.md#requestbase)

Defined in:
[api/services/steps/core.step.ts:26](https://github.com/davinidae/umazing-musumengine/blob/57e727b3c2cba8f6b015598291ecad23e61d967f/src/api/services/steps/core.step.ts#L26)

###### Returns

[`StartSessionRequest`](../../models/uma-client.model.md#startsessionrequest) &
[`RequestBase`](../../models/uma-client.model.md#requestbase)

###### Inherited from

[`CoreStep`](core.step.md#corestep).[`getBody`](core.step.md#getbody)

##### getHeaders()

> `protected` **getHeaders**(): `object`

Defined in:
[api/services/steps/core.step.ts:13](https://github.com/davinidae/umazing-musumengine/blob/57e727b3c2cba8f6b015598291ecad23e61d967f/src/api/services/steps/core.step.ts#L13)

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
[api/services/steps/start-session.step.ts:7](https://github.com/davinidae/umazing-musumengine/blob/57e727b3c2cba8f6b015598291ecad23e61d967f/src/api/services/steps/start-session.step.ts#L7)

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
> [`StartSessionRequest`](../../models/uma-client.model.md#startsessionrequest) &
> [`RequestBase`](../../models/uma-client.model.md#requestbase); `decoded`:
> [`UmaResponse`](../../models/uma-client.model.md#umaresponse)\<[`StartSessionResponse`](../../models/uma-client.model.md#startsessionresponse)\>;
> `headers`: \{ `Accept`: `string`; `APP-VER`: `string`; `Content-Type`: `string`; `Device`:
> `string`; `RES-VER`: `string`; `SID`: `string`; `ViewerID`: `string`; `X-Unity-Version`: `string`;
> \}; \}\>

Defined in:
[api/services/steps/core.step.ts:33](https://github.com/davinidae/umazing-musumengine/blob/57e727b3c2cba8f6b015598291ecad23e61d967f/src/api/services/steps/core.step.ts#L33)

###### Returns

`Promise`\<\{ `body`: [`StartSessionRequest`](../../models/uma-client.model.md#startsessionrequest)
& [`RequestBase`](../../models/uma-client.model.md#requestbase); `decoded`:
[`UmaResponse`](../../models/uma-client.model.md#umaresponse)\<[`StartSessionResponse`](../../models/uma-client.model.md#startsessionresponse)\>;
`headers`: \{ `Accept`: `string`; `APP-VER`: `string`; `Content-Type`: `string`; `Device`: `string`;
`RES-VER`: `string`; `SID`: `string`; `ViewerID`: `string`; `X-Unity-Version`: `string`; \}; \}\>

###### Inherited from

[`CoreStep`](core.step.md#corestep).[`request`](core.step.md#request)
