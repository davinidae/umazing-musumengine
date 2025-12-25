# api/utils/api.util

## Classes

### ApiResponse

Defined in:
[api/utils/api.util.ts:1](https://github.com/davinidae/umazing-musumengine/blob/f7b34d19a41237760d3f0823d1a963b560f03912/src/api/utils/api.util.ts#L1)

#### Constructors

##### Constructor

> **new ApiResponse**(`statusCode`, `body`, `headers?`, `cookies?`): [`ApiResponse`](#apiresponse)

Defined in:
[api/utils/api.util.ts:2](https://github.com/davinidae/umazing-musumengine/blob/f7b34d19a41237760d3f0823d1a963b560f03912/src/api/utils/api.util.ts#L2)

###### Parameters

###### statusCode

`number`

###### body

`Record`\<`string`, `unknown`\>

###### headers?

`Record`\<`string`, `string`\>

###### cookies?

`string`[]

###### Returns

[`ApiResponse`](#apiresponse)

#### Properties

##### body

> **body**: `Record`\<`string`, `unknown`\>

Defined in:
[api/utils/api.util.ts:4](https://github.com/davinidae/umazing-musumengine/blob/f7b34d19a41237760d3f0823d1a963b560f03912/src/api/utils/api.util.ts#L4)

##### cookies?

> `optional` **cookies**: `string`[]

Defined in:
[api/utils/api.util.ts:6](https://github.com/davinidae/umazing-musumengine/blob/f7b34d19a41237760d3f0823d1a963b560f03912/src/api/utils/api.util.ts#L6)

##### headers?

> `optional` **headers**: `Record`\<`string`, `string`\>

Defined in:
[api/utils/api.util.ts:5](https://github.com/davinidae/umazing-musumengine/blob/f7b34d19a41237760d3f0823d1a963b560f03912/src/api/utils/api.util.ts#L5)

##### statusCode

> **statusCode**: `number`

Defined in:
[api/utils/api.util.ts:3](https://github.com/davinidae/umazing-musumengine/blob/f7b34d19a41237760d3f0823d1a963b560f03912/src/api/utils/api.util.ts#L3)

#### Methods

##### execute()

> **execute**(): `object`

Defined in:
[api/utils/api.util.ts:9](https://github.com/davinidae/umazing-musumengine/blob/f7b34d19a41237760d3f0823d1a963b560f03912/src/api/utils/api.util.ts#L9)

###### Returns

`object`

###### body

> **body**: `string`

###### cookies

> **cookies**: `string`[]

###### headers

> **headers**: `object`

###### headers.Content-Type

> **Content-Type**: `string` = `'application/json'`

###### statusCode

> **statusCode**: `number`
