# api/models/pipelines.model

## Type Aliases

### EncodedBase64

> **EncodedBase64** = `string`

Defined in:
[api/models/pipelines.model.ts:8](https://github.com/davinidae/umazing-musumengine/blob/c7165367514289ac3f84628f7086bb7b2e32980f/src/api/models/pipelines.model.ts#L8)

Base64-encoded buffer string. Used for request and response payloads over the wire.

---

### PipelineContext

> **PipelineContext** = `object`

Defined in:
[api/models/pipelines.model.ts:68](https://github.com/davinidae/umazing-musumengine/blob/c7165367514289ac3f84628f7086bb7b2e32980f/src/api/models/pipelines.model.ts#L68)

Execution context for pipeline services. Lives in server-side session state.

- runtime: encoder/decoder utilities
- upstreamBase: base URL for remote UmaMusume API
- blob1: header fields used when constructing requests
- clientData: device/environment fields included in payloads

#### Properties

##### blob1

> **blob1**: `object`

Defined in:
[api/models/pipelines.model.ts:72](https://github.com/davinidae/umazing-musumengine/blob/c7165367514289ac3f84628f7086bb7b2e32980f/src/api/models/pipelines.model.ts#L72)

###### auth_key_hex

> **auth_key_hex**: `string`

48-byte auth key (hex).

###### prefix_hex

> **prefix_hex**: `string`

Free-form prefix echoed back by server (hex).

###### response_key_hex

> **response_key_hex**: `string`

32-byte response key (hex).

###### session_id_hex

> **session_id_hex**: `string`

16-byte session identifier (hex).

###### udid_raw_hex

> **udid_raw_hex**: `string`

16-byte device UDID (hex).

##### clientData

> **clientData**: `object` & `Partial`\<\{ `steam_id`: `string`; `steam_session_ticket`: `string`;
> \}\>

Defined in:
[api/models/pipelines.model.ts:85](https://github.com/davinidae/umazing-musumengine/blob/c7165367514289ac3f84628f7086bb7b2e32980f/src/api/models/pipelines.model.ts#L85)

###### Type Declaration

###### carrier

> **carrier**: `string`

Carrier name (if applicable).

###### device

> **device**: `number`

Platform/device id enum value.

###### device_id

> **device_id**: `string`

Device identifier string.

###### device_name

> **device_name**: `string`

Human-readable device name.

###### dmm_onetime_token

> **dmm_onetime_token**: `string` \| `null`

One-time DMM token (nullable).

###### dmm_viewer_id

> **dmm_viewer_id**: `number` \| `null`

DMM viewer id (nullable).

###### graphics_device_name

> **graphics_device_name**: `string`

GPU/graphics device name.

###### ip_address

> **ip_address**: `string`

Client IP address (string).

###### keychain

> **keychain**: `number`

Keychain flag (numeric).

###### locale

> **locale**: `string`

Locale code (e.g., 'en').

###### platform_os_version

> **platform_os_version**: `string`

OS version string.

###### viewer_id

> **viewer_id**: `number`

Set by upstream after signup/start_session.

##### runtime

> **runtime**: [`RuntimeClient`](../../lib/runtime-client.md#runtimeclient)

Defined in:
[api/models/pipelines.model.ts:69](https://github.com/davinidae/umazing-musumengine/blob/c7165367514289ac3f84628f7086bb7b2e32980f/src/api/models/pipelines.model.ts#L69)

##### upstreamBase

> **upstreamBase**: `string`

Defined in:
[api/models/pipelines.model.ts:70](https://github.com/davinidae/umazing-musumengine/blob/c7165367514289ac3f84628f7086bb7b2e32980f/src/api/models/pipelines.model.ts#L70)

---

### StepPrevResult

> **StepPrevResult** = `Partial`\<\{ `decoded`:
> [`DecodeResponseOutput`](../../lib/models/runtime.model.md#decoderesponseoutput); `endpoint`:
> `string`; `name`: `string`; `requestB64`: [`EncodedBase64`](#encodedbase64); `responseB64`:
> [`EncodedBase64`](#encodedbase64); \}\>

Defined in:
[api/models/pipelines.model.ts:15](https://github.com/davinidae/umazing-musumengine/blob/c7165367514289ac3f84628f7086bb7b2e32980f/src/api/models/pipelines.model.ts#L15)

Minimal shape passed between pipeline steps. May be `undefined` for the first step. Implementations
can carry forward useful decoded headers (e.g., `viewer_id`) via the `decoded` field.

---

### StepResult

> **StepResult** = [`StepResultBase`](#stepresultbase) & `object`

Defined in:
[api/models/pipelines.model.ts:57](https://github.com/davinidae/umazing-musumengine/blob/c7165367514289ac3f84628f7086bb7b2e32980f/src/api/models/pipelines.model.ts#L57)

A step result augmented with execution order (1-based).

#### Type Declaration

##### order

> **order**: `number`

---

### StepResultBase

> **StepResultBase** = `object` & `Partial`\<\{ `decoded`:
> [`DecodeResponseOutput`](../../lib/models/runtime.model.md#decoderesponseoutput); `error`:
> `string`; `errorStack`: `string`; `note`: `string`; `requestB64`:
> [`EncodedBase64`](#encodedbase64); `responseB64`: [`EncodedBase64`](#encodedbase64); `skipped`:
> `boolean`; \}\>

Defined in:
[api/models/pipelines.model.ts:37](https://github.com/davinidae/umazing-musumengine/blob/c7165367514289ac3f84628f7086bb7b2e32980f/src/api/models/pipelines.model.ts#L37)

Common fields every pipeline step should return.

- `name`: logical step/service identifier
- `endpoint`: upstream HTTP endpoint path used by the step
- `framing`: payload framing used for the request (`kv-stream` or `length-prefixed`)
- `requestB64`/`responseB64`: raw Base64 buffers for reproducibility/debugging
- `decoded`: best-effort decoded payload (headers + body)
- `skipped`: mark steps that intentionally didn’t run (preconditions not met)
- `note`: human-friendly explanation for skipped/edge cases
- `error`/`errorStack`: populated when a step throws; pipeline stops at first error
- `responseCode`/`responseCodeName`: upstream HTTP status or synthetic code and its enum name

#### Type Declaration

##### endpoint

> **endpoint**: `string`

##### framing

> **framing**: [`FramingMode`](../../lib/models/runtime.model.md#framingmode)

##### name

> **name**: `string`

##### responseCode

> **responseCode**: [`GallopResultCode`](result_codes.model.md#gallopresultcode)

##### responseCodeName

> **responseCodeName**: keyof _typeof_ [`GallopResultCode`](result_codes.model.md#gallopresultcode)
