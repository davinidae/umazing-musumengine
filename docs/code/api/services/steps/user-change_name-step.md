# api/services/steps/user-change_name.step

## Classes

### UserChangeNameStep

Defined in:
[api/services/steps/user-change_name.step.ts:3](https://github.com/davinidae/umazing-musumengine/blob/0bb596e6e6fa8d19fbe3c8768f8762ae9ecbec4a/src/api/services/steps/user-change_name.step.ts#L3)

#### Extends

- [`CoreStep`](core.step.md#corestep)\<[`UserChangeName`](../../../umatypes/namespaces/Umatypes/namespaces/Request.md#userchangename),
  [`UserChangeName`](../../../umatypes/namespaces/Umatypes/namespaces/Response.md#userchangename)\>

#### Constructors

##### Constructor

> **new UserChangeNameStep**(`stepData`): [`UserChangeNameStep`](#userchangenamestep)

Defined in:
[api/services/steps/core.step.ts:10](https://github.com/davinidae/umazing-musumengine/blob/0bb596e6e6fa8d19fbe3c8768f8762ae9ecbec4a/src/api/services/steps/core.step.ts#L10)

###### Parameters

###### stepData

[`StepData`](../../models/uma-client.model.md#stepdata)

###### Returns

[`UserChangeNameStep`](#userchangenamestep)

###### Inherited from

[`CoreStep`](core.step.md#corestep).[`constructor`](core.step.md#constructor)

#### Properties

##### endpoint

> **endpoint**: `string` = `'user/change_name'`

Defined in:
[api/services/steps/user-change_name.step.ts:7](https://github.com/davinidae/umazing-musumengine/blob/0bb596e6e6fa8d19fbe3c8768f8762ae9ecbec4a/src/api/services/steps/user-change_name.step.ts#L7)

###### Overrides

[`CoreStep`](core.step.md#corestep).[`endpoint`](core.step.md#endpoint)

##### stepData

> `protected` `readonly` **stepData**: [`StepData`](../../models/uma-client.model.md#stepdata)

Defined in:
[api/services/steps/core.step.ts:10](https://github.com/davinidae/umazing-musumengine/blob/0bb596e6e6fa8d19fbe3c8768f8762ae9ecbec4a/src/api/services/steps/core.step.ts#L10)

###### Inherited from

[`CoreStep`](core.step.md#corestep).[`stepData`](core.step.md#stepdata)

#### Methods

##### afterExecute()

> `protected` **afterExecute**(`_result`): `Promise`\<`void`\>

Defined in:
[api/services/steps/core.step.ts:65](https://github.com/davinidae/umazing-musumengine/blob/0bb596e6e6fa8d19fbe3c8768f8762ae9ecbec4a/src/api/services/steps/core.step.ts#L65)

###### Parameters

###### \_result

[`RequestResult`](../../models/uma-client.model.md#requestresult)\<`unknown`\>

###### Returns

`Promise`\<`void`\>

###### Inherited from

[`CoreStep`](core.step.md#corestep).[`afterExecute`](core.step.md#afterexecute)

##### execute()

> **execute**():
> `Promise`\<[`RequestResult`](../../models/uma-client.model.md#requestresult)\<`unknown`\>\>

Defined in:
[api/services/steps/core.step.ts:69](https://github.com/davinidae/umazing-musumengine/blob/0bb596e6e6fa8d19fbe3c8768f8762ae9ecbec4a/src/api/services/steps/core.step.ts#L69)

###### Returns

`Promise`\<[`RequestResult`](../../models/uma-client.model.md#requestresult)\<`unknown`\>\>

###### Inherited from

[`CoreStep`](core.step.md#corestep).[`execute`](core.step.md#execute)

##### getBody()

> `protected` **getBody**():
> [`UserChangeName`](../../../umatypes/namespaces/Umatypes/namespaces/Request.md#userchangename) &
> [`RequestBase`](../../models/uma-client.model.md#requestbase)

Defined in:
[api/services/steps/core.step.ts:27](https://github.com/davinidae/umazing-musumengine/blob/0bb596e6e6fa8d19fbe3c8768f8762ae9ecbec4a/src/api/services/steps/core.step.ts#L27)

###### Returns

[`UserChangeName`](../../../umatypes/namespaces/Umatypes/namespaces/Request.md#userchangename) &
[`RequestBase`](../../models/uma-client.model.md#requestbase)

###### Inherited from

[`CoreStep`](core.step.md#corestep).[`getBody`](core.step.md#getbody)

##### getHeaders()

> `protected` **getHeaders**(): `object`

Defined in:
[api/services/steps/core.step.ts:14](https://github.com/davinidae/umazing-musumengine/blob/0bb596e6e6fa8d19fbe3c8768f8762ae9ecbec4a/src/api/services/steps/core.step.ts#L14)

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
[api/services/steps/user-change_name.step.ts:9](https://github.com/davinidae/umazing-musumengine/blob/0bb596e6e6fa8d19fbe3c8768f8762ae9ecbec4a/src/api/services/steps/user-change_name.step.ts#L9)

###### Returns

`object`

###### name

> **name**: `string`

###### Overrides

[`CoreStep`](core.step.md#corestep).[`getRequestBody`](core.step.md#getrequestbody)

##### request()

> `protected` **request**(): `Promise`\<\{ `body`:
> [`UserChangeName`](../../../umatypes/namespaces/Umatypes/namespaces/Request.md#userchangename) &
> [`RequestBase`](../../models/uma-client.model.md#requestbase); `decoded`:
> [`UmaResponse`](../../models/uma-client.model.md#umaresponse)\<`unknown`\>; `headers`: \{
> `Accept`: `string`; `APP-VER`: `string`; `Content-Type`: `string`; `Device`: `string`; `RES-VER`:
> `string`; `SID`: `string`; `ViewerID`: `string`; `X-Unity-Version`: `string`; \}; \}\>

Defined in:
[api/services/steps/core.step.ts:34](https://github.com/davinidae/umazing-musumengine/blob/0bb596e6e6fa8d19fbe3c8768f8762ae9ecbec4a/src/api/services/steps/core.step.ts#L34)

###### Returns

`Promise`\<\{ `body`:
[`UserChangeName`](../../../umatypes/namespaces/Umatypes/namespaces/Request.md#userchangename) &
[`RequestBase`](../../models/uma-client.model.md#requestbase); `decoded`:
[`UmaResponse`](../../models/uma-client.model.md#umaresponse)\<`unknown`\>; `headers`: \{ `Accept`:
`string`; `APP-VER`: `string`; `Content-Type`: `string`; `Device`: `string`; `RES-VER`: `string`;
`SID`: `string`; `ViewerID`: `string`; `X-Unity-Version`: `string`; \}; \}\>

###### Inherited from

[`CoreStep`](core.step.md#corestep).[`request`](core.step.md#request)
