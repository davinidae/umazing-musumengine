# api/pipelines/services/step.service

## Classes

### `abstract` StepService

Defined in:
[api/pipelines/services/step.service.ts:21](https://github.com/davinidae/umazing-musumengine/blob/d3505fca22e9cc9337c67181003a80a301f9263f/src/api/pipelines/services/step.service.ts#L21)

Base class for a pipeline service step.

Responsibilities

- Receives a PipelineContext with runtime helpers and upstream configuration.
- Implements execute(prev) to build a request, call upstream, and decode the response.
- Provides callUpstream() helper to POST Base64 requests to the configured upstream base.

#### Extended by

- [`LoadIndexService`](load-index.service.md#loadindexservice)
- [`ToolPreSignupService`](tool-pre_signup.service.md#toolpresignupservice)
- [`ToolSignupService`](tool-signup.service.md#toolsignupservice)
- [`ToolStartSessionService`](tool-start_session.service.md#toolstartsessionservice)
- [`TutorialSkipService`](tutorial-skip.service.md#tutorialskipservice)
- [`UserChangeNameService`](user-change_name.service.md#userchangenameservice)
- [`UserChangeSexService`](user-change_sex.service.md#userchangesexservice)

#### Constructors

##### Constructor

> **new StepService**(`ctx`, `pipeline`): [`StepService`](#stepservice)

Defined in:
[api/pipelines/services/step.service.ts:62](https://github.com/davinidae/umazing-musumengine/blob/d3505fca22e9cc9337c67181003a80a301f9263f/src/api/pipelines/services/step.service.ts#L62)

Construct a step with the provided execution context.

###### Parameters

###### ctx

[`PipelineContext`](../../models/pipelines.model.md#pipelinecontext)

PipelineContext holding runtime, upstreamBase, blob1 and clientData.

###### pipeline

[`Pipeline`](../../session/pipeline.md#pipeline)

###### Returns

[`StepService`](#stepservice)

#### Properties

##### ctx

> `protected` `readonly` **ctx**:
> [`PipelineContext`](../../models/pipelines.model.md#pipelinecontext)

Defined in:
[api/pipelines/services/step.service.ts:63](https://github.com/davinidae/umazing-musumengine/blob/d3505fca22e9cc9337c67181003a80a301f9263f/src/api/pipelines/services/step.service.ts#L63)

PipelineContext holding runtime, upstreamBase, blob1 and clientData.

##### endpoint

> `abstract` `readonly` **endpoint**: `string`

Defined in:
[api/pipelines/services/step.service.ts:23](https://github.com/davinidae/umazing-musumengine/blob/d3505fca22e9cc9337c67181003a80a301f9263f/src/api/pipelines/services/step.service.ts#L23)

##### framing

> `readonly` **framing**: [`FramingMode`](../../../lib/models/runtime.model.md#framingmode) =
> `FramingMode.LengthPrefixed`

Defined in:
[api/pipelines/services/step.service.ts:24](https://github.com/davinidae/umazing-musumengine/blob/d3505fca22e9cc9337c67181003a80a301f9263f/src/api/pipelines/services/step.service.ts#L24)

##### name

> `abstract` `readonly` **name**: `string`

Defined in:
[api/pipelines/services/step.service.ts:22](https://github.com/davinidae/umazing-musumengine/blob/d3505fca22e9cc9337c67181003a80a301f9263f/src/api/pipelines/services/step.service.ts#L22)

##### pipeline

> `protected` `readonly` **pipeline**: [`Pipeline`](../../session/pipeline.md#pipeline)

Defined in:
[api/pipelines/services/step.service.ts:64](https://github.com/davinidae/umazing-musumengine/blob/d3505fca22e9cc9337c67181003a80a301f9263f/src/api/pipelines/services/step.service.ts#L64)

#### Methods

##### callUpstream()

> `protected` **callUpstream**(`requestB64`, `payload`): `Promise`\<\{ `responseB64`: `string`;
> `responseCode`: [`GallopResultCode`](../../models/result_codes.model.md#gallopresultcode); \}\>

Defined in:
[api/pipelines/services/step.service.ts:85](https://github.com/davinidae/umazing-musumengine/blob/d3505fca22e9cc9337c67181003a80a301f9263f/src/api/pipelines/services/step.service.ts#L85)

POST a Base64 request to the upstream API and return the Base64 response string with a result code.

###### Parameters

###### requestB64

`string`

Base64-encoded request buffer.

###### payload

`unknown`

###### Returns

`Promise`\<\{ `responseB64`: `string`; `responseCode`:
[`GallopResultCode`](../../models/result_codes.model.md#gallopresultcode); \}\>

`{ responseB64, responseCode }` where `responseCode` is the HTTP status or synthesized.

###### Throws

If upstream base is missing or the response shape is invalid.

##### execute()

> **execute**(`prev`):
> `Promise`\<[`StepResultBase`](../../models/pipelines.model.md#stepresultbase)\>

Defined in:
[api/pipelines/services/step.service.ts:174](https://github.com/davinidae/umazing-musumengine/blob/d3505fca22e9cc9337c67181003a80a301f9263f/src/api/pipelines/services/step.service.ts#L174)

Execute the step end-to-end: obtain preconditions, encode request, call upstream, and decode
response.

###### Parameters

###### prev

Previous step result, if any.

`Partial`\<\{ `decoded`:
[`DecodeResponseOutput`](../../../lib/models/runtime.model.md#decoderesponseoutput); `endpoint`:
`string`; `name`: `string`; `requestB64`: `string`; `responseB64`: `string`; \}\> | `undefined`

###### Returns

`Promise`\<[`StepResultBase`](../../models/pipelines.model.md#stepresultbase)\>

StepResultBase without the `order` field (assigned by the pipeline runner).

##### getBaseHeaders()

> **getBaseHeaders**(): `object`

Defined in:
[api/pipelines/services/step.service.ts:45](https://github.com/davinidae/umazing-musumengine/blob/d3505fca22e9cc9337c67181003a80a301f9263f/src/api/pipelines/services/step.service.ts#L45)

###### Returns

`object`

###### accept

> **accept**: `string` = `'*/*'`

###### app-ver

> **app-ver**: `string` = `'1.20.11'`

###### content-type

> **content-type**: `string` = `'application/x-msgpack'`

###### device

> **device**: `number`

###### res-ver

> **res-ver**: `string` = `'10002800'`

###### sid

> **sid**: `` `${string}-${string}-${string}-${string}-${string}` ``

###### viewerid

> **viewerid**: `number`

###### x-unity-version

> **x-unity-version**: `string` = `'2022.3.62f2'`

##### getBasePayload()

> **getBasePayload**(): `object`

Defined in:
[api/pipelines/services/step.service.ts:26](https://github.com/davinidae/umazing-musumengine/blob/d3505fca22e9cc9337c67181003a80a301f9263f/src/api/pipelines/services/step.service.ts#L26)

###### Returns

`object`

###### carrier

> **carrier**: `string`

###### device

> **device**: `number`

###### device_id

> **device_id**: `string`

###### device_name

> **device_name**: `string`

###### dmm_onetime_token

> **dmm_onetime_token**: `string` \| `null`

###### dmm_viewer_id

> **dmm_viewer_id**: `number` \| `null`

###### graphics_device_name

> **graphics_device_name**: `string`

###### ip_address

> **ip_address**: `string`

###### keychain

> **keychain**: `number`

###### locale

> **locale**: `string`

###### platform_os_version

> **platform_os_version**: `string`

###### steam_id

> **steam_id**: `string` \| `undefined`

###### steam_session_ticket

> **steam_session_ticket**: `string` \| `undefined`

###### viewer_id

> **viewer_id**: `number`

##### getHeaders()

> `abstract` **getHeaders**(): `Record`\<`string`, `unknown`\>

Defined in:
[api/pipelines/services/step.service.ts:140](https://github.com/davinidae/umazing-musumengine/blob/d3505fca22e9cc9337c67181003a80a301f9263f/src/api/pipelines/services/step.service.ts#L140)

###### Returns

`Record`\<`string`, `unknown`\>

##### getPayload()

> `abstract` **getPayload**(): `Record`\<`string`, `unknown`\>

Defined in:
[api/pipelines/services/step.service.ts:138](https://github.com/davinidae/umazing-musumengine/blob/d3505fca22e9cc9337c67181003a80a301f9263f/src/api/pipelines/services/step.service.ts#L138)

Build the request payload for this step.

###### Returns

`Record`\<`string`, `unknown`\>

Plain object serialized by the runtime encoder.

##### onResponseDecoded()

> `private` **onResponseDecoded**(`decodedResponse`): `Promise`\<`void`\>

Defined in:
[api/pipelines/services/step.service.ts:142](https://github.com/davinidae/umazing-musumengine/blob/d3505fca22e9cc9337c67181003a80a301f9263f/src/api/pipelines/services/step.service.ts#L142)

###### Parameters

###### decodedResponse

[`DecodeResponseOutput`](../../../lib/models/runtime.model.md#decoderesponseoutput)

###### Returns

`Promise`\<`void`\>

## Type Aliases

### StepServiceCtor()

> **StepServiceCtor** = (`ctx`, `pipeline`) => [`StepService`](#stepservice)

Defined in:
[api/pipelines/services/step.service.ts:229](https://github.com/davinidae/umazing-musumengine/blob/d3505fca22e9cc9337c67181003a80a301f9263f/src/api/pipelines/services/step.service.ts#L229)

Constructor type for StepService implementations. Used to instantiate steps with a PipelineContext
at runtime.

#### Parameters

##### ctx

[`PipelineContext`](../../models/pipelines.model.md#pipelinecontext)

##### pipeline

[`Pipeline`](../../session/pipeline.md#pipeline)

#### Returns

[`StepService`](#stepservice)
