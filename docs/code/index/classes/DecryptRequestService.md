[**umazing-musumengine**](../../README.md)

***

# Class: DecryptRequestService

Defined in: [decrypt/request.service.ts:17](https://github.com/davinidae/umazing-musumengine/blob/e099ae72d04c46726039e2dd238802d266be3d5f/src/decrypt/request.service.ts#L17)

## Constructors

### Constructor

> **new DecryptRequestService**(`inRoot`, `options`): `DecryptRequestService`

Defined in: [decrypt/request.service.ts:19](https://github.com/davinidae/umazing-musumengine/blob/e099ae72d04c46726039e2dd238802d266be3d5f/src/decrypt/request.service.ts#L19)

#### Parameters

##### inRoot

`string` = `'decrypt/input'`

##### options

[`ServiceOptions`](../interfaces/ServiceOptions.md) = `{}`

#### Returns

`DecryptRequestService`

## Methods

### execute()

> **execute**(): `Promise`\<`number`\>

Defined in: [decrypt/request.service.ts:31](https://github.com/davinidae/umazing-musumengine/blob/e099ae72d04c46726039e2dd238802d266be3d5f/src/decrypt/request.service.ts#L31)

Scan decrypt/input for request.txt and write decoded.bin and decoded.json
under decrypt/output mirroring the input layout.

#### Returns

`Promise`\<`number`\>

Process exit code (0).
