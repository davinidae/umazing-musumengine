# api/services/steps/user-change_sex.step

## Classes

### UserChangeSexStepService

Defined in:
[api/services/steps/user-change_sex.step.ts:3](https://github.com/davinidae/umazing-musumengine/blob/3287c40709f1f448cf5e0c1e301ea35ff5829e19/src/api/services/steps/user-change_sex.step.ts#L3)

#### Extends

- [`CoreStepService`](core.step.md#corestepservice)\<\{ `sex`: `number`; \}, `unknown`\>

#### Constructors

##### Constructor

> **new UserChangeSexStepService**(`stepData`):
> [`UserChangeSexStepService`](#userchangesexstepservice)

Defined in:
[api/services/steps/core.step.ts:9](https://github.com/davinidae/umazing-musumengine/blob/3287c40709f1f448cf5e0c1e301ea35ff5829e19/src/api/services/steps/core.step.ts#L9)

###### Parameters

###### stepData

[`StepData`](../../models/uma-client.model.md#stepdata)

###### Returns

[`UserChangeSexStepService`](#userchangesexstepservice)

###### Inherited from

[`CoreStepService`](core.step.md#corestepservice).[`constructor`](core.step.md#constructor)

#### Properties

##### endpoint

> **endpoint**: `string` = `'user/change_sex'`

Defined in:
[api/services/steps/user-change_sex.step.ts:9](https://github.com/davinidae/umazing-musumengine/blob/3287c40709f1f448cf5e0c1e301ea35ff5829e19/src/api/services/steps/user-change_sex.step.ts#L9)

###### Overrides

[`CoreStepService`](core.step.md#corestepservice).[`endpoint`](core.step.md#endpoint)

##### stepData

> `protected` `readonly` **stepData**: [`StepData`](../../models/uma-client.model.md#stepdata)

Defined in:
[api/services/steps/core.step.ts:9](https://github.com/davinidae/umazing-musumengine/blob/3287c40709f1f448cf5e0c1e301ea35ff5829e19/src/api/services/steps/core.step.ts#L9)

###### Inherited from

[`CoreStepService`](core.step.md#corestepservice).[`stepData`](core.step.md#stepdata)

#### Methods

##### execute()

> **execute**():
> `Promise`\<[`RequestResult`](../../models/uma-client.model.md#requestresult)\<`unknown`\>\>

Defined in:
[api/services/steps/core.step.ts:64](https://github.com/davinidae/umazing-musumengine/blob/3287c40709f1f448cf5e0c1e301ea35ff5829e19/src/api/services/steps/core.step.ts#L64)

###### Returns

`Promise`\<[`RequestResult`](../../models/uma-client.model.md#requestresult)\<`unknown`\>\>

###### Inherited from

[`CoreStepService`](core.step.md#corestepservice).[`execute`](core.step.md#execute)

##### getBody()

> `protected` **getBody**(): `object` &
> [`RequestBase`](../../models/uma-client.model.md#requestbase)

Defined in:
[api/services/steps/core.step.ts:26](https://github.com/davinidae/umazing-musumengine/blob/3287c40709f1f448cf5e0c1e301ea35ff5829e19/src/api/services/steps/core.step.ts#L26)

###### Returns

`object` & [`RequestBase`](../../models/uma-client.model.md#requestbase)

###### Inherited from

[`CoreStepService`](core.step.md#corestepservice).[`getBody`](core.step.md#getbody)

##### getHeaders()

> `protected` **getHeaders**(): `object`

Defined in:
[api/services/steps/core.step.ts:13](https://github.com/davinidae/umazing-musumengine/blob/3287c40709f1f448cf5e0c1e301ea35ff5829e19/src/api/services/steps/core.step.ts#L13)

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

[`CoreStepService`](core.step.md#corestepservice).[`getHeaders`](core.step.md#getheaders)

##### getRequestBody()

> **getRequestBody**(): `object`

Defined in:
[api/services/steps/user-change_sex.step.ts:11](https://github.com/davinidae/umazing-musumengine/blob/3287c40709f1f448cf5e0c1e301ea35ff5829e19/src/api/services/steps/user-change_sex.step.ts#L11)

###### Returns

`object`

###### sex

> **sex**: `number` = `1`

###### Overrides

[`CoreStepService`](core.step.md#corestepservice).[`getRequestBody`](core.step.md#getrequestbody)

##### request()

> `protected` **request**(): `Promise`\<\{ `body`: `object` &
> [`RequestBase`](../../models/uma-client.model.md#requestbase); `decoded`:
> [`UmaResponse`](../../models/uma-client.model.md#umaresponse)\<`unknown`\>; `headers`: \{
> `Accept`: `string`; `APP-VER`: `string`; `Content-Type`: `string`; `Device`: `string`; `RES-VER`:
> `string`; `SID`: `string`; `ViewerID`: `string`; `X-Unity-Version`: `string`; \}; \}\>

Defined in:
[api/services/steps/core.step.ts:33](https://github.com/davinidae/umazing-musumengine/blob/3287c40709f1f448cf5e0c1e301ea35ff5829e19/src/api/services/steps/core.step.ts#L33)

###### Returns

`Promise`\<\{ `body`: `object` & [`RequestBase`](../../models/uma-client.model.md#requestbase);
`decoded`: [`UmaResponse`](../../models/uma-client.model.md#umaresponse)\<`unknown`\>; `headers`: \{
`Accept`: `string`; `APP-VER`: `string`; `Content-Type`: `string`; `Device`: `string`; `RES-VER`:
`string`; `SID`: `string`; `ViewerID`: `string`; `X-Unity-Version`: `string`; \}; \}\>

###### Inherited from

[`CoreStepService`](core.step.md#corestepservice).[`request`](core.step.md#request)
