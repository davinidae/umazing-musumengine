/**
 * Convert JSON-friendly representations into runtime shapes.
 * - Recognizes strings prefixed with "base64:" and converts them to Buffers.
 * - Recursively processes arrays and objects.
 * @param value Any JSON-like value.
 * @returns Value with Buffers reconstructed where applicable.
 */
export function fromJsonFriendly(value: any): any {
  if (Array.isArray(value)) {
    return value.map(fromJsonFriendly);
  }
  if (value && typeof value === 'object') {
    const out: Record<string, any> = {};
    for (const [k, v] of Object.entries(value)) {
      out[k] = fromJsonFriendly(v);
    }
    return out;
  }
  if (typeof value === 'string' && value.startsWith('base64:')) {
    return Buffer.from(value.slice('base64:'.length), 'base64');
  }
  return value;
}

/**
 * Convert Buffers/Uint8Arrays to UTF-8 strings when possible; otherwise to base64 strings.
 * Recurses into arrays and objects, and stringifies Buffer keys to stable string keys.
 * @param value Arbitrary value possibly containing Buffers.
 * @returns JSON-compatible representation.
 */
export function toJsonCompatible(value: any): any {
  if (value && typeof value === 'object' && !Buffer.isBuffer(value)) {
    if (Array.isArray(value)) {
      return value.map((v) => {
        return toJsonCompatible(v);
      });
    }
    const out: Record<string, any> = {};
    for (const [k, v] of Object.entries(value)) {
      out[String(toJsonCompatible(k))] = toJsonCompatible(v);
    }
    return out;
  }
  if (Buffer.isBuffer(value) || value instanceof Uint8Array) {
    const b = Buffer.from(value as Uint8Array);
    try {
      return b.toString('utf-8');
    } catch {
      return 'base64:' + b.toString('base64');
    }
  }
  return value;
}
