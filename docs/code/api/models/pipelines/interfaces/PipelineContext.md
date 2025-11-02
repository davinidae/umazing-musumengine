# Interface: PipelineContext

Defined in: [api/models/pipelines.ts:58](https://github.com/davinidae/umazing-musumengine/blob/3699b0b316713adaa61e62c11a4220687bdb55bc/src/api/models/pipelines.ts#L58)

Execution context for pipeline services. Lives in server-side session state.
- runtime: encoder/decoder utilities
- upstreamBase: base URL for remote UmaMusume API
- blob1: header fields used when constructing requests
- clientData: device/environment fields included in payloads
