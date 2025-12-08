# variables

## Variables

### DETERMINISTIC\_ENC\_SECRET

> `const` **DETERMINISTIC\_ENC\_SECRET**: `"co!=Y;(UQCGxJ_n82"` = `'co!=Y;(UQCGxJ_n82'`

Defined in: [variables.ts:10](https://github.com/davinidae/umazing-musumengine/blob/c68a73a1f9fb9bbc643590478b70f489021a8c96/src/variables.ts#L10)

ASCII secret used to deterministically derive the 32-byte AES-256 key for blob2
during development and tests. In production, use a secure runtime secret.
