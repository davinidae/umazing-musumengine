# api/services/steps/core.step

## Classes

### `abstract` CoreStep

Defined in:
[api/services/steps/core.step.ts:42](https://github.com/davinidae/umazing-musumengine/blob/23b121617aef679f48a8d2fac9ca051b023fc6da/src/api/services/steps/core.step.ts#L42)

Base class for a single API “step”.

A step:

- builds a request payload
- encodes it to the Uma wire format (Base64)
- posts it to the upstream endpoint
- decrypts + decodes the response
- optionally updates session state

#### Extended by

- [`LoadIndexStep`](load-index.step.md#loadindexstep)
- [`StartSessionStep`](start-session.step.md#startsessionstep)
- [`ToolPreSignupStep`](tool-pre_signup.step.md#toolpresignupstep)
- [`ToolSignupStep`](tool-signup.step.md#toolsignupstep)
- [`TutorialSkipStep`](tutorial-skip.step.md#tutorialskipstep)
- [`UserChangeNameStep`](user-change_name.step.md#userchangenamestep)
- [`UserChangeSexStep`](user-change_sex.step.md#userchangesexstep)

#### Type Parameters

##### TReq

`TReq` _extends_ `object`

##### TRes

`TRes`

#### Constructors

##### Constructor

> **new CoreStep**\<`TReq`, `TRes`\>(`stepData`): [`CoreStep`](#corestep)\<`TReq`, `TRes`\>

Defined in:
[api/services/steps/core.step.ts:46](https://github.com/davinidae/umazing-musumengine/blob/23b121617aef679f48a8d2fac9ca051b023fc6da/src/api/services/steps/core.step.ts#L46)

###### Parameters

###### stepData

[`StepData`](../../models/uma-client.model.md#stepdata)

###### Returns

[`CoreStep`](#corestep)\<`TReq`, `TRes`\>

#### Properties

##### endpoint

> `abstract` **endpoint**: `string`

Defined in:
[api/services/steps/core.step.ts:43](https://github.com/davinidae/umazing-musumengine/blob/23b121617aef679f48a8d2fac9ca051b023fc6da/src/api/services/steps/core.step.ts#L43)

##### stepData

> `protected` `readonly` **stepData**: [`StepData`](../../models/uma-client.model.md#stepdata)

Defined in:
[api/services/steps/core.step.ts:46](https://github.com/davinidae/umazing-musumengine/blob/23b121617aef679f48a8d2fac9ca051b023fc6da/src/api/services/steps/core.step.ts#L46)

#### Methods

##### afterExecute()

> `protected` **afterExecute**(`_result`): `Promise`\<`void`\>

Defined in:
[api/services/steps/core.step.ts:105](https://github.com/davinidae/umazing-musumengine/blob/23b121617aef679f48a8d2fac9ca051b023fc6da/src/api/services/steps/core.step.ts#L105)

Optional hook executed after `request()` and before returning from `execute()`.

###### Parameters

###### \_result

[`RequestResult`](../../models/uma-client.model.md#requestresult)\<`TRes`\>

###### Returns

`Promise`\<`void`\>

##### execute()

> **execute**():
> `Promise`\<[`RequestResult`](../../models/uma-client.model.md#requestresult)\<`TRes`\>\>

Defined in:
[api/services/steps/core.step.ts:110](https://github.com/davinidae/umazing-musumengine/blob/23b121617aef679f48a8d2fac9ca051b023fc6da/src/api/services/steps/core.step.ts#L110)

Execute the step end-to-end.

###### Returns

`Promise`\<[`RequestResult`](../../models/uma-client.model.md#requestresult)\<`TRes`\>\>

##### getBody()

> `protected` **getBody**(): `TReq` & [`RequestBase`](../../models/uma-client.model.md#requestbase)

Defined in:
[api/services/steps/core.step.ts:65](https://github.com/davinidae/umazing-musumengine/blob/23b121617aef679f48a8d2fac9ca051b023fc6da/src/api/services/steps/core.step.ts#L65)

Combine the step-specific body with common request fields from StepData.

###### Returns

`TReq` & [`RequestBase`](../../models/uma-client.model.md#requestbase)

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

##### getRequestBody()

> `abstract` **getRequestBody**(): `TReq`

Defined in:
[api/services/steps/core.step.ts:44](https://github.com/davinidae/umazing-musumengine/blob/23b121617aef679f48a8d2fac9ca051b023fc6da/src/api/services/steps/core.step.ts#L44)

###### Returns

`TReq`

##### request()

> `protected` **request**(): `Promise`\<\{ `body`: `TReq` &
> [`RequestBase`](../../models/uma-client.model.md#requestbase); `decoded`:
> [`UmaResponse`](../../models/uma-client.model.md#umaresponse)\<`TRes`\>; `headers`: \{ `Accept`:
> `string`; `APP-VER`: `string`; `Content-Type`: `string`; `Device`: `string`; `RES-VER`: `string`;
> `SID`: `string`; `ViewerID`: `string`; `X-Unity-Version`: `string`; \}; \}\>

Defined in:
[api/services/steps/core.step.ts:73](https://github.com/davinidae/umazing-musumengine/blob/23b121617aef679f48a8d2fac9ca051b023fc6da/src/api/services/steps/core.step.ts#L73)

Execute the upstream HTTP request and return decoded response + diagnostics.

###### Returns

`Promise`\<\{ `body`: `TReq` & [`RequestBase`](../../models/uma-client.model.md#requestbase);
`decoded`: [`UmaResponse`](../../models/uma-client.model.md#umaresponse)\<`TRes`\>; `headers`: \{
`Accept`: `string`; `APP-VER`: `string`; `Content-Type`: `string`; `Device`: `string`; `RES-VER`:
`string`; `SID`: `string`; `ViewerID`: `string`; `X-Unity-Version`: `string`; \}; \}\>
