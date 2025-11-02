# Class: StartSessionService

Defined in: [api/pipelines/services/start\_session.service.ts:8](https://github.com/davinidae/umazing-musumengine/blob/69d230954e98bd77e6d1fa5d5d78630166c21f43/src/api/pipelines/services/start_session.service.ts#L8)

tool/start_session: Establishes a server session for the viewer.
Skips execution if a valid viewer_id is not available.

## Extends

- [`StepService`](../../step.service/classes/StepService.md)

## Constructors

### Constructor

> **new StartSessionService**(`ctx`): `StartSessionService`

Defined in: [api/pipelines/services/step.service.ts:17](https://github.com/davinidae/umazing-musumengine/blob/69d230954e98bd77e6d1fa5d5d78630166c21f43/src/api/pipelines/services/step.service.ts#L17)

Construct a step with the provided execution context.

#### Parameters

##### ctx

[`PipelineContext`](../../../../models/pipelines/interfaces/PipelineContext.md)

PipelineContext holding runtime, upstreamBase, blob1 and clientData.

#### Returns

`StartSessionService`

#### Inherited from

[`StepService`](../../step.service/classes/StepService.md).[`constructor`](../../step.service/classes/StepService.md#constructor)

## Methods

### execute()

> **execute**(`prev`): `Promise`\<[`StepResultBase`](../../../../models/pipelines/interfaces/StepResultBase.md)\>

Defined in: [api/pipelines/services/start\_session.service.ts:12](https://github.com/davinidae/umazing-musumengine/blob/69d230954e98bd77e6d1fa5d5d78630166c21f43/src/api/pipelines/services/start_session.service.ts#L12)

Implement the step's business logic.
Build request using ctx.runtime.encodeRequest, call upstream via callUpstream, then decode with ctx.runtime.decodeResponse.

#### Parameters

##### prev

Previous step result, if any.

[`StepPrevResult`](../../../../models/pipelines/interfaces/StepPrevResult.md) | `undefined`

#### Returns

`Promise`\<[`StepResultBase`](../../../../models/pipelines/interfaces/StepResultBase.md)\>

StepResultBase without the order field (runner/session will add it).

#### Overrides

[`StepService`](../../step.service/classes/StepService.md).[`execute`](../../step.service/classes/StepService.md#execute)
