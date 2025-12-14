# api/pipelines/services/load_index.service

## Classes

### LoadIndexService

Defined in:
[api/pipelines/services/load_index.service.ts:8](https://github.com/davinidae/umazing-musumengine/blob/6d93a9d181bc10f7bca06b31a7a5ef63bcfb6c64/src/api/pipelines/services/load_index.service.ts#L8)

load/index: Retrieves the main screen data for the session. Requires a valid viewer_id; skips
otherwise.

#### Extends

- [`StepService`](step.service.md#stepservice)

#### Constructors

##### Constructor

> **new LoadIndexService**(`ctx`): [`LoadIndexService`](#loadindexservice)

Defined in:
[api/pipelines/services/step.service.ts:28](https://github.com/davinidae/umazing-musumengine/blob/6d93a9d181bc10f7bca06b31a7a5ef63bcfb6c64/src/api/pipelines/services/step.service.ts#L28)

Construct a step with the provided execution context.

###### Parameters

###### ctx

[`PipelineContext`](../../models/pipelines.model.md#pipelinecontext)

PipelineContext holding runtime, upstreamBase, blob1 and clientData.

###### Returns

[`LoadIndexService`](#loadindexservice)

###### Inherited from

[`StepService`](step.service.md#stepservice).[`constructor`](step.service.md#constructor)

#### Properties

##### ctx

> `protected` `readonly` **ctx**:
> [`PipelineContext`](../../models/pipelines.model.md#pipelinecontext)

Defined in:
[api/pipelines/services/step.service.ts:28](https://github.com/davinidae/umazing-musumengine/blob/6d93a9d181bc10f7bca06b31a7a5ef63bcfb6c64/src/api/pipelines/services/step.service.ts#L28)

PipelineContext holding runtime, upstreamBase, blob1 and clientData.

###### Inherited from

[`StepService`](step.service.md#stepservice).[`ctx`](step.service.md#ctx)

##### endpoint

> `readonly` **endpoint**: `"load/index"` = `'load/index'`

Defined in:
[api/pipelines/services/load_index.service.ts:10](https://github.com/davinidae/umazing-musumengine/blob/6d93a9d181bc10f7bca06b31a7a5ef63bcfb6c64/src/api/pipelines/services/load_index.service.ts#L10)

###### Overrides

[`StepService`](step.service.md#stepservice).[`endpoint`](step.service.md#endpoint)

##### framing

> `readonly` **framing**: [`LengthPrefixed`](../../../lib/models/runtime.model.md#lengthprefixed) =
> `FramingMode.LengthPrefixed`

Defined in:
[api/pipelines/services/load_index.service.ts:11](https://github.com/davinidae/umazing-musumengine/blob/6d93a9d181bc10f7bca06b31a7a5ef63bcfb6c64/src/api/pipelines/services/load_index.service.ts#L11)

###### Overrides

[`StepService`](step.service.md#stepservice).[`framing`](step.service.md#framing)

##### name

> `readonly` **name**: `"load_index"` = `'load_index'`

Defined in:
[api/pipelines/services/load_index.service.ts:9](https://github.com/davinidae/umazing-musumengine/blob/6d93a9d181bc10f7bca06b31a7a5ef63bcfb6c64/src/api/pipelines/services/load_index.service.ts#L9)

###### Overrides

[`StepService`](step.service.md#stepservice).[`name`](step.service.md#name)

##### omitViewerId

> `protected` **omitViewerId**: `boolean` = `false`

Defined in:
[api/pipelines/services/step.service.ts:97](https://github.com/davinidae/umazing-musumengine/blob/6d93a9d181bc10f7bca06b31a7a5ef63bcfb6c64/src/api/pipelines/services/step.service.ts#L97)

Override to `true` for steps that should not enforce `viewer_id` preconditions (e.g., `pre_signup`).

###### Inherited from

[`StepService`](step.service.md#stepservice).[`omitViewerId`](step.service.md#omitviewerid)

#### Methods

##### callUpstream()

> `protected` **callUpstream**(`requestB64`): `Promise`\<\{ `responseB64`: `string`; `responseCode`:
> [`GallopResultCode`](../../models/result_codes.model.md#gallopresultcode); \}\>

Defined in:
[api/pipelines/services/step.service.ts:48](https://github.com/davinidae/umazing-musumengine/blob/6d93a9d181bc10f7bca06b31a7a5ef63bcfb6c64/src/api/pipelines/services/step.service.ts#L48)

POST a Base64 request to the upstream API and return the Base64 response string with a result code.

###### Parameters

###### requestB64

`string`

Base64-encoded request buffer.

###### Returns

`Promise`\<\{ `responseB64`: `string`; `responseCode`:
[`GallopResultCode`](../../models/result_codes.model.md#gallopresultcode); \}\>

`{ responseB64, responseCode }` where `responseCode` is the HTTP status or synthesized.

###### Throws

If upstream base is missing or the response shape is invalid.

###### Inherited from

[`StepService`](step.service.md#stepservice).[`callUpstream`](step.service.md#callupstream)

##### execute()

> **execute**(`prev`):
> `Promise`\<[`StepResultBase`](../../models/pipelines.model.md#stepresultbase)\>

Defined in:
[api/pipelines/services/step.service.ts:110](https://github.com/davinidae/umazing-musumengine/blob/6d93a9d181bc10f7bca06b31a7a5ef63bcfb6c64/src/api/pipelines/services/step.service.ts#L110)

Execute the step end-to-end: obtain preconditions, encode request, call upstream, and decode
response.

###### Parameters

###### prev

Previous step result, if any.

`Partial`\<\{ `decoded`:
[`DecodeResponseOutput`](../../../lib/models/runtime.model.md#decoderesponseoutput); `endpoint`:
`string`; `name`: `string`; `requestB64`: `string`; `responseB64`: `string`; \}\> | `undefined`

###### Returns

`Promise`\<[`StepResultBase`](../../models/pipelines.model.md#stepresultbase)\>

StepResultBase without the `order` field (assigned by the pipeline runner).

###### Inherited from

[`StepService`](step.service.md#stepservice).[`execute`](step.service.md#execute)

##### getPayload()

> **getPayload**(`viewer_id`): `object`

Defined in:
[api/pipelines/services/load_index.service.ts:16](https://github.com/davinidae/umazing-musumengine/blob/6d93a9d181bc10f7bca06b31a7a5ef63bcfb6c64/src/api/pipelines/services/load_index.service.ts#L16)

Build payload for `load/index` using `viewer_id` and client metadata.

###### Parameters

###### viewer_id

`number`

###### Returns

`object`

###### carrier

> **carrier**: `string`

###### device

> **device**: `number`

###### device_id

> **device_id**: `string`

###### device_name

> **device_name**: `string`

###### dmm_onetime_token

> **dmm_onetime_token**: `string` \| `null`

###### dmm_viewer_id

> **dmm_viewer_id**: `number` \| `null`

###### graphics_device_name

> **graphics_device_name**: `string`

###### ip_address

> **ip_address**: `string`

###### keychain

> **keychain**: `number`

###### locale

> **locale**: `string`

###### platform_os_version

> **platform_os_version**: `string`

###### steam_id

> **steam_id**: `string`

###### steam_session_ticket

> **steam_session_ticket**: `string`

###### viewer_id

> **viewer_id**: `number`

###### Overrides

[`StepService`](step.service.md#stepservice).[`getPayload`](step.service.md#getpayload)
