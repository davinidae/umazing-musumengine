# Interface: StepResultBase

Defined in: [api/models/pipelines.ts:31](https://github.com/davinidae/umazing-musumengine/blob/e297eba6a8f7fc24343fc263108a30476ed20d1c/src/api/models/pipelines.ts#L31)

Common fields every pipeline step should return.
- name: logical step/service identifier
- endpoint: upstream HTTP endpoint path used by the step
- framing: payload framing used for the request ('kv-stream' or 'length-prefixed')
- requestB64/responseB64: raw Base64 buffers for reproducibility/debugging
- decoded: best-effort decoded payload
- skipped: mark steps that intentionally didn’t run (preconditions not met)
- note: human-friendly explanation for skipped/edge cases
- error/errorStack: populated when a step throws; pipeline stops at first error

## Extended by

- [`StepResult`](StepResult.md)
