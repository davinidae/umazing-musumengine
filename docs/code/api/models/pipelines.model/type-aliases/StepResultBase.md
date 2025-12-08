# Type Alias: StepResultBase

> **StepResultBase** = `object` & `Partial`\<\{ `decoded`: `DecodeResponseOutput`; `error`: `string`; `errorStack`: `string`; `note`: `string`; `requestB64`: [`EncodedBase64`](EncodedBase64.md); `responseB64`: [`EncodedBase64`](EncodedBase64.md); `skipped`: `boolean`; \}\>

Defined in: [api/models/pipelines.model.ts:32](https://github.com/davinidae/umazing-musumengine/blob/44f6e784adc57f5b49586071f4bdcb81060753f5/src/api/models/pipelines.model.ts#L32)

Common fields every pipeline step should return.
- name: logical step/service identifier
- endpoint: upstream HTTP endpoint path used by the step
- framing: payload framing used for the request ('kv-stream' or 'length-prefixed')
- requestB64/responseB64: raw Base64 buffers for reproducibility/debugging
- decoded: best-effort decoded payload
- skipped: mark steps that intentionally didn’t run (preconditions not met)
- note: human-friendly explanation for skipped/edge cases
- error/errorStack: populated when a step throws; pipeline stops at first error

## Type Declaration

### endpoint

> **endpoint**: `string`

### framing

> **framing**: [`FramingMode`](../../../../lib/models/runtime.model/enumerations/FramingMode.md)

### name

> **name**: `string`

### responseCode

> **responseCode**: `GallopResultCode`

### responseCodeName

> **responseCodeName**: keyof *typeof* `GallopResultCode`
