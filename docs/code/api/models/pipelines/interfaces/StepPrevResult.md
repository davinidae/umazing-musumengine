# Interface: StepPrevResult

Defined in: [api/models/pipelines.ts:12](https://github.com/davinidae/umazing-musumengine/blob/313d7b3da3bf5cac1cbad23523f6160ad25ffb7e/src/api/models/pipelines.ts#L12)

Minimal shape passed between pipeline steps. May be undefined for the first step.
Implementations may carry forward useful decoded headers (e.g., viewer_id).
