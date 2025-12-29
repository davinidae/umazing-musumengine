# api/services/steps/core.step

## Classes

### `abstract` CoreStep

Defined in:
[api/services/steps/core.step.ts:6](https://github.com/davinidae/umazing-musumengine/blob/8c2a93a99924070f3bed30bfbb56b7b18480c6b1/src/api/services/steps/core.step.ts#L6)

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
[api/services/steps/core.step.ts:10](https://github.com/davinidae/umazing-musumengine/blob/8c2a93a99924070f3bed30bfbb56b7b18480c6b1/src/api/services/steps/core.step.ts#L10)

###### Parameters

###### stepData

[`StepData`](../../models/uma-client.model.md#stepdata)

###### Returns

[`CoreStep`](#corestep)\<`TReq`, `TRes`\>

#### Properties

##### endpoint

> `abstract` **endpoint**: `string`

Defined in:
[api/services/steps/core.step.ts:7](https://github.com/davinidae/umazing-musumengine/blob/8c2a93a99924070f3bed30bfbb56b7b18480c6b1/src/api/services/steps/core.step.ts#L7)

##### stepData

> `protected` `readonly` **stepData**: [`StepData`](../../models/uma-client.model.md#stepdata)

Defined in:
[api/services/steps/core.step.ts:10](https://github.com/davinidae/umazing-musumengine/blob/8c2a93a99924070f3bed30bfbb56b7b18480c6b1/src/api/services/steps/core.step.ts#L10)

#### Methods

##### afterExecute()

> `protected` **afterExecute**(`_result`): `Promise`\<`void`\>

Defined in:
[api/services/steps/core.step.ts:65](https://github.com/davinidae/umazing-musumengine/blob/8c2a93a99924070f3bed30bfbb56b7b18480c6b1/src/api/services/steps/core.step.ts#L65)

###### Parameters

###### \_result

[`RequestResult`](../../models/uma-client.model.md#requestresult)\<`TRes`\>

###### Returns

`Promise`\<`void`\>

##### execute()

> **execute**():
> `Promise`\<[`RequestResult`](../../models/uma-client.model.md#requestresult)\<`TRes`\>\>

Defined in:
[api/services/steps/core.step.ts:69](https://github.com/davinidae/umazing-musumengine/blob/8c2a93a99924070f3bed30bfbb56b7b18480c6b1/src/api/services/steps/core.step.ts#L69)

###### Returns

`Promise`\<[`RequestResult`](../../models/uma-client.model.md#requestresult)\<`TRes`\>\>

##### getBody()

> `protected` **getBody**(): `TReq` & [`RequestBase`](../../models/uma-client.model.md#requestbase)

Defined in:
[api/services/steps/core.step.ts:27](https://github.com/davinidae/umazing-musumengine/blob/8c2a93a99924070f3bed30bfbb56b7b18480c6b1/src/api/services/steps/core.step.ts#L27)

###### Returns

`TReq` & [`RequestBase`](../../models/uma-client.model.md#requestbase)

##### getHeaders()

> `protected` **getHeaders**(): `object`

Defined in:
[api/services/steps/core.step.ts:14](https://github.com/davinidae/umazing-musumengine/blob/8c2a93a99924070f3bed30bfbb56b7b18480c6b1/src/api/services/steps/core.step.ts#L14)

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
[api/services/steps/core.step.ts:8](https://github.com/davinidae/umazing-musumengine/blob/8c2a93a99924070f3bed30bfbb56b7b18480c6b1/src/api/services/steps/core.step.ts#L8)

###### Returns

`TReq`

##### request()

> `protected` **request**(): `Promise`\<\{ `body`: `TReq` &
> [`RequestBase`](../../models/uma-client.model.md#requestbase); `decoded`:
> [`UmaResponse`](../../models/uma-client.model.md#umaresponse)\<`TRes`\>; `headers`: \{ `Accept`:
> `string`; `APP-VER`: `string`; `Content-Type`: `string`; `Device`: `string`; `RES-VER`: `string`;
> `SID`: `string`; `ViewerID`: `string`; `X-Unity-Version`: `string`; \}; \}\>

Defined in:
[api/services/steps/core.step.ts:34](https://github.com/davinidae/umazing-musumengine/blob/8c2a93a99924070f3bed30bfbb56b7b18480c6b1/src/api/services/steps/core.step.ts#L34)

###### Returns

`Promise`\<\{ `body`: `TReq` & [`RequestBase`](../../models/uma-client.model.md#requestbase);
`decoded`: [`UmaResponse`](../../models/uma-client.model.md#umaresponse)\<`TRes`\>; `headers`: \{
`Accept`: `string`; `APP-VER`: `string`; `Content-Type`: `string`; `Device`: `string`; `RES-VER`:
`string`; `SID`: `string`; `ViewerID`: `string`; `X-Unity-Version`: `string`; \}; \}\>
