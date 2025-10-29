[**umazing-musumengine**](../../README.md)

***

# Function: encryptAes256Cbc()

> **encryptAes256Cbc**(`dataPadded`, `key`, `iv`): `Buffer`

Defined in: [shared/encrypt.util.ts:13](https://github.com/davinidae/umazing-musumengine/blob/e099ae72d04c46726039e2dd238802d266be3d5f/src/shared/encrypt.util.ts#L13)

AES-256-CBC encrypt without auto-PKCS#7 padding (data must already be padded).

## Parameters

### dataPadded

`Buffer`

Input data with PKCS#7 padding applied.

### key

`Buffer`

32-byte AES key.

### iv

`Buffer`

16-byte initialization vector.

## Returns

`Buffer`

Ciphertext Buffer.
