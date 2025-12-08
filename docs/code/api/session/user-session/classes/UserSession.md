# Class: UserSession

Defined in: [api/session/user-session.ts:13](https://github.com/davinidae/umazing-musumengine/blob/18c3ff3260c8ab431287937bbbd69b2ff72846ba/src/api/session/user-session.ts#L13)

Represents a per-user server-side session owned by the API.

Responsibilities
- Hold server-only state: PipelineContext (crypto/runtime + upstream config) and the last pipeline step result.
- Provide helpers to run a sequence of pipeline services and persist the last step.
- Do NOT expose sensitive state to API consumers; only share the opaque `id`.

## Methods

### getLastStep()

> **getLastStep**(): `Partial`\<\{ `decoded`: `DecodeResponseOutput`; `endpoint`: `string`; `name`: `string`; `requestB64`: `string`; `responseB64`: `string`; \}\> \| `undefined`

Defined in: [api/session/user-session.ts:36](https://github.com/davinidae/umazing-musumengine/blob/18c3ff3260c8ab431287937bbbd69b2ff72846ba/src/api/session/user-session.ts#L36)

Retrieve the last step result, used as input for chained pipelines.

#### Returns

`Partial`\<\{ `decoded`: `DecodeResponseOutput`; `endpoint`: `string`; `name`: `string`; `requestB64`: `string`; `responseB64`: `string`; \}\> \| `undefined`

***

### runPipeline()

> **runPipeline**(`services`): `Promise`\<[`StepResult`](../../../models/pipelines.model/type-aliases/StepResult.md)[]\>

Defined in: [api/session/user-session.ts:44](https://github.com/davinidae/umazing-musumengine/blob/18c3ff3260c8ab431287937bbbd69b2ff72846ba/src/api/session/user-session.ts#L44)

Convenience wrapper around executePipeline that also saves the last step for chaining.

#### Parameters

##### services

[`StepServiceCtor`](../../../pipelines/services/step.service/type-aliases/StepServiceCtor.md)[]

Constructors for services to run, in order.

#### Returns

`Promise`\<[`StepResult`](../../../models/pipelines.model/type-aliases/StepResult.md)[]\>

***

### setLastStep()

> **setLastStep**(`step`): `void`

Defined in: [api/session/user-session.ts:31](https://github.com/davinidae/umazing-musumengine/blob/18c3ff3260c8ab431287937bbbd69b2ff72846ba/src/api/session/user-session.ts#L31)

Persist the last successful or terminal step of the pipeline.

#### Parameters

##### step

`Partial`\<\{ `decoded`: `DecodeResponseOutput`; `endpoint`: `string`; `name`: `string`; `requestB64`: `string`; `responseB64`: `string`; \}\> | `undefined`

#### Returns

`void`
