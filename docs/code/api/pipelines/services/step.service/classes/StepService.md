# Abstract Class: StepService

Defined in: [api/pipelines/services/step.service.ts:12](https://github.com/davinidae/umazing-musumengine/blob/69d230954e98bd77e6d1fa5d5d78630166c21f43/src/api/pipelines/services/step.service.ts#L12)

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

Defined in: [api/pipelines/services/step.service.ts:17](https://github.com/davinidae/umazing-musumengine/blob/69d230954e98bd77e6d1fa5d5d78630166c21f43/src/api/pipelines/services/step.service.ts#L17)

Construct a step with the provided execution context.

#### Parameters

##### ctx

[`PipelineContext`](../../../../models/pipelines/interfaces/PipelineContext.md)

PipelineContext holding runtime, upstreamBase, blob1 and clientData.

#### Returns

`StepService`

## Methods

### execute()

> `abstract` **execute**(`prev`): `Promise`\<[`StepResultBase`](../../../../models/pipelines/interfaces/StepResultBase.md)\>

Defined in: [api/pipelines/services/step.service.ts:65](https://github.com/davinidae/umazing-musumengine/blob/69d230954e98bd77e6d1fa5d5d78630166c21f43/src/api/pipelines/services/step.service.ts#L65)

Implement the step's business logic.
Build request using ctx.runtime.encodeRequest, call upstream via callUpstream, then decode with ctx.runtime.decodeResponse.

#### Parameters

##### prev

Previous step result, if any.

[`StepPrevResult`](../../../../models/pipelines/interfaces/StepPrevResult.md) | `undefined`

#### Returns

`Promise`\<[`StepResultBase`](../../../../models/pipelines/interfaces/StepResultBase.md)\>

StepResultBase without the order field (runner/session will add it).
