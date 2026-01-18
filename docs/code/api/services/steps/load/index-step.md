# api/services/steps/load/index.step

## Classes

### LoadIndexStep

Defined in:
[src/api/services/steps/load/index.step.ts:18](https://github.com/davinidae/umazing-musumengine/blob/ede291a885f081feee7d488c29b346fd43d8d8b3/src/api/services/steps/load/index.step.ts#L18)

LoadIndexStep.

#### Remarks

Extends/implements: `extends CoreStep< Umatypes.Request.LoadIndex, Umatypes.Response.LoadIndex >`.

#### Extends

- [`CoreStep`](../core.step.md#corestep)\<[`LoadIndex`](../../../../umatypes/namespaces/Umatypes/namespaces/Request.md#loadindex),
  [`LoadIndex`](../../../../umatypes/namespaces/Umatypes/namespaces/Response.md#loadindex)\>

#### Constructors

##### Constructor

> **new LoadIndexStep**(`umaClient`, `doSleep`): [`LoadIndexStep`](#loadindexstep)

Defined in:
[src/api/services/steps/load/index.step.ts:35](https://github.com/davinidae/umazing-musumengine/blob/ede291a885f081feee7d488c29b346fd43d8d8b3/src/api/services/steps/load/index.step.ts#L35)

constructor.

###### Parameters

###### umaClient

[`UmaClient`](../../uma-client.service.md#umaclient)

Type: `UmaClient`.

###### doSleep

`boolean` = `true`

Type: `boolean`.

###### Returns

[`LoadIndexStep`](#loadindexstep)

Type: `LoadIndexStep`.

###### Overrides

[`CoreStep`](../core.step.md#corestep).[`constructor`](../core.step.md#constructor)

#### Properties

##### doSleep

> `private` `readonly` **doSleep**: `boolean` = `true`

Defined in:
[src/api/services/steps/load/index.step.ts:37](https://github.com/davinidae/umazing-musumengine/blob/ede291a885f081feee7d488c29b346fd43d8d8b3/src/api/services/steps/load/index.step.ts#L37)

Type: `boolean`.

##### endpoint

> **endpoint**: `string` = `'load/index'`

Defined in:
[src/api/services/steps/load/index.step.ts:27](https://github.com/davinidae/umazing-musumengine/blob/ede291a885f081feee7d488c29b346fd43d8d8b3/src/api/services/steps/load/index.step.ts#L27)

endpoint.

###### Remarks

Type: `string`.

###### Default Value

`'load/index'`

###### Overrides

[`CoreStep`](../core.step.md#corestep).[`endpoint`](../core.step.md#endpoint)

##### umaClient

> `protected` `readonly` **umaClient**: [`UmaClient`](../../uma-client.service.md#umaclient)

Defined in:
[src/api/services/steps/load/index.step.ts:36](https://github.com/davinidae/umazing-musumengine/blob/ede291a885f081feee7d488c29b346fd43d8d8b3/src/api/services/steps/load/index.step.ts#L36)

Type: `UmaClient`.

###### Inherited from

[`CoreStep`](../core.step.md#corestep).[`umaClient`](../core.step.md#umaclient)

#### Methods

##### afterExecute()

> `protected` **afterExecute**(): `Promise`\<`void`\>

Defined in:
[src/api/services/steps/load/index.step.ts:54](https://github.com/davinidae/umazing-musumengine/blob/ede291a885f081feee7d488c29b346fd43d8d8b3/src/api/services/steps/load/index.step.ts#L54)

afterExecute (async).

###### Returns

`Promise`\<`void`\>

Type: `Promise<void>`.

###### Overrides

[`CoreStep`](../core.step.md#corestep).[`afterExecute`](../core.step.md#afterexecute)

##### execute()

> **execute**():
> `Promise`\<[`RequestResult`](../../../models/uma-client.model.md#requestresult)\<[`LoadIndex`](../../../../umatypes/namespaces/Umatypes/namespaces/Response.md#loadindex)\>\>

Defined in:
[src/api/services/steps/core.step.ts:277](https://github.com/davinidae/umazing-musumengine/blob/ede291a885f081feee7d488c29b346fd43d8d8b3/src/api/services/steps/core.step.ts#L277)

execute (async).

###### Returns

`Promise`\<[`RequestResult`](../../../models/uma-client.model.md#requestresult)\<[`LoadIndex`](../../../../umatypes/namespaces/Umatypes/namespaces/Response.md#loadindex)\>\>

Type: `Promise<RequestResult<TRes>>`.

###### Inherited from

[`CoreStep`](../core.step.md#corestep).[`execute`](../core.step.md#execute)

##### getBody()

> `protected` **getBody**(): `Record`\<`string`, `unknown`\>

Defined in:
[src/api/services/steps/core.step.ts:121](https://github.com/davinidae/umazing-musumengine/blob/ede291a885f081feee7d488c29b346fd43d8d8b3/src/api/services/steps/core.step.ts#L121)

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
[src/api/services/steps/core.step.ts:101](https://github.com/davinidae/umazing-musumengine/blob/ede291a885f081feee7d488c29b346fd43d8d8b3/src/api/services/steps/core.step.ts#L101)

getHeaders.

Build upstream headers expected by the game API.

###### Returns

`Record`\<`string`, `string`\>

Type: `Record<string, string>`.

###### Inherited from

[`CoreStep`](../core.step.md#corestep).[`getHeaders`](../core.step.md#getheaders)

##### getRequestBody()

> **getRequestBody**(): `object`

Defined in:
[src/api/services/steps/load/index.step.ts:46](https://github.com/davinidae/umazing-musumengine/blob/ede291a885f081feee7d488c29b346fd43d8d8b3/src/api/services/steps/load/index.step.ts#L46)

getRequestBody.

###### Returns

`object`

Type: `object`.

###### Overrides

[`CoreStep`](../core.step.md#corestep).[`getRequestBody`](../core.step.md#getrequestbody)

##### request()

> `protected` **request**():
> `Promise`\<`Omit`\<[`RequestResult`](../../../models/uma-client.model.md#requestresult)\<[`LoadIndex`](../../../../umatypes/namespaces/Umatypes/namespaces/Response.md#loadindex)\>,
> `"endpoint"` \| `"name"`\>\>

Defined in:
[src/api/services/steps/core.step.ts:216](https://github.com/davinidae/umazing-musumengine/blob/ede291a885f081feee7d488c29b346fd43d8d8b3/src/api/services/steps/core.step.ts#L216)

request (async).

###### Returns

`Promise`\<`Omit`\<[`RequestResult`](../../../models/uma-client.model.md#requestresult)\<[`LoadIndex`](../../../../umatypes/namespaces/Umatypes/namespaces/Response.md#loadindex)\>,
`"endpoint"` \| `"name"`\>\>

Type: `Promise<Omit<RequestResult<TRes>, "name" | "endpoint">>`.

###### Inherited from

[`CoreStep`](../core.step.md#corestep).[`request`](../core.step.md#request)
