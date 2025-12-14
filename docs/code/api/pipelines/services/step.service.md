# api/pipelines/services/step.service

## Classes

### `abstract` StepService

Defined in:
[api/pipelines/services/step.service.ts:19](https://github.com/davinidae/umazing-musumengine/blob/0d5eaab9c52ffffbb3921fe87280278f9295296e/src/api/pipelines/services/step.service.ts#L19)

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

> **new StepService**(`ctx`): [`StepService`](#stepservice)

Defined in:
[api/pipelines/services/step.service.ts:28](https://github.com/davinidae/umazing-musumengine/blob/0d5eaab9c52ffffbb3921fe87280278f9295296e/src/api/pipelines/services/step.service.ts#L28)

Construct a step with the provided execution context.

###### Parameters

###### ctx

[`PipelineContext`](../../models/pipelines.model.md#pipelinecontext)

PipelineContext holding runtime, upstreamBase, blob1 and clientData.

###### Returns

[`StepService`](#stepservice)

#### Properties

##### ctx

> `protected` `readonly` **ctx**:
> [`PipelineContext`](../../models/pipelines.model.md#pipelinecontext)

Defined in:
[api/pipelines/services/step.service.ts:28](https://github.com/davinidae/umazing-musumengine/blob/0d5eaab9c52ffffbb3921fe87280278f9295296e/src/api/pipelines/services/step.service.ts#L28)

PipelineContext holding runtime, upstreamBase, blob1 and clientData.

##### endpoint

> `abstract` `readonly` **endpoint**: `string`

Defined in:
[api/pipelines/services/step.service.ts:21](https://github.com/davinidae/umazing-musumengine/blob/0d5eaab9c52ffffbb3921fe87280278f9295296e/src/api/pipelines/services/step.service.ts#L21)

##### framing

> `abstract` `readonly` **framing**:
> [`FramingMode`](../../../lib/models/runtime.model.md#framingmode)

Defined in:
[api/pipelines/services/step.service.ts:22](https://github.com/davinidae/umazing-musumengine/blob/0d5eaab9c52ffffbb3921fe87280278f9295296e/src/api/pipelines/services/step.service.ts#L22)

##### name

> `abstract` `readonly` **name**: `string`

Defined in:
[api/pipelines/services/step.service.ts:20](https://github.com/davinidae/umazing-musumengine/blob/0d5eaab9c52ffffbb3921fe87280278f9295296e/src/api/pipelines/services/step.service.ts#L20)

##### omitViewerId

> `protected` **omitViewerId**: `boolean` = `false`

Defined in:
[api/pipelines/services/step.service.ts:97](https://github.com/davinidae/umazing-musumengine/blob/0d5eaab9c52ffffbb3921fe87280278f9295296e/src/api/pipelines/services/step.service.ts#L97)

Override to `true` for steps that should not enforce `viewer_id` preconditions (e.g., `pre_signup`).

#### Methods

##### callUpstream()

> `protected` **callUpstream**(`requestB64`): `Promise`\<\{ `responseB64`: `string`; `responseCode`:
> [`GallopResultCode`](../../models/result_codes.model.md#gallopresultcode); \}\>

Defined in:
[api/pipelines/services/step.service.ts:48](https://github.com/davinidae/umazing-musumengine/blob/0d5eaab9c52ffffbb3921fe87280278f9295296e/src/api/pipelines/services/step.service.ts#L48)

POST a Base64 request to the upstream API and return the Base64 response string with a result code.

###### Parameters

###### requestB64

`string`

Base64-encoded request buffer.

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
[api/pipelines/services/step.service.ts:110](https://github.com/davinidae/umazing-musumengine/blob/0d5eaab9c52ffffbb3921fe87280278f9295296e/src/api/pipelines/services/step.service.ts#L110)

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
[api/pipelines/services/step.service.ts:92](https://github.com/davinidae/umazing-musumengine/blob/0d5eaab9c52ffffbb3921fe87280278f9295296e/src/api/pipelines/services/step.service.ts#L92)

Build the request payload for this step.

###### Parameters

###### viewer_id

`number`

Viewer identifier propagated from previous step or context.

###### Returns

`Record`\<`string`, `unknown`\>

Plain object serialized by the runtime encoder.

## Type Aliases

### StepServiceCtor()

> **StepServiceCtor** = (`ctx`) => [`StepService`](#stepservice)

Defined in:
[api/pipelines/services/step.service.ts:163](https://github.com/davinidae/umazing-musumengine/blob/0d5eaab9c52ffffbb3921fe87280278f9295296e/src/api/pipelines/services/step.service.ts#L163)

Constructor type for StepService implementations. Used to instantiate steps with a PipelineContext
at runtime.

#### Parameters

##### ctx

[`PipelineContext`](../../models/pipelines.model.md#pipelinecontext)

#### Returns

[`StepService`](#stepservice)
