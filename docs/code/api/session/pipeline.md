# api/session/pipeline

## Classes

### Pipeline

Defined in:
[api/session/pipeline.ts:15](https://github.com/davinidae/umazing-musumengine/blob/53589098f19178584a73b07fd43b6a78f63365fa/src/api/session/pipeline.ts#L15)

Executes a sequence of pipeline services within a session context.

#### Methods

##### execute()

> **execute**(`steps`): `Promise`\<[`StepResult`](../models/pipelines.model.md#stepresult)[]\>

Defined in:
[api/session/pipeline.ts:54](https://github.com/davinidae/umazing-musumengine/blob/53589098f19178584a73b07fd43b6a78f63365fa/src/api/session/pipeline.ts#L54)

Execute services sequentially, instantiating each with the current context. On error, pushes an
error result and stops execution.

###### Parameters

###### steps

[`StepServiceCtor`](../pipelines/services/step.service.md#stepservicector)[]

Constructors for services to run, in order.

###### Returns

`Promise`\<[`StepResult`](../models/pipelines.model.md#stepresult)[]\>

Ordered list of `StepResult` items, including an error entry if an error occurred.

##### getContext()

> **getContext**(): [`PipelineContext`](../models/pipelines.model.md#pipelinecontext) \| `undefined`

Defined in:
[api/session/pipeline.ts:37](https://github.com/davinidae/umazing-musumengine/blob/53589098f19178584a73b07fd43b6a78f63365fa/src/api/session/pipeline.ts#L37)

Access the pipeline context, if any.

###### Returns

[`PipelineContext`](../models/pipelines.model.md#pipelinecontext) \| `undefined`

Current `PipelineContext` or `undefined`.

##### setContext()

> **setContext**(`ctx`): `void`

Defined in:
[api/session/pipeline.ts:29](https://github.com/davinidae/umazing-musumengine/blob/53589098f19178584a73b07fd43b6a78f63365fa/src/api/session/pipeline.ts#L29)

Replace or initialize the pipeline context for this session.

###### Parameters

###### ctx

[`PipelineContext`](../models/pipelines.model.md#pipelinecontext)

New `PipelineContext` to set.

###### Returns

`void`
