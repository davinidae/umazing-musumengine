import fs from 'fs';
import path from 'path';

const DOCS_ROOT = path.resolve(process.cwd(), 'docs');
const SIDEBAR_PATH = path.join(DOCS_ROOT, '_Sidebar.md');

function isHidden(name: string) {
  return name.startsWith('.') || name === '_Sidebar.md' || name === '_Sidebar';
}

type Node = { name: string; rel: string; dir: boolean; children?: Node[] };

function read(dirAbs: string, relBase = ''): Node[] {
  const items = fs.readdirSync(dirAbs, { withFileTypes: true });
  const out: Node[] = [];
  for (const it of items) {
    const name = it.name;
    if (isHidden(name)) {
      continue;
    }
    const childAbs = path.join(dirAbs, name);
    const childRel = path.join(relBase, name);
    if (it.isDirectory()) {
      out.push({ name, rel: childRel, dir: true, children: read(childAbs, childRel) });
    } else {
      out.push({ name, rel: childRel, dir: false });
    }
  }
  out.sort((a, b) => (a.dir === b.dir ? a.name.localeCompare(b.name) : a.dir ? -1 : 1));
  return out;
}

function link(rel: string, name: string) {
  const target = rel.split(path.sep).join('/');
  return `[${name}](${target})`;
}

function render(nodes: Node[], depth = 0): string[] {
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
      lines.push(`- ${link(n.rel, n.name)}`);
    }
  }
  return lines;
}

function generate() {
  if (!fs.existsSync(DOCS_ROOT)) {
    console.error('docs folder not found');
    process.exit(1);
  }
  const tree = read(DOCS_ROOT);
  const out: string[] = [];
  out.push('<!-- Auto-generated from /docs by scripts/generate-sidebar.ts -->');
  out.push('');
  out.push(...render(tree));
  fs.writeFileSync(SIDEBAR_PATH, out.join('\n') + '\n', 'utf-8');
  console.log(`Generated ${SIDEBAR_PATH}`);
}

generate();
