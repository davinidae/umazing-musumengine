# Class: SignupService

Defined in: [api/pipelines/services/signup.service.ts:9](https://github.com/davinidae/umazing-musumengine/blob/f0aa00e05dacca920f40c0772577d56aeee15536/src/api/pipelines/services/signup.service.ts#L9)

tool/signup: Registers or fetches a viewer account based on device info.
Carries viewer_id forward when available from previous step.
Uses kv-stream framing.

## Extends

- [`StepService`](../../step.service/classes/StepService.md)

## Constructors

### Constructor

> **new SignupService**(`ctx`): `SignupService`

Defined in: [api/pipelines/services/step.service.ts:28](https://github.com/davinidae/umazing-musumengine/blob/f0aa00e05dacca920f40c0772577d56aeee15536/src/api/pipelines/services/step.service.ts#L28)

Construct a step with the provided execution context.

#### Parameters

##### ctx

[`PipelineContext`](../../../../models/pipelines.model/type-aliases/PipelineContext.md)

PipelineContext holding runtime, upstreamBase, blob1 and clientData.

#### Returns

`SignupService`

#### Inherited from

[`StepService`](../../step.service/classes/StepService.md).[`constructor`](../../step.service/classes/StepService.md#constructor)

## Methods

### execute()

> **execute**(`prev`): `Promise`\<[`StepResultBase`](../../../../models/pipelines.model/type-aliases/StepResultBase.md)\>

Defined in: [api/pipelines/services/step.service.ts:91](https://github.com/davinidae/umazing-musumengine/blob/f0aa00e05dacca920f40c0772577d56aeee15536/src/api/pipelines/services/step.service.ts#L91)

Implement the step's business logic.
Build request using ctx.runtime.encodeRequest, call upstream via callUpstream, then decode with ctx.runtime.decodeResponse.

#### Parameters

##### prev

Previous step result, if any.

`Partial`\<\{ `decoded`: `DecodeResponseOutput`; `endpoint`: `string`; `name`: `string`; `requestB64`: `string`; `responseB64`: `string`; \}\> | `undefined`

#### Returns

`Promise`\<[`StepResultBase`](../../../../models/pipelines.model/type-aliases/StepResultBase.md)\>

StepResultBase without the order field (runner/session will add it).

#### Inherited from

[`StepService`](../../step.service/classes/StepService.md).[`execute`](../../step.service/classes/StepService.md#execute)
