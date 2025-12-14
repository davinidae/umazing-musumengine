# variables

## Variables

### DETERMINISTIC_ENC_SECRET

> `const` **DETERMINISTIC_ENC_SECRET**: `"co!=Y;(UQCGxJ_n82"` = `'co!=Y;(UQCGxJ_n82'`

Defined in:
[variables.ts:10](https://github.com/davinidae/umazing-musumengine/blob/7c7f0885a1cd5e1f8e50683793a9a3c83de91334/src/variables.ts#L10)

ASCII secret used to deterministically derive the 32-byte AES-256 key for blob2 during development
and tests. In production, use a secure runtime secret.
