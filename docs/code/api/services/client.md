# api/services/client

## Classes

### Client

Defined in:
[api/services/client.ts:13](https://github.com/davinidae/umazing-musumengine/blob/de45d1d49605fea07b4cf710c5fa2284e2c9d18c/src/api/services/client.ts#L13)

#### Constructors

##### Constructor

> **new Client**(`cfg`, `auth`): [`Client`](#client)

Defined in:
[api/services/client.ts:14](https://github.com/davinidae/umazing-musumengine/blob/de45d1d49605fea07b4cf710c5fa2284e2c9d18c/src/api/services/client.ts#L14)

###### Parameters

###### cfg

[`ClientConfig`](../models/uma-client.model.md#clientconfig) = `{}`

###### auth

[`AuthMode`](../models/uma-client.model.md#authmode) = `...`

###### Returns

[`Client`](#client)

#### Properties

##### auth

> `private` `readonly` **auth**: [`AuthMode`](../models/uma-client.model.md#authmode)

Defined in:
[api/services/client.ts:16](https://github.com/davinidae/umazing-musumengine/blob/de45d1d49605fea07b4cf710c5fa2284e2c9d18c/src/api/services/client.ts#L16)

##### cfg

> `private` `readonly` **cfg**: [`ClientConfig`](../models/uma-client.model.md#clientconfig) = `{}`

Defined in:
[api/services/client.ts:15](https://github.com/davinidae/umazing-musumengine/blob/de45d1d49605fea07b4cf710c5fa2284e2c9d18c/src/api/services/client.ts#L15)

#### Methods

##### getDefaultInitBase()

> **getDefaultInitBase**(`deviceType`): [`RequestBase`](../models/uma-client.model.md#requestbase)

Defined in:
[api/services/client.ts:25](https://github.com/davinidae/umazing-musumengine/blob/de45d1d49605fea07b4cf710c5fa2284e2c9d18c/src/api/services/client.ts#L25)

###### Parameters

###### deviceType

`number`

###### Returns

[`RequestBase`](../models/uma-client.model.md#requestbase)

##### initialize()

> **initialize**(): `Promise`\<`void`\>

Defined in:
[api/services/client.ts:44](https://github.com/davinidae/umazing-musumengine/blob/de45d1d49605fea07b4cf710c5fa2284e2c9d18c/src/api/services/client.ts#L44)

###### Returns

`Promise`\<`void`\>
