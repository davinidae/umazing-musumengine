# Class: UserSession

Defined in: [api/session/user-session.ts:12](https://github.com/davinidae/umazing-musumengine/blob/18fb9920f0c1134675a2221f55ba500b4715772f/src/api/session/user-session.ts#L12)

Represents a per-user server-side session owned by the API.

Responsibilities
- Hold server-only state: PipelineContext (crypto/runtime + upstream config) and the last pipeline step result.
- Provide helpers to run a sequence of pipeline services and persist the last step.
- Do NOT expose sensitive state to API consumers; only share the opaque `id`.

## Methods

### executePipeline()

> **executePipeline**(`steps`): `Promise`\<[`StepResult`](../../../models/pipelines.model/interfaces/StepResult.md)[]\>

Defined in: [api/session/user-session.ts:51](https://github.com/davinidae/umazing-musumengine/blob/18fb9920f0c1134675a2221f55ba500b4715772f/src/api/session/user-session.ts#L51)

Execute a set of services sequentially, instantiating each with the current context.
On error, pushes an error result and stops execution.

#### Parameters

##### steps

[`StepServiceCtor`](../../../pipelines/services/step.service/type-aliases/StepServiceCtor.md)[]

Constructors for services to run, in order.

#### Returns

`Promise`\<[`StepResult`](../../../models/pipelines.model/interfaces/StepResult.md)[]\>

Ordered list of StepResult items, including the error entry if an error occurred.

***

### getContext()

> **getContext**(): [`PipelineContext`](../../../models/pipelines.model/interfaces/PipelineContext.md) \| `undefined`

Defined in: [api/session/user-session.ts:30](https://github.com/davinidae/umazing-musumengine/blob/18fb9920f0c1134675a2221f55ba500b4715772f/src/api/session/user-session.ts#L30)

Access the pipeline context, if any.

#### Returns

[`PipelineContext`](../../../models/pipelines.model/interfaces/PipelineContext.md) \| `undefined`

***

### getLastStep()

> **getLastStep**(): [`StepPrevResult`](../../../models/pipelines.model/interfaces/StepPrevResult.md) \| `undefined`

Defined in: [api/session/user-session.ts:40](https://github.com/davinidae/umazing-musumengine/blob/18fb9920f0c1134675a2221f55ba500b4715772f/src/api/session/user-session.ts#L40)

Retrieve the last step result, used as input for chained pipelines.

#### Returns

[`StepPrevResult`](../../../models/pipelines.model/interfaces/StepPrevResult.md) \| `undefined`

***

### runPipeline()

> **runPipeline**(`services`): `Promise`\<[`StepResult`](../../../models/pipelines.model/interfaces/StepResult.md)[]\>

Defined in: [api/session/user-session.ts:91](https://github.com/davinidae/umazing-musumengine/blob/18fb9920f0c1134675a2221f55ba500b4715772f/src/api/session/user-session.ts#L91)

Convenience wrapper around executePipeline that also saves the last step for chaining.

#### Parameters

##### services

[`StepServiceCtor`](../../../pipelines/services/step.service/type-aliases/StepServiceCtor.md)[]

Constructors for services to run, in order.

#### Returns

`Promise`\<[`StepResult`](../../../models/pipelines.model/interfaces/StepResult.md)[]\>

***

### setContext()

> **setContext**(`ctx`): `void`

Defined in: [api/session/user-session.ts:25](https://github.com/davinidae/umazing-musumengine/blob/18fb9920f0c1134675a2221f55ba500b4715772f/src/api/session/user-session.ts#L25)

Replace or initialize the pipeline context for this session.

#### Parameters

##### ctx

[`PipelineContext`](../../../models/pipelines.model/interfaces/PipelineContext.md)

#### Returns

`void`

***

### setLastStep()

> **setLastStep**(`step`): `void`

Defined in: [api/session/user-session.ts:35](https://github.com/davinidae/umazing-musumengine/blob/18fb9920f0c1134675a2221f55ba500b4715772f/src/api/session/user-session.ts#L35)

Persist the last successful or terminal step of the pipeline.

#### Parameters

##### step

[`StepPrevResult`](../../../models/pipelines.model/interfaces/StepPrevResult.md) | `undefined`

#### Returns

`void`
