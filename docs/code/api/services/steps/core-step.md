# api/services/steps/core.step

## Classes

### `abstract` CoreStep

Defined in:
[src/api/services/steps/core.step.ts:69](https://github.com/davinidae/umazing-musumengine/blob/e6f583dfe0091ce918b2c2e16354b5b128f202d9/src/api/services/steps/core.step.ts#L69)

CoreStep.

Base class for a single API “step”.

A step:

- builds a request payload
- encodes it to the Uma wire format (Base64)
- posts it to the upstream endpoint
- decrypts + decodes the response
- optionally updates session state

#### Remarks

Type: `CoreStep<TReq, TRes>`.

#### Extended by

- [`LoadIndexStep`](load/index.step.md#loadindexstep)
- [`PresentsIndexStep`](presents/index.step.md#presentsindexstep)
- [`PresentsReceiveAllStep`](presents/receive_all.step.md#presentsreceiveallstep)
- [`ToolPreSignupStep`](tool/pre_signup.step.md#toolpresignupstep)
- [`ToolSignupStep`](tool/signup.step.md#toolsignupstep)
- [`StartSessionStep`](tool/start_session.step.md#startsessionstep)
- [`TutorialSkipStep`](tutorial/skip.step.md#tutorialskipstep)
- [`UserChangeNameStep`](user/change_name.step.md#userchangenamestep)
- [`UserChangeSexStep`](user/change_sex.step.md#userchangesexstep)

#### Type Parameters

##### TReq

`TReq` _extends_ `object`

##### TRes

`TRes`

#### Constructors

##### Constructor

> **new CoreStep**\<`TReq`, `TRes`\>(`umaClient`, ...`_extra`): [`CoreStep`](#corestep)\<`TReq`,
> `TRes`\>

Defined in:
[src/api/services/steps/core.step.ts:88](https://github.com/davinidae/umazing-musumengine/blob/e6f583dfe0091ce918b2c2e16354b5b128f202d9/src/api/services/steps/core.step.ts#L88)

constructor.

###### Parameters

###### umaClient

[`UmaClient`](../uma-client.service.md#umaclient)

Type: `UmaClient`.

###### \_extra

...`any`[]

Type: `any[]`.

###### Returns

[`CoreStep`](#corestep)\<`TReq`, `TRes`\>

Type: `CoreStep<TReq, TRes>`.

#### Properties

##### endpoint

> `abstract` **endpoint**: `string`

Defined in:
[src/api/services/steps/core.step.ts:74](https://github.com/davinidae/umazing-musumengine/blob/e6f583dfe0091ce918b2c2e16354b5b128f202d9/src/api/services/steps/core.step.ts#L74)

endpoint.

###### Remarks

Type: `string`.

##### umaClient

> `protected` `readonly` **umaClient**: [`UmaClient`](../uma-client.service.md#umaclient)

Defined in:
[src/api/services/steps/core.step.ts:89](https://github.com/davinidae/umazing-musumengine/blob/e6f583dfe0091ce918b2c2e16354b5b128f202d9/src/api/services/steps/core.step.ts#L89)

Type: `UmaClient`.

#### Methods

##### afterExecute()

> `protected` **afterExecute**(`_result`): `void` \| `Promise`\<`void`\>

Defined in:
[src/api/services/steps/core.step.ts:269](https://github.com/davinidae/umazing-musumengine/blob/e6f583dfe0091ce918b2c2e16354b5b128f202d9/src/api/services/steps/core.step.ts#L269)

afterExecute.

###### Parameters

###### \_result

[`RequestResult`](../../models/uma-client.model.md#requestresult)\<`TRes`\>

Type: `RequestResult<TRes>`.

###### Returns

`void` \| `Promise`\<`void`\>

Type: `void | Promise<void>`.

##### buildUpstreamUrl()

> `private` **buildUpstreamUrl**(): `string`

Defined in:
[src/api/services/steps/core.step.ts:133](https://github.com/davinidae/umazing-musumengine/blob/e6f583dfe0091ce918b2c2e16354b5b128f202d9/src/api/services/steps/core.step.ts#L133)

buildUpstreamUrl.

###### Returns

`string`

Type: `string`.

##### decodeResponseBody()

> `private` **decodeResponseBody**(`bodyB64`):
> [`UmaResponse`](../../models/uma-client.model.md#umaresponse)\<`TRes`\>

Defined in:
[src/api/services/steps/core.step.ts:185](https://github.com/davinidae/umazing-musumengine/blob/e6f583dfe0091ce918b2c2e16354b5b128f202d9/src/api/services/steps/core.step.ts#L185)

decodeResponseBody.

###### Parameters

###### bodyB64

`string`

Type: `string`.

###### Returns

[`UmaResponse`](../../models/uma-client.model.md#umaresponse)\<`TRes`\>

Type: `UmaResponse<TRes>`.

##### encodeRequestB64()

> `private` **encodeRequestB64**(`body`): `string`

Defined in:
[src/api/services/steps/core.step.ts:142](https://github.com/davinidae/umazing-musumengine/blob/e6f583dfe0091ce918b2c2e16354b5b128f202d9/src/api/services/steps/core.step.ts#L142)

encodeRequestB64.

###### Parameters

###### body

`Record`\<`string`, `unknown`\>

Type: `Record<string, unknown>`.

###### Returns

`string`

Type: `string`.

##### execute()

> **execute**():
> `Promise`\<[`RequestResult`](../../models/uma-client.model.md#requestresult)\<`TRes`\>\>

Defined in:
[src/api/services/steps/core.step.ts:278](https://github.com/davinidae/umazing-musumengine/blob/e6f583dfe0091ce918b2c2e16354b5b128f202d9/src/api/services/steps/core.step.ts#L278)

execute (async).

###### Returns

`Promise`\<[`RequestResult`](../../models/uma-client.model.md#requestresult)\<`TRes`\>\>

Type: `Promise<RequestResult<TRes>>`.

##### getBody()

> `protected` **getBody**(): `Record`\<`string`, `unknown`\>

Defined in:
[src/api/services/steps/core.step.ts:122](https://github.com/davinidae/umazing-musumengine/blob/e6f583dfe0091ce918b2c2e16354b5b128f202d9/src/api/services/steps/core.step.ts#L122)

getBody.

Combine the step-specific body with common request fields from StepData.

###### Returns

`Record`\<`string`, `unknown`\>

Type: `Record<string, unknown>`.

##### getHeaders()

> `protected` **getHeaders**(): `Record`\<`string`, `string`\>

Defined in:
[src/api/services/steps/core.step.ts:102](https://github.com/davinidae/umazing-musumengine/blob/e6f583dfe0091ce918b2c2e16354b5b128f202d9/src/api/services/steps/core.step.ts#L102)

getHeaders.

Build upstream headers expected by the game API.

###### Returns

`Record`\<`string`, `string`\>

Type: `Record<string, string>`.

##### getRequestBody()

> `abstract` **getRequestBody**(): `TReq`

Defined in:
[src/api/services/steps/core.step.ts:80](https://github.com/davinidae/umazing-musumengine/blob/e6f583dfe0091ce918b2c2e16354b5b128f202d9/src/api/services/steps/core.step.ts#L80)

getRequestBody.

###### Returns

`TReq`

Type: `TReq`.

###### Remarks

Source: `abstract getRequestBody(): TReq;`.

##### maybeUpdateSessionId()

> `private` **maybeUpdateSessionId**(`decoded`): `void`

Defined in:
[src/api/services/steps/core.step.ts:199](https://github.com/davinidae/umazing-musumengine/blob/e6f583dfe0091ce918b2c2e16354b5b128f202d9/src/api/services/steps/core.step.ts#L199)

maybeUpdateSessionId.

###### Parameters

###### decoded

[`UmaResponse`](../../models/uma-client.model.md#umaresponse)\<`TRes`\>

Type: `UmaResponse<TRes>`.

###### Returns

`void`

##### postBase64()

> `private` **postBase64**(`url`, `requestB64`, `headers`): `Promise`\<`string`\>

Defined in:
[src/api/services/steps/core.step.ts:153](https://github.com/davinidae/umazing-musumengine/blob/e6f583dfe0091ce918b2c2e16354b5b128f202d9/src/api/services/steps/core.step.ts#L153)

postBase64 (async).

###### Parameters

###### url

`string`

Type: `string`.

###### requestB64

`string`

Type: `string`.

###### headers

`Record`\<`string`, `string`\>

Type: `Record<string, string>`.

###### Returns

`Promise`\<`string`\>

Type: `Promise<string>`.

##### request()

> `protected` **request**():
> `Promise`\<`Omit`\<[`RequestResult`](../../models/uma-client.model.md#requestresult)\<`TRes`\>,
> `"endpoint"` \| `"name"`\>\>

Defined in:
[src/api/services/steps/core.step.ts:217](https://github.com/davinidae/umazing-musumengine/blob/e6f583dfe0091ce918b2c2e16354b5b128f202d9/src/api/services/steps/core.step.ts#L217)

request (async).

###### Returns

`Promise`\<`Omit`\<[`RequestResult`](../../models/uma-client.model.md#requestresult)\<`TRes`\>,
`"endpoint"` \| `"name"`\>\>

Type: `Promise<Omit<RequestResult<TRes>, "name" | "endpoint">>`.
