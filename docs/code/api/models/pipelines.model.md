# api/models/pipelines.model

## Type Aliases

### EncodedBase64

> **EncodedBase64** = `string`

Defined in: [api/models/pipelines.model.ts:8](https://github.com/davinidae/umazing-musumengine/blob/ea13205c1ee681a9ed7d5ff07531503a02fab5c1/src/api/models/pipelines.model.ts#L8)

Base64-encoded buffer string. Used for request and response payloads over the wire.

***

### PipelineContext

> **PipelineContext** = `object`

Defined in: [api/models/pipelines.model.ts:68](https://github.com/davinidae/umazing-musumengine/blob/ea13205c1ee681a9ed7d5ff07531503a02fab5c1/src/api/models/pipelines.model.ts#L68)

Execution context for pipeline services. Lives in server-side session state.
- runtime: encoder/decoder utilities
- upstreamBase: base URL for remote UmaMusume API
- blob1: header fields used when constructing requests
- clientData: device/environment fields included in payloads

***

### StepPrevResult

> **StepPrevResult** = `Partial`\<\{ `decoded`: `DecodeResponseOutput`; `endpoint`: `string`; `name`: `string`; `requestB64`: [`EncodedBase64`](#encodedbase64); `responseB64`: [`EncodedBase64`](#encodedbase64); \}\>

Defined in: [api/models/pipelines.model.ts:15](https://github.com/davinidae/umazing-musumengine/blob/ea13205c1ee681a9ed7d5ff07531503a02fab5c1/src/api/models/pipelines.model.ts#L15)

Minimal shape passed between pipeline steps.
May be `undefined` for the first step. Implementations can carry forward useful
decoded headers (e.g., `viewer_id`) via the `decoded` field.

***

### StepResult

> **StepResult** = [`StepResultBase`](#stepresultbase) & `object`

Defined in: [api/models/pipelines.model.ts:57](https://github.com/davinidae/umazing-musumengine/blob/ea13205c1ee681a9ed7d5ff07531503a02fab5c1/src/api/models/pipelines.model.ts#L57)

A step result augmented with execution order (1-based).

#### Type Declaration

##### order

> **order**: `number`

***

### StepResultBase

> **StepResultBase** = `object` & `Partial`\<\{ `decoded`: `DecodeResponseOutput`; `error`: `string`; `errorStack`: `string`; `note`: `string`; `requestB64`: [`EncodedBase64`](#encodedbase64); `responseB64`: [`EncodedBase64`](#encodedbase64); `skipped`: `boolean`; \}\>

Defined in: [api/models/pipelines.model.ts:37](https://github.com/davinidae/umazing-musumengine/blob/ea13205c1ee681a9ed7d5ff07531503a02fab5c1/src/api/models/pipelines.model.ts#L37)

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

> **responseCodeName**: keyof *typeof* [`GallopResultCode`](result_codes.model.md#gallopresultcode)
