import fs from 'fs';
import path from 'path';

const DOCS_ROOT = path.resolve(process.cwd(), 'docs');
const TARGET_DIRS = [
  path.join(DOCS_ROOT, 'code'),
  path.join(DOCS_ROOT, 'scripts'),
  path.join(DOCS_ROOT, 'umamusume_api_info'),
];

type RenameMap = Map<string, string>; // oldAbs -> newAbs

function isMarkdown(file: string) {
  return file.toLowerCase().endsWith('.md');
}

function normalizeBaseName(base: string) {
  // Normalize: replace spaces and dots with hyphens, collapse repeats
  const noExt = base.replace(/\.md$/i, '');
  const normalized = noExt.replace(/\s+/g, '-').replace(/\.+/g, '-').replace(/-+/g, '-');
  return normalized + '.md';
}

function walk(dir: string): string[] {
  if (!fs.existsSync(dir)) {
    return [];
  }
  const out: string[] = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    const abs = path.join(dir, e.name);
    if (e.isDirectory()) {
      out.push(...walk(abs));
      continue;
    }
    if (isMarkdown(e.name)) {
      out.push(abs);
      continue;
    }
  }
  return out;
}

function buildRenameMap(): RenameMap {
  const map: RenameMap = new Map();
  for (const target of TARGET_DIRS) {
    for (const file of walk(target)) {
      const dir = path.dirname(file);
      const base = path.basename(file);
      const next = normalizeBaseName(base);
      if (next === base) {
        continue;
      }
      const newAbs = path.join(dir, next);
      map.set(file, newAbs);
    }
  }
  return map;
}

function applyRenames(map: RenameMap) {
  // Avoid collisions: if target exists, remove it first
  for (const [, newAbs] of map) {
    if (!fs.existsSync(newAbs)) {
      continue;
    }
    fs.unlinkSync(newAbs);
  }
  for (const [oldAbs, newAbs] of map) {
    fs.renameSync(oldAbs, newAbs);
    console.log(
      `Renamed ${path.relative(DOCS_ROOT, oldAbs)} -> ${path.relative(DOCS_ROOT, newAbs)}`,
    );
  }
}

function updateReferences(map: RenameMap) {
  if (map.size === 0) {
    return;
  }
  const allMd = walk(DOCS_ROOT);
  // Build quick lookup for replacements using relative paths from DOCS_ROOT
  const replacements: Array<{ from: string; to: string }> = [];
  for (const [oldAbs, newAbs] of map) {
    const oldRel = path.relative(DOCS_ROOT, oldAbs).split(path.sep).join('/');
    const newRel = path.relative(DOCS_ROOT, newAbs).split(path.sep).join('/');
    replacements.push({ from: oldRel, to: newRel });
  }
  for (const file of allMd) {
    let contents = fs.readFileSync(file, 'utf-8');
    let changed = false;
    for (const { from, to } of replacements) {
      if (!contents.includes(from)) {
        continue;
      }
      const re = new RegExp(from.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
      contents = contents.replace(re, to);
      changed = true;
    }
    if (!changed) {
      continue;
    }
    fs.writeFileSync(file, contents, 'utf-8');
    console.log(`Updated links in ${path.relative(DOCS_ROOT, file)}`);
  }
}

function main() {
  const renameMap = buildRenameMap();
  if (renameMap.size === 0) {
    console.log('No doc files need normalization');
    return;
  }
  applyRenames(renameMap);
  updateReferences(renameMap);
}

main();
