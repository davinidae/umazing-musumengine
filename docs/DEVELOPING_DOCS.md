# API docs (Markdown)

This project uses TypeDoc with a Markdown theme to generate API docs as Markdown files from the JSDoc in `src/`.

## Generate locally

- Install dev deps (first time):
  - npm install
- Build the docs:
  - npm run docs
- Output will be written to `docs/code` as Markdown files that render nicely on GitHub.

## Publish via GitHub Pages (optional)

If you want a public docs site, enable GitHub Pages and set the source to the repository docs folder:

1. In repo Settings → Pages, set Source to “Deploy from a branch”
   - Branch: `main` (or your default branch)
   - Folder: `/docs`
2. The docs workflow (`.github/workflows/docs.yml`) will generate Markdown into `docs/code` on pushes to `main` and commit them.
3. GitHub Pages will render Markdown under `https://your-username.github.io/repo-name/code/`.

Notes:

- The CI workflow runs typecheck, lint, and tests on push/PR.
- If you prefer HTML instead, switch TypeDoc theme and plugin in `typedoc.json` (but current setup is Markdown-only).
