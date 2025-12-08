# encrypt/output

This directory receives Base64 requests produced by the builder, mirroring the folder structure
under `encrypt/input`.

Example

```powershell
# Process all encrypt/input/**/decoded.json and write built files to encrypt/output/**/built.b64
python umamusume_cli.py encrypt build
```

Notes

- This directory keeps only this README in the repository; everything else is ignored by
  `.gitignore`.
