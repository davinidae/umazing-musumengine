# Interface: PipelineContext

Defined in: [api/models/pipelines.ts:58](https://github.com/davinidae/umazing-musumengine/blob/e297eba6a8f7fc24343fc263108a30476ed20d1c/src/api/models/pipelines.ts#L58)

Execution context for pipeline services. Lives in server-side session state.
- runtime: encoder/decoder utilities
- upstreamBase: base URL for remote UmaMusume API
- blob1: header fields used when constructing requests
- clientData: device/environment fields included in payloads
