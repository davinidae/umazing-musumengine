# api/session/user-session

## Classes

### UserSession

Defined in:
[api/session/user-session.ts:14](https://github.com/davinidae/umazing-musumengine/blob/922c0baa165da9bc6377e61ef01c6518769a8a12/src/api/session/user-session.ts#L14)

Represents a per-user server-side session owned by the API.

Responsibilities

- Hold server-only state: `PipelineContext` (crypto/runtime + upstream config) and the last pipeline
  step result.
- Provide helpers to run a sequence of pipeline services and persist the last step.
- Do NOT expose sensitive state to API consumers; only share the opaque `id`.

#### Methods

##### getLastStep()

> **getLastStep**(): `Partial`\<\{ `decoded`: `DecodeResponseOutput`; `endpoint`: `string`; `name`:
> `string`; `requestB64`: `string`; `responseB64`: `string`; \}\> \| `undefined`

Defined in:
[api/session/user-session.ts:47](https://github.com/davinidae/umazing-musumengine/blob/922c0baa165da9bc6377e61ef01c6518769a8a12/src/api/session/user-session.ts#L47)

Retrieve the last step result, used as input for chained pipelines.

###### Returns

`Partial`\<\{ `decoded`: `DecodeResponseOutput`; `endpoint`: `string`; `name`: `string`;
`requestB64`: `string`; `responseB64`: `string`; \}\> \| `undefined`

`StepPrevResult` or `undefined`.

##### getPipeline()

> **getPipeline**(): [`Pipeline`](pipeline.md#pipeline)

Defined in:
[api/session/user-session.ts:31](https://github.com/davinidae/umazing-musumengine/blob/922c0baa165da9bc6377e61ef01c6518769a8a12/src/api/session/user-session.ts#L31)

Access the underlying `Pipeline` instance.

###### Returns

[`Pipeline`](pipeline.md#pipeline)

Pipeline instance.

##### runPipeline()

> **runPipeline**(`services`):
> `Promise`\<[`StepResult`](../models/pipelines.model.md#stepresult)[]\>

Defined in:
[api/session/user-session.ts:56](https://github.com/davinidae/umazing-musumengine/blob/922c0baa165da9bc6377e61ef01c6518769a8a12/src/api/session/user-session.ts#L56)

Convenience wrapper around executePipeline that also saves the last step for chaining.

###### Parameters

###### services

[`StepServiceCtor`](../pipelines/services/step.service.md#stepservicector)[]

Constructors for services to run, in order.

###### Returns

`Promise`\<[`StepResult`](../models/pipelines.model.md#stepresult)[]\>

Ordered list of `StepResult` items for the executed pipeline.

##### setLastStep()

> **setLastStep**(`step`): `void`

Defined in:
[api/session/user-session.ts:39](https://github.com/davinidae/umazing-musumengine/blob/922c0baa165da9bc6377e61ef01c6518769a8a12/src/api/session/user-session.ts#L39)

Persist the last successful or terminal step of the pipeline.

###### Parameters

###### step

Last step or `undefined`.

`Partial`\<\{ `decoded`: `DecodeResponseOutput`; `endpoint`: `string`; `name`: `string`;
`requestB64`: `string`; `responseB64`: `string`; \}\> | `undefined`

###### Returns

`void`
