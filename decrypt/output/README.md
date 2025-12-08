# decrypt/output

This folder will contain per-input subfolders with automatic outputs (from batch decrypt), mirrored
by pack and file:

- `decrypt/output/<pack>/<file>/decoded.bin` — raw decrypted bytes
- `decrypt/output/<pack>/<file>/decoded.json` — combined JSON: `{ blob1: { ...}, blob2: <payload> }`

Notes

- The output paths are chosen automatically; no extra arguments are needed.
- This directory keeps only this README under version control; everything else is ignored by
  `.gitignore`.
- The `decoded.bin` and `decoded.json` files are generated automatically inside
  `decrypt/output/<pack>/<file>/`.
- To rebuild, copy the relevant `decoded.json` to `encrypt/input/` (any subfolder). Then run
  `npx tsx src/cli.ts encrypt build` and find results mirrored under `encrypt/output/`.
