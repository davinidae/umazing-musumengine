# lib/shared/encrypt.util

## Functions

### encryptAes256Cbc()

> **encryptAes256Cbc**(`dataPadded`, `key`, `iv`): `Buffer`

Defined in:
[lib/shared/encrypt.util.ts:13](https://github.com/davinidae/umazing-musumengine/blob/57e727b3c2cba8f6b015598291ecad23e61d967f/src/lib/shared/encrypt.util.ts#L13)

AES-256-CBC encrypt without auto-PKCS#7 padding (data must already be padded).

#### Parameters

##### dataPadded

`Buffer`

Input data with PKCS#7 padding applied.

##### key

`Buffer`

32-byte AES key.

##### iv

`Buffer`

16-byte initialization vector.

#### Returns

`Buffer`

Ciphertext Buffer.
