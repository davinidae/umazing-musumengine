# api/services/steps/tool-signup.step

## Classes

### ToolSignupStep

Defined in:
[api/services/steps/tool-signup.step.ts:5](https://github.com/davinidae/umazing-musumengine/blob/cfd3e9ae4e3abb10b26497490639c3570af3d3eb/src/api/services/steps/tool-signup.step.ts#L5)

#### Extends

- [`CoreStep`](core.step.md#corestep)\<[`SignupRequest`](../../models/uma-client.model.md#signuprequest),
  [`SignupData`](../../models/uma-client.model.md#signupdata)\>

#### Constructors

##### Constructor

> **new ToolSignupStep**(`stepData`): [`ToolSignupStep`](#toolsignupstep)

Defined in:
[api/services/steps/core.step.ts:9](https://github.com/davinidae/umazing-musumengine/blob/cfd3e9ae4e3abb10b26497490639c3570af3d3eb/src/api/services/steps/core.step.ts#L9)

###### Parameters

###### stepData

[`StepData`](../../models/uma-client.model.md#stepdata)

###### Returns

[`ToolSignupStep`](#toolsignupstep)

###### Inherited from

[`CoreStep`](core.step.md#corestep).[`constructor`](core.step.md#constructor)

#### Properties

##### endpoint

> **endpoint**: `string` = `'tool/signup'`

Defined in:
[api/services/steps/tool-signup.step.ts:6](https://github.com/davinidae/umazing-musumengine/blob/cfd3e9ae4e3abb10b26497490639c3570af3d3eb/src/api/services/steps/tool-signup.step.ts#L6)

###### Overrides

[`CoreStep`](core.step.md#corestep).[`endpoint`](core.step.md#endpoint)

##### stepData

> `protected` `readonly` **stepData**: [`StepData`](../../models/uma-client.model.md#stepdata)

Defined in:
[api/services/steps/core.step.ts:9](https://github.com/davinidae/umazing-musumengine/blob/cfd3e9ae4e3abb10b26497490639c3570af3d3eb/src/api/services/steps/core.step.ts#L9)

###### Inherited from

[`CoreStep`](core.step.md#corestep).[`stepData`](core.step.md#stepdata)

#### Methods

##### execute()

> **execute**(): `Promise`\<\{ `authKey`: [`AuthKey`](../../utils/protocol.util.md#authkey) \|
> `undefined`; `body`: `Record`\<`string`, `unknown`\>; `decoded`:
> [`UmaResponse`](../../models/uma-client.model.md#umaresponse)\<[`SignupData`](../../models/uma-client.model.md#signupdata)\>;
> `endpoint`: `string`; `headers`: `Record`\<`string`, `string`\>; `viewer_id`: `number`; \}\>

Defined in:
[api/services/steps/tool-signup.step.ts:20](https://github.com/davinidae/umazing-musumengine/blob/cfd3e9ae4e3abb10b26497490639c3570af3d3eb/src/api/services/steps/tool-signup.step.ts#L20)

###### Returns

`Promise`\<\{ `authKey`: [`AuthKey`](../../utils/protocol.util.md#authkey) \| `undefined`; `body`:
`Record`\<`string`, `unknown`\>; `decoded`:
[`UmaResponse`](../../models/uma-client.model.md#umaresponse)\<[`SignupData`](../../models/uma-client.model.md#signupdata)\>;
`endpoint`: `string`; `headers`: `Record`\<`string`, `string`\>; `viewer_id`: `number`; \}\>

###### Overrides

[`CoreStep`](core.step.md#corestep).[`execute`](core.step.md#execute)

##### getBody()

> `protected` **getBody**(): [`SignupRequest`](../../models/uma-client.model.md#signuprequest) &
> [`RequestBase`](../../models/uma-client.model.md#requestbase)

Defined in:
[api/services/steps/core.step.ts:26](https://github.com/davinidae/umazing-musumengine/blob/cfd3e9ae4e3abb10b26497490639c3570af3d3eb/src/api/services/steps/core.step.ts#L26)

###### Returns

[`SignupRequest`](../../models/uma-client.model.md#signuprequest) &
[`RequestBase`](../../models/uma-client.model.md#requestbase)

###### Inherited from

[`CoreStep`](core.step.md#corestep).[`getBody`](core.step.md#getbody)

##### getHeaders()

> `protected` **getHeaders**(): `object`

Defined in:
[api/services/steps/core.step.ts:13](https://github.com/davinidae/umazing-musumengine/blob/cfd3e9ae4e3abb10b26497490639c3570af3d3eb/src/api/services/steps/core.step.ts#L13)

###### Returns

`object`

###### Accept

> **Accept**: `string` = `'*/*'`

###### APP-VER

> **APP-VER**: `string` = `'1.20.11'`

###### Content-Type

> **Content-Type**: `string` = `'application/x-msgpack'`

###### Device

> **Device**: `string`

###### RES-VER

> **RES-VER**: `string`

###### SID

> **SID**: `string`

###### ViewerID

> **ViewerID**: `string`

###### X-Unity-Version

> **X-Unity-Version**: `string` = `'2022.3.62f2'`

###### Inherited from

[`CoreStep`](core.step.md#corestep).[`getHeaders`](core.step.md#getheaders)

##### getRequestBody()

> **getRequestBody**(): [`SignupRequest`](../../models/uma-client.model.md#signuprequest)

Defined in:
[api/services/steps/tool-signup.step.ts:8](https://github.com/davinidae/umazing-musumengine/blob/cfd3e9ae4e3abb10b26497490639c3570af3d3eb/src/api/services/steps/tool-signup.step.ts#L8)

###### Returns

[`SignupRequest`](../../models/uma-client.model.md#signuprequest)

###### Overrides

[`CoreStep`](core.step.md#corestep).[`getRequestBody`](core.step.md#getrequestbody)

##### request()

> `protected` **request**(): `Promise`\<\{ `body`:
> [`SignupRequest`](../../models/uma-client.model.md#signuprequest) &
> [`RequestBase`](../../models/uma-client.model.md#requestbase); `decoded`:
> [`UmaResponse`](../../models/uma-client.model.md#umaresponse)\<[`SignupData`](../../models/uma-client.model.md#signupdata)\>;
> `headers`: \{ `Accept`: `string`; `APP-VER`: `string`; `Content-Type`: `string`; `Device`:
> `string`; `RES-VER`: `string`; `SID`: `string`; `ViewerID`: `string`; `X-Unity-Version`: `string`;
> \}; \}\>

Defined in:
[api/services/steps/core.step.ts:33](https://github.com/davinidae/umazing-musumengine/blob/cfd3e9ae4e3abb10b26497490639c3570af3d3eb/src/api/services/steps/core.step.ts#L33)

###### Returns

`Promise`\<\{ `body`: [`SignupRequest`](../../models/uma-client.model.md#signuprequest) &
[`RequestBase`](../../models/uma-client.model.md#requestbase); `decoded`:
[`UmaResponse`](../../models/uma-client.model.md#umaresponse)\<[`SignupData`](../../models/uma-client.model.md#signupdata)\>;
`headers`: \{ `Accept`: `string`; `APP-VER`: `string`; `Content-Type`: `string`; `Device`: `string`;
`RES-VER`: `string`; `SID`: `string`; `ViewerID`: `string`; `X-Unity-Version`: `string`; \}; \}\>

###### Inherited from

[`CoreStep`](core.step.md#corestep).[`request`](core.step.md#request)
