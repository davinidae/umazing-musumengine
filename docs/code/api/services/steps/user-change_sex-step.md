# api/services/steps/user-change_sex.step

## Classes

### UserChangeSexStep

Defined in:
[api/services/steps/user-change_sex.step.ts:3](https://github.com/davinidae/umazing-musumengine/blob/23b121617aef679f48a8d2fac9ca051b023fc6da/src/api/services/steps/user-change_sex.step.ts#L3)

Base class for a single API “step”.

A step:

- builds a request payload
- encodes it to the Uma wire format (Base64)
- posts it to the upstream endpoint
- decrypts + decodes the response
- optionally updates session state

#### Extends

- [`CoreStep`](core.step.md#corestep)\<[`UserChangeSex`](../../../umatypes/namespaces/Umatypes/namespaces/Request.md#userchangesex),
  [`UserChangeSex`](../../../umatypes/namespaces/Umatypes/namespaces/Response.md#userchangesex)\>

#### Constructors

##### Constructor

> **new UserChangeSexStep**(`stepData`): [`UserChangeSexStep`](#userchangesexstep)

Defined in:
[api/services/steps/core.step.ts:46](https://github.com/davinidae/umazing-musumengine/blob/23b121617aef679f48a8d2fac9ca051b023fc6da/src/api/services/steps/core.step.ts#L46)

###### Parameters

###### stepData

[`StepData`](../../models/uma-client.model.md#stepdata)

###### Returns

[`UserChangeSexStep`](#userchangesexstep)

###### Inherited from

[`CoreStep`](core.step.md#corestep).[`constructor`](core.step.md#constructor)

#### Properties

##### endpoint

> **endpoint**: `string` = `'user/change_sex'`

Defined in:
[api/services/steps/user-change_sex.step.ts:7](https://github.com/davinidae/umazing-musumengine/blob/23b121617aef679f48a8d2fac9ca051b023fc6da/src/api/services/steps/user-change_sex.step.ts#L7)

###### Overrides

[`CoreStep`](core.step.md#corestep).[`endpoint`](core.step.md#endpoint)

##### stepData

> `protected` `readonly` **stepData**: [`StepData`](../../models/uma-client.model.md#stepdata)

Defined in:
[api/services/steps/core.step.ts:46](https://github.com/davinidae/umazing-musumengine/blob/23b121617aef679f48a8d2fac9ca051b023fc6da/src/api/services/steps/core.step.ts#L46)

###### Inherited from

[`CoreStep`](core.step.md#corestep).[`stepData`](core.step.md#stepdata)

#### Methods

##### afterExecute()

> `protected` **afterExecute**(`_result`): `Promise`\<`void`\>

Defined in:
[api/services/steps/core.step.ts:105](https://github.com/davinidae/umazing-musumengine/blob/23b121617aef679f48a8d2fac9ca051b023fc6da/src/api/services/steps/core.step.ts#L105)

Optional hook executed after `request()` and before returning from `execute()`.

###### Parameters

###### \_result

[`RequestResult`](../../models/uma-client.model.md#requestresult)\<`unknown`\>

###### Returns

`Promise`\<`void`\>

###### Inherited from

[`CoreStep`](core.step.md#corestep).[`afterExecute`](core.step.md#afterexecute)

##### execute()

> **execute**():
> `Promise`\<[`RequestResult`](../../models/uma-client.model.md#requestresult)\<`unknown`\>\>

Defined in:
[api/services/steps/core.step.ts:110](https://github.com/davinidae/umazing-musumengine/blob/23b121617aef679f48a8d2fac9ca051b023fc6da/src/api/services/steps/core.step.ts#L110)

Execute the step end-to-end.

###### Returns

`Promise`\<[`RequestResult`](../../models/uma-client.model.md#requestresult)\<`unknown`\>\>

###### Inherited from

[`CoreStep`](core.step.md#corestep).[`execute`](core.step.md#execute)

##### getBody()

> `protected` **getBody**():
> [`UserChangeSex`](../../../umatypes/namespaces/Umatypes/namespaces/Request.md#userchangesex) &
> [`RequestBase`](../../models/uma-client.model.md#requestbase)

Defined in:
[api/services/steps/core.step.ts:65](https://github.com/davinidae/umazing-musumengine/blob/23b121617aef679f48a8d2fac9ca051b023fc6da/src/api/services/steps/core.step.ts#L65)

Combine the step-specific body with common request fields from StepData.

###### Returns

[`UserChangeSex`](../../../umatypes/namespaces/Umatypes/namespaces/Request.md#userchangesex) &
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
[api/services/steps/user-change_sex.step.ts:9](https://github.com/davinidae/umazing-musumengine/blob/23b121617aef679f48a8d2fac9ca051b023fc6da/src/api/services/steps/user-change_sex.step.ts#L9)

###### Returns

`object`

###### sex

> **sex**: `number` = `1`

###### Overrides

[`CoreStep`](core.step.md#corestep).[`getRequestBody`](core.step.md#getrequestbody)

##### request()

> `protected` **request**(): `Promise`\<\{ `body`:
> [`UserChangeSex`](../../../umatypes/namespaces/Umatypes/namespaces/Request.md#userchangesex) &
> [`RequestBase`](../../models/uma-client.model.md#requestbase); `decoded`:
> [`UmaResponse`](../../models/uma-client.model.md#umaresponse)\<`unknown`\>; `headers`: \{
> `Accept`: `string`; `APP-VER`: `string`; `Content-Type`: `string`; `Device`: `string`; `RES-VER`:
> `string`; `SID`: `string`; `ViewerID`: `string`; `X-Unity-Version`: `string`; \}; \}\>

Defined in:
[api/services/steps/core.step.ts:73](https://github.com/davinidae/umazing-musumengine/blob/23b121617aef679f48a8d2fac9ca051b023fc6da/src/api/services/steps/core.step.ts#L73)

Execute the upstream HTTP request and return decoded response + diagnostics.

###### Returns

`Promise`\<\{ `body`:
[`UserChangeSex`](../../../umatypes/namespaces/Umatypes/namespaces/Request.md#userchangesex) &
[`RequestBase`](../../models/uma-client.model.md#requestbase); `decoded`:
[`UmaResponse`](../../models/uma-client.model.md#umaresponse)\<`unknown`\>; `headers`: \{ `Accept`:
`string`; `APP-VER`: `string`; `Content-Type`: `string`; `Device`: `string`; `RES-VER`: `string`;
`SID`: `string`; `ViewerID`: `string`; `X-Unity-Version`: `string`; \}; \}\>

###### Inherited from

[`CoreStep`](core.step.md#corestep).[`request`](core.step.md#request)
