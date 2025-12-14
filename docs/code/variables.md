# variables

## Variables

### DETERMINISTIC_ENC_SECRET

> `const` **DETERMINISTIC_ENC_SECRET**: `"co!=Y;(UQCGxJ_n82"` = `'co!=Y;(UQCGxJ_n82'`

Defined in:
[variables.ts:10](https://github.com/davinidae/umazing-musumengine/blob/6e889c47168575d8ae2f9ced4a2aa18401f7b187/src/variables.ts#L10)

ASCII secret used to deterministically derive the 32-byte AES-256 key for blob2 during development
and tests. In production, use a secure runtime secret.
