# Type Alias: Logger

> **Logger** = `object` & `Partial`\<\{ `log`: (...`args`) => `void`; \}\>

Defined in: [lib/models/client.model.ts:4](https://github.com/davinidae/umazing-musumengine/blob/18c3ff3260c8ab431287937bbbd69b2ff72846ba/src/lib/models/client.model.ts#L4)

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
