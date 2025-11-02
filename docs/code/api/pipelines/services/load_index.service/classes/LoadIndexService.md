# Class: LoadIndexService

Defined in: [api/pipelines/services/load\_index.service.ts:8](https://github.com/davinidae/umazing-musumengine/blob/3699b0b316713adaa61e62c11a4220687bdb55bc/src/api/pipelines/services/load_index.service.ts#L8)

load/index: Retrieves the main screen data for the session.
Requires a valid viewer_id; skips otherwise.

## Extends

- [`StepService`](../../step.service/classes/StepService.md)

## Constructors

### Constructor

> **new LoadIndexService**(`ctx`): `LoadIndexService`

Defined in: [api/pipelines/services/step.service.ts:17](https://github.com/davinidae/umazing-musumengine/blob/3699b0b316713adaa61e62c11a4220687bdb55bc/src/api/pipelines/services/step.service.ts#L17)

Construct a step with the provided execution context.

#### Parameters

##### ctx

[`PipelineContext`](../../../../models/pipelines/interfaces/PipelineContext.md)

PipelineContext holding runtime, upstreamBase, blob1 and clientData.

#### Returns

`LoadIndexService`

#### Inherited from

[`StepService`](../../step.service/classes/StepService.md).[`constructor`](../../step.service/classes/StepService.md#constructor)

## Methods

### execute()

> **execute**(`prev`): `Promise`\<[`StepResultBase`](../../../../models/pipelines/interfaces/StepResultBase.md)\>

Defined in: [api/pipelines/services/load\_index.service.ts:12](https://github.com/davinidae/umazing-musumengine/blob/3699b0b316713adaa61e62c11a4220687bdb55bc/src/api/pipelines/services/load_index.service.ts#L12)

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
