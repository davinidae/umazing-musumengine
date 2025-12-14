# lib/models/client.model

## Type Aliases

### Logger

> **Logger** = `object` & `Partial`\<\{ `log`: (...`args`) => `void`; \}\>

Defined in:
[lib/models/client.model.ts:4](https://github.com/davinidae/umazing-musumengine/blob/1ed115c1e87812b3f2579ab1c891c316bbf0b946/src/lib/models/client.model.ts#L4)

Minimal logger interface for dependency injection.

#### Type Declaration

##### debug()

> **debug**: (...`args`) => `void`

###### Parameters

###### args

...`unknown`[]

###### Returns

`void`

##### error()

> **error**: (...`args`) => `void`

###### Parameters

###### args

...`unknown`[]

###### Returns

`void`

##### info()

> **info**: (...`args`) => `void`

###### Parameters

###### args

...`unknown`[]

###### Returns

`void`

##### warn()

> **warn**: (...`args`) => `void`

###### Parameters

###### args

...`unknown`[]

###### Returns

`void`

---

### RuntimeClientOptions

> **RuntimeClientOptions** = [`ServiceOptions`](#serviceoptions)

Defined in:
[lib/models/client.model.ts:14](https://github.com/davinidae/umazing-musumengine/blob/1ed115c1e87812b3f2579ab1c891c316bbf0b946/src/lib/models/client.model.ts#L14)

Options for RuntimeClient construction.

---

### ServiceOptions

> **ServiceOptions** = `object` & `Partial`\<\{ `logger`: [`Logger`](#logger); \}\>

Defined in:
[lib/models/client.model.ts:17](https://github.com/davinidae/umazing-musumengine/blob/1ed115c1e87812b3f2579ab1c891c316bbf0b946/src/lib/models/client.model.ts#L17)

Common options for long-running services (decrypt/encrypt).

#### Type Declaration

##### DETERMINISTIC_ENC_SECRET

> **DETERMINISTIC_ENC_SECRET**: `string`
