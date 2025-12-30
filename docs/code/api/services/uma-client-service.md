# api/services/uma-client.service

## Classes

### UmaClient

Defined in:
[src/api/services/uma-client.service.ts:76](https://github.com/davinidae/umazing-musumengine/blob/0f4b26a7c602290bed10e9aa2723b492bef975ef/src/api/services/uma-client.service.ts#L76)

UmaClient.

#### Constructors

##### Constructor

> **new UmaClient**(`auth`, `data`): [`UmaClient`](#umaclient)

Defined in:
[src/api/services/uma-client.service.ts:83](https://github.com/davinidae/umazing-musumengine/blob/0f4b26a7c602290bed10e9aa2723b492bef975ef/src/api/services/uma-client.service.ts#L83)

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
[src/api/services/uma-client.service.ts:84](https://github.com/davinidae/umazing-musumengine/blob/0f4b26a7c602290bed10e9aa2723b492bef975ef/src/api/services/uma-client.service.ts#L84)

Type: `AuthMode`.

##### data

> `readonly` **data**: [`UmaClientData`](../models/uma-client.model.md#umaclientdata)

Defined in:
[src/api/services/uma-client.service.ts:85](https://github.com/davinidae/umazing-musumengine/blob/0f4b26a7c602290bed10e9aa2723b492bef975ef/src/api/services/uma-client.service.ts#L85)

Type: `UmaClientData`.

##### prevResults

> `readonly` **prevResults**: [`RequestResult`](../models/uma-client.model.md#requestresult)[] =
> `[]`

Defined in:
[src/api/services/uma-client.service.ts:95](https://github.com/davinidae/umazing-musumengine/blob/0f4b26a7c602290bed10e9aa2723b492bef975ef/src/api/services/uma-client.service.ts#L95)

prevResults.

###### Remarks

Type: `RequestResult[]`.

###### Default Value

`[]`

#### Methods

##### executeFlow()

> **executeFlow**(`steps`): `Promise`\<`void`\>

Defined in:
[src/api/services/uma-client.service.ts:194](https://github.com/davinidae/umazing-musumengine/blob/0f4b26a7c602290bed10e9aa2723b492bef975ef/src/api/services/uma-client.service.ts#L194)

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
[src/api/services/uma-client.service.ts:161](https://github.com/davinidae/umazing-musumengine/blob/0f4b26a7c602290bed10e9aa2723b492bef975ef/src/api/services/uma-client.service.ts#L161)

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
[src/api/services/uma-client.service.ts:185](https://github.com/davinidae/umazing-musumengine/blob/0f4b26a7c602290bed10e9aa2723b492bef975ef/src/api/services/uma-client.service.ts#L185)

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
[src/api/services/uma-client.service.ts:151](https://github.com/davinidae/umazing-musumengine/blob/0f4b26a7c602290bed10e9aa2723b492bef975ef/src/api/services/uma-client.service.ts#L151)

getAttestationType.

###### Returns

`number`

Type: `number`.

##### hasActiveSession()

> **hasActiveSession**(): `boolean`

Defined in:
[src/api/services/uma-client.service.ts:143](https://github.com/davinidae/umazing-musumengine/blob/0f4b26a7c602290bed10e9aa2723b492bef975ef/src/api/services/uma-client.service.ts#L143)

hasActiveSession.

###### Returns

`boolean`

Type: `boolean`.

##### logIn()

> **logIn**(): `Promise`\<[`RequestResult`](../models/uma-client.model.md#requestresult)[]\>

Defined in:
[src/api/services/uma-client.service.ts:228](https://github.com/davinidae/umazing-musumengine/blob/0f4b26a7c602290bed10e9aa2723b492bef975ef/src/api/services/uma-client.service.ts#L228)

logIn (async).

###### Returns

`Promise`\<[`RequestResult`](../models/uma-client.model.md#requestresult)[]\>

Type: `Promise<RequestResult[]>`.

##### regenSessionId()

> **regenSessionId**(): `void`

Defined in:
[src/api/services/uma-client.service.ts:100](https://github.com/davinidae/umazing-musumengine/blob/0f4b26a7c602290bed10e9aa2723b492bef975ef/src/api/services/uma-client.service.ts#L100)

regenSessionId.

###### Returns

`void`

##### updateAuthKey()

> **updateAuthKey**(`authKey`): `void`

Defined in:
[src/api/services/uma-client.service.ts:135](https://github.com/davinidae/umazing-musumengine/blob/0f4b26a7c602290bed10e9aa2723b492bef975ef/src/api/services/uma-client.service.ts#L135)

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
[src/api/services/uma-client.service.ts:119](https://github.com/davinidae/umazing-musumengine/blob/0f4b26a7c602290bed10e9aa2723b492bef975ef/src/api/services/uma-client.service.ts#L119)

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
[src/api/services/uma-client.service.ts:111](https://github.com/davinidae/umazing-musumengine/blob/0f4b26a7c602290bed10e9aa2723b492bef975ef/src/api/services/uma-client.service.ts#L111)

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
[src/api/services/uma-client.service.ts:127](https://github.com/davinidae/umazing-musumengine/blob/0f4b26a7c602290bed10e9aa2723b492bef975ef/src/api/services/uma-client.service.ts#L127)

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
[src/api/services/uma-client.service.ts:45](https://github.com/davinidae/umazing-musumengine/blob/0f4b26a7c602290bed10e9aa2723b492bef975ef/src/api/services/uma-client.service.ts#L45)

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
