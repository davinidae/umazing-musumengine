# api/services/steps/core.step

## Classes

### `abstract` CoreStep

Defined in:
[api/services/steps/core.step.ts:43](https://github.com/davinidae/umazing-musumengine/blob/214adb783384a11b15b86407e00e671feb1ec440/src/api/services/steps/core.step.ts#L43)

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
[api/services/steps/core.step.ts:47](https://github.com/davinidae/umazing-musumengine/blob/214adb783384a11b15b86407e00e671feb1ec440/src/api/services/steps/core.step.ts#L47)

###### Parameters

###### stepData

[`StepData`](../../models/uma-client.model.md#stepdata)

###### Returns

[`CoreStep`](#corestep)\<`TReq`, `TRes`\>

#### Properties

##### endpoint

> `abstract` **endpoint**: `string`

Defined in:
[api/services/steps/core.step.ts:44](https://github.com/davinidae/umazing-musumengine/blob/214adb783384a11b15b86407e00e671feb1ec440/src/api/services/steps/core.step.ts#L44)

##### stepData

> `protected` `readonly` **stepData**: [`StepData`](../../models/uma-client.model.md#stepdata)

Defined in:
[api/services/steps/core.step.ts:47](https://github.com/davinidae/umazing-musumengine/blob/214adb783384a11b15b86407e00e671feb1ec440/src/api/services/steps/core.step.ts#L47)

#### Methods

##### afterExecute()

> `protected` **afterExecute**(`_result`): `void` \| `Promise`\<`void`\>

Defined in:
[api/services/steps/core.step.ts:134](https://github.com/davinidae/umazing-musumengine/blob/214adb783384a11b15b86407e00e671feb1ec440/src/api/services/steps/core.step.ts#L134)

Optional hook executed after `request()` and before returning from `execute()`.

###### Parameters

###### \_result

[`RequestResult`](../../models/uma-client.model.md#requestresult)\<`TRes`\>

###### Returns

`void` \| `Promise`\<`void`\>

##### buildUpstreamUrl()

> `private` **buildUpstreamUrl**(): `string`

Defined in:
[api/services/steps/core.step.ts:73](https://github.com/davinidae/umazing-musumengine/blob/214adb783384a11b15b86407e00e671feb1ec440/src/api/services/steps/core.step.ts#L73)

###### Returns

`string`

##### decodeResponseBody()

> `private` **decodeResponseBody**(`bodyB64`):
> [`UmaResponse`](../../models/uma-client.model.md#umaresponse)\<`TRes`\>

Defined in:
[api/services/steps/core.step.ts:103](https://github.com/davinidae/umazing-musumengine/blob/214adb783384a11b15b86407e00e671feb1ec440/src/api/services/steps/core.step.ts#L103)

###### Parameters

###### bodyB64

`string`

###### Returns

[`UmaResponse`](../../models/uma-client.model.md#umaresponse)\<`TRes`\>

##### encodeRequestB64()

> `private` **encodeRequestB64**(`body`): `string`

Defined in:
[api/services/steps/core.step.ts:77](https://github.com/davinidae/umazing-musumengine/blob/214adb783384a11b15b86407e00e671feb1ec440/src/api/services/steps/core.step.ts#L77)

###### Parameters

###### body

`Record`\<`string`, `unknown`\>

###### Returns

`string`

##### execute()

> **execute**():
> `Promise`\<[`RequestResult`](../../models/uma-client.model.md#requestresult)\<`TRes`\>\>

Defined in:
[api/services/steps/core.step.ts:139](https://github.com/davinidae/umazing-musumengine/blob/214adb783384a11b15b86407e00e671feb1ec440/src/api/services/steps/core.step.ts#L139)

Execute the step end-to-end.

###### Returns

`Promise`\<[`RequestResult`](../../models/uma-client.model.md#requestresult)\<`TRes`\>\>

##### getBody()

> `protected` **getBody**(): `Record`\<`string`, `unknown`\>

Defined in:
[api/services/steps/core.step.ts:66](https://github.com/davinidae/umazing-musumengine/blob/214adb783384a11b15b86407e00e671feb1ec440/src/api/services/steps/core.step.ts#L66)

Combine the step-specific body with common request fields from StepData.

###### Returns

`Record`\<`string`, `unknown`\>

##### getHeaders()

> `protected` **getHeaders**(): `Record`\<`string`, `string`\>

Defined in:
[api/services/steps/core.step.ts:52](https://github.com/davinidae/umazing-musumengine/blob/214adb783384a11b15b86407e00e671feb1ec440/src/api/services/steps/core.step.ts#L52)

Build upstream headers expected by the game API.

###### Returns

`Record`\<`string`, `string`\>

##### getRequestBody()

> `abstract` **getRequestBody**(): `TReq`

Defined in:
[api/services/steps/core.step.ts:45](https://github.com/davinidae/umazing-musumengine/blob/214adb783384a11b15b86407e00e671feb1ec440/src/api/services/steps/core.step.ts#L45)

###### Returns

`TReq`

##### maybeUpdateSessionId()

> `private` **maybeUpdateSessionId**(`decoded`): `void`

Defined in:
[api/services/steps/core.step.ts:108](https://github.com/davinidae/umazing-musumengine/blob/214adb783384a11b15b86407e00e671feb1ec440/src/api/services/steps/core.step.ts#L108)

###### Parameters

###### decoded

[`UmaResponse`](../../models/uma-client.model.md#umaresponse)\<`TRes`\>

###### Returns

`void`

##### postBase64()

> `private` **postBase64**(`url`, `requestB64`, `headers`): `Promise`\<`string`\>

Defined in:
[api/services/steps/core.step.ts:81](https://github.com/davinidae/umazing-musumengine/blob/214adb783384a11b15b86407e00e671feb1ec440/src/api/services/steps/core.step.ts#L81)

###### Parameters

###### url

`string`

###### requestB64

`string`

###### headers

`Record`\<`string`, `string`\>

###### Returns

`Promise`\<`string`\>

##### request()

> `protected` **request**():
> `Promise`\<`Omit`\<[`RequestResult`](../../models/uma-client.model.md#requestresult)\<`TRes`\>,
> `"endpoint"`\>\>

Defined in:
[api/services/steps/core.step.ts:117](https://github.com/davinidae/umazing-musumengine/blob/214adb783384a11b15b86407e00e671feb1ec440/src/api/services/steps/core.step.ts#L117)

Execute the upstream HTTP request and return decoded response + diagnostics.

###### Returns

`Promise`\<`Omit`\<[`RequestResult`](../../models/uma-client.model.md#requestresult)\<`TRes`\>,
`"endpoint"`\>\>
