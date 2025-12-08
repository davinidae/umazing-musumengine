# Type Alias: PipelineContext

> **PipelineContext** = `object`

Defined in: [api/models/pipelines.model.ts:62](https://github.com/davinidae/umazing-musumengine/blob/18c3ff3260c8ab431287937bbbd69b2ff72846ba/src/api/models/pipelines.model.ts#L62)

Execution context for pipeline services. Lives in server-side session state.
- runtime: encoder/decoder utilities
- upstreamBase: base URL for remote UmaMusume API
- blob1: header fields used when constructing requests
- clientData: device/environment fields included in payloads
