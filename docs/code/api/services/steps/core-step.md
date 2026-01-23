# api/services/steps/core.step

## Classes

### `abstract` CoreStep

Defined in:
[src/api/services/steps/core.step.ts:69](https://github.com/davinidae/umazing-musumengine/blob/aeab44e843910aee776ca8e80ac77feaac919c49/src/api/services/steps/core.step.ts#L69)

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
[src/api/services/steps/core.step.ts:88](https://github.com/davinidae/umazing-musumengine/blob/aeab44e843910aee776ca8e80ac77feaac919c49/src/api/services/steps/core.step.ts#L88)

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
[src/api/services/steps/core.step.ts:74](https://github.com/davinidae/umazing-musumengine/blob/aeab44e843910aee776ca8e80ac77feaac919c49/src/api/services/steps/core.step.ts#L74)

endpoint.

###### Remarks

Type: `string`.

##### umaClient

> `protected` `readonly` **umaClient**: [`UmaClient`](../uma-client.service.md#umaclient)

Defined in:
[src/api/services/steps/core.step.ts:89](https://github.com/davinidae/umazing-musumengine/blob/aeab44e843910aee776ca8e80ac77feaac919c49/src/api/services/steps/core.step.ts#L89)

Type: `UmaClient`.

#### Methods

##### afterExecute()

> `protected` **afterExecute**(`_result`): `void` \| `Promise`\<`void`\>

Defined in:
[src/api/services/steps/core.step.ts:282](https://github.com/davinidae/umazing-musumengine/blob/aeab44e843910aee776ca8e80ac77feaac919c49/src/api/services/steps/core.step.ts#L282)

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
[src/api/services/steps/core.step.ts:146](https://github.com/davinidae/umazing-musumengine/blob/aeab44e843910aee776ca8e80ac77feaac919c49/src/api/services/steps/core.step.ts#L146)

buildUpstreamUrl.

###### Returns

`string`

Type: `string`.

##### decodeResponseBody()

> `private` **decodeResponseBody**(`bodyB64`):
> [`UmaResponse`](../../models/uma-client.model.md#umaresponse)\<`TRes`\>

Defined in:
[src/api/services/steps/core.step.ts:198](https://github.com/davinidae/umazing-musumengine/blob/aeab44e843910aee776ca8e80ac77feaac919c49/src/api/services/steps/core.step.ts#L198)

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
[src/api/services/steps/core.step.ts:155](https://github.com/davinidae/umazing-musumengine/blob/aeab44e843910aee776ca8e80ac77feaac919c49/src/api/services/steps/core.step.ts#L155)

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
[src/api/services/steps/core.step.ts:291](https://github.com/davinidae/umazing-musumengine/blob/aeab44e843910aee776ca8e80ac77feaac919c49/src/api/services/steps/core.step.ts#L291)

execute (async).

###### Returns

`Promise`\<[`RequestResult`](../../models/uma-client.model.md#requestresult)\<`TRes`\>\>

Type: `Promise<RequestResult<TRes>>`.

##### getBody()

> `protected` **getBody**(): [`RequestBase`](../../models/uma-client.model.md#requestbase) & `TReq`

Defined in:
[src/api/services/steps/core.step.ts:122](https://github.com/davinidae/umazing-musumengine/blob/aeab44e843910aee776ca8e80ac77feaac919c49/src/api/services/steps/core.step.ts#L122)

getBody.

Combine the step-specific body with common request fields from StepData.

###### Returns

[`RequestBase`](../../models/uma-client.model.md#requestbase) & `TReq`

Type: `Record<string, unknown>`.

##### getHeaders()

> `protected` **getHeaders**(): `Record`\<`string`, `string`\>

Defined in:
[src/api/services/steps/core.step.ts:102](https://github.com/davinidae/umazing-musumengine/blob/aeab44e843910aee776ca8e80ac77feaac919c49/src/api/services/steps/core.step.ts#L102)

getHeaders.

Build upstream headers expected by the game API.

###### Returns

`Record`\<`string`, `string`\>

Type: `Record<string, string>`.

##### getRequestBody()

> `abstract` **getRequestBody**(): `TReq`

Defined in:
[src/api/services/steps/core.step.ts:80](https://github.com/davinidae/umazing-musumengine/blob/aeab44e843910aee776ca8e80ac77feaac919c49/src/api/services/steps/core.step.ts#L80)

getRequestBody.

###### Returns

`TReq`

Type: `TReq`.

###### Remarks

Source: `abstract getRequestBody(): TReq;`.

##### maybeUpdateSessionId()

> `private` **maybeUpdateSessionId**(`decoded`): `void`

Defined in:
[src/api/services/steps/core.step.ts:212](https://github.com/davinidae/umazing-musumengine/blob/aeab44e843910aee776ca8e80ac77feaac919c49/src/api/services/steps/core.step.ts#L212)

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
[src/api/services/steps/core.step.ts:166](https://github.com/davinidae/umazing-musumengine/blob/aeab44e843910aee776ca8e80ac77feaac919c49/src/api/services/steps/core.step.ts#L166)

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
[src/api/services/steps/core.step.ts:230](https://github.com/davinidae/umazing-musumengine/blob/aeab44e843910aee776ca8e80ac77feaac919c49/src/api/services/steps/core.step.ts#L230)

request (async).

###### Returns

`Promise`\<`Omit`\<[`RequestResult`](../../models/uma-client.model.md#requestresult)\<`TRes`\>,
`"endpoint"` \| `"name"`\>\>

Type: `Promise<Omit<RequestResult<TRes>, "name" | "endpoint">>`.
