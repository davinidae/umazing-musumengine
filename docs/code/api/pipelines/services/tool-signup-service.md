# api/pipelines/services/tool-signup.service

## Classes

### ToolSignupService

Defined in:
[api/pipelines/services/tool-signup.service.ts:10](https://github.com/davinidae/umazing-musumengine/blob/d3505fca22e9cc9337c67181003a80a301f9263f/src/api/pipelines/services/tool-signup.service.ts#L10)

tool/signup: Registers or fetches a viewer account based on device info. Carries viewer_id forward
when available from previous step. Uses kv-stream framing.

#### Extends

- [`StepService`](step.service.md#stepservice)

#### Constructors

##### Constructor

> **new ToolSignupService**(`ctx`, `pipeline`): [`ToolSignupService`](#toolsignupservice)

Defined in:
[api/pipelines/services/step.service.ts:62](https://github.com/davinidae/umazing-musumengine/blob/d3505fca22e9cc9337c67181003a80a301f9263f/src/api/pipelines/services/step.service.ts#L62)

Construct a step with the provided execution context.

###### Parameters

###### ctx

[`PipelineContext`](../../models/pipelines.model.md#pipelinecontext)

PipelineContext holding runtime, upstreamBase, blob1 and clientData.

###### pipeline

[`Pipeline`](../../session/pipeline.md#pipeline)

###### Returns

[`ToolSignupService`](#toolsignupservice)

###### Inherited from

[`StepService`](step.service.md#stepservice).[`constructor`](step.service.md#constructor)

#### Properties

##### ctx

> `protected` `readonly` **ctx**:
> [`PipelineContext`](../../models/pipelines.model.md#pipelinecontext)

Defined in:
[api/pipelines/services/step.service.ts:63](https://github.com/davinidae/umazing-musumengine/blob/d3505fca22e9cc9337c67181003a80a301f9263f/src/api/pipelines/services/step.service.ts#L63)

PipelineContext holding runtime, upstreamBase, blob1 and clientData.

###### Inherited from

[`StepService`](step.service.md#stepservice).[`ctx`](step.service.md#ctx)

##### endpoint

> `readonly` **endpoint**: `"tool/signup"` = `'tool/signup'`

Defined in:
[api/pipelines/services/tool-signup.service.ts:12](https://github.com/davinidae/umazing-musumengine/blob/d3505fca22e9cc9337c67181003a80a301f9263f/src/api/pipelines/services/tool-signup.service.ts#L12)

###### Overrides

[`StepService`](step.service.md#stepservice).[`endpoint`](step.service.md#endpoint)

##### framing

> `readonly` **framing**: [`KvStream`](../../../lib/models/runtime.model.md#kvstream) =
> `FramingMode.KvStream`

Defined in:
[api/pipelines/services/tool-signup.service.ts:13](https://github.com/davinidae/umazing-musumengine/blob/d3505fca22e9cc9337c67181003a80a301f9263f/src/api/pipelines/services/tool-signup.service.ts#L13)

###### Overrides

[`StepService`](step.service.md#stepservice).[`framing`](step.service.md#framing)

##### name

> `readonly` **name**: `"signup"` = `'signup'`

Defined in:
[api/pipelines/services/tool-signup.service.ts:11](https://github.com/davinidae/umazing-musumengine/blob/d3505fca22e9cc9337c67181003a80a301f9263f/src/api/pipelines/services/tool-signup.service.ts#L11)

###### Overrides

[`StepService`](step.service.md#stepservice).[`name`](step.service.md#name)

##### pipeline

> `protected` `readonly` **pipeline**: [`Pipeline`](../../session/pipeline.md#pipeline)

Defined in:
[api/pipelines/services/step.service.ts:64](https://github.com/davinidae/umazing-musumengine/blob/d3505fca22e9cc9337c67181003a80a301f9263f/src/api/pipelines/services/step.service.ts#L64)

###### Inherited from

[`StepService`](step.service.md#stepservice).[`pipeline`](step.service.md#pipeline)

#### Methods

##### callUpstream()

> `protected` **callUpstream**(`requestB64`, `payload`): `Promise`\<\{ `responseB64`: `string`;
> `responseCode`: [`GallopResultCode`](../../models/result_codes.model.md#gallopresultcode); \}\>

Defined in:
[api/pipelines/services/step.service.ts:85](https://github.com/davinidae/umazing-musumengine/blob/d3505fca22e9cc9337c67181003a80a301f9263f/src/api/pipelines/services/step.service.ts#L85)

POST a Base64 request to the upstream API and return the Base64 response string with a result code.

###### Parameters

###### requestB64

`string`

Base64-encoded request buffer.

###### payload

`unknown`

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
[api/pipelines/services/step.service.ts:174](https://github.com/davinidae/umazing-musumengine/blob/d3505fca22e9cc9337c67181003a80a301f9263f/src/api/pipelines/services/step.service.ts#L174)

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

##### getBaseHeaders()

> **getBaseHeaders**(): `object`

Defined in:
[api/pipelines/services/step.service.ts:45](https://github.com/davinidae/umazing-musumengine/blob/d3505fca22e9cc9337c67181003a80a301f9263f/src/api/pipelines/services/step.service.ts#L45)

###### Returns

`object`

###### accept

> **accept**: `string` = `'*/*'`

###### app-ver

> **app-ver**: `string` = `'1.20.11'`

###### content-type

> **content-type**: `string` = `'application/x-msgpack'`

###### device

> **device**: `number`

###### res-ver

> **res-ver**: `string` = `'10002800'`

###### sid

> **sid**: `` `${string}-${string}-${string}-${string}-${string}` ``

###### viewerid

> **viewerid**: `number`

###### x-unity-version

> **x-unity-version**: `string` = `'2022.3.62f2'`

###### Inherited from

[`StepService`](step.service.md#stepservice).[`getBaseHeaders`](step.service.md#getbaseheaders)

##### getBasePayload()

> **getBasePayload**(): `object`

Defined in:
[api/pipelines/services/step.service.ts:26](https://github.com/davinidae/umazing-musumengine/blob/d3505fca22e9cc9337c67181003a80a301f9263f/src/api/pipelines/services/step.service.ts#L26)

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

> **steam_id**: `string` \| `undefined`

###### steam_session_ticket

> **steam_session_ticket**: `string` \| `undefined`

###### viewer_id

> **viewer_id**: `number`

###### Inherited from

[`StepService`](step.service.md#stepservice).[`getBasePayload`](step.service.md#getbasepayload)

##### getHeaders()

> **getHeaders**(): `object`

Defined in:
[api/pipelines/services/tool-signup.service.ts:33](https://github.com/davinidae/umazing-musumengine/blob/d3505fca22e9cc9337c67181003a80a301f9263f/src/api/pipelines/services/tool-signup.service.ts#L33)

###### Returns

`object`

###### accept

> **accept**: `string` = `'*/*'`

###### app-ver

> **app-ver**: `string` = `'1.20.11'`

###### content-type

> **content-type**: `string` = `'application/x-msgpack'`

###### device

> **device**: `number`

###### res-ver

> **res-ver**: `string` = `'10002800'`

###### sid

> **sid**: `` `${string}-${string}-${string}-${string}-${string}` ``

###### viewerid

> **viewerid**: `number`

###### x-unity-version

> **x-unity-version**: `string` = `'2022.3.62f2'`

###### Overrides

[`StepService`](step.service.md#stepservice).[`getHeaders`](step.service.md#getheaders)

##### getPayload()

> **getPayload**(): `object`

Defined in:
[api/pipelines/services/tool-signup.service.ts:18](https://github.com/davinidae/umazing-musumengine/blob/d3505fca22e9cc9337c67181003a80a301f9263f/src/api/pipelines/services/tool-signup.service.ts#L18)

Build payload including `viewer_id` (if available) along with client data.

###### Returns

`object`

###### attestation_type

> **attestation_type**:
> [`AttestationType`](../../models/umamusume-api-enums.model.md#attestationtype)

###### carrier

> **carrier**: `string`

###### country

> **country**: `string` = `'Canada'`

###### credential

> **credential**: `string` = `''`

###### device

> **device**: `number`

###### device_id

> **device_id**: `string`

###### device_name

> **device_name**: `string`

###### device_token

> **device_token**: `null` = `null`

###### dma_state

> **dma_state**: `number` = `0`

###### dmm_onetime_token

> **dmm_onetime_token**: `string` \| `null`

###### dmm_viewer_id

> **dmm_viewer_id**: `number` \| `null`

###### error_code

> **error_code**: `number` = `0`

###### error_message

> **error_message**: `string` = `''`

###### graphics_device_name

> **graphics_device_name**: `string`

###### ip_address

> **ip_address**: `string`

###### keychain

> **keychain**: `number`

###### locale

> **locale**: `string`

###### optin_user_birth

> **optin_user_birth**: `number` = `199001`

###### platform_os_version

> **platform_os_version**: `string`

###### steam_id

> **steam_id**: `string` \| `undefined`

###### steam_session_ticket

> **steam_session_ticket**: `string` \| `undefined`

###### viewer_id

> **viewer_id**: `number`

###### Overrides

[`StepService`](step.service.md#stepservice).[`getPayload`](step.service.md#getpayload)
