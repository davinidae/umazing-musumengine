# Umazing Musumengine Wiki Home v1.0.3 — 2025-12-08 19:34:26 UTC

Welcome to the Umazing Musumengine wiki. This project provides TypeScript tools for working with
UmaMusume data, including AES-256-CBC decrypt/encrypt helpers, a runtime client, and CLI utilities.

Use the sidebar to navigate all sections. Highlights below:

## Before You Continue

This project is not intended to harm Cygames, their products, or players. If these tools negatively
affect you or someone you know, please open an issue and the repository will be privatized.

Original research credit: user racsonaht at UnknownCheats; see
`docs/umamusume_api_info/ORIGINAL.md`.

## Getting Started

- Requirements: Node.js 18+ and npm
- Install dependencies:

```powershell
npm install
```

- CLI (development, TS sources):

```powershell
npm run cli -- --help
npm run cli -- decrypt all
npm run cli -- encrypt build
```

- Bundled CLI (after build):

```powershell
npm run build
node dist/cli.bundle.js --help
```

## Project Overview

- Goals: Safe decrypt/encrypt, documented API endpoints, reproducible tooling
- Tech: Node.js 18+, TypeScript 5, Vitest, TypeDoc
- Repo: https://github.com/davinidae/umazing-musumengine

## Workflows

- Formatting: Prettier, ESLint
- Tests: `npm run test`, unit/integration targets available
- Docs generation: `npm run docs` (TypeDoc + auto `_Sidebar.md`)

## Contributing

- See `CONTRIBUTING.md` in the repository for guidelines
- Please run `npm run precommit` locally before PRs

## License

- MIT — see `LICENSE`

## Links

- Issues: https://github.com/davinidae/umazing-musumengine/issues
- Releases: https://github.com/davinidae/umazing-musumengine/releases
