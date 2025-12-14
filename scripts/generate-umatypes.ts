import fs from 'fs';
import path from 'path';

/**
 * Ensures a directory exists, creating any missing parent folders.
 * @param p Absolute or relative path to the directory
 */
export function ensureDir(p: string) {
  fs.mkdirSync(p, {
    recursive: true,
  });
}

/**
 * Convert a `_metadata.txt` filename into a PascalCase type name.
 * @param fileName Source metadata filename
 * @returns PascalCase type name (falls back to `Unnamed`)
 */
export function toTypeName(fileName: string) {
  const base = fileName.replace(/\.txt$/i, '');
  const cleaned = base.replace(/[^A-Za-z0-9]+/g, ' ').trim();
  const pascal = cleaned
    .split(/\s+/)
    .map((s) => {
      return s.charAt(0).toUpperCase() + s.slice(1);
    })
    .join('');
  return pascal || 'Unnamed';
}

/**
 * Read a text file and return non-empty trimmed lines.
 * @param filePath Path to the text file
 */
export function readLines(filePath: string): string[] {
  const raw = fs.readFileSync(filePath, 'utf-8');
  return raw
    .split(/\r?\n/)
    .map((l) => {
      return l.trim();
    })
    .filter((l) => l.length > 0);
}

/**
 * Map common .NET types found in metadata to TypeScript types.
 * @param type Raw .NET type string (e.g., `System.Int32`, `System.String[]`)
 * @returns A TypeScript type representation
 */
export function mapDotNetTypeToTs(type: string): string {
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

/**
 * Build a TypeScript type alias from `_metadata.txt` contents.
 *
 * Extracts `Field:` and `Type:` pairs; skips generation for empty types.
 * @param typeName Target type alias name
 * @param lines Metadata file lines
 * @returns Type alias string or null when empty
 */
export function writeTypeAliasFromMetadataToString(
  typeName: string,
  lines: string[],
): string | null {
  // Extract fields from metadata format
  const fields: {
    name: string;
    tsType: string;
  }[] = [];
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
      fields.push({
        name,
        tsType,
      });
    }
  }
  if (fields.length === 0) {
    const content = [`type ${typeName} = unknown;`, ''].join('\n');
    return content;
  }
  const content = [
    `type ${typeName} = {`,
    ...fields.map((f) => `  ${f.name}: ${f.tsType};`),
    `};`,
    '',
  ].join('\n');
  return content;
}

/**
 * Recursively walk the docs tree, collecting type alias blocks.
 *
 * Skips `method_dumps` and only processes `*_metadata.txt` files.
 * @param abs Absolute path of the directory to walk
 * @param typeBlocks Accumulator array for type strings
 * @returns The accumulator with collected type blocks
 */
export function walk(abs: string, typeBlocks: string[] = []) {
  const entries = fs.readdirSync(abs, {
    withFileTypes: true,
  });
  for (const e of entries) {
    const name = e.name;
    if (name.startsWith('.')) {
      continue;
    }
    const childAbs = path.join(abs, name);
    if (e.isDirectory()) {
      // Skip method_dumps folder entirely
      if (/^method_dumps$/i.test(name)) {
        continue;
      }
      walk(childAbs);
      continue;
    }
    if (!/\.txt$/i.test(name)) {
      continue;
    }
    // Only process *_metadata.txt files; skip all others
    if (!/_metadata\.txt$/i.test(name)) {
      continue;
    }
    const typeName = toTypeName(name.replace(/_metadata\.txt$/i, 'Metadata'));
    const lines = readLines(childAbs);
    const ts = writeTypeAliasFromMetadataToString(typeName, lines);
    if (!ts) {
      continue;
    }
    typeBlocks.push(ts);
  }
  return typeBlocks;
}

/**
 * Entrypoint: cleans destination and generates a single `src/umatypes/index.d.ts`.
 * Wraps all generated types inside `declare global { namespace Umatypes { ... } }`.
 */
export function mirrorTxtToTypes() {
  const DOCS_ROOT = path.resolve(process.cwd(), 'docs', 'umamusume_api_info', 'umamusume.Http');
  if (!fs.existsSync(DOCS_ROOT)) {
    console.error(`Source not found: ${DOCS_ROOT}`);
    process.exit(1);
  }
  // Cleanup destination to avoid collisions
  const SRC_ROOT = path.resolve(process.cwd(), 'src', 'umatypes');
  try {
    if (fs.existsSync(SRC_ROOT)) {
      fs.rmSync(SRC_ROOT, {
        recursive: true,
        force: true,
      });
    }
  } catch (err) {
    console.error(`Failed to clean destination ${SRC_ROOT}:`, err);
    process.exit(1);
  }
  ensureDir(SRC_ROOT);
  const typeBlocks = walk(DOCS_ROOT);
  const content = [
    `// Auto-generated from docs/umamusume_api_info/umamusume.Http by scripts/generate-umatypes.ts`,
    '',
    `declare global {\n  namespace Umatypes {`,
    '',
    ...typeBlocks,
    '',
    `  }\n}\n\nexport {};`,
    '',
  ].join('\n');
  const SINGLE_OUT_FILE = path.join(SRC_ROOT, 'index.d.ts');
  fs.writeFileSync(SINGLE_OUT_FILE, content, 'utf-8');
  console.log(`Generated ${path.relative(process.cwd(), SINGLE_OUT_FILE)}`);
}

mirrorTxtToTypes();
