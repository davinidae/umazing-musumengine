# api/services/client

## Classes

### Client

Defined in:
[api/services/client.ts:7](https://github.com/davinidae/umazing-musumengine/blob/5ab33fb89098eb733cdb60603508023e336b136a/src/api/services/client.ts#L7)

#### Constructors

##### Constructor

> **new Client**(`cfg`, `auth`): [`Client`](#client)

Defined in:
[api/services/client.ts:8](https://github.com/davinidae/umazing-musumengine/blob/5ab33fb89098eb733cdb60603508023e336b136a/src/api/services/client.ts#L8)

###### Parameters

###### cfg

[`ClientConfig`](../../rust-port/client/model.md#clientconfig) = `{}`

###### auth

[`AuthMode`](../../rust-port/client/model.md#authmode) = `...`

###### Returns

[`Client`](#client)

#### Properties

##### auth

> `private` `readonly` **auth**: [`AuthMode`](../../rust-port/client/model.md#authmode)

Defined in:
[api/services/client.ts:10](https://github.com/davinidae/umazing-musumengine/blob/5ab33fb89098eb733cdb60603508023e336b136a/src/api/services/client.ts#L10)

##### cfg

> `private` `readonly` **cfg**: [`ClientConfig`](../../rust-port/client/model.md#clientconfig) =
> `{}`

Defined in:
[api/services/client.ts:9](https://github.com/davinidae/umazing-musumengine/blob/5ab33fb89098eb733cdb60603508023e336b136a/src/api/services/client.ts#L9)

#### Methods

##### getDefaultInitBase()

> **getDefaultInitBase**(`deviceType`): [`RequestBase`](../../rust-port/client/model.md#requestbase)

Defined in:
[api/services/client.ts:19](https://github.com/davinidae/umazing-musumengine/blob/5ab33fb89098eb733cdb60603508023e336b136a/src/api/services/client.ts#L19)

###### Parameters

###### deviceType

`number`

###### Returns

[`RequestBase`](../../rust-port/client/model.md#requestbase)

##### initialize()

> **initialize**(): `Promise`\<`void`\>

Defined in:
[api/services/client.ts:38](https://github.com/davinidae/umazing-musumengine/blob/5ab33fb89098eb733cdb60603508023e336b136a/src/api/services/client.ts#L38)

###### Returns

`Promise`\<`void`\>
