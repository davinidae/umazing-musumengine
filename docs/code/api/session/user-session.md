# api/session/user-session

## Classes

### UserSession

Defined in:
[api/session/user-session.ts:14](https://github.com/davinidae/umazing-musumengine/blob/d3505fca22e9cc9337c67181003a80a301f9263f/src/api/session/user-session.ts#L14)

Represents a per-user server-side session owned by the API.

Responsibilities

- Hold server-only state: `PipelineContext` (crypto/runtime + upstream config) and the last pipeline
  step result.
- Provide helpers to run a sequence of pipeline services and persist the last step.
- Do NOT expose sensitive state to API consumers; only share the opaque `id`.

#### Constructors

##### Constructor

> **new UserSession**(`id`, `createdAt`, `storedData`, `ctx`): [`UserSession`](#usersession)

Defined in:
[api/session/user-session.ts:19](https://github.com/davinidae/umazing-musumengine/blob/d3505fca22e9cc9337c67181003a80a301f9263f/src/api/session/user-session.ts#L19)

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

[`UserSession`](#usersession)

#### Properties

##### createdAt

> `readonly` **createdAt**: `number`

Defined in:
[api/session/user-session.ts:21](https://github.com/davinidae/umazing-musumengine/blob/d3505fca22e9cc9337c67181003a80a301f9263f/src/api/session/user-session.ts#L21)

##### ctx

> `private` `readonly` **ctx**: [`PipelineContext`](../models/pipelines.model.md#pipelinecontext)

Defined in:
[api/session/user-session.ts:23](https://github.com/davinidae/umazing-musumengine/blob/d3505fca22e9cc9337c67181003a80a301f9263f/src/api/session/user-session.ts#L23)

##### id

> `readonly` **id**: `string`

Defined in:
[api/session/user-session.ts:20](https://github.com/davinidae/umazing-musumengine/blob/d3505fca22e9cc9337c67181003a80a301f9263f/src/api/session/user-session.ts#L20)

##### lastModifiedAt

> **lastModifiedAt**: `number`

Defined in:
[api/session/user-session.ts:17](https://github.com/davinidae/umazing-musumengine/blob/d3505fca22e9cc9337c67181003a80a301f9263f/src/api/session/user-session.ts#L17)

##### lastStep?

> `private` `optional` **lastStep**: `Partial`\<\{ `decoded`:
> [`DecodeResponseOutput`](../../lib/models/runtime.model.md#decoderesponseoutput); `endpoint`:
> `string`; `name`: `string`; `requestB64`: `string`; `responseB64`: `string`; \}\>

Defined in:
[api/session/user-session.ts:15](https://github.com/davinidae/umazing-musumengine/blob/d3505fca22e9cc9337c67181003a80a301f9263f/src/api/session/user-session.ts#L15)

##### pipeline

> `private` **pipeline**: [`Pipeline`](pipeline.md#pipeline)

Defined in:
[api/session/user-session.ts:16](https://github.com/davinidae/umazing-musumengine/blob/d3505fca22e9cc9337c67181003a80a301f9263f/src/api/session/user-session.ts#L16)

##### storedData

> `readonly` **storedData**: [`StoredData`](../models/api.model.md#storeddata)

Defined in:
[api/session/user-session.ts:22](https://github.com/davinidae/umazing-musumengine/blob/d3505fca22e9cc9337c67181003a80a301f9263f/src/api/session/user-session.ts#L22)

#### Methods

##### getLastStep()

> **getLastStep**(): `Partial`\<\{ `decoded`:
> [`DecodeResponseOutput`](../../lib/models/runtime.model.md#decoderesponseoutput); `endpoint`:
> `string`; `name`: `string`; `requestB64`: `string`; `responseB64`: `string`; \}\> \| `undefined`

Defined in:
[api/session/user-session.ts:49](https://github.com/davinidae/umazing-musumengine/blob/d3505fca22e9cc9337c67181003a80a301f9263f/src/api/session/user-session.ts#L49)

Retrieve the last step result, used as input for chained pipelines.

###### Returns

`Partial`\<\{ `decoded`:
[`DecodeResponseOutput`](../../lib/models/runtime.model.md#decoderesponseoutput); `endpoint`:
`string`; `name`: `string`; `requestB64`: `string`; `responseB64`: `string`; \}\> \| `undefined`

`StepPrevResult` or `undefined`.

##### getPipeline()

> **getPipeline**(): [`Pipeline`](pipeline.md#pipeline)

Defined in:
[api/session/user-session.ts:33](https://github.com/davinidae/umazing-musumengine/blob/d3505fca22e9cc9337c67181003a80a301f9263f/src/api/session/user-session.ts#L33)

Access the underlying `Pipeline` instance.

###### Returns

[`Pipeline`](pipeline.md#pipeline)

Pipeline instance.

##### getStoredData()

> **getStoredData**(): [`StoredData`](../models/api.model.md#storeddata)

Defined in:
[api/session/user-session.ts:67](https://github.com/davinidae/umazing-musumengine/blob/d3505fca22e9cc9337c67181003a80a301f9263f/src/api/session/user-session.ts#L67)

###### Returns

[`StoredData`](../models/api.model.md#storeddata)

##### runPipeline()

> **runPipeline**(`services`):
> `Promise`\<[`StepResult`](../models/pipelines.model.md#stepresult)[]\>

Defined in:
[api/session/user-session.ts:58](https://github.com/davinidae/umazing-musumengine/blob/d3505fca22e9cc9337c67181003a80a301f9263f/src/api/session/user-session.ts#L58)

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
[api/session/user-session.ts:41](https://github.com/davinidae/umazing-musumengine/blob/d3505fca22e9cc9337c67181003a80a301f9263f/src/api/session/user-session.ts#L41)

Persist the last successful or terminal step of the pipeline.

###### Parameters

###### step

Last step or `undefined`.

`Partial`\<\{ `decoded`:
[`DecodeResponseOutput`](../../lib/models/runtime.model.md#decoderesponseoutput); `endpoint`:
`string`; `name`: `string`; `requestB64`: `string`; `responseB64`: `string`; \}\> | `undefined`

###### Returns

`void`
