# api/pipelines/services/signup.service

## Classes

### SignupService

Defined in: [api/pipelines/services/signup.service.ts:9](https://github.com/davinidae/umazing-musumengine/blob/aaa8c0e18d92afd8c9ed1afe8c861de7d0746c99/src/api/pipelines/services/signup.service.ts#L9)

tool/signup: Registers or fetches a viewer account based on device info.
Carries viewer_id forward when available from previous step.
Uses kv-stream framing.

#### Extends

- [`StepService`](step.service.md#stepservice)

#### Constructors

##### Constructor

> **new SignupService**(`ctx`): [`SignupService`](#signupservice)

Defined in: [api/pipelines/services/step.service.ts:28](https://github.com/davinidae/umazing-musumengine/blob/aaa8c0e18d92afd8c9ed1afe8c861de7d0746c99/src/api/pipelines/services/step.service.ts#L28)

Construct a step with the provided execution context.

###### Parameters

###### ctx

[`PipelineContext`](../../models/pipelines.model.md#pipelinecontext)

PipelineContext holding runtime, upstreamBase, blob1 and clientData.

###### Returns

[`SignupService`](#signupservice)

###### Inherited from

[`StepService`](step.service.md#stepservice).[`constructor`](step.service.md#constructor)

#### Methods

##### execute()

> **execute**(`prev`): `Promise`\<[`StepResultBase`](../../models/pipelines.model.md#stepresultbase)\>

Defined in: [api/pipelines/services/step.service.ts:110](https://github.com/davinidae/umazing-musumengine/blob/aaa8c0e18d92afd8c9ed1afe8c861de7d0746c99/src/api/pipelines/services/step.service.ts#L110)

Execute the step end-to-end: obtain preconditions, encode request, call upstream, and decode response.

###### Parameters

###### prev

Previous step result, if any.

`Partial`\<\{ `decoded`: `DecodeResponseOutput`; `endpoint`: `string`; `name`: `string`; `requestB64`: `string`; `responseB64`: `string`; \}\> | `undefined`

###### Returns

`Promise`\<[`StepResultBase`](../../models/pipelines.model.md#stepresultbase)\>

StepResultBase without the `order` field (assigned by the pipeline runner).

###### Inherited from

[`StepService`](step.service.md#stepservice).[`execute`](step.service.md#execute)

##### getPayload()

> **getPayload**(`viewer_id`): `Record`\<`string`, `unknown`\>

Defined in: [api/pipelines/services/signup.service.ts:17](https://github.com/davinidae/umazing-musumengine/blob/aaa8c0e18d92afd8c9ed1afe8c861de7d0746c99/src/api/pipelines/services/signup.service.ts#L17)

Build payload including `viewer_id` (if available) along with client data.

###### Parameters

###### viewer\_id

`number`

###### Returns

`Record`\<`string`, `unknown`\>

###### Overrides

[`StepService`](step.service.md#stepservice).[`getPayload`](step.service.md#getpayload)
