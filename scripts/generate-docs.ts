import fs from 'fs';
import path from 'path';
import packageJson from '../package.json';

export const DOCS_ROOT = path.resolve(process.cwd(), 'docs');
export const SIDEBAR_PATH = path.join(DOCS_ROOT, '_Sidebar.md');
export const HOME_PATH = path.join(DOCS_ROOT, 'README.md');

/**
 * Returns whether a docs entry should be hidden from the sidebar.
 *
 * @param name Filename or directory name
 */
export function isHidden(name: string) {
  return name.startsWith('.') || name === '_Sidebar.md' || name === '_Sidebar';
}

/**
 * Tree node representing a file or directory under `docs/`.
 */
export type Node = {
  name: string;
  rel: string;
  dir: boolean;
  children?: Node[];
};

/**
 * Recursively reads the docs directory into a tree of nodes.
 *
 * @param dirAbs Absolute path to the directory to read
 * @param relBase Relative path base used to compute links
 */
export function read(dirAbs: string, relBase = ''): Node[] {
  const items = fs.readdirSync(dirAbs, {
    withFileTypes: true,
  });
  const out: Node[] = [];
  for (const it of items) {
    const name = it.name;
    if (isHidden(name)) {
      continue;
    }
    const childAbs = path.join(dirAbs, name);
    const childRel = path.join(relBase, name);
    if (it.isDirectory()) {
      out.push({
        name,
        rel: childRel,
        dir: true,
        children: read(childAbs, childRel),
      });
    } else {
      out.push({
        name,
        rel: childRel,
        dir: false,
      });
    }
  }
  return out.sort((a, b) => {
    return a.dir === b.dir ? a.name.localeCompare(b.name) : a.dir ? -1 : 1;
  });
}

/**
 * Create a GitHub Wiki compatible Markdown link for a file.
 *
 * - For Markdown: strip extension and replace spaces with hyphens
 * - For others: URL-encode reserved characters
 *
 * @param rel Relative path from docs root
 * @param name Display name
 */
export function link(rel: string, name: string) {
  const title = name.replace(/\\/g, '/');
  const ref = rel.replace(/\\/g, '/');
  return `[[${ref}|${title}]]`;
}

/**
 * Render the sidebar tree into Markdown with collapsible sections.
 *
 * @param nodes Tree nodes to render
 * @param depth Current recursion depth (top-level opens by default)
 */
export function render(nodes: Node[], depth = 0): string[] {
  const lines: string[] = [];
  const marginLeft = depth * 16; // px margin per depth level
  lines.push(`<ul style="list-style-type: disc; margin-left: ${marginLeft}px; padding-left: 0;">`);
  for (const n of nodes) {
    if (n.dir) {
      const open = depth === 0 ? ' open' : '';
      lines.push(
        `<li style="margin: 4px 0;">` +
          `<details${open} style="margin-left: 8px;">` +
          `<summary>${n.name}</summary>`,
      );
      if (n.children && n.children.length) {
        lines.push(...render(n.children, depth + 1));
      }
      lines.push(`</details>`);
      lines.push(`</li>`);
      continue;
    }
    lines.push('');
    lines.push(`- ${link(n.rel, n.name)}`);
    lines.push('');
  }
  lines.push(`</ul>`);
  return lines;
}

function generateSidebar() {
  const tree = read(DOCS_ROOT);
  const renders = render(tree);
  fs.writeFileSync(
    SIDEBAR_PATH,
    ['<!-- Auto-generated from /docs by scripts/generate-docs.ts -->', '', ...renders]
      .join('\n')
      .replace(/\n\n\n/g, '\n\n') + '\n',
    'utf-8',
  );
  console.log(`Generated ${SIDEBAR_PATH}`);
}

function generateHome() {
  const date = new Date().toISOString().replace('T', ' ').replace('Z', '').replace(/\.\d+/, '');
  fs.writeFileSync(
    HOME_PATH,
    [
      `# Umazing Musumengine`,
      '',
      `Version ${packageJson.version}`,
      '',
      `Generated: ${date}`,
      '',
      'This wiki contains project documentation and generated API references.',
      '',
      'Start here:',
      '',
      '- [usage](./usage) — how to use the CLI and library',
      '- [publishing](./publishing) — how to publish to npm (manual + GitHub Actions)',
      '- [code](./code) — TypeDoc reference for the TypeScript sources under src/',
      '- [scripts](./scripts) — TypeDoc reference for the repository scripts/',
      '- [umamusume_api_info](./umamusume_api_info) — upstream research notes and dumps',
      '',
      'See the [Sidebar](./_Sidebar) for all topics.',
      '',
    ].join('\n'),
    'utf-8',
  );
  console.log(`Generated ${HOME_PATH}`);
}

function generateFooter() {
  const footerPath = path.join(DOCS_ROOT, '_Footer.md');
  fs.writeFileSync(
    footerPath,
    [`---`, ``, `*Parts of this wiki are auto-generated (TypeDoc + docs scripts).*`].join('\n'),
    'utf-8',
  );
  console.log(`Generated ${footerPath}`);
}

/**
 * Entrypoint: generates `docs/_Sidebar.md` from the contents of `docs/`.
 */
export function generate() {
  if (!fs.existsSync(DOCS_ROOT)) {
    console.error('docs folder not found');
    process.exit(1);
  }
  generateSidebar();
  generateHome();
  generateFooter();
}

generate();
