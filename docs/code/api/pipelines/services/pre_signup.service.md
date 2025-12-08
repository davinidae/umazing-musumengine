# api/pipelines/services/pre_signup.service

## Classes

### PreSignupService

Defined in:
[api/pipelines/services/pre_signup.service.ts:8](https://github.com/davinidae/umazing-musumengine/blob/3967f9f64e7e7864bf222e033197758a8cd227e4/src/api/pipelines/services/pre_signup.service.ts#L8)

tool/pre_signup: Send initial client device/environment data. Uses kv-stream framing to build a
(key,value,...) sequence.

#### Extends

- [`StepService`](step.service.md#stepservice)

#### Constructors

##### Constructor

> **new PreSignupService**(`ctx`): [`PreSignupService`](#presignupservice)

Defined in:
[api/pipelines/services/step.service.ts:28](https://github.com/davinidae/umazing-musumengine/blob/3967f9f64e7e7864bf222e033197758a8cd227e4/src/api/pipelines/services/step.service.ts#L28)

Construct a step with the provided execution context.

###### Parameters

###### ctx

[`PipelineContext`](../../models/pipelines.model.md#pipelinecontext)

PipelineContext holding runtime, upstreamBase, blob1 and clientData.

###### Returns

[`PreSignupService`](#presignupservice)

###### Inherited from

[`StepService`](step.service.md#stepservice).[`constructor`](step.service.md#constructor)

#### Methods

##### execute()

> **execute**(`prev`):
> `Promise`\<[`StepResultBase`](../../models/pipelines.model.md#stepresultbase)\>

Defined in:
[api/pipelines/services/step.service.ts:110](https://github.com/davinidae/umazing-musumengine/blob/3967f9f64e7e7864bf222e033197758a8cd227e4/src/api/pipelines/services/step.service.ts#L110)

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

###### Inherited from

[`StepService`](step.service.md#stepservice).[`execute`](step.service.md#execute)

##### getPayload()

> **getPayload**(): `Record`\<`string`, `unknown`\>

Defined in:
[api/pipelines/services/pre_signup.service.ts:18](https://github.com/davinidae/umazing-musumengine/blob/3967f9f64e7e7864bf222e033197758a8cd227e4/src/api/pipelines/services/pre_signup.service.ts#L18)

Build payload from base client data; no viewer_id required for pre-signup.

###### Returns

`Record`\<`string`, `unknown`\>

###### Overrides

[`StepService`](step.service.md#stepservice).[`getPayload`](step.service.md#getpayload)
