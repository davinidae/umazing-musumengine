# variables

## Variables

### DETERMINISTIC_ENC_SECRET

> `const` **DETERMINISTIC_ENC_SECRET**: `"co!=Y;(UQCGxJ_n82"` = `'co!=Y;(UQCGxJ_n82'`

Defined in:
[variables.ts:10](https://github.com/davinidae/umazing-musumengine/blob/3cc198efe37a04206371563dec0203f3801b1b85/src/variables.ts#L10)

ASCII secret used to deterministically derive the 32-byte AES-256 key for blob2 during development
and tests. In production, use a secure runtime secret.
