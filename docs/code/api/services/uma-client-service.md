# api/services/uma-client.service

## Classes

### UmaClient

Defined in:
[src/api/services/uma-client.service.ts:75](https://github.com/davinidae/umazing-musumengine/blob/0cdafb59e2857b4cc23f37a28f9086735e2a093a/src/api/services/uma-client.service.ts#L75)

UmaClient.

#### Constructors

##### Constructor

> **new UmaClient**(`auth`, `data`): [`UmaClient`](#umaclient)

Defined in:
[src/api/services/uma-client.service.ts:82](https://github.com/davinidae/umazing-musumengine/blob/0cdafb59e2857b4cc23f37a28f9086735e2a093a/src/api/services/uma-client.service.ts#L82)

constructor.

###### Parameters

###### auth

[`AuthMode`](../models/uma-client.model.md#authmode)

Type: `AuthMode`.

###### data

[`UmaClientData`](../models/uma-client.model.md#umaclientdata)

Type: `UmaClientData`.

###### Returns

[`UmaClient`](#umaclient)

Type: `UmaClient`.

#### Properties

##### auth

> `private` `readonly` **auth**: [`AuthMode`](../models/uma-client.model.md#authmode)

Defined in:
[src/api/services/uma-client.service.ts:83](https://github.com/davinidae/umazing-musumengine/blob/0cdafb59e2857b4cc23f37a28f9086735e2a093a/src/api/services/uma-client.service.ts#L83)

Type: `AuthMode`.

##### data

> `readonly` **data**: [`UmaClientData`](../models/uma-client.model.md#umaclientdata)

Defined in:
[src/api/services/uma-client.service.ts:84](https://github.com/davinidae/umazing-musumengine/blob/0cdafb59e2857b4cc23f37a28f9086735e2a093a/src/api/services/uma-client.service.ts#L84)

Type: `UmaClientData`.

##### prevResults

> `readonly` **prevResults**: [`RequestResult`](../models/uma-client.model.md#requestresult)[] =
> `[]`

Defined in:
[src/api/services/uma-client.service.ts:104](https://github.com/davinidae/umazing-musumengine/blob/0cdafb59e2857b4cc23f37a28f9086735e2a093a/src/api/services/uma-client.service.ts#L104)

prevResults.

###### Remarks

Type: `RequestResult[]`.

###### Default Value

`[]`

#### Methods

##### executeFlow()

> **executeFlow**(`steps`): `Promise`\<`void`\>

Defined in:
[src/api/services/uma-client.service.ts:203](https://github.com/davinidae/umazing-musumengine/blob/0cdafb59e2857b4cc23f37a28f9086735e2a093a/src/api/services/uma-client.service.ts#L203)

executeFlow (async).

###### Parameters

###### steps

`Flow`[]

Type: `Flow[]`.

###### Returns

`Promise`\<`void`\>

Type: `Promise<void>`.

##### executeStep()

> **executeStep**(`step`, ...`extra`): `Promise`\<`void`\>

Defined in:
[src/api/services/uma-client.service.ts:170](https://github.com/davinidae/umazing-musumengine/blob/0cdafb59e2857b4cc23f37a28f9086735e2a093a/src/api/services/uma-client.service.ts#L170)

executeStep (async).

###### Parameters

###### step

`CoreStepClass`

Type: `CoreStepClass`.

###### extra

...`any`

Type: `any`.

###### Returns

`Promise`\<`void`\>

Type: `Promise<void>`.

##### executeStepGroup()

> **executeStepGroup**(`stepGroup`, ...`extra`): `Promise`\<`void`\>

Defined in:
[src/api/services/uma-client.service.ts:194](https://github.com/davinidae/umazing-musumengine/blob/0cdafb59e2857b4cc23f37a28f9086735e2a093a/src/api/services/uma-client.service.ts#L194)

executeStepGroup (async).

###### Parameters

###### stepGroup

`CoreStepGroupClass`

Type: `CoreStepGroupClass`.

###### extra

...`any`

Type: `any`.

###### Returns

`Promise`\<`void`\>

Type: `Promise<void>`.

##### getAttestationType()

> `private` **getAttestationType**(): `number`

Defined in:
[src/api/services/uma-client.service.ts:160](https://github.com/davinidae/umazing-musumengine/blob/0cdafb59e2857b4cc23f37a28f9086735e2a093a/src/api/services/uma-client.service.ts#L160)

getAttestationType.

###### Returns

`number`

Type: `number`.

##### getUmaData()

> **getUmaData**(): [`UmaData`](../models/api.model.md#umadata)

Defined in:
[src/api/services/uma-client.service.ts:89](https://github.com/davinidae/umazing-musumengine/blob/0cdafb59e2857b4cc23f37a28f9086735e2a093a/src/api/services/uma-client.service.ts#L89)

###### Returns

[`UmaData`](../models/api.model.md#umadata)

##### hasActiveSession()

> **hasActiveSession**(): `boolean`

Defined in:
[src/api/services/uma-client.service.ts:152](https://github.com/davinidae/umazing-musumengine/blob/0cdafb59e2857b4cc23f37a28f9086735e2a093a/src/api/services/uma-client.service.ts#L152)

hasActiveSession.

###### Returns

`boolean`

Type: `boolean`.

##### logIn()

> **logIn**(): `Promise`\<[`RequestResult`](../models/uma-client.model.md#requestresult)[]\>

Defined in:
[src/api/services/uma-client.service.ts:237](https://github.com/davinidae/umazing-musumengine/blob/0cdafb59e2857b4cc23f37a28f9086735e2a093a/src/api/services/uma-client.service.ts#L237)

logIn (async).

###### Returns

`Promise`\<[`RequestResult`](../models/uma-client.model.md#requestresult)[]\>

Type: `Promise<RequestResult[]>`.

##### regenSessionId()

> **regenSessionId**(): `void`

Defined in:
[src/api/services/uma-client.service.ts:109](https://github.com/davinidae/umazing-musumengine/blob/0cdafb59e2857b4cc23f37a28f9086735e2a093a/src/api/services/uma-client.service.ts#L109)

regenSessionId.

###### Returns

`void`

##### updateAuthKey()

> **updateAuthKey**(`authKey`): `void`

Defined in:
[src/api/services/uma-client.service.ts:144](https://github.com/davinidae/umazing-musumengine/blob/0cdafb59e2857b4cc23f37a28f9086735e2a093a/src/api/services/uma-client.service.ts#L144)

updateAuthKey.

###### Parameters

###### authKey

Type: `AuthKey | undefined`.

[`AuthKey`](../../lib/utils/protocol.util.md#authkey) | `undefined`

###### Returns

`void`

##### updateResVer()

> **updateResVer**(`resVer`): `void`

Defined in:
[src/api/services/uma-client.service.ts:128](https://github.com/davinidae/umazing-musumengine/blob/0cdafb59e2857b4cc23f37a28f9086735e2a093a/src/api/services/uma-client.service.ts#L128)

updateResVer.

###### Parameters

###### resVer

`string`

Type: `string`.

###### Returns

`void`

##### updateSessionId()

> **updateSessionId**(`sessionId`): `void`

Defined in:
[src/api/services/uma-client.service.ts:120](https://github.com/davinidae/umazing-musumengine/blob/0cdafb59e2857b4cc23f37a28f9086735e2a093a/src/api/services/uma-client.service.ts#L120)

updateSessionId.

###### Parameters

###### sessionId

[`SessionId`](../../lib/utils/protocol.util.md#sessionid)

Type: `SessionId`.

###### Returns

`void`

##### updateViewerId()

> **updateViewerId**(`viewerId`): `void`

Defined in:
[src/api/services/uma-client.service.ts:136](https://github.com/davinidae/umazing-musumengine/blob/0cdafb59e2857b4cc23f37a28f9086735e2a093a/src/api/services/uma-client.service.ts#L136)

updateViewerId.

###### Parameters

###### viewerId

`number`

Type: `number`.

###### Returns

`void`

## Functions

### createUmaClient()

> **createUmaClient**(`auth`, `udid`, `authKey`, `base`, `resVer`, `baseUrl`):
> [`UmaClient`](#umaclient)

Defined in:
[src/api/services/uma-client.service.ts:44](https://github.com/davinidae/umazing-musumengine/blob/0cdafb59e2857b4cc23f37a28f9086735e2a093a/src/api/services/uma-client.service.ts#L44)

createUmaClient.

#### Parameters

##### auth

[`AuthMode`](../models/uma-client.model.md#authmode)

Type: `AuthMode`.

##### udid

[`Udid`](../../lib/utils/protocol.util.md#udid)

Type: `Udid`.

##### authKey

Type: `AuthKey | undefined`.

[`AuthKey`](../../lib/utils/protocol.util.md#authkey) | `undefined`

##### base

[`RequestBase`](../models/uma-client.model.md#requestbase)

Type: `RequestBase`.

##### resVer

`string`

Type: `string`.

##### baseUrl

`string`

Type: `string`.

#### Returns

[`UmaClient`](#umaclient)

Type: `UmaClient`.
