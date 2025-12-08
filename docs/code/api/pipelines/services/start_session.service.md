# api/pipelines/services/start_session.service

## Classes

### StartSessionService

Defined in:
[api/pipelines/services/start_session.service.ts:8](https://github.com/davinidae/umazing-musumengine/blob/7c5042da9efbc0ab8e59a0df16029c0f6ee3a2cc/src/api/pipelines/services/start_session.service.ts#L8)

tool/start_session: Establishes a server session for the viewer. Skips execution if a valid
viewer_id is not available.

#### Extends

- [`StepService`](step.service.md#stepservice)

#### Constructors

##### Constructor

> **new StartSessionService**(`ctx`): [`StartSessionService`](#startsessionservice)

Defined in:
[api/pipelines/services/step.service.ts:28](https://github.com/davinidae/umazing-musumengine/blob/7c5042da9efbc0ab8e59a0df16029c0f6ee3a2cc/src/api/pipelines/services/step.service.ts#L28)

Construct a step with the provided execution context.

###### Parameters

###### ctx

[`PipelineContext`](../../models/pipelines.model.md#pipelinecontext)

PipelineContext holding runtime, upstreamBase, blob1 and clientData.

###### Returns

[`StartSessionService`](#startsessionservice)

###### Inherited from

[`StepService`](step.service.md#stepservice).[`constructor`](step.service.md#constructor)

#### Methods

##### execute()

> **execute**(`prev`):
> `Promise`\<[`StepResultBase`](../../models/pipelines.model.md#stepresultbase)\>

Defined in:
[api/pipelines/services/step.service.ts:110](https://github.com/davinidae/umazing-musumengine/blob/7c5042da9efbc0ab8e59a0df16029c0f6ee3a2cc/src/api/pipelines/services/step.service.ts#L110)

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

> **getPayload**(`viewer_id`): `object`

Defined in:
[api/pipelines/services/start_session.service.ts:16](https://github.com/davinidae/umazing-musumengine/blob/7c5042da9efbc0ab8e59a0df16029c0f6ee3a2cc/src/api/pipelines/services/start_session.service.ts#L16)

Build payload required by `tool/start_session` including device and platform metadata.

###### Parameters

###### viewer_id

`number`

###### Returns

`object`

###### attestation_type

> **attestation_type**: `number` = `0`

###### carrier

> **carrier**: `string`

###### device

> **device**: `number`

###### device_id

> **device_id**: `string`

###### device_name

> **device_name**: `string`

###### device_token

> **device_token**: `null` = `null`

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
