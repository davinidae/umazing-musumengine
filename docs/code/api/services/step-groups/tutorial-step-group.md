# api/services/step-groups/tutorial.step-group

## Classes

### TutorialStepGroup

Defined in:
[src/api/services/step-groups/tutorial.step-group.ts:12](https://github.com/davinidae/umazing-musumengine/blob/c700395cebb260e117f031a8c5db6db9062abc06/src/api/services/step-groups/tutorial.step-group.ts#L12)

TutorialStepGroup.

#### Remarks

Extends/implements: `extends CoreStepGroup`.

#### Extends

- [`CoreStepGroup`](core.step-group.md#corestepgroup)

#### Constructors

##### Constructor

> **new TutorialStepGroup**(`umaClient`, ...`args`): [`TutorialStepGroup`](#tutorialstepgroup)

Defined in:
[src/api/services/step-groups/core.step-group.ts:20](https://github.com/davinidae/umazing-musumengine/blob/c700395cebb260e117f031a8c5db6db9062abc06/src/api/services/step-groups/core.step-group.ts#L20)

constructor.

###### Parameters

###### umaClient

[`UmaClient`](../uma-client.service.md#umaclient)

Type: `UmaClient`.

###### args

...`any`[]

Type: `any[]`.

###### Returns

[`TutorialStepGroup`](#tutorialstepgroup)

Type: `CoreStepGroup`.

###### Inherited from

[`CoreStepGroup`](core.step-group.md#corestepgroup).[`constructor`](core.step-group.md#constructor)

#### Properties

##### args

> `protected` `readonly` **args**: `any`[] = `[]`

Defined in:
[src/api/services/step-groups/core.step-group.ts:12](https://github.com/davinidae/umazing-musumengine/blob/c700395cebb260e117f031a8c5db6db9062abc06/src/api/services/step-groups/core.step-group.ts#L12)

args.

###### Remarks

Type: `any[]`.

###### Default Value

`[]`

###### Inherited from

[`CoreStepGroup`](core.step-group.md#corestepgroup).[`args`](core.step-group.md#args)

##### executeStep()

> `protected` **executeStep**: (...`args`) => `Promise`

Defined in:
[src/api/services/step-groups/core.step-group.ts:32](https://github.com/davinidae/umazing-musumengine/blob/c700395cebb260e117f031a8c5db6db9062abc06/src/api/services/step-groups/core.step-group.ts#L32)

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

###### Inherited from

[`CoreStepGroup`](core.step-group.md#corestepgroup).[`executeStep`](core.step-group.md#executestep)

##### executeStepGroup()

> `protected` **executeStepGroup**: (...`args`) => `Promise`

Defined in:
[src/api/services/step-groups/core.step-group.ts:38](https://github.com/davinidae/umazing-musumengine/blob/c700395cebb260e117f031a8c5db6db9062abc06/src/api/services/step-groups/core.step-group.ts#L38)

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

###### Inherited from

[`CoreStepGroup`](core.step-group.md#corestepgroup).[`executeStepGroup`](core.step-group.md#executestepgroup)

##### umaClient

> `protected` `readonly` **umaClient**: [`UmaClient`](../uma-client.service.md#umaclient)

Defined in:
[src/api/services/step-groups/core.step-group.ts:21](https://github.com/davinidae/umazing-musumengine/blob/c700395cebb260e117f031a8c5db6db9062abc06/src/api/services/step-groups/core.step-group.ts#L21)

Type: `UmaClient`.

###### Inherited from

[`CoreStepGroup`](core.step-group.md#corestepgroup).[`umaClient`](core.step-group.md#umaclient)

#### Methods

##### execute()

> **execute**(): `Promise`\<`void`\>

Defined in:
[src/api/services/step-groups/tutorial.step-group.ts:17](https://github.com/davinidae/umazing-musumengine/blob/c700395cebb260e117f031a8c5db6db9062abc06/src/api/services/step-groups/tutorial.step-group.ts#L17)

execute (async).

###### Returns

`Promise`\<`void`\>

Type: `Promise<void>`.

###### Overrides

[`CoreStepGroup`](core.step-group.md#corestepgroup).[`execute`](core.step-group.md#execute)
