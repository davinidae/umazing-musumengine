# api/pipelines/services/signup.service

## Classes

### SignupService

Defined in:
[api/pipelines/services/signup.service.ts:9](https://github.com/davinidae/umazing-musumengine/blob/f7b34d19a41237760d3f0823d1a963b560f03912/src/api/pipelines/services/signup.service.ts#L9)

tool/signup: Registers or fetches a viewer account based on device info. Carries viewer_id forward
when available from previous step. Uses kv-stream framing.

#### Extends

- [`StepService`](step.service.md#stepservice)

#### Constructors

##### Constructor

> **new SignupService**(`ctx`, `pipeline`): [`SignupService`](#signupservice)

Defined in:
[api/pipelines/services/step.service.ts:30](https://github.com/davinidae/umazing-musumengine/blob/f7b34d19a41237760d3f0823d1a963b560f03912/src/api/pipelines/services/step.service.ts#L30)

Construct a step with the provided execution context.

###### Parameters

###### ctx

[`PipelineContext`](../../models/pipelines.model.md#pipelinecontext)

PipelineContext holding runtime, upstreamBase, blob1 and clientData.

###### pipeline

[`Pipeline`](../../session/pipeline.md#pipeline)

###### Returns

[`SignupService`](#signupservice)

###### Inherited from

[`StepService`](step.service.md#stepservice).[`constructor`](step.service.md#constructor)

#### Properties

##### ctx

> `protected` `readonly` **ctx**:
> [`PipelineContext`](../../models/pipelines.model.md#pipelinecontext)

Defined in:
[api/pipelines/services/step.service.ts:31](https://github.com/davinidae/umazing-musumengine/blob/f7b34d19a41237760d3f0823d1a963b560f03912/src/api/pipelines/services/step.service.ts#L31)

PipelineContext holding runtime, upstreamBase, blob1 and clientData.

###### Inherited from

[`StepService`](step.service.md#stepservice).[`ctx`](step.service.md#ctx)

##### endpoint

> `readonly` **endpoint**: `"tool/signup"` = `'tool/signup'`

Defined in:
[api/pipelines/services/signup.service.ts:11](https://github.com/davinidae/umazing-musumengine/blob/f7b34d19a41237760d3f0823d1a963b560f03912/src/api/pipelines/services/signup.service.ts#L11)

###### Overrides

[`StepService`](step.service.md#stepservice).[`endpoint`](step.service.md#endpoint)

##### framing

> `readonly` **framing**: [`KvStream`](../../../lib/models/runtime.model.md#kvstream) =
> `FramingMode.KvStream`

Defined in:
[api/pipelines/services/signup.service.ts:12](https://github.com/davinidae/umazing-musumengine/blob/f7b34d19a41237760d3f0823d1a963b560f03912/src/api/pipelines/services/signup.service.ts#L12)

###### Overrides

[`StepService`](step.service.md#stepservice).[`framing`](step.service.md#framing)

##### isSignupStep

> `readonly` **isSignupStep**: `true` = `true`

Defined in:
[api/pipelines/services/signup.service.ts:13](https://github.com/davinidae/umazing-musumengine/blob/f7b34d19a41237760d3f0823d1a963b560f03912/src/api/pipelines/services/signup.service.ts#L13)

###### Overrides

[`StepService`](step.service.md#stepservice).[`isSignupStep`](step.service.md#issignupstep)

##### name

> `readonly` **name**: `"signup"` = `'signup'`

Defined in:
[api/pipelines/services/signup.service.ts:10](https://github.com/davinidae/umazing-musumengine/blob/f7b34d19a41237760d3f0823d1a963b560f03912/src/api/pipelines/services/signup.service.ts#L10)

###### Overrides

[`StepService`](step.service.md#stepservice).[`name`](step.service.md#name)

##### omitViewerId

> `protected` **omitViewerId**: `boolean` = `false`

Defined in:
[api/pipelines/services/step.service.ts:118](https://github.com/davinidae/umazing-musumengine/blob/f7b34d19a41237760d3f0823d1a963b560f03912/src/api/pipelines/services/step.service.ts#L118)

Override to `true` for steps that should not enforce `viewer_id` preconditions (e.g., `pre_signup`).

###### Inherited from

[`StepService`](step.service.md#stepservice).[`omitViewerId`](step.service.md#omitviewerid)

##### pipeline

> `protected` `readonly` **pipeline**: [`Pipeline`](../../session/pipeline.md#pipeline)

Defined in:
[api/pipelines/services/step.service.ts:32](https://github.com/davinidae/umazing-musumengine/blob/f7b34d19a41237760d3f0823d1a963b560f03912/src/api/pipelines/services/step.service.ts#L32)

###### Inherited from

[`StepService`](step.service.md#stepservice).[`pipeline`](step.service.md#pipeline)

#### Methods

##### callUpstream()

> `protected` **callUpstream**(`requestB64`, `payload`): `Promise`\<\{ `responseB64`: `string`;
> `responseCode`: [`GallopResultCode`](../../models/result_codes.model.md#gallopresultcode); \}\>

Defined in:
[api/pipelines/services/step.service.ts:53](https://github.com/davinidae/umazing-musumengine/blob/f7b34d19a41237760d3f0823d1a963b560f03912/src/api/pipelines/services/step.service.ts#L53)

POST a Base64 request to the upstream API and return the Base64 response string with a result code.

###### Parameters

###### requestB64

`string`

Base64-encoded request buffer.

###### payload

`unknown`

###### Returns

`Promise`\<\{ `responseB64`: `string`; `responseCode`:
[`GallopResultCode`](../../models/result_codes.model.md#gallopresultcode); \}\>

`{ responseB64, responseCode }` where `responseCode` is the HTTP status or synthesized.

###### Throws

If upstream base is missing or the response shape is invalid.

###### Inherited from

[`StepService`](step.service.md#stepservice).[`callUpstream`](step.service.md#callupstream)

##### execute()

> **execute**(`prev`):
> `Promise`\<[`StepResultBase`](../../models/pipelines.model.md#stepresultbase)\>

Defined in:
[api/pipelines/services/step.service.ts:131](https://github.com/davinidae/umazing-musumengine/blob/f7b34d19a41237760d3f0823d1a963b560f03912/src/api/pipelines/services/step.service.ts#L131)

Execute the step end-to-end: obtain preconditions, encode request, call upstream, and decode
response.

###### Parameters

###### prev

Previous step result, if any.

`Partial`\<\{ `decoded`:
[`DecodeResponseOutput`](../../../lib/models/runtime.model.md#decoderesponseoutput); `endpoint`:
`string`; `name`: `string`; `requestB64`: `string`; `responseB64`: `string`; \}\> | `undefined`

###### Returns

`Promise`\<[`StepResultBase`](../../models/pipelines.model.md#stepresultbase)\>

StepResultBase without the `order` field (assigned by the pipeline runner).

###### Inherited from

[`StepService`](step.service.md#stepservice).[`execute`](step.service.md#execute)

##### getPayload()

> **getPayload**(`viewer_id`): `Record`\<`string`, `unknown`\>

Defined in:
[api/pipelines/services/signup.service.ts:18](https://github.com/davinidae/umazing-musumengine/blob/f7b34d19a41237760d3f0823d1a963b560f03912/src/api/pipelines/services/signup.service.ts#L18)

Build payload including `viewer_id` (if available) along with client data.

###### Parameters

###### viewer_id

`number`

###### Returns

`Record`\<`string`, `unknown`\>

###### Overrides

[`StepService`](step.service.md#stepservice).[`getPayload`](step.service.md#getpayload)
