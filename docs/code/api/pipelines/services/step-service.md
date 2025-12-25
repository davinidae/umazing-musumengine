# api/pipelines/services/step.service

## Classes

### `abstract` StepService

Defined in:
[api/pipelines/services/step.service.ts:20](https://github.com/davinidae/umazing-musumengine/blob/f7b34d19a41237760d3f0823d1a963b560f03912/src/api/pipelines/services/step.service.ts#L20)

Base class for a pipeline service step.

Responsibilities

- Receives a PipelineContext with runtime helpers and upstream configuration.
- Implements execute(prev) to build a request, call upstream, and decode the response.
- Provides callUpstream() helper to POST Base64 requests to the configured upstream base.

#### Extended by

- [`LoadIndexService`](load_index.service.md#loadindexservice)
- [`PreSignupService`](pre_signup.service.md#presignupservice)
- [`SignupService`](signup.service.md#signupservice)
- [`StartSessionService`](start_session.service.md#startsessionservice)

#### Constructors

##### Constructor

> **new StepService**(`ctx`, `pipeline`): [`StepService`](#stepservice)

Defined in:
[api/pipelines/services/step.service.ts:30](https://github.com/davinidae/umazing-musumengine/blob/f7b34d19a41237760d3f0823d1a963b560f03912/src/api/pipelines/services/step.service.ts#L30)

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
[api/pipelines/services/step.service.ts:31](https://github.com/davinidae/umazing-musumengine/blob/f7b34d19a41237760d3f0823d1a963b560f03912/src/api/pipelines/services/step.service.ts#L31)

PipelineContext holding runtime, upstreamBase, blob1 and clientData.

##### endpoint

> `abstract` `readonly` **endpoint**: `string`

Defined in:
[api/pipelines/services/step.service.ts:22](https://github.com/davinidae/umazing-musumengine/blob/f7b34d19a41237760d3f0823d1a963b560f03912/src/api/pipelines/services/step.service.ts#L22)

##### framing

> `abstract` `readonly` **framing**:
> [`FramingMode`](../../../lib/models/runtime.model.md#framingmode)

Defined in:
[api/pipelines/services/step.service.ts:23](https://github.com/davinidae/umazing-musumengine/blob/f7b34d19a41237760d3f0823d1a963b560f03912/src/api/pipelines/services/step.service.ts#L23)

##### isSignupStep

> `readonly` **isSignupStep**: `boolean` = `false`

Defined in:
[api/pipelines/services/step.service.ts:24](https://github.com/davinidae/umazing-musumengine/blob/f7b34d19a41237760d3f0823d1a963b560f03912/src/api/pipelines/services/step.service.ts#L24)

##### name

> `abstract` `readonly` **name**: `string`

Defined in:
[api/pipelines/services/step.service.ts:21](https://github.com/davinidae/umazing-musumengine/blob/f7b34d19a41237760d3f0823d1a963b560f03912/src/api/pipelines/services/step.service.ts#L21)

##### omitViewerId

> `protected` **omitViewerId**: `boolean` = `false`

Defined in:
[api/pipelines/services/step.service.ts:118](https://github.com/davinidae/umazing-musumengine/blob/f7b34d19a41237760d3f0823d1a963b560f03912/src/api/pipelines/services/step.service.ts#L118)

Override to `true` for steps that should not enforce `viewer_id` preconditions (e.g., `pre_signup`).

##### pipeline

> `protected` `readonly` **pipeline**: [`Pipeline`](../../session/pipeline.md#pipeline)

Defined in:
[api/pipelines/services/step.service.ts:32](https://github.com/davinidae/umazing-musumengine/blob/f7b34d19a41237760d3f0823d1a963b560f03912/src/api/pipelines/services/step.service.ts#L32)

#### Methods

##### callUpstream()

> `protected` **callUpstream**(`requestB64`, `payload`): `Promise`\<\{ `responseB64`: `string`;
> `responseCode`: [`GallopResultCode`](../../models/result_codes.model.md#gallopresultcode); \}\>

Defined in:
[api/pipelines/services/step.service.ts:53](https://github.com/davinidae/umazing-musumengine/blob/f7b34d19a41237760d3f0823d1a963b560f03912/src/api/pipelines/services/step.service.ts#L53)

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
[api/pipelines/services/step.service.ts:131](https://github.com/davinidae/umazing-musumengine/blob/f7b34d19a41237760d3f0823d1a963b560f03912/src/api/pipelines/services/step.service.ts#L131)

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

##### getPayload()

> `abstract` **getPayload**(`viewer_id`): `Record`\<`string`, `unknown`\>

Defined in:
[api/pipelines/services/step.service.ts:103](https://github.com/davinidae/umazing-musumengine/blob/f7b34d19a41237760d3f0823d1a963b560f03912/src/api/pipelines/services/step.service.ts#L103)

Build the request payload for this step.

###### Parameters

###### viewer_id

`number`

Viewer identifier propagated from previous step or context.

###### Returns

`Record`\<`string`, `unknown`\>

Plain object serialized by the runtime encoder.

##### onResponseDecoded()

> `private` **onResponseDecoded**(`decodedResponse`): `Promise`\<`void`\>

Defined in:
[api/pipelines/services/step.service.ts:105](https://github.com/davinidae/umazing-musumengine/blob/f7b34d19a41237760d3f0823d1a963b560f03912/src/api/pipelines/services/step.service.ts#L105)

###### Parameters

###### decodedResponse

[`DecodeResponseOutput`](../../../lib/models/runtime.model.md#decoderesponseoutput)

###### Returns

`Promise`\<`void`\>

## Type Aliases

### StepServiceCtor()

> **StepServiceCtor** = (`ctx`, `pipeline`) => [`StepService`](#stepservice)

Defined in:
[api/pipelines/services/step.service.ts:188](https://github.com/davinidae/umazing-musumengine/blob/f7b34d19a41237760d3f0823d1a963b560f03912/src/api/pipelines/services/step.service.ts#L188)

Constructor type for StepService implementations. Used to instantiate steps with a PipelineContext
at runtime.

#### Parameters

##### ctx

[`PipelineContext`](../../models/pipelines.model.md#pipelinecontext)

##### pipeline

[`Pipeline`](../../session/pipeline.md#pipeline)

#### Returns

[`StepService`](#stepservice)
