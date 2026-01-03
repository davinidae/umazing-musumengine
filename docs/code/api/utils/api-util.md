# api/utils/api.util

## Classes

### ApiResponse

Defined in:
[src/api/utils/api.util.ts:9](https://github.com/davinidae/umazing-musumengine/blob/b3f1e8e392a0fc341ec0633657c0dde131d6df19/src/api/utils/api.util.ts#L9)

ApiResponse.

Minimal API response wrapper used by API route handlers.

This mirrors the shape commonly used in Lambda/API-Gateway style handlers, but is also convenient
for the local Express adapter in `src/api/index.ts`.

#### Constructors

##### Constructor

> **new ApiResponse**(`statusCode`, `body`, `headers?`, `cookies?`): [`ApiResponse`](#apiresponse)

Defined in:
[src/api/utils/api.util.ts:18](https://github.com/davinidae/umazing-musumengine/blob/b3f1e8e392a0fc341ec0633657c0dde131d6df19/src/api/utils/api.util.ts#L18)

constructor.

###### Parameters

###### statusCode

`number`

Type: `number`.

###### body

`Record`\<`string`, `unknown`\>

Type: `Record<string, unknown>`.

###### headers?

`Record`\<`string`, `string`\>

Type: `Record<string, string> | undefined`.

###### cookies?

`string`[]

Type: `string[] | undefined`.

###### Returns

[`ApiResponse`](#apiresponse)

Type: `ApiResponse`.

#### Properties

##### body

> **body**: `Record`\<`string`, `unknown`\>

Defined in:
[src/api/utils/api.util.ts:20](https://github.com/davinidae/umazing-musumengine/blob/b3f1e8e392a0fc341ec0633657c0dde131d6df19/src/api/utils/api.util.ts#L20)

Type: `Record<string, unknown>`.

##### cookies?

> `optional` **cookies**: `string`[]

Defined in:
[src/api/utils/api.util.ts:22](https://github.com/davinidae/umazing-musumengine/blob/b3f1e8e392a0fc341ec0633657c0dde131d6df19/src/api/utils/api.util.ts#L22)

Type: `string[] | undefined`.

##### headers?

> `optional` **headers**: `Record`\<`string`, `string`\>

Defined in:
[src/api/utils/api.util.ts:21](https://github.com/davinidae/umazing-musumengine/blob/b3f1e8e392a0fc341ec0633657c0dde131d6df19/src/api/utils/api.util.ts#L21)

Type: `Record<string, string> | undefined`.

##### statusCode

> **statusCode**: `number`

Defined in:
[src/api/utils/api.util.ts:19](https://github.com/davinidae/umazing-musumengine/blob/b3f1e8e392a0fc341ec0633657c0dde131d6df19/src/api/utils/api.util.ts#L19)

Type: `number`.

#### Methods

##### execute()

> **execute**(): `object`

Defined in:
[src/api/utils/api.util.ts:33](https://github.com/davinidae/umazing-musumengine/blob/b3f1e8e392a0fc341ec0633657c0dde131d6df19/src/api/utils/api.util.ts#L33)

execute.

Convert the response into a JSON HTTP response object. `body` is serialized to a JSON string.

###### Returns

`object`

Type: `{ statusCode: number; headers: Record<string, string>; cookies: string[]; body: string; }`.

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
[src/api/utils/api.util.ts:59](https://github.com/davinidae/umazing-musumengine/blob/b3f1e8e392a0fc341ec0633657c0dde131d6df19/src/api/utils/api.util.ts#L59)

getErrorMessage.

Extract a stable error message from unknown caught values.

#### Parameters

##### e

`unknown`

Type: `unknown`.

#### Returns

`string`

Type: `string`.
