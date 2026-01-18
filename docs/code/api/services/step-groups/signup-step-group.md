# api/services/step-groups/signup.step-group

## Classes

### SignupStepGroup

Defined in:
[src/api/services/step-groups/signup.step-group.ts:11](https://github.com/davinidae/umazing-musumengine/blob/ae91acd9f749df28e5b6996053e72ff3692b5518/src/api/services/step-groups/signup.step-group.ts#L11)

SignupStepGroup.

#### Remarks

Extends/implements: `extends CoreStepGroup`.

#### Extends

- [`CoreStepGroup`](core.step-group.md#corestepgroup)

#### Constructors

##### Constructor

> **new SignupStepGroup**(`umaClient`, `attestationType`): [`SignupStepGroup`](#signupstepgroup)

Defined in:
[src/api/services/step-groups/signup.step-group.ts:12](https://github.com/davinidae/umazing-musumengine/blob/ae91acd9f749df28e5b6996053e72ff3692b5518/src/api/services/step-groups/signup.step-group.ts#L12)

###### Parameters

###### umaClient

[`UmaClient`](../uma-client.service.md#umaclient)

###### attestationType

[`AttestationType`](../../models/umamusume-api/enums.model.md#attestationtype)

###### Returns

[`SignupStepGroup`](#signupstepgroup)

###### Overrides

[`CoreStepGroup`](core.step-group.md#corestepgroup).[`constructor`](core.step-group.md#constructor)

#### Properties

##### args

> `protected` `readonly` **args**: `any`[] = `[]`

Defined in:
[src/api/services/step-groups/core.step-group.ts:12](https://github.com/davinidae/umazing-musumengine/blob/ae91acd9f749df28e5b6996053e72ff3692b5518/src/api/services/step-groups/core.step-group.ts#L12)

args.

###### Remarks

Type: `any[]`.

###### Default Value

`[]`

###### Inherited from

[`CoreStepGroup`](core.step-group.md#corestepgroup).[`args`](core.step-group.md#args)

##### attestationType

> `private` `readonly` **attestationType**:
> [`AttestationType`](../../models/umamusume-api/enums.model.md#attestationtype)

Defined in:
[src/api/services/step-groups/signup.step-group.ts:14](https://github.com/davinidae/umazing-musumengine/blob/ae91acd9f749df28e5b6996053e72ff3692b5518/src/api/services/step-groups/signup.step-group.ts#L14)

##### executeStep()

> `protected` **executeStep**: (...`args`) => `Promise`

Defined in:
[src/api/services/step-groups/core.step-group.ts:32](https://github.com/davinidae/umazing-musumengine/blob/ae91acd9f749df28e5b6996053e72ff3692b5518/src/api/services/step-groups/core.step-group.ts#L32)

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
[src/api/services/step-groups/core.step-group.ts:38](https://github.com/davinidae/umazing-musumengine/blob/ae91acd9f749df28e5b6996053e72ff3692b5518/src/api/services/step-groups/core.step-group.ts#L38)

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
[src/api/services/step-groups/signup.step-group.ts:13](https://github.com/davinidae/umazing-musumengine/blob/ae91acd9f749df28e5b6996053e72ff3692b5518/src/api/services/step-groups/signup.step-group.ts#L13)

Type: `UmaClient`.

###### Inherited from

[`CoreStepGroup`](core.step-group.md#corestepgroup).[`umaClient`](core.step-group.md#umaclient)

#### Methods

##### execute()

> **execute**(): `Promise`\<`void`\>

Defined in:
[src/api/services/step-groups/signup.step-group.ts:23](https://github.com/davinidae/umazing-musumengine/blob/ae91acd9f749df28e5b6996053e72ff3692b5518/src/api/services/step-groups/signup.step-group.ts#L23)

execute (async).

###### Returns

`Promise`\<`void`\>

Type: `Promise<void>`.

###### Overrides

[`CoreStepGroup`](core.step-group.md#corestepgroup).[`execute`](core.step-group.md#execute)
