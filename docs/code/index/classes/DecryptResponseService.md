[**umazing-musumengine**](../../README.md)

***

# Class: DecryptResponseService

Defined in: [decrypt/response.service.ts:17](https://github.com/davinidae/umazing-musumengine/blob/e099ae72d04c46726039e2dd238802d266be3d5f/src/decrypt/response.service.ts#L17)

## Constructors

### Constructor

> **new DecryptResponseService**(`inRoot`, `options`): `DecryptResponseService`

Defined in: [decrypt/response.service.ts:19](https://github.com/davinidae/umazing-musumengine/blob/e099ae72d04c46726039e2dd238802d266be3d5f/src/decrypt/response.service.ts#L19)

#### Parameters

##### inRoot

`string` = `'decrypt/input'`

##### options

[`ServiceOptions`](../interfaces/ServiceOptions.md) = `{}`

#### Returns

`DecryptResponseService`

## Methods

### execute()

> **execute**(): `Promise`\<`number`\>

Defined in: [decrypt/response.service.ts:31](https://github.com/davinidae/umazing-musumengine/blob/e099ae72d04c46726039e2dd238802d266be3d5f/src/decrypt/response.service.ts#L31)

Scan decrypt/input for response.txt, find the matching request.txt in the same folder,
and write decoded.bin and decoded.json under decrypt/output mirroring the layout.

#### Returns

`Promise`\<`number`\>

Process exit code (0).
