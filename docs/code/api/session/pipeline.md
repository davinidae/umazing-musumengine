# api/session/pipeline

## Classes

### Pipeline

Defined in:
[api/session/pipeline.ts:21](https://github.com/davinidae/umazing-musumengine/blob/f7b34d19a41237760d3f0823d1a963b560f03912/src/api/session/pipeline.ts#L21)

Executes a sequence of pipeline services within a session context.

#### Constructors

##### Constructor

> **new Pipeline**(`id`, `createdAt`, `storedData`, `ctx`): [`Pipeline`](#pipeline)

Defined in:
[api/session/pipeline.ts:22](https://github.com/davinidae/umazing-musumengine/blob/f7b34d19a41237760d3f0823d1a963b560f03912/src/api/session/pipeline.ts#L22)

###### Parameters

###### id

`string`

###### createdAt

`number`

###### storedData

[`StoredData`](../models/api.model.md#storeddata)

###### ctx

[`PipelineContext`](../models/pipelines.model.md#pipelinecontext)

###### Returns

[`Pipeline`](#pipeline)

#### Properties

##### createdAt

> `readonly` **createdAt**: `number`

Defined in:
[api/session/pipeline.ts:24](https://github.com/davinidae/umazing-musumengine/blob/f7b34d19a41237760d3f0823d1a963b560f03912/src/api/session/pipeline.ts#L24)

##### ctx

> `private` **ctx**: [`PipelineContext`](../models/pipelines.model.md#pipelinecontext)

Defined in:
[api/session/pipeline.ts:26](https://github.com/davinidae/umazing-musumengine/blob/f7b34d19a41237760d3f0823d1a963b560f03912/src/api/session/pipeline.ts#L26)

##### id

> `readonly` **id**: `string`

Defined in:
[api/session/pipeline.ts:23](https://github.com/davinidae/umazing-musumengine/blob/f7b34d19a41237760d3f0823d1a963b560f03912/src/api/session/pipeline.ts#L23)

##### storedData

> `readonly` **storedData**: [`StoredData`](../models/api.model.md#storeddata)

Defined in:
[api/session/pipeline.ts:25](https://github.com/davinidae/umazing-musumengine/blob/f7b34d19a41237760d3f0823d1a963b560f03912/src/api/session/pipeline.ts#L25)

#### Methods

##### execute()

> **execute**(`steps`): `Promise`\<[`StepResult`](../models/pipelines.model.md#stepresult)[]\>

Defined in:
[api/session/pipeline.ts:63](https://github.com/davinidae/umazing-musumengine/blob/f7b34d19a41237760d3f0823d1a963b560f03912/src/api/session/pipeline.ts#L63)

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
[api/session/pipeline.ts:43](https://github.com/davinidae/umazing-musumengine/blob/f7b34d19a41237760d3f0823d1a963b560f03912/src/api/session/pipeline.ts#L43)

Access the pipeline context, if any.

###### Returns

[`PipelineContext`](../models/pipelines.model.md#pipelinecontext) \| `undefined`

Current `PipelineContext` or `undefined`.

##### setContext()

> **setContext**(`ctx`): `void`

Defined in:
[api/session/pipeline.ts:35](https://github.com/davinidae/umazing-musumengine/blob/f7b34d19a41237760d3f0823d1a963b560f03912/src/api/session/pipeline.ts#L35)

Replace or initialize the pipeline context for this session.

###### Parameters

###### ctx

[`PipelineContext`](../models/pipelines.model.md#pipelinecontext)

New `PipelineContext` to set.

###### Returns

`void`

##### setStoredData()

> **setStoredData**(): `Promise`\<`void`\>

Defined in:
[api/session/pipeline.ts:47](https://github.com/davinidae/umazing-musumengine/blob/f7b34d19a41237760d3f0823d1a963b560f03912/src/api/session/pipeline.ts#L47)

###### Returns

`Promise`\<`void`\>
