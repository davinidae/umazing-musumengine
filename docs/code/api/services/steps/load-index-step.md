# api/services/steps/load-index.step

## Classes

### LoadIndexStep

Defined in:
[api/services/steps/load-index.step.ts:3](https://github.com/davinidae/umazing-musumengine/blob/57e727b3c2cba8f6b015598291ecad23e61d967f/src/api/services/steps/load-index.step.ts#L3)

#### Extends

- [`CoreStep`](core.step.md#corestep)\<`Record`\<`string`, `string`\>, `unknown`\>

#### Constructors

##### Constructor

> **new LoadIndexStep**(`stepData`): [`LoadIndexStep`](#loadindexstep)

Defined in:
[api/services/steps/core.step.ts:9](https://github.com/davinidae/umazing-musumengine/blob/57e727b3c2cba8f6b015598291ecad23e61d967f/src/api/services/steps/core.step.ts#L9)

###### Parameters

###### stepData

[`StepData`](../../models/uma-client.model.md#stepdata)

###### Returns

[`LoadIndexStep`](#loadindexstep)

###### Inherited from

[`CoreStep`](core.step.md#corestep).[`constructor`](core.step.md#constructor)

#### Properties

##### endpoint

> **endpoint**: `string` = `'load/index'`

Defined in:
[api/services/steps/load-index.step.ts:4](https://github.com/davinidae/umazing-musumengine/blob/57e727b3c2cba8f6b015598291ecad23e61d967f/src/api/services/steps/load-index.step.ts#L4)

###### Overrides

[`CoreStep`](core.step.md#corestep).[`endpoint`](core.step.md#endpoint)

##### stepData

> `protected` `readonly` **stepData**: [`StepData`](../../models/uma-client.model.md#stepdata)

Defined in:
[api/services/steps/core.step.ts:9](https://github.com/davinidae/umazing-musumengine/blob/57e727b3c2cba8f6b015598291ecad23e61d967f/src/api/services/steps/core.step.ts#L9)

###### Inherited from

[`CoreStep`](core.step.md#corestep).[`stepData`](core.step.md#stepdata)

#### Methods

##### execute()

> **execute**():
> `Promise`\<[`RequestResult`](../../models/uma-client.model.md#requestresult)\<`unknown`\>\>

Defined in:
[api/services/steps/core.step.ts:64](https://github.com/davinidae/umazing-musumengine/blob/57e727b3c2cba8f6b015598291ecad23e61d967f/src/api/services/steps/core.step.ts#L64)

###### Returns

`Promise`\<[`RequestResult`](../../models/uma-client.model.md#requestresult)\<`unknown`\>\>

###### Inherited from

[`CoreStep`](core.step.md#corestep).[`execute`](core.step.md#execute)

##### getBody()

> `protected` **getBody**(): `Record`\<`string`, `string`\> &
> [`RequestBase`](../../models/uma-client.model.md#requestbase)

Defined in:
[api/services/steps/core.step.ts:26](https://github.com/davinidae/umazing-musumengine/blob/57e727b3c2cba8f6b015598291ecad23e61d967f/src/api/services/steps/core.step.ts#L26)

###### Returns

`Record`\<`string`, `string`\> & [`RequestBase`](../../models/uma-client.model.md#requestbase)

###### Inherited from

[`CoreStep`](core.step.md#corestep).[`getBody`](core.step.md#getbody)

##### getHeaders()

> `protected` **getHeaders**(): `object`

Defined in:
[api/services/steps/core.step.ts:13](https://github.com/davinidae/umazing-musumengine/blob/57e727b3c2cba8f6b015598291ecad23e61d967f/src/api/services/steps/core.step.ts#L13)

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

> **getRequestBody**(): `object`

Defined in:
[api/services/steps/load-index.step.ts:6](https://github.com/davinidae/umazing-musumengine/blob/57e727b3c2cba8f6b015598291ecad23e61d967f/src/api/services/steps/load-index.step.ts#L6)

###### Returns

`object`

###### Overrides

[`CoreStep`](core.step.md#corestep).[`getRequestBody`](core.step.md#getrequestbody)

##### request()

> `protected` **request**(): `Promise`\<\{ `body`: `Record`\<`string`, `string`\> &
> [`RequestBase`](../../models/uma-client.model.md#requestbase); `decoded`:
> [`UmaResponse`](../../models/uma-client.model.md#umaresponse)\<`unknown`\>; `headers`: \{
> `Accept`: `string`; `APP-VER`: `string`; `Content-Type`: `string`; `Device`: `string`; `RES-VER`:
> `string`; `SID`: `string`; `ViewerID`: `string`; `X-Unity-Version`: `string`; \}; \}\>

Defined in:
[api/services/steps/core.step.ts:33](https://github.com/davinidae/umazing-musumengine/blob/57e727b3c2cba8f6b015598291ecad23e61d967f/src/api/services/steps/core.step.ts#L33)

###### Returns

`Promise`\<\{ `body`: `Record`\<`string`, `string`\> &
[`RequestBase`](../../models/uma-client.model.md#requestbase); `decoded`:
[`UmaResponse`](../../models/uma-client.model.md#umaresponse)\<`unknown`\>; `headers`: \{ `Accept`:
`string`; `APP-VER`: `string`; `Content-Type`: `string`; `Device`: `string`; `RES-VER`: `string`;
`SID`: `string`; `ViewerID`: `string`; `X-Unity-Version`: `string`; \}; \}\>

###### Inherited from

[`CoreStep`](core.step.md#corestep).[`request`](core.step.md#request)
