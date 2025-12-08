import fs from 'fs';
import path from 'path';

const DOCS_ROOT = path.resolve(process.cwd(), 'docs');
const SIDEBAR_PATH = path.join(DOCS_ROOT, '_Sidebar.md');
const HOME_PATH = path.join(DOCS_ROOT, 'README.md');
const PKG_PATH = path.resolve(process.cwd(), 'package.json');

interface Entry {
  name: string;
  relativePath: string;
  isDir: boolean;
  children?: Entry[];
}

function isHidden(name: string) {
  return (
    name.startsWith('.') || name === '_Sidebar.md' || name === 'README.md' || name === '_Sidebar'
  );
}

function readTree(dir: string, base: string = ''): Entry[] {
  const items = fs.readdirSync(dir, { withFileTypes: true });
  const entries: Entry[] = [];
  for (const item of items) {
    const name = item.name;
    if (isHidden(name)) {
      continue;
    }
    const full = path.join(dir, name);
    const rel = path.join(base, name);
    if (item.isDirectory()) {
      const children = readTree(full, rel);
      entries.push({ name, relativePath: rel, isDir: true, children });
    } else if (name.toLowerCase().endsWith('.md')) {
      entries.push({ name, relativePath: rel, isDir: false });
    }
  }
  // Sort: folders first alphabetically, then files alphabetically
  entries.sort((a, b) => {
    if (a.isDir !== b.isDir) {
      return a.isDir ? -1 : 1;
    }
    return a.name.localeCompare(b.name, undefined, { numeric: true, sensitivity: 'base' });
  });
  return entries;
}

function titleFromName(name: string) {
  return name.replace(/\.md$/i, '').replace(/[-_]/g, ' ');
}

function toWikiLink(relPath: string, name: string) {
  // GitHub Wiki links prefer spaces; encode nested paths with '/'
  const display = titleFromName(name);
  const withoutExt = relPath.replace(/\.md$/i, '');
  // Replace backslashes on Windows
  const wikiTarget = withoutExt.split(path.sep).join('/');
  return `[${display}](${wikiTarget})`;
}

function renderEntries(entries: Entry[], depth = 0): string[] {
  const lines: string[] = [];
  for (const e of entries) {
    const indent = '  '.repeat(depth);
    if (e.isDir) {
      lines.push(`${indent}- ${titleFromName(e.name)}`);
      if (e.children && e.children.length) {
        lines.push(...renderEntries(e.children, depth + 1));
      }
    } else {
      lines.push(`${indent}- ${toWikiLink(e.relativePath, e.name)}`);
    }
  }
  return lines;
}

function generateSidebar() {
  if (!fs.existsSync(DOCS_ROOT)) {
    console.error(`docs folder not found at ${DOCS_ROOT}`);
    process.exit(1);
  }
  // Update Home title with version (from package.json) if available
  try {
    if (fs.existsSync(PKG_PATH) && fs.existsSync(HOME_PATH)) {
      const pkgRaw = fs.readFileSync(PKG_PATH, 'utf-8');
      const pkg = JSON.parse(pkgRaw || '{}');
      const version: string | undefined = pkg.version;
      if (version) {
        const homeRaw = fs.readFileSync(HOME_PATH, 'utf-8');
        const lines = homeRaw.split(/\r?\n/);
        if (lines.length > 0) {
          // Replace first markdown H1 with version suffix, keeping existing title base
          const h1 = lines[0];
          if (/^#\s+/.test(h1)) {
            const baseTitle = h1.replace(/^#\s+/, '').replace(/\s+v\d+\.\d+\.\d+$/i, '');
            lines[0] = `# ${baseTitle} v${version}`;
            fs.writeFileSync(HOME_PATH, lines.join('\n'), 'utf-8');
            console.log(`Updated Home title with version v${version}`);
          }
        }
      }
    }
  } catch (e) {
    console.warn('Could not update Home title with version:', e);
  }
  const tree = readTree(DOCS_ROOT);
  const lines: string[] = [];
  lines.push('<!-- Auto-generated from /docs by scripts/generate-sidebar.ts -->');
  lines.push('');
  lines.push(...renderEntries(tree));
  const content = lines.join('\n') + '\n';
  fs.writeFileSync(SIDEBAR_PATH, content, 'utf-8');
  console.log(`Generated ${SIDEBAR_PATH}`);
}

generateSidebar();
