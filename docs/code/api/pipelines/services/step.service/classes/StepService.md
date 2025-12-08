# Abstract Class: StepService

Defined in: [api/pipelines/services/step.service.ts:19](https://github.com/davinidae/umazing-musumengine/blob/6df8e3e1b8dfb16b24d04befbfa6d32c969e2756/src/api/pipelines/services/step.service.ts#L19)

Base class for a pipeline service step.

Responsibilities
- Receives a PipelineContext with runtime helpers and upstream configuration.
- Implements execute(prev) to build a request, call upstream, and decode the response.
- Provides callUpstream() helper to POST Base64 requests to the configured upstream base.

## Extended by

- [`LoadIndexService`](../../load_index.service/classes/LoadIndexService.md)
- [`PreSignupService`](../../pre_signup.service/classes/PreSignupService.md)
- [`SignupService`](../../signup.service/classes/SignupService.md)
- [`StartSessionService`](../../start_session.service/classes/StartSessionService.md)

## Constructors

### Constructor

> **new StepService**(`ctx`): `StepService`

Defined in: [api/pipelines/services/step.service.ts:28](https://github.com/davinidae/umazing-musumengine/blob/6df8e3e1b8dfb16b24d04befbfa6d32c969e2756/src/api/pipelines/services/step.service.ts#L28)

Construct a step with the provided execution context.

#### Parameters

##### ctx

[`PipelineContext`](../../../../models/pipelines.model/type-aliases/PipelineContext.md)

PipelineContext holding runtime, upstreamBase, blob1 and clientData.

#### Returns

`StepService`

## Methods

### execute()

> **execute**(`prev`): `Promise`\<[`StepResultBase`](../../../../models/pipelines.model/type-aliases/StepResultBase.md)\>

Defined in: [api/pipelines/services/step.service.ts:91](https://github.com/davinidae/umazing-musumengine/blob/6df8e3e1b8dfb16b24d04befbfa6d32c969e2756/src/api/pipelines/services/step.service.ts#L91)

Implement the step's business logic.
Build request using ctx.runtime.encodeRequest, call upstream via callUpstream, then decode with ctx.runtime.decodeResponse.

#### Parameters

##### prev

Previous step result, if any.

`Partial`\<\{ `decoded`: `DecodeResponseOutput`; `endpoint`: `string`; `name`: `string`; `requestB64`: `string`; `responseB64`: `string`; \}\> | `undefined`

#### Returns

`Promise`\<[`StepResultBase`](../../../../models/pipelines.model/type-aliases/StepResultBase.md)\>

StepResultBase without the order field (runner/session will add it).
