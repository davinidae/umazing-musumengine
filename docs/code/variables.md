# variables

## Variables

### DETERMINISTIC\_ENC\_SECRET

> `const` **DETERMINISTIC\_ENC\_SECRET**: `"co!=Y;(UQCGxJ_n82"` = `'co!=Y;(UQCGxJ_n82'`

Defined in: [variables.ts:10](https://github.com/davinidae/umazing-musumengine/blob/0dadd17e275bf39d38955421a68fc77ce3bc77e4/src/variables.ts#L10)

ASCII secret used to deterministically derive the 32-byte AES-256 key for blob2
during development and tests. In production, use a secure runtime secret.
