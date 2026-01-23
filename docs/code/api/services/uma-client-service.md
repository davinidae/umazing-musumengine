# api/services/uma-client.service

## Classes

### UmaClient

Defined in:
[src/api/services/uma-client.service.ts:41](https://github.com/davinidae/umazing-musumengine/blob/76582159e9b470b4b8fcb28abde476e42b4e7b89/src/api/services/uma-client.service.ts#L41)

UmaClient.

#### Constructors

##### Constructor

> **new UmaClient**(`userSession`): [`UmaClient`](#umaclient)

Defined in:
[src/api/services/uma-client.service.ts:50](https://github.com/davinidae/umazing-musumengine/blob/76582159e9b470b4b8fcb28abde476e42b4e7b89/src/api/services/uma-client.service.ts#L50)

constructor.

###### Parameters

###### userSession

[`UserSession`](user-session.service.md#usersession)

###### Returns

[`UmaClient`](#umaclient)

Type: `UmaClient`.

#### Properties

##### attestationType

> **attestationType**: `number`

Defined in:
[src/api/services/uma-client.service.ts:43](https://github.com/davinidae/umazing-musumengine/blob/76582159e9b470b4b8fcb28abde476e42b4e7b89/src/api/services/uma-client.service.ts#L43)

##### header

> **header**: [`UmaReqHeader`](../../lib/utils/protocol.util.md#umareqheader)

Defined in:
[src/api/services/uma-client.service.ts:42](https://github.com/davinidae/umazing-musumengine/blob/76582159e9b470b4b8fcb28abde476e42b4e7b89/src/api/services/uma-client.service.ts#L42)

##### results

> `readonly` **results**: [`RequestResult`](../models/uma-client.model.md#requestresult)[] = `[]`

Defined in:
[src/api/services/uma-client.service.ts:74](https://github.com/davinidae/umazing-musumengine/blob/76582159e9b470b4b8fcb28abde476e42b4e7b89/src/api/services/uma-client.service.ts#L74)

results.

###### Remarks

Type: `RequestResult[]`.

###### Default Value

`[]`

##### userSession

> `readonly` **userSession**: [`UserSession`](user-session.service.md#usersession)

Defined in:
[src/api/services/uma-client.service.ts:50](https://github.com/davinidae/umazing-musumengine/blob/76582159e9b470b4b8fcb28abde476e42b4e7b89/src/api/services/uma-client.service.ts#L50)

#### Methods

##### collectPresents()

> **collectPresents**(): `Promise`\<`void`\>

Defined in:
[src/api/services/uma-client.service.ts:260](https://github.com/davinidae/umazing-musumengine/blob/76582159e9b470b4b8fcb28abde476e42b4e7b89/src/api/services/uma-client.service.ts#L260)

###### Returns

`Promise`\<`void`\>

##### executeFlow()

> **executeFlow**(`steps`): `Promise`\<`void`\>

Defined in:
[src/api/services/uma-client.service.ts:168](https://github.com/davinidae/umazing-musumengine/blob/76582159e9b470b4b8fcb28abde476e42b4e7b89/src/api/services/uma-client.service.ts#L168)

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
[src/api/services/uma-client.service.ts:134](https://github.com/davinidae/umazing-musumengine/blob/76582159e9b470b4b8fcb28abde476e42b4e7b89/src/api/services/uma-client.service.ts#L134)

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
[src/api/services/uma-client.service.ts:159](https://github.com/davinidae/umazing-musumengine/blob/76582159e9b470b4b8fcb28abde476e42b4e7b89/src/api/services/uma-client.service.ts#L159)

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

##### getResponseCodeName()

> **getResponseCodeName**(`code`): `string`

Defined in:
[src/api/services/uma-client.service.ts:123](https://github.com/davinidae/umazing-musumengine/blob/76582159e9b470b4b8fcb28abde476e42b4e7b89/src/api/services/uma-client.service.ts#L123)

###### Parameters

###### code

`number`

###### Returns

`string`

##### getUmaData()

> **getUmaData**(): [`UmaData`](../models/api.model.md#umadata)

Defined in:
[src/api/services/uma-client.service.ts:59](https://github.com/davinidae/umazing-musumengine/blob/76582159e9b470b4b8fcb28abde476e42b4e7b89/src/api/services/uma-client.service.ts#L59)

###### Returns

[`UmaData`](../models/api.model.md#umadata)

##### hasActiveSession()

> **hasActiveSession**(): `boolean`

Defined in:
[src/api/services/uma-client.service.ts:119](https://github.com/davinidae/umazing-musumengine/blob/76582159e9b470b4b8fcb28abde476e42b4e7b89/src/api/services/uma-client.service.ts#L119)

hasActiveSession.

###### Returns

`boolean`

Type: `boolean`.

##### logIn()

> **logIn**(): `Promise`\<`void`\>

Defined in:
[src/api/services/uma-client.service.ts:203](https://github.com/davinidae/umazing-musumengine/blob/76582159e9b470b4b8fcb28abde476e42b4e7b89/src/api/services/uma-client.service.ts#L203)

logIn (async).

###### Returns

`Promise`\<`void`\>

Type: `Promise<void>`.

##### playTeamTrials()

> **playTeamTrials**(): `Promise`\<`void`\>

Defined in:
[src/api/services/uma-client.service.ts:277](https://github.com/davinidae/umazing-musumengine/blob/76582159e9b470b4b8fcb28abde476e42b4e7b89/src/api/services/uma-client.service.ts#L277)

###### Returns

`Promise`\<`void`\>

##### regenSessionId()

> **regenSessionId**(): `void`

Defined in:
[src/api/services/uma-client.service.ts:79](https://github.com/davinidae/umazing-musumengine/blob/76582159e9b470b4b8fcb28abde476e42b4e7b89/src/api/services/uma-client.service.ts#L79)

regenSessionId.

###### Returns

`void`

##### updateAuthKey()

> **updateAuthKey**(`authKey`): `void`

Defined in:
[src/api/services/uma-client.service.ts:111](https://github.com/davinidae/umazing-musumengine/blob/76582159e9b470b4b8fcb28abde476e42b4e7b89/src/api/services/uma-client.service.ts#L111)

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
[src/api/services/uma-client.service.ts:95](https://github.com/davinidae/umazing-musumengine/blob/76582159e9b470b4b8fcb28abde476e42b4e7b89/src/api/services/uma-client.service.ts#L95)

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
[src/api/services/uma-client.service.ts:87](https://github.com/davinidae/umazing-musumengine/blob/76582159e9b470b4b8fcb28abde476e42b4e7b89/src/api/services/uma-client.service.ts#L87)

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
[src/api/services/uma-client.service.ts:103](https://github.com/davinidae/umazing-musumengine/blob/76582159e9b470b4b8fcb28abde476e42b4e7b89/src/api/services/uma-client.service.ts#L103)

updateViewerId.

###### Parameters

###### viewerId

`number`

Type: `number`.

###### Returns

`void`
