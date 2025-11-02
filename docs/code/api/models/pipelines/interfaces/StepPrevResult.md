# Interface: StepPrevResult

Defined in: [api/models/pipelines.ts:12](https://github.com/davinidae/umazing-musumengine/blob/ef7abbeb2f0a0bbb0762686b42f68cdafb94656e/src/api/models/pipelines.ts#L12)

Minimal shape passed between pipeline steps. May be undefined for the first step.
Implementations may carry forward useful decoded headers (e.g., viewer_id).
