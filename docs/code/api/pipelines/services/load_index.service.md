# api/pipelines/services/load\_index.service

## Classes

### LoadIndexService

Defined in: [api/pipelines/services/load\_index.service.ts:8](https://github.com/davinidae/umazing-musumengine/blob/c9c338bd9c89fbba10782f52f772a51af66db58d/src/api/pipelines/services/load_index.service.ts#L8)

load/index: Retrieves the main screen data for the session.
Requires a valid viewer_id; skips otherwise.

#### Extends

- [`StepService`](step.service.md#stepservice)

#### Constructors

##### Constructor

> **new LoadIndexService**(`ctx`): [`LoadIndexService`](#loadindexservice)

Defined in: [api/pipelines/services/step.service.ts:28](https://github.com/davinidae/umazing-musumengine/blob/c9c338bd9c89fbba10782f52f772a51af66db58d/src/api/pipelines/services/step.service.ts#L28)

Construct a step with the provided execution context.

###### Parameters

###### ctx

[`PipelineContext`](../../models/pipelines.model.md#pipelinecontext)

PipelineContext holding runtime, upstreamBase, blob1 and clientData.

###### Returns

[`LoadIndexService`](#loadindexservice)

###### Inherited from

[`StepService`](step.service.md#stepservice).[`constructor`](step.service.md#constructor)

#### Methods

##### execute()

> **execute**(`prev`): `Promise`\<[`StepResultBase`](../../models/pipelines.model.md#stepresultbase)\>

Defined in: [api/pipelines/services/step.service.ts:110](https://github.com/davinidae/umazing-musumengine/blob/c9c338bd9c89fbba10782f52f772a51af66db58d/src/api/pipelines/services/step.service.ts#L110)

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

> **getPayload**(`viewer_id`): `object`

Defined in: [api/pipelines/services/load\_index.service.ts:16](https://github.com/davinidae/umazing-musumengine/blob/c9c338bd9c89fbba10782f52f772a51af66db58d/src/api/pipelines/services/load_index.service.ts#L16)

Build payload for `load/index` using `viewer_id` and client metadata.

###### Parameters

###### viewer\_id

`number`

###### Returns

`object`

###### carrier

> **carrier**: `string`

###### device

> **device**: `number`

###### device\_id

> **device\_id**: `string`

###### device\_name

> **device\_name**: `string`

###### dmm\_onetime\_token

> **dmm\_onetime\_token**: `string` \| `null`

###### dmm\_viewer\_id

> **dmm\_viewer\_id**: `number` \| `null`

###### graphics\_device\_name

> **graphics\_device\_name**: `string`

###### ip\_address

> **ip\_address**: `string`

###### keychain

> **keychain**: `number`

###### locale

> **locale**: `string`

###### platform\_os\_version

> **platform\_os\_version**: `string`

###### steam\_id

> **steam\_id**: `string`

###### steam\_session\_ticket

> **steam\_session\_ticket**: `string`

###### viewer\_id

> **viewer\_id**: `number`

###### Overrides

[`StepService`](step.service.md#stepservice).[`getPayload`](step.service.md#getpayload)
