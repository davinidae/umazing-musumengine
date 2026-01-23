# api/services/step-groups/core.step-group

## Classes

### `abstract` CoreStepGroup

Defined in:
[src/api/services/step-groups/core.step-group.ts:6](https://github.com/davinidae/umazing-musumengine/blob/76582159e9b470b4b8fcb28abde476e42b4e7b89/src/api/services/step-groups/core.step-group.ts#L6)

CoreStepGroup.

#### Extended by

- [`SignupStepGroup`](signup.step-group.md#signupstepgroup)
- [`TutorialStepGroup`](tutorial.step-group.md#tutorialstepgroup)

#### Constructors

##### Constructor

> **new CoreStepGroup**(`umaClient`, ...`args`): [`CoreStepGroup`](#corestepgroup)

Defined in:
[src/api/services/step-groups/core.step-group.ts:20](https://github.com/davinidae/umazing-musumengine/blob/76582159e9b470b4b8fcb28abde476e42b4e7b89/src/api/services/step-groups/core.step-group.ts#L20)

constructor.

###### Parameters

###### umaClient

[`UmaClient`](../uma-client.service.md#umaclient)

Type: `UmaClient`.

###### args

...`any`[]

Type: `any[]`.

###### Returns

[`CoreStepGroup`](#corestepgroup)

Type: `CoreStepGroup`.

#### Properties

##### args

> `protected` `readonly` **args**: `any`[] = `[]`

Defined in:
[src/api/services/step-groups/core.step-group.ts:12](https://github.com/davinidae/umazing-musumengine/blob/76582159e9b470b4b8fcb28abde476e42b4e7b89/src/api/services/step-groups/core.step-group.ts#L12)

args.

###### Remarks

Type: `any[]`.

###### Default Value

`[]`

##### executeStep()

> `protected` **executeStep**: (...`args`) => `Promise`

Defined in:
[src/api/services/step-groups/core.step-group.ts:32](https://github.com/davinidae/umazing-musumengine/blob/76582159e9b470b4b8fcb28abde476e42b4e7b89/src/api/services/step-groups/core.step-group.ts#L32)

executeStep.

###### Parameters

###### args

...`any`[]

###### Returns

`Promise`

###### Remarks

Type: `(...args: any[]) => Promise<void>`.

###### Default Value

`this.umaClient.executeStep.bind(this.umaClient, ...this.args)`

##### executeStepGroup()

> `protected` **executeStepGroup**: (...`args`) => `Promise`

Defined in:
[src/api/services/step-groups/core.step-group.ts:38](https://github.com/davinidae/umazing-musumengine/blob/76582159e9b470b4b8fcb28abde476e42b4e7b89/src/api/services/step-groups/core.step-group.ts#L38)

executeStepGroup.

###### Parameters

###### args

...`any`[]

###### Returns

`Promise`

###### Remarks

Type: `(...args: any[]) => Promise<void>`.

###### Default Value

`this.umaClient.executeStepGroup.bind(this.umaClient, ...this.args)`

##### umaClient

> `protected` `readonly` **umaClient**: [`UmaClient`](../uma-client.service.md#umaclient)

Defined in:
[src/api/services/step-groups/core.step-group.ts:21](https://github.com/davinidae/umazing-musumengine/blob/76582159e9b470b4b8fcb28abde476e42b4e7b89/src/api/services/step-groups/core.step-group.ts#L21)

Type: `UmaClient`.

#### Methods

##### execute()

> `abstract` **execute**(): `Promise`\<`void`\>

Defined in:
[src/api/services/step-groups/core.step-group.ts:45](https://github.com/davinidae/umazing-musumengine/blob/76582159e9b470b4b8fcb28abde476e42b4e7b89/src/api/services/step-groups/core.step-group.ts#L45)

execute.

###### Returns

`Promise`\<`void`\>

Type: `Promise<void>`.

###### Remarks

Source: `abstract execute(): Promise<void>;`.
