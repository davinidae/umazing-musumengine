# api/services/uma-client.service

## Classes

### UmaClient

Defined in:
[src/api/services/uma-client.service.ts:75](https://github.com/davinidae/umazing-musumengine/blob/70c65772a693b9af9eb32a052402dfc126c355a3/src/api/services/uma-client.service.ts#L75)

UmaClient.

#### Constructors

##### Constructor

> **new UmaClient**(`auth`, `data`): [`UmaClient`](#umaclient)

Defined in:
[src/api/services/uma-client.service.ts:82](https://github.com/davinidae/umazing-musumengine/blob/70c65772a693b9af9eb32a052402dfc126c355a3/src/api/services/uma-client.service.ts#L82)

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
[src/api/services/uma-client.service.ts:83](https://github.com/davinidae/umazing-musumengine/blob/70c65772a693b9af9eb32a052402dfc126c355a3/src/api/services/uma-client.service.ts#L83)

Type: `AuthMode`.

##### data

> `readonly` **data**: [`UmaClientData`](../models/uma-client.model.md#umaclientdata)

Defined in:
[src/api/services/uma-client.service.ts:84](https://github.com/davinidae/umazing-musumengine/blob/70c65772a693b9af9eb32a052402dfc126c355a3/src/api/services/uma-client.service.ts#L84)

Type: `UmaClientData`.

##### prevResults

> `readonly` **prevResults**: [`RequestResult`](../models/uma-client.model.md#requestresult)[] =
> `[]`

Defined in:
[src/api/services/uma-client.service.ts:94](https://github.com/davinidae/umazing-musumengine/blob/70c65772a693b9af9eb32a052402dfc126c355a3/src/api/services/uma-client.service.ts#L94)

prevResults.

###### Remarks

Type: `RequestResult[]`.

###### Default Value

`[]`

#### Methods

##### executeFlow()

> **executeFlow**(`steps`): `Promise`\<`void`\>

Defined in:
[src/api/services/uma-client.service.ts:185](https://github.com/davinidae/umazing-musumengine/blob/70c65772a693b9af9eb32a052402dfc126c355a3/src/api/services/uma-client.service.ts#L185)

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
[src/api/services/uma-client.service.ts:160](https://github.com/davinidae/umazing-musumengine/blob/70c65772a693b9af9eb32a052402dfc126c355a3/src/api/services/uma-client.service.ts#L160)

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
[src/api/services/uma-client.service.ts:176](https://github.com/davinidae/umazing-musumengine/blob/70c65772a693b9af9eb32a052402dfc126c355a3/src/api/services/uma-client.service.ts#L176)

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
[src/api/services/uma-client.service.ts:150](https://github.com/davinidae/umazing-musumengine/blob/70c65772a693b9af9eb32a052402dfc126c355a3/src/api/services/uma-client.service.ts#L150)

getAttestationType.

###### Returns

`number`

Type: `number`.

##### hasActiveSession()

> **hasActiveSession**(): `boolean`

Defined in:
[src/api/services/uma-client.service.ts:142](https://github.com/davinidae/umazing-musumengine/blob/70c65772a693b9af9eb32a052402dfc126c355a3/src/api/services/uma-client.service.ts#L142)

hasActiveSession.

###### Returns

`boolean`

Type: `boolean`.

##### logIn()

> **logIn**(): `Promise`\<[`RequestResult`](../models/uma-client.model.md#requestresult)[]\>

Defined in:
[src/api/services/uma-client.service.ts:219](https://github.com/davinidae/umazing-musumengine/blob/70c65772a693b9af9eb32a052402dfc126c355a3/src/api/services/uma-client.service.ts#L219)

logIn (async).

###### Returns

`Promise`\<[`RequestResult`](../models/uma-client.model.md#requestresult)[]\>

Type: `Promise<RequestResult[]>`.

##### regenSessionId()

> **regenSessionId**(): `void`

Defined in:
[src/api/services/uma-client.service.ts:99](https://github.com/davinidae/umazing-musumengine/blob/70c65772a693b9af9eb32a052402dfc126c355a3/src/api/services/uma-client.service.ts#L99)

regenSessionId.

###### Returns

`void`

##### updateAuthKey()

> **updateAuthKey**(`authKey`): `void`

Defined in:
[src/api/services/uma-client.service.ts:134](https://github.com/davinidae/umazing-musumengine/blob/70c65772a693b9af9eb32a052402dfc126c355a3/src/api/services/uma-client.service.ts#L134)

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
[src/api/services/uma-client.service.ts:118](https://github.com/davinidae/umazing-musumengine/blob/70c65772a693b9af9eb32a052402dfc126c355a3/src/api/services/uma-client.service.ts#L118)

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
[src/api/services/uma-client.service.ts:110](https://github.com/davinidae/umazing-musumengine/blob/70c65772a693b9af9eb32a052402dfc126c355a3/src/api/services/uma-client.service.ts#L110)

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
[src/api/services/uma-client.service.ts:126](https://github.com/davinidae/umazing-musumengine/blob/70c65772a693b9af9eb32a052402dfc126c355a3/src/api/services/uma-client.service.ts#L126)

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
[src/api/services/uma-client.service.ts:44](https://github.com/davinidae/umazing-musumengine/blob/70c65772a693b9af9eb32a052402dfc126c355a3/src/api/services/uma-client.service.ts#L44)

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
