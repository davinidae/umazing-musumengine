# Type Alias: StepPrevResult

> **StepPrevResult** = `Partial`\<\{ `decoded`: `DecodeResponseOutput`; `endpoint`: `string`; `name`: `string`; `requestB64`: [`EncodedBase64`](EncodedBase64.md); `responseB64`: [`EncodedBase64`](EncodedBase64.md); \}\>

Defined in: [api/models/pipelines.model.ts:13](https://github.com/davinidae/umazing-musumengine/blob/f0aa00e05dacca920f40c0772577d56aeee15536/src/api/models/pipelines.model.ts#L13)

Minimal shape passed between pipeline steps. May be undefined for the first step.
Implementations may carry forward useful decoded headers (e.g., viewer_id).
