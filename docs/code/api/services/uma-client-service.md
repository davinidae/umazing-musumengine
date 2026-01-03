# api/services/uma-client.service

## Classes

### UmaClient

Defined in:
[src/api/services/uma-client.service.ts:83](https://github.com/davinidae/umazing-musumengine/blob/7b7fb26e300246328ff4c87810f666ed56b6ab3f/src/api/services/uma-client.service.ts#L83)

UmaClient.

#### Constructors

##### Constructor

> **new UmaClient**(`auth`, `data`, `umaData`, `userSession`): [`UmaClient`](#umaclient)

Defined in:
[src/api/services/uma-client.service.ts:90](https://github.com/davinidae/umazing-musumengine/blob/7b7fb26e300246328ff4c87810f666ed56b6ab3f/src/api/services/uma-client.service.ts#L90)

constructor.

###### Parameters

###### auth

[`AuthMode`](../models/uma-client.model.md#authmode)

Type: `AuthMode`.

###### data

[`UmaClientData`](../models/uma-client.model.md#umaclientdata)

Type: `UmaClientData`.

###### umaData

[`UmaData`](../models/api.model.md#umadata)

###### userSession

[`UserSession`](user-session.service.md#usersession)

###### Returns

[`UmaClient`](#umaclient)

Type: `UmaClient`.

#### Properties

##### auth

> `private` `readonly` **auth**: [`AuthMode`](../models/uma-client.model.md#authmode)

Defined in:
[src/api/services/uma-client.service.ts:91](https://github.com/davinidae/umazing-musumengine/blob/7b7fb26e300246328ff4c87810f666ed56b6ab3f/src/api/services/uma-client.service.ts#L91)

Type: `AuthMode`.

##### data

> `readonly` **data**: [`UmaClientData`](../models/uma-client.model.md#umaclientdata)

Defined in:
[src/api/services/uma-client.service.ts:92](https://github.com/davinidae/umazing-musumengine/blob/7b7fb26e300246328ff4c87810f666ed56b6ab3f/src/api/services/uma-client.service.ts#L92)

Type: `UmaClientData`.

##### prevResults

> `readonly` **prevResults**: [`RequestResult`](../models/uma-client.model.md#requestresult)[] =
> `[]`

Defined in:
[src/api/services/uma-client.service.ts:114](https://github.com/davinidae/umazing-musumengine/blob/7b7fb26e300246328ff4c87810f666ed56b6ab3f/src/api/services/uma-client.service.ts#L114)

prevResults.

###### Remarks

Type: `RequestResult[]`.

###### Default Value

`[]`

##### umaData

> `readonly` **umaData**: [`UmaData`](../models/api.model.md#umadata)

Defined in:
[src/api/services/uma-client.service.ts:93](https://github.com/davinidae/umazing-musumengine/blob/7b7fb26e300246328ff4c87810f666ed56b6ab3f/src/api/services/uma-client.service.ts#L93)

##### userSession

> `readonly` **userSession**: [`UserSession`](user-session.service.md#usersession)

Defined in:
[src/api/services/uma-client.service.ts:94](https://github.com/davinidae/umazing-musumengine/blob/7b7fb26e300246328ff4c87810f666ed56b6ab3f/src/api/services/uma-client.service.ts#L94)

#### Methods

##### executeFlow()

> **executeFlow**(`steps`): `Promise`\<`void`\>

Defined in:
[src/api/services/uma-client.service.ts:219](https://github.com/davinidae/umazing-musumengine/blob/7b7fb26e300246328ff4c87810f666ed56b6ab3f/src/api/services/uma-client.service.ts#L219)

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
[src/api/services/uma-client.service.ts:185](https://github.com/davinidae/umazing-musumengine/blob/7b7fb26e300246328ff4c87810f666ed56b6ab3f/src/api/services/uma-client.service.ts#L185)

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
[src/api/services/uma-client.service.ts:210](https://github.com/davinidae/umazing-musumengine/blob/7b7fb26e300246328ff4c87810f666ed56b6ab3f/src/api/services/uma-client.service.ts#L210)

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
[src/api/services/uma-client.service.ts:170](https://github.com/davinidae/umazing-musumengine/blob/7b7fb26e300246328ff4c87810f666ed56b6ab3f/src/api/services/uma-client.service.ts#L170)

getAttestationType.

###### Returns

`number`

Type: `number`.

##### getResponseCodeName()

> **getResponseCodeName**(`code`): `string`

Defined in:
[src/api/services/uma-client.service.ts:174](https://github.com/davinidae/umazing-musumengine/blob/7b7fb26e300246328ff4c87810f666ed56b6ab3f/src/api/services/uma-client.service.ts#L174)

###### Parameters

###### code

`number`

###### Returns

`string`

##### getUmaData()

> **getUmaData**(): [`UmaData`](../models/api.model.md#umadata)

Defined in:
[src/api/services/uma-client.service.ts:99](https://github.com/davinidae/umazing-musumengine/blob/7b7fb26e300246328ff4c87810f666ed56b6ab3f/src/api/services/uma-client.service.ts#L99)

###### Returns

[`UmaData`](../models/api.model.md#umadata)

##### hasActiveSession()

> **hasActiveSession**(): `boolean`

Defined in:
[src/api/services/uma-client.service.ts:162](https://github.com/davinidae/umazing-musumengine/blob/7b7fb26e300246328ff4c87810f666ed56b6ab3f/src/api/services/uma-client.service.ts#L162)

hasActiveSession.

###### Returns

`boolean`

Type: `boolean`.

##### logIn()

> **logIn**(): `Promise`\<[`RequestResult`](../models/uma-client.model.md#requestresult)[]\>

Defined in:
[src/api/services/uma-client.service.ts:253](https://github.com/davinidae/umazing-musumengine/blob/7b7fb26e300246328ff4c87810f666ed56b6ab3f/src/api/services/uma-client.service.ts#L253)

logIn (async).

###### Returns

`Promise`\<[`RequestResult`](../models/uma-client.model.md#requestresult)[]\>

Type: `Promise<RequestResult[]>`.

##### regenSessionId()

> **regenSessionId**(): `void`

Defined in:
[src/api/services/uma-client.service.ts:119](https://github.com/davinidae/umazing-musumengine/blob/7b7fb26e300246328ff4c87810f666ed56b6ab3f/src/api/services/uma-client.service.ts#L119)

regenSessionId.

###### Returns

`void`

##### updateAuthKey()

> **updateAuthKey**(`authKey`): `void`

Defined in:
[src/api/services/uma-client.service.ts:154](https://github.com/davinidae/umazing-musumengine/blob/7b7fb26e300246328ff4c87810f666ed56b6ab3f/src/api/services/uma-client.service.ts#L154)

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
[src/api/services/uma-client.service.ts:138](https://github.com/davinidae/umazing-musumengine/blob/7b7fb26e300246328ff4c87810f666ed56b6ab3f/src/api/services/uma-client.service.ts#L138)

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
[src/api/services/uma-client.service.ts:130](https://github.com/davinidae/umazing-musumengine/blob/7b7fb26e300246328ff4c87810f666ed56b6ab3f/src/api/services/uma-client.service.ts#L130)

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
[src/api/services/uma-client.service.ts:146](https://github.com/davinidae/umazing-musumengine/blob/7b7fb26e300246328ff4c87810f666ed56b6ab3f/src/api/services/uma-client.service.ts#L146)

updateViewerId.

###### Parameters

###### viewerId

`number`

Type: `number`.

###### Returns

`void`

## Functions

### createUmaClient()

> **createUmaClient**(`auth`, `udid`, `authKey`, `base`, `resVer`, `baseUrl`, `umaData`,
> `userSession`): [`UmaClient`](#umaclient)

Defined in:
[src/api/services/uma-client.service.ts:45](https://github.com/davinidae/umazing-musumengine/blob/7b7fb26e300246328ff4c87810f666ed56b6ab3f/src/api/services/uma-client.service.ts#L45)

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

##### umaData

[`UmaData`](../models/api.model.md#umadata)

##### userSession

[`UserSession`](user-session.service.md#usersession)

#### Returns

[`UmaClient`](#umaclient)

Type: `UmaClient`.
