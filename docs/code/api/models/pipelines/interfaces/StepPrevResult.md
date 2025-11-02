# Interface: StepPrevResult

Defined in: [api/models/pipelines.ts:12](https://github.com/davinidae/umazing-musumengine/blob/3699b0b316713adaa61e62c11a4220687bdb55bc/src/api/models/pipelines.ts#L12)

Minimal shape passed between pipeline steps. May be undefined for the first step.
Implementations may carry forward useful decoded headers (e.g., viewer_id).
