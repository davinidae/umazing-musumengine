# Class: PreSignupService

Defined in: [api/pipelines/services/pre\_signup.service.ts:8](https://github.com/davinidae/umazing-musumengine/blob/18c3ff3260c8ab431287937bbbd69b2ff72846ba/src/api/pipelines/services/pre_signup.service.ts#L8)

tool/pre_signup: Send initial client device/environment data.
Uses kv-stream framing to build a (key,value,...) sequence.

## Extends

- [`StepService`](../../step.service/classes/StepService.md)

## Constructors

### Constructor

> **new PreSignupService**(`ctx`): `PreSignupService`

Defined in: [api/pipelines/services/step.service.ts:28](https://github.com/davinidae/umazing-musumengine/blob/18c3ff3260c8ab431287937bbbd69b2ff72846ba/src/api/pipelines/services/step.service.ts#L28)

Construct a step with the provided execution context.

#### Parameters

##### ctx

[`PipelineContext`](../../../../models/pipelines.model/type-aliases/PipelineContext.md)

PipelineContext holding runtime, upstreamBase, blob1 and clientData.

#### Returns

`PreSignupService`

#### Inherited from

[`StepService`](../../step.service/classes/StepService.md).[`constructor`](../../step.service/classes/StepService.md#constructor)

## Methods

### execute()

> **execute**(`prev`): `Promise`\<[`StepResultBase`](../../../../models/pipelines.model/type-aliases/StepResultBase.md)\>

Defined in: [api/pipelines/services/step.service.ts:91](https://github.com/davinidae/umazing-musumengine/blob/18c3ff3260c8ab431287937bbbd69b2ff72846ba/src/api/pipelines/services/step.service.ts#L91)

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
