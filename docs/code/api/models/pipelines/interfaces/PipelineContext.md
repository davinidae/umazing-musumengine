# Interface: PipelineContext

Defined in: [api/models/pipelines.ts:58](https://github.com/davinidae/umazing-musumengine/blob/69d230954e98bd77e6d1fa5d5d78630166c21f43/src/api/models/pipelines.ts#L58)

Execution context for pipeline services. Lives in server-side session state.
- runtime: encoder/decoder utilities
- upstreamBase: base URL for remote UmaMusume API
- blob1: header fields used when constructing requests
- clientData: device/environment fields included in payloads
