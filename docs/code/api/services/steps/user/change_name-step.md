# api/services/steps/user/change_name.step

## Classes

### UserChangeNameStep

Defined in:
[src/api/services/steps/user/change_name.step.ts:7](https://github.com/davinidae/umazing-musumengine/blob/2b696d82fbabdc92d50663114c51adb9edb4509d/src/api/services/steps/user/change_name.step.ts#L7)

UserChangeNameStep.

#### Remarks

Extends/implements:
`extends CoreStep< Umatypes.Request.UserChangeName, Umatypes.Response.UserChangeName >`.

#### Extends

- [`CoreStep`](../core.step.md#corestep)\<[`UserChangeName`](../../../../umatypes/namespaces/Umatypes/namespaces/Request.md#userchangename),
  [`UserChangeName`](../../../../umatypes/namespaces/Umatypes/namespaces/Response.md#userchangename)\>

#### Constructors

##### Constructor

> **new UserChangeNameStep**(`umaClient`, ...`_extra`): [`UserChangeNameStep`](#userchangenamestep)

Defined in:
[src/api/services/steps/core.step.ts:87](https://github.com/davinidae/umazing-musumengine/blob/2b696d82fbabdc92d50663114c51adb9edb4509d/src/api/services/steps/core.step.ts#L87)

constructor.

###### Parameters

###### umaClient

[`UmaClient`](../../uma-client.service.md#umaclient)

Type: `UmaClient`.

###### \_extra

...`any`[]

Type: `any[]`.

###### Returns

[`UserChangeNameStep`](#userchangenamestep)

Type: `CoreStep<TReq, TRes>`.

###### Inherited from

[`CoreStep`](../core.step.md#corestep).[`constructor`](../core.step.md#constructor)

#### Properties

##### endpoint

> **endpoint**: `string` = `'user/change_name'`

Defined in:
[src/api/services/steps/user/change_name.step.ts:16](https://github.com/davinidae/umazing-musumengine/blob/2b696d82fbabdc92d50663114c51adb9edb4509d/src/api/services/steps/user/change_name.step.ts#L16)

endpoint.

###### Remarks

Type: `string`.

###### Default Value

`'user/change_name'`

###### Overrides

[`CoreStep`](../core.step.md#corestep).[`endpoint`](../core.step.md#endpoint)

##### umaClient

> `protected` `readonly` **umaClient**: [`UmaClient`](../../uma-client.service.md#umaclient)

Defined in:
[src/api/services/steps/core.step.ts:88](https://github.com/davinidae/umazing-musumengine/blob/2b696d82fbabdc92d50663114c51adb9edb4509d/src/api/services/steps/core.step.ts#L88)

Type: `UmaClient`.

###### Inherited from

[`CoreStep`](../core.step.md#corestep).[`umaClient`](../core.step.md#umaclient)

#### Methods

##### afterExecute()

> `protected` **afterExecute**(`_result`): `void` \| `Promise`\<`void`\>

Defined in:
[src/api/services/steps/core.step.ts:268](https://github.com/davinidae/umazing-musumengine/blob/2b696d82fbabdc92d50663114c51adb9edb4509d/src/api/services/steps/core.step.ts#L268)

afterExecute.

###### Parameters

###### \_result

[`RequestResult`](../../../models/uma-client.model.md#requestresult)\<`unknown`\>

Type: `RequestResult<TRes>`.

###### Returns

`void` \| `Promise`\<`void`\>

Type: `void | Promise<void>`.

###### Inherited from

[`CoreStep`](../core.step.md#corestep).[`afterExecute`](../core.step.md#afterexecute)

##### execute()

> **execute**():
> `Promise`\<[`RequestResult`](../../../models/uma-client.model.md#requestresult)\<`unknown`\>\>

Defined in:
[src/api/services/steps/core.step.ts:277](https://github.com/davinidae/umazing-musumengine/blob/2b696d82fbabdc92d50663114c51adb9edb4509d/src/api/services/steps/core.step.ts#L277)

execute (async).

###### Returns

`Promise`\<[`RequestResult`](../../../models/uma-client.model.md#requestresult)\<`unknown`\>\>

Type: `Promise<RequestResult<TRes>>`.

###### Inherited from

[`CoreStep`](../core.step.md#corestep).[`execute`](../core.step.md#execute)

##### getBody()

> `protected` **getBody**(): `Record`\<`string`, `unknown`\>

Defined in:
[src/api/services/steps/core.step.ts:121](https://github.com/davinidae/umazing-musumengine/blob/2b696d82fbabdc92d50663114c51adb9edb4509d/src/api/services/steps/core.step.ts#L121)

getBody.

Combine the step-specific body with common request fields from StepData.

###### Returns

`Record`\<`string`, `unknown`\>

Type: `Record<string, unknown>`.

###### Inherited from

[`CoreStep`](../core.step.md#corestep).[`getBody`](../core.step.md#getbody)

##### getHeaders()

> `protected` **getHeaders**(): `Record`\<`string`, `string`\>

Defined in:
[src/api/services/steps/core.step.ts:101](https://github.com/davinidae/umazing-musumengine/blob/2b696d82fbabdc92d50663114c51adb9edb4509d/src/api/services/steps/core.step.ts#L101)

getHeaders.

Build upstream headers expected by the game API.

###### Returns

`Record`\<`string`, `string`\>

Type: `Record<string, string>`.

###### Inherited from

[`CoreStep`](../core.step.md#corestep).[`getHeaders`](../core.step.md#getheaders)

##### getRequestBody()

> **getRequestBody**():
> [`UserChangeName`](../../../../umatypes/namespaces/Umatypes/namespaces/Request.md#userchangename)

Defined in:
[src/api/services/steps/user/change_name.step.ts:22](https://github.com/davinidae/umazing-musumengine/blob/2b696d82fbabdc92d50663114c51adb9edb4509d/src/api/services/steps/user/change_name.step.ts#L22)

getRequestBody.

###### Returns

[`UserChangeName`](../../../../umatypes/namespaces/Umatypes/namespaces/Request.md#userchangename)

Type: `UserChangeName`.

###### Overrides

[`CoreStep`](../core.step.md#corestep).[`getRequestBody`](../core.step.md#getrequestbody)

##### request()

> `protected` **request**():
> `Promise`\<`Omit`\<[`RequestResult`](../../../models/uma-client.model.md#requestresult)\<`unknown`\>,
> `"endpoint"` \| `"name"`\>\>

Defined in:
[src/api/services/steps/core.step.ts:216](https://github.com/davinidae/umazing-musumengine/blob/2b696d82fbabdc92d50663114c51adb9edb4509d/src/api/services/steps/core.step.ts#L216)

request (async).

###### Returns

`Promise`\<`Omit`\<[`RequestResult`](../../../models/uma-client.model.md#requestresult)\<`unknown`\>,
`"endpoint"` \| `"name"`\>\>

Type: `Promise<Omit<RequestResult<TRes>, "name" | "endpoint">>`.

###### Inherited from

[`CoreStep`](../core.step.md#corestep).[`request`](../core.step.md#request)
