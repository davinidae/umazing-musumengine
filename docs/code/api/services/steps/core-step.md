# api/services/steps/core.step

## Classes

### `abstract` CoreStep

Defined in:
[api/services/steps/core.step.ts:5](https://github.com/davinidae/umazing-musumengine/blob/57e727b3c2cba8f6b015598291ecad23e61d967f/src/api/services/steps/core.step.ts#L5)

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
[api/services/steps/core.step.ts:9](https://github.com/davinidae/umazing-musumengine/blob/57e727b3c2cba8f6b015598291ecad23e61d967f/src/api/services/steps/core.step.ts#L9)

###### Parameters

###### stepData

[`StepData`](../../models/uma-client.model.md#stepdata)

###### Returns

[`CoreStep`](#corestep)\<`TReq`, `TRes`\>

#### Properties

##### endpoint

> `abstract` **endpoint**: `string`

Defined in:
[api/services/steps/core.step.ts:6](https://github.com/davinidae/umazing-musumengine/blob/57e727b3c2cba8f6b015598291ecad23e61d967f/src/api/services/steps/core.step.ts#L6)

##### stepData

> `protected` `readonly` **stepData**: [`StepData`](../../models/uma-client.model.md#stepdata)

Defined in:
[api/services/steps/core.step.ts:9](https://github.com/davinidae/umazing-musumengine/blob/57e727b3c2cba8f6b015598291ecad23e61d967f/src/api/services/steps/core.step.ts#L9)

#### Methods

##### execute()

> **execute**():
> `Promise`\<[`RequestResult`](../../models/uma-client.model.md#requestresult)\<`TRes`\>\>

Defined in:
[api/services/steps/core.step.ts:64](https://github.com/davinidae/umazing-musumengine/blob/57e727b3c2cba8f6b015598291ecad23e61d967f/src/api/services/steps/core.step.ts#L64)

###### Returns

`Promise`\<[`RequestResult`](../../models/uma-client.model.md#requestresult)\<`TRes`\>\>

##### getBody()

> `protected` **getBody**(): `TReq` & [`RequestBase`](../../models/uma-client.model.md#requestbase)

Defined in:
[api/services/steps/core.step.ts:26](https://github.com/davinidae/umazing-musumengine/blob/57e727b3c2cba8f6b015598291ecad23e61d967f/src/api/services/steps/core.step.ts#L26)

###### Returns

`TReq` & [`RequestBase`](../../models/uma-client.model.md#requestbase)

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

##### getRequestBody()

> `abstract` **getRequestBody**(): `TReq`

Defined in:
[api/services/steps/core.step.ts:7](https://github.com/davinidae/umazing-musumengine/blob/57e727b3c2cba8f6b015598291ecad23e61d967f/src/api/services/steps/core.step.ts#L7)

###### Returns

`TReq`

##### request()

> `protected` **request**(): `Promise`\<\{ `body`: `TReq` &
> [`RequestBase`](../../models/uma-client.model.md#requestbase); `decoded`:
> [`UmaResponse`](../../models/uma-client.model.md#umaresponse)\<`TRes`\>; `headers`: \{ `Accept`:
> `string`; `APP-VER`: `string`; `Content-Type`: `string`; `Device`: `string`; `RES-VER`: `string`;
> `SID`: `string`; `ViewerID`: `string`; `X-Unity-Version`: `string`; \}; \}\>

Defined in:
[api/services/steps/core.step.ts:33](https://github.com/davinidae/umazing-musumengine/blob/57e727b3c2cba8f6b015598291ecad23e61d967f/src/api/services/steps/core.step.ts#L33)

###### Returns

`Promise`\<\{ `body`: `TReq` & [`RequestBase`](../../models/uma-client.model.md#requestbase);
`decoded`: [`UmaResponse`](../../models/uma-client.model.md#umaresponse)\<`TRes`\>; `headers`: \{
`Accept`: `string`; `APP-VER`: `string`; `Content-Type`: `string`; `Device`: `string`; `RES-VER`:
`string`; `SID`: `string`; `ViewerID`: `string`; `X-Unity-Version`: `string`; \}; \}\>
