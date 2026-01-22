# api/services/steps/user/change_name.step

## Classes

### UserChangeNameStep

Defined in:
[src/api/services/steps/user/change_name.step.ts:7](https://github.com/davinidae/umazing-musumengine/blob/e6f583dfe0091ce918b2c2e16354b5b128f202d9/src/api/services/steps/user/change_name.step.ts#L7)

UserChangeNameStep.

#### Remarks

Extends/implements:
`extends CoreStep< Umatypes.Request.UserChangeName, Umatypes.Response.UserChangeName >`.

#### Extends

- [`CoreStep`](../core.step.md#corestep)\<[`ChangeName`](../../../../umatypes-custom/namespaces/Umatypes/namespaces/Request/namespaces/User.md#changename),
  [`ChangeName`](../../../../umatypes-custom/namespaces/Umatypes/namespaces/Response/namespaces/User.md#changename)\>

#### Constructors

##### Constructor

> **new UserChangeNameStep**(`umaClient`, ...`_extra`): [`UserChangeNameStep`](#userchangenamestep)

Defined in:
[src/api/services/steps/core.step.ts:88](https://github.com/davinidae/umazing-musumengine/blob/e6f583dfe0091ce918b2c2e16354b5b128f202d9/src/api/services/steps/core.step.ts#L88)

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
[src/api/services/steps/user/change_name.step.ts:16](https://github.com/davinidae/umazing-musumengine/blob/e6f583dfe0091ce918b2c2e16354b5b128f202d9/src/api/services/steps/user/change_name.step.ts#L16)

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
[src/api/services/steps/core.step.ts:89](https://github.com/davinidae/umazing-musumengine/blob/e6f583dfe0091ce918b2c2e16354b5b128f202d9/src/api/services/steps/core.step.ts#L89)

Type: `UmaClient`.

###### Inherited from

[`CoreStep`](../core.step.md#corestep).[`umaClient`](../core.step.md#umaclient)

#### Methods

##### afterExecute()

> `protected` **afterExecute**(`_result`): `void` \| `Promise`\<`void`\>

Defined in:
[src/api/services/steps/core.step.ts:269](https://github.com/davinidae/umazing-musumengine/blob/e6f583dfe0091ce918b2c2e16354b5b128f202d9/src/api/services/steps/core.step.ts#L269)

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
[src/api/services/steps/core.step.ts:278](https://github.com/davinidae/umazing-musumengine/blob/e6f583dfe0091ce918b2c2e16354b5b128f202d9/src/api/services/steps/core.step.ts#L278)

execute (async).

###### Returns

`Promise`\<[`RequestResult`](../../../models/uma-client.model.md#requestresult)\<`unknown`\>\>

Type: `Promise<RequestResult<TRes>>`.

###### Inherited from

[`CoreStep`](../core.step.md#corestep).[`execute`](../core.step.md#execute)

##### getBody()

> `protected` **getBody**(): `Record`\<`string`, `unknown`\>

Defined in:
[src/api/services/steps/core.step.ts:122](https://github.com/davinidae/umazing-musumengine/blob/e6f583dfe0091ce918b2c2e16354b5b128f202d9/src/api/services/steps/core.step.ts#L122)

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
[src/api/services/steps/core.step.ts:102](https://github.com/davinidae/umazing-musumengine/blob/e6f583dfe0091ce918b2c2e16354b5b128f202d9/src/api/services/steps/core.step.ts#L102)

getHeaders.

Build upstream headers expected by the game API.

###### Returns

`Record`\<`string`, `string`\>

Type: `Record<string, string>`.

###### Inherited from

[`CoreStep`](../core.step.md#corestep).[`getHeaders`](../core.step.md#getheaders)

##### getRequestBody()

> **getRequestBody**():
> [`ChangeName`](../../../../umatypes-custom/namespaces/Umatypes/namespaces/Request/namespaces/User.md#changename)

Defined in:
[src/api/services/steps/user/change_name.step.ts:22](https://github.com/davinidae/umazing-musumengine/blob/e6f583dfe0091ce918b2c2e16354b5b128f202d9/src/api/services/steps/user/change_name.step.ts#L22)

getRequestBody.

###### Returns

[`ChangeName`](../../../../umatypes-custom/namespaces/Umatypes/namespaces/Request/namespaces/User.md#changename)

Type: `UserChangeName`.

###### Overrides

[`CoreStep`](../core.step.md#corestep).[`getRequestBody`](../core.step.md#getrequestbody)

##### request()

> `protected` **request**():
> `Promise`\<`Omit`\<[`RequestResult`](../../../models/uma-client.model.md#requestresult)\<`unknown`\>,
> `"endpoint"` \| `"name"`\>\>

Defined in:
[src/api/services/steps/core.step.ts:217](https://github.com/davinidae/umazing-musumengine/blob/e6f583dfe0091ce918b2c2e16354b5b128f202d9/src/api/services/steps/core.step.ts#L217)

request (async).

###### Returns

`Promise`\<`Omit`\<[`RequestResult`](../../../models/uma-client.model.md#requestresult)\<`unknown`\>,
`"endpoint"` \| `"name"`\>\>

Type: `Promise<Omit<RequestResult<TRes>, "name" | "endpoint">>`.

###### Inherited from

[`CoreStep`](../core.step.md#corestep).[`request`](../core.step.md#request)
