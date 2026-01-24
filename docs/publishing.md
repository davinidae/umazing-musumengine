# Publishing

This repository is set up to publish to npm.

## Manual publish

One-time login:

```bash
npm login
```

Preview what will be included:

```bash
npm pack --dry-run
```

Publish:

```bash
npm publish
```

Notes:

- npm requires a new version for every publish: `npm version patch|minor|major`.
- `prepack` runs `npm run build`, so the published tarball contains `dist/`.
- If the package name is scoped (`@scope/name`), you may need `npm publish --access public`.

## GitHub Actions publish

The repo includes a workflow that publishes on version tags:

- Tag format: `vX.Y.Z` (example: `v2.0.1`)
- Secret required: `NPM_TOKEN` (npm “Automation” access token)

Typical flow:

```bash
npm version patch
git push --follow-tags
```

The workflow runs `npm ci`, `npm test`, then `npm publish`.

If the workflow fails with `need auth`, it usually means the `NPM_TOKEN` secret is missing/empty or
the token is not an npm “Automation” token. The workflow runs `npm whoami` as an auth preflight to
fail early with a clearer error.
