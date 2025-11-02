# Interface: StepPrevResult

Defined in: [api/models/pipelines.ts:12](https://github.com/davinidae/umazing-musumengine/blob/e297eba6a8f7fc24343fc263108a30476ed20d1c/src/api/models/pipelines.ts#L12)

Minimal shape passed between pipeline steps. May be undefined for the first step.
Implementations may carry forward useful decoded headers (e.g., viewer_id).
