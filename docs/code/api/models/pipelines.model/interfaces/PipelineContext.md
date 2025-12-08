# Interface: PipelineContext

Defined in: [api/models/pipelines.model.ts:58](https://github.com/davinidae/umazing-musumengine/blob/18fb9920f0c1134675a2221f55ba500b4715772f/src/api/models/pipelines.model.ts#L58)

Execution context for pipeline services. Lives in server-side session state.
- runtime: encoder/decoder utilities
- upstreamBase: base URL for remote UmaMusume API
- blob1: header fields used when constructing requests
- clientData: device/environment fields included in payloads
