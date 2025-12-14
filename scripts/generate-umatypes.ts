import fs from 'fs';
import path from 'path';

const SRC_ROOT = path.resolve(process.cwd(), 'src', 'umatypes');
const DOCS_ROOT = path.resolve(process.cwd(), 'docs', 'umamusume_api_info', 'umamusume.Http');

function ensureDir(p: string) {
  fs.mkdirSync(p, { recursive: true });
}

function toTypeName(fileName: string) {
  const base = fileName.replace(/\.txt$/i, '');
  const cleaned = base.replace(/[^A-Za-z0-9]+/g, ' ').trim();
  const pascal = cleaned
    .split(/\s+/)
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join('');
  return pascal || 'Unnamed';
}

function readLines(filePath: string): string[] {
  const raw = fs.readFileSync(filePath, 'utf-8');
  return raw
    .split(/\r?\n/)
    .map((l) => l.trim())
    .filter((l) => l.length > 0);
}

function mapDotNetTypeToTs(type: string): string {
  // basic mappings
  const t = type.replace(/\s+/g, '').replace(/System\.Nullable<(.+)>/i, '$1');
  if (/System\.(Int32|Int64|UInt32|UInt64|Single|Double)/i.test(t)) {
    return 'number';
  }
  if (/System\.Boolean/i.test(t)) {
    return 'boolean';
  }
  if (/System\.String/i.test(t)) {
    return 'string';
  }
  if (/System\.Byte/i.test(t)) {
    return 'number';
  }
  if (/\[\]$/.test(t)) {
    return 'any[]';
  }
  if (/System\.Collections\.Generic\.List<.+>/i.test(t)) {
    return 'any[]';
  }
  return 'any';
}

function writeTypeAliasFromMetadata(targetPath: string, typeName: string, lines: string[]) {
  // Extract fields from metadata format
  const fields: Array<{ name: string; tsType: string }> = [];
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const fieldMatch = /^Field: (.+)$/.exec(line);
    if (fieldMatch) {
      const name = fieldMatch[1].trim();
      // next lines should include Type:
      let tsType = 'any';
      for (let j = i + 1; j < Math.min(lines.length, i + 5); j++) {
        const tMatch = /^Type: (.+)$/.exec(lines[j]);
        if (tMatch) {
          tsType = mapDotNetTypeToTs(tMatch[1].trim());
          break;
        }
      }
      fields.push({ name, tsType });
    }
  }
  if (fields.length === 0) {
    // Omit generating empty object types for cleaner output
    console.log(`Skipped empty type ${typeName} at ${path.relative(process.cwd(), targetPath)}`);
    return;
  }
  const content = [
    `// Auto-generated from docs/umamusume_api_info/umamusume.Http by scripts/generate-umatypes.ts`,
    `export type ${typeName} = {`,
    ...fields.map((f) => `  ${f.name}: ${f.tsType};`),
    `};`,
    '',
  ].join('\n');
  fs.writeFileSync(targetPath, content, 'utf-8');
}

function mirrorTxtToTypes() {
  if (!fs.existsSync(DOCS_ROOT)) {
    console.error(`Source not found: ${DOCS_ROOT}`);
    process.exit(1);
  }
  // Cleanup destination to avoid collisions
  try {
    if (fs.existsSync(SRC_ROOT)) {
      fs.rmSync(SRC_ROOT, { recursive: true, force: true });
    }
  } catch (err) {
    console.error(`Failed to clean destination ${SRC_ROOT}:`, err);
    process.exit(1);
  }
  ensureDir(SRC_ROOT);

  const walk = (abs: string, rel: string = '') => {
    const entries = fs.readdirSync(abs, { withFileTypes: true });
    for (const e of entries) {
      const name = e.name;
      if (name.startsWith('.')) {
        continue;
      }
      const childAbs = path.join(abs, name);
      const childRel = path.join(rel, name);
      if (e.isDirectory()) {
        // Skip method_dumps folder entirely
        if (/^method_dumps$/i.test(name)) {
          continue;
        }
        walk(childAbs, childRel);
      } else if (/\.txt$/i.test(name)) {
        // Only process *_metadata.txt files; skip all others
        if (/_metadata\.txt$/i.test(name)) {
          const outDir = path.join(SRC_ROOT, rel);
          ensureDir(outDir);
          const typeName = toTypeName(name.replace(/_metadata\.txt$/i, 'Metadata'));
          const outPath = path.join(outDir, `${typeName}.d.ts`);
          const lines = readLines(childAbs);
          writeTypeAliasFromMetadata(outPath, typeName, lines);
          console.log(`Generated ${path.relative(process.cwd(), outPath)}`);
        }
      }
    }
  };

  walk(DOCS_ROOT);
}

mirrorTxtToTypes();
