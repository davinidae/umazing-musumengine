# api/pipelines/services/step.service

## Classes

### `abstract` StepService

Defined in:
[api/pipelines/services/step.service.ts:19](https://github.com/davinidae/umazing-musumengine/blob/53589098f19178584a73b07fd43b6a78f63365fa/src/api/pipelines/services/step.service.ts#L19)

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
[api/pipelines/services/step.service.ts:28](https://github.com/davinidae/umazing-musumengine/blob/53589098f19178584a73b07fd43b6a78f63365fa/src/api/pipelines/services/step.service.ts#L28)

Construct a step with the provided execution context.

###### Parameters

###### ctx

[`PipelineContext`](../../models/pipelines.model.md#pipelinecontext)

PipelineContext holding runtime, upstreamBase, blob1 and clientData.

###### Returns

[`StepService`](#stepservice)

#### Methods

##### execute()

> **execute**(`prev`):
> `Promise`\<[`StepResultBase`](../../models/pipelines.model.md#stepresultbase)\>

Defined in:
[api/pipelines/services/step.service.ts:110](https://github.com/davinidae/umazing-musumengine/blob/53589098f19178584a73b07fd43b6a78f63365fa/src/api/pipelines/services/step.service.ts#L110)

Execute the step end-to-end: obtain preconditions, encode request, call upstream, and decode
response.

###### Parameters

###### prev

Previous step result, if any.

`Partial`\<\{ `decoded`: `DecodeResponseOutput`; `endpoint`: `string`; `name`: `string`;
`requestB64`: `string`; `responseB64`: `string`; \}\> | `undefined`

###### Returns

`Promise`\<[`StepResultBase`](../../models/pipelines.model.md#stepresultbase)\>

StepResultBase without the `order` field (assigned by the pipeline runner).

##### getPayload()

> `abstract` **getPayload**(`viewer_id`): `Record`\<`string`, `unknown`\>

Defined in:
[api/pipelines/services/step.service.ts:92](https://github.com/davinidae/umazing-musumengine/blob/53589098f19178584a73b07fd43b6a78f63365fa/src/api/pipelines/services/step.service.ts#L92)

Build the request payload for this step.

###### Parameters

###### viewer_id

`number`

Viewer identifier propagated from previous step or context.

###### Returns

`Record`\<`string`, `unknown`\>

Plain object serialized by the runtime encoder.

## Type Aliases

### StepServiceCtor

> **StepServiceCtor** = `Object`

Defined in:
[api/pipelines/services/step.service.ts:163](https://github.com/davinidae/umazing-musumengine/blob/53589098f19178584a73b07fd43b6a78f63365fa/src/api/pipelines/services/step.service.ts#L163)

Constructor type for StepService implementations. Used to instantiate steps with a PipelineContext
at runtime.
