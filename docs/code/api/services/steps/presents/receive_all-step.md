# api/services/steps/presents/receive_all.step

## Classes

### PresentsReceiveAllStep

Defined in:
[src/api/services/steps/presents/receive_all.step.ts:3](https://github.com/davinidae/umazing-musumengine/blob/76582159e9b470b4b8fcb28abde476e42b4e7b89/src/api/services/steps/presents/receive_all.step.ts#L3)

CoreStep.

Base class for a single API “step”.

A step:

- builds a request payload
- encodes it to the Uma wire format (Base64)
- posts it to the upstream endpoint
- decrypts + decodes the response
- optionally updates session state

#### Remarks

Type: `CoreStep<TReq, TRes>`.

#### Extends

- [`CoreStep`](../core.step.md#corestep)\<[`ReceiveAll`](../../../../umatypes-custom/namespaces/Umatypes/namespaces/Request/namespaces/Presents.md#receiveall),
  [`ReceiveAll`](../../../../umatypes-custom/namespaces/Umatypes/namespaces/Response/namespaces/Presents.md#receiveall)\>

#### Constructors

##### Constructor

> **new PresentsReceiveAllStep**(`umaClient`, ...`_extra`):
> [`PresentsReceiveAllStep`](#presentsreceiveallstep)

Defined in:
[src/api/services/steps/core.step.ts:88](https://github.com/davinidae/umazing-musumengine/blob/76582159e9b470b4b8fcb28abde476e42b4e7b89/src/api/services/steps/core.step.ts#L88)

constructor.

###### Parameters

###### umaClient

[`UmaClient`](../../uma-client.service.md#umaclient)

Type: `UmaClient`.

###### \_extra

...`any`[]

Type: `any[]`.

###### Returns

[`PresentsReceiveAllStep`](#presentsreceiveallstep)

Type: `CoreStep<TReq, TRes>`.

###### Inherited from

[`CoreStep`](../core.step.md#corestep).[`constructor`](../core.step.md#constructor)

#### Properties

##### endpoint

> **endpoint**: `string` = `'present/receive_all'`

Defined in:
[src/api/services/steps/presents/receive_all.step.ts:12](https://github.com/davinidae/umazing-musumengine/blob/76582159e9b470b4b8fcb28abde476e42b4e7b89/src/api/services/steps/presents/receive_all.step.ts#L12)

endpoint.

###### Remarks

Type: `string`.

###### Default Value

`'present/receive_all'`

###### Overrides

[`CoreStep`](../core.step.md#corestep).[`endpoint`](../core.step.md#endpoint)

##### umaClient

> `protected` `readonly` **umaClient**: [`UmaClient`](../../uma-client.service.md#umaclient)

Defined in:
[src/api/services/steps/core.step.ts:89](https://github.com/davinidae/umazing-musumengine/blob/76582159e9b470b4b8fcb28abde476e42b4e7b89/src/api/services/steps/core.step.ts#L89)

Type: `UmaClient`.

###### Inherited from

[`CoreStep`](../core.step.md#corestep).[`umaClient`](../core.step.md#umaclient)

#### Methods

##### afterExecute()

> `protected` **afterExecute**(`_result`): `void` \| `Promise`\<`void`\>

Defined in:
[src/api/services/steps/core.step.ts:282](https://github.com/davinidae/umazing-musumengine/blob/76582159e9b470b4b8fcb28abde476e42b4e7b89/src/api/services/steps/core.step.ts#L282)

afterExecute.

###### Parameters

###### \_result

[`RequestResult`](../../../models/uma-client.model.md#requestresult)\<[`ReceiveAll`](../../../../umatypes-custom/namespaces/Umatypes/namespaces/Response/namespaces/Presents.md#receiveall)\>

Type: `RequestResult<TRes>`.

###### Returns

`void` \| `Promise`\<`void`\>

Type: `void | Promise<void>`.

###### Inherited from

[`CoreStep`](../core.step.md#corestep).[`afterExecute`](../core.step.md#afterexecute)

##### execute()

> **execute**():
> `Promise`\<[`RequestResult`](../../../models/uma-client.model.md#requestresult)\<[`ReceiveAll`](../../../../umatypes-custom/namespaces/Umatypes/namespaces/Response/namespaces/Presents.md#receiveall)\>\>

Defined in:
[src/api/services/steps/core.step.ts:291](https://github.com/davinidae/umazing-musumengine/blob/76582159e9b470b4b8fcb28abde476e42b4e7b89/src/api/services/steps/core.step.ts#L291)

execute (async).

###### Returns

`Promise`\<[`RequestResult`](../../../models/uma-client.model.md#requestresult)\<[`ReceiveAll`](../../../../umatypes-custom/namespaces/Umatypes/namespaces/Response/namespaces/Presents.md#receiveall)\>\>

Type: `Promise<RequestResult<TRes>>`.

###### Inherited from

[`CoreStep`](../core.step.md#corestep).[`execute`](../core.step.md#execute)

##### getBody()

> `protected` **getBody**(): [`RequestBase`](../../../models/uma-client.model.md#requestbase) &
> [`ReceiveAll`](../../../../umatypes-custom/namespaces/Umatypes/namespaces/Request/namespaces/Presents.md#receiveall)

Defined in:
[src/api/services/steps/core.step.ts:122](https://github.com/davinidae/umazing-musumengine/blob/76582159e9b470b4b8fcb28abde476e42b4e7b89/src/api/services/steps/core.step.ts#L122)

getBody.

Combine the step-specific body with common request fields from StepData.

###### Returns

[`RequestBase`](../../../models/uma-client.model.md#requestbase) &
[`ReceiveAll`](../../../../umatypes-custom/namespaces/Umatypes/namespaces/Request/namespaces/Presents.md#receiveall)

Type: `Record<string, unknown>`.

###### Inherited from

[`CoreStep`](../core.step.md#corestep).[`getBody`](../core.step.md#getbody)

##### getHeaders()

> `protected` **getHeaders**(): `Record`\<`string`, `string`\>

Defined in:
[src/api/services/steps/core.step.ts:102](https://github.com/davinidae/umazing-musumengine/blob/76582159e9b470b4b8fcb28abde476e42b4e7b89/src/api/services/steps/core.step.ts#L102)

getHeaders.

Build upstream headers expected by the game API.

###### Returns

`Record`\<`string`, `string`\>

Type: `Record<string, string>`.

###### Inherited from

[`CoreStep`](../core.step.md#corestep).[`getHeaders`](../core.step.md#getheaders)

##### getRequestBody()

> **getRequestBody**():
> [`ReceiveAll`](../../../../umatypes-custom/namespaces/Umatypes/namespaces/Request/namespaces/Presents.md#receiveall)

Defined in:
[src/api/services/steps/presents/receive_all.step.ts:18](https://github.com/davinidae/umazing-musumengine/blob/76582159e9b470b4b8fcb28abde476e42b4e7b89/src/api/services/steps/presents/receive_all.step.ts#L18)

getRequestBody.

###### Returns

[`ReceiveAll`](../../../../umatypes-custom/namespaces/Umatypes/namespaces/Request/namespaces/Presents.md#receiveall)

Type: `object`.

###### Overrides

[`CoreStep`](../core.step.md#corestep).[`getRequestBody`](../core.step.md#getrequestbody)

##### request()

> `protected` **request**():
> `Promise`\<`Omit`\<[`RequestResult`](../../../models/uma-client.model.md#requestresult)\<[`ReceiveAll`](../../../../umatypes-custom/namespaces/Umatypes/namespaces/Response/namespaces/Presents.md#receiveall)\>,
> `"endpoint"` \| `"name"`\>\>

Defined in:
[src/api/services/steps/core.step.ts:230](https://github.com/davinidae/umazing-musumengine/blob/76582159e9b470b4b8fcb28abde476e42b4e7b89/src/api/services/steps/core.step.ts#L230)

request (async).

###### Returns

`Promise`\<`Omit`\<[`RequestResult`](../../../models/uma-client.model.md#requestresult)\<[`ReceiveAll`](../../../../umatypes-custom/namespaces/Umatypes/namespaces/Response/namespaces/Presents.md#receiveall)\>,
`"endpoint"` \| `"name"`\>\>

Type: `Promise<Omit<RequestResult<TRes>, "name" | "endpoint">>`.

###### Inherited from

[`CoreStep`](../core.step.md#corestep).[`request`](../core.step.md#request)
