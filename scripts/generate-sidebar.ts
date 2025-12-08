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
  ext?: string;
  children?: Entry[];
}

function isHidden(name: string) {
  // Hide dotfiles and sidebar control files; allow README.md in subfolders as index pages
  return name.startsWith('.') || name === '_Sidebar.md' || name === '_Sidebar';
}

function readTree(dir: string, base: string = ''): Entry[] {
  const items = fs.readdirSync(dir, { withFileTypes: true });
  const entries: Entry[] = [];
  for (const item of items) {
    const name = item.name;
    if (isHidden(name)) {
      continue;
    }
    const fullPath = path.join(dir, name);
    const rel = path.join(base, name);
    if (item.isDirectory()) {
      const children = readTree(fullPath, rel);
      entries.push({ name, relativePath: rel, isDir: true, children });
    } else {
      entries.push({
        name,
        relativePath: rel,
        isDir: false,
        ext: path.extname(name).toLowerCase(),
      });
    }
  }
  // Sort: dirs first, then files; alphabetical
  entries.sort((a, b) => {
    if (a.isDir !== b.isDir) {
      return a.isDir ? -1 : 1;
    }
    return a.name.localeCompare(b.name);
  });
  return entries;
}

function titleFromName(name: string) {
  return name.replace(/\.md$/i, '').replace(/[-_]/g, ' ');
}

function toWikiLink(relPath: string, name: string) {
  // GitHub Wiki links prefer spaces; encode nested paths with '/'
  const isMd = /\.md$/i.test(name);
  const display = isMd ? titleFromName(name) : name;
  const withoutExt = isMd ? relPath.replace(/\.md$/i, '') : relPath;
  // Replace backslashes on Windows
  const wikiTarget = withoutExt.split(path.sep).join('/');
  return `[${display}](${wikiTarget})`;
}

function renderEntries(entries: Entry[], depth = 0): string[] {
  const lines: string[] = [];
  for (const e of entries) {
    const isTopLevel = depth === 0;
    if (e.isDir) {
      // Ensure directory has an index README.md to link from summary
      try {
        const dirFullPath = path.join(DOCS_ROOT, e.relativePath);
        const indexPath = path.join(dirFullPath, 'README.md');
        if (!fs.existsSync(indexPath)) {
          const title = titleFromName(e.name);
          const childLinks = (e.children || [])
            .filter((c) => !c.isDir && c.name.toLowerCase().endsWith('.md'))
            .map((c) => `- ${toWikiLink(c.relativePath, c.name)}`);
          const indexLines = [`# ${title}`, '', '---', '', 'Contents:', ''];
          if (childLinks.length) {
            indexLines.push(...childLinks);
          } else {
            indexLines.push('- (no markdown pages yet)');
          }
          fs.writeFileSync(indexPath, indexLines.join('\n') + '\n', 'utf-8');
          console.log(`Created index README.md for ${e.relativePath}`);
        }
      } catch {
        //
      }

      const dirTitle = titleFromName(e.name);
      const readme = e.children?.find((c) => !c.isDir && c.name.toLowerCase() === 'readme.md');
      const summaryLabel = readme ? toWikiLink(readme.relativePath, dirTitle) : dirTitle;
      const openAttr = isTopLevel ? ' open' : '';
      lines.push(`<details${openAttr}><summary>${summaryLabel}</summary>`);
      const childEntries = (e.children || []).filter(
        (c) => !(readme && !c.isDir && c.name.toLowerCase() === 'readme.md'),
      );
      if (childEntries.length) {
        const childLines = renderEntries(childEntries, depth + 1);
        // Indent nested list items slightly for readability; preserve nested <details>
        lines.push(...childLines.map((l) => (l.startsWith('<') ? l : `  ${l}`)));
      }
      lines.push(`</details>`);
    } else {
      lines.push(`- ${toWikiLink(e.relativePath, e.name)}`);
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
      // Build a human-friendly UTC timestamp
      const now = new Date();
      const yyyy = now.getUTCFullYear();
      const mm = String(now.getUTCMonth() + 1).padStart(2, '0');
      const dd = String(now.getUTCDate()).padStart(2, '0');
      const hh = String(now.getUTCHours()).padStart(2, '0');
      const mi = String(now.getUTCMinutes()).padStart(2, '0');
      const ss = String(now.getUTCSeconds()).padStart(2, '0');
      const ts = `${yyyy}-${mm}-${dd} ${hh}:${mi}:${ss} UTC`;
      if (version) {
        const homeRaw = fs.readFileSync(HOME_PATH, 'utf-8');
        const lines = homeRaw.split(/\r?\n/);
        if (lines.length > 0) {
          // Replace first markdown H1 with version suffix, keeping existing title base
          const h1 = lines[0];
          if (/^#\s+/.test(h1)) {
            const baseTitle = h1.replace(/^#\s+/, '').replace(/\s+v\d+\.\d+\.\d+.*$/i, '');
            lines[0] = `# ${baseTitle} v${version} — ${ts}`;
            fs.writeFileSync(HOME_PATH, lines.join('\n'), 'utf-8');
            console.log(`Updated Home title with version v${version} at ${ts}`);
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
