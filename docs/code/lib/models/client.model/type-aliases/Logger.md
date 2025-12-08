# Type Alias: Logger

> **Logger** = `object` & `Partial`\<\{ `log`: (...`args`) => `void`; \}\>

Defined in: [lib/models/client.model.ts:4](https://github.com/davinidae/umazing-musumengine/blob/f0aa00e05dacca920f40c0772577d56aeee15536/src/lib/models/client.model.ts#L4)

Minimal logger interface for dependency injection.

## Type Declaration

### debug()

> **debug**: (...`args`) => `void`

#### Parameters

##### args

...`unknown`[]

#### Returns

`void`

### error()

> **error**: (...`args`) => `void`

#### Parameters

##### args

...`unknown`[]

#### Returns

`void`

### info()

> **info**: (...`args`) => `void`

#### Parameters

##### args

...`unknown`[]

#### Returns

`void`

### warn()

> **warn**: (...`args`) => `void`

#### Parameters

##### args

...`unknown`[]

#### Returns

`void`
