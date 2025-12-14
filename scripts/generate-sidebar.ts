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

type Node = {
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
  const isMd = /\.md$/i.test(name);
  const target = rel.split(path.sep).join('/');
  // For wiki pages (Markdown), strip extension and replace spaces with hyphens for stable routing
  // For non-Markdown files, percent-encode spaces and reserved characters
  const pageTarget = isMd
    ? target.replace(/\.md$/i, '').replace(/\s+/g, '-')
    : encodeURI(target).replace(/#/g, '%23');
  // GitHub Wiki expects wiki page links without './' and without extensions.
  // Prefix './' only for non-Markdown assets to keep them relative.
  const href = isMd ? pageTarget : pageTarget.startsWith('./') ? pageTarget : `./${pageTarget}`;
  return `[${name}](${href})`;
}

/**
 * Render the sidebar tree into Markdown with collapsible sections.
 *
 * @param nodes Tree nodes to render
 * @param depth Current recursion depth (top-level opens by default)
 */
export function render(nodes: Node[], depth = 0): string[] {
  const lines: string[] = [];
  for (const n of nodes) {
    const top = depth === 0;
    if (n.dir) {
      const open = top ? ' open' : '';
      lines.push(`<details${open}><summary>${n.name}</summary>`);
      lines.push('');
      if (n.children && n.children.length) {
        lines.push(...render(n.children, depth + 1));
      }
      // Close details, then add two blank lines to ensure Markdown list links render correctly
      lines.push('');
      lines.push(`</details>`);
      lines.push('');
    } else {
      const item = `- ${link(n.rel, n.name)}`;
      // Slight left margin for nested file items using non-breaking spaces
      lines.push(item);
      lines.push('');
    }
  }
  return lines;
}

/**
 * Entrypoint: generates `docs/_Sidebar.md` from the contents of `docs/`.
 */
export function generate() {
  if (!fs.existsSync(DOCS_ROOT)) {
    console.error('docs folder not found');
    process.exit(1);
  }
  const tree = read(DOCS_ROOT);
  const out: string[] = [];
  out.push('<!-- Auto-generated from /docs by scripts/generate-sidebar.ts -->');
  out.push('');
  out.push(...render(tree));
  fs.writeFileSync(SIDEBAR_PATH, out.join('\n').replace(/\n\n\n/g, '\n\n') + '\n', 'utf-8');
  console.log(`Generated ${SIDEBAR_PATH}`);
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
      'This wiki contains documentation generated from the Umamusume API information.',
      '',
      'See the [Sidebar](./_Sidebar) for available topics.',
      '',
    ].join('\n'),
    'utf-8',
  );
  console.log(`Generated ${HOME_PATH}`);
}

generate();
