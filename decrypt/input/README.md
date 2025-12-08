# decrypt/input

Organize your captures as packs: create subfolders under this directory and place fixed filenames
inside each pack:

- request.txt — Base64 of the full request body (4-byte length prefix + blob1 + blob2).
- response.txt — Base64 of the response body (blob2 only).

Notes

- It can be one line or multiple; the script compacts whitespace and adds padding if needed.
- Do not include quotes, `0x`, or JSON; only the Base64 string.
- The tools scan all subfolders and process any request.txt/response.txt found. Responses derive the
  UDID from their sibling request.txt.
- The examples included in this directory are for demonstration only.

Tip

- Need sample files quickly? Generate example fixtures with the seeding script:

```powershell
npm run seed:example
```

This creates `decrypt/input/example/request.txt` and `decrypt/input/example/response.txt` you can
use to try the decrypt commands and run integration tests.
