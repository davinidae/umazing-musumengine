# Interface: StepPrevResult

Defined in: [api/models/pipelines.ts:12](https://github.com/davinidae/umazing-musumengine/blob/e31f12912bf088e7e67f5379b1fed36ba4f17894/src/api/models/pipelines.ts#L12)

Minimal shape passed between pipeline steps. May be undefined for the first step.
Implementations may carry forward useful decoded headers (e.g., viewer_id).
