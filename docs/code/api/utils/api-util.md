# api/utils/api.util

## Classes

### ApiResponse

Defined in:
[api/utils/api.util.ts:7](https://github.com/davinidae/umazing-musumengine/blob/214adb783384a11b15b86407e00e671feb1ec440/src/api/utils/api.util.ts#L7)

Minimal API response wrapper used by API route handlers.

This mirrors the shape commonly used in Lambda/API-Gateway style handlers, but is also convenient
for the local Express adapter in `src/api/index.ts`.

#### Constructors

##### Constructor

> **new ApiResponse**(`statusCode`, `body`, `headers?`, `cookies?`): [`ApiResponse`](#apiresponse)

Defined in:
[api/utils/api.util.ts:8](https://github.com/davinidae/umazing-musumengine/blob/214adb783384a11b15b86407e00e671feb1ec440/src/api/utils/api.util.ts#L8)

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
[api/utils/api.util.ts:10](https://github.com/davinidae/umazing-musumengine/blob/214adb783384a11b15b86407e00e671feb1ec440/src/api/utils/api.util.ts#L10)

##### cookies?

> `optional` **cookies**: `string`[]

Defined in:
[api/utils/api.util.ts:12](https://github.com/davinidae/umazing-musumengine/blob/214adb783384a11b15b86407e00e671feb1ec440/src/api/utils/api.util.ts#L12)

##### headers?

> `optional` **headers**: `Record`\<`string`, `string`\>

Defined in:
[api/utils/api.util.ts:11](https://github.com/davinidae/umazing-musumengine/blob/214adb783384a11b15b86407e00e671feb1ec440/src/api/utils/api.util.ts#L11)

##### statusCode

> **statusCode**: `number`

Defined in:
[api/utils/api.util.ts:9](https://github.com/davinidae/umazing-musumengine/blob/214adb783384a11b15b86407e00e671feb1ec440/src/api/utils/api.util.ts#L9)

#### Methods

##### execute()

> **execute**(): `object`

Defined in:
[api/utils/api.util.ts:19](https://github.com/davinidae/umazing-musumengine/blob/214adb783384a11b15b86407e00e671feb1ec440/src/api/utils/api.util.ts#L19)

Convert the response into a JSON HTTP response object. `body` is serialized to a JSON string.

###### Returns

`object`

###### body

> **body**: `string`

###### cookies

> **cookies**: `string`[]

###### headers

> **headers**: `Record`\<`string`, `string`\>

###### statusCode

> **statusCode**: `number`

## Functions

### getErrorMessage()

> **getErrorMessage**(`e`): `string`

Defined in:
[api/utils/api.util.ts:38](https://github.com/davinidae/umazing-musumengine/blob/214adb783384a11b15b86407e00e671feb1ec440/src/api/utils/api.util.ts#L38)

Extract a stable error message from unknown caught values.

#### Parameters

##### e

`unknown`

#### Returns

`string`
