# Class: PreSignupService

Defined in: [api/pipelines/services/pre\_signup.service.ts:8](https://github.com/davinidae/umazing-musumengine/blob/e31f12912bf088e7e67f5379b1fed36ba4f17894/src/api/pipelines/services/pre_signup.service.ts#L8)

tool/pre_signup: Send initial client device/environment data.
Uses kv-stream framing to build a (key,value,...) sequence.

## Extends

- [`StepService`](../../step.service/classes/StepService.md)

## Constructors

### Constructor

> **new PreSignupService**(`ctx`): `PreSignupService`

Defined in: [api/pipelines/services/step.service.ts:17](https://github.com/davinidae/umazing-musumengine/blob/e31f12912bf088e7e67f5379b1fed36ba4f17894/src/api/pipelines/services/step.service.ts#L17)

Construct a step with the provided execution context.

#### Parameters

##### ctx

[`PipelineContext`](../../../../models/pipelines/interfaces/PipelineContext.md)

PipelineContext holding runtime, upstreamBase, blob1 and clientData.

#### Returns

`PreSignupService`

#### Inherited from

[`StepService`](../../step.service/classes/StepService.md).[`constructor`](../../step.service/classes/StepService.md#constructor)

## Methods

### execute()

> **execute**(`_prev`): `Promise`\<[`StepResultBase`](../../../../models/pipelines/interfaces/StepResultBase.md)\>

Defined in: [api/pipelines/services/pre\_signup.service.ts:12](https://github.com/davinidae/umazing-musumengine/blob/e31f12912bf088e7e67f5379b1fed36ba4f17894/src/api/pipelines/services/pre_signup.service.ts#L12)

Implement the step's business logic.
Build request using ctx.runtime.encodeRequest, call upstream via callUpstream, then decode with ctx.runtime.decodeResponse.

#### Parameters

##### \_prev

[`StepPrevResult`](../../../../models/pipelines/interfaces/StepPrevResult.md) | `undefined`

#### Returns

`Promise`\<[`StepResultBase`](../../../../models/pipelines/interfaces/StepResultBase.md)\>

StepResultBase without the order field (runner/session will add it).

#### Overrides

[`StepService`](../../step.service/classes/StepService.md).[`execute`](../../step.service/classes/StepService.md#execute)
