/**
 * Convert JSON-friendly representations into runtime shapes.
 * - Recognizes strings prefixed with "base64:" and converts them to Buffers.
 * - Recursively processes arrays and objects.
 * @param value Any JSON-like value.
 * @returns Value with Buffers reconstructed where applicable.
 */
/**
 * fromJsonFriendly.
 * @param value - Type: `unknown`.
 * @returns Type: `unknown`.
 */
export function fromJsonFriendly(value: unknown): unknown {
  if (Buffer.isBuffer(value)) {
    return value;
  }
  if (value instanceof Uint8Array) {
    return Buffer.from(value);
  }
  if (Array.isArray(value)) {
    return value.map(fromJsonFriendly);
  }
  if (value && typeof value === 'object') {
    /**
     * out.
     * @remarks Type: `Record<string, unknown>`.
     * @defaultValue `{}`
     */
    const out: Record<string, unknown> = {};
    /**
     * [k, v].
     * @remarks Type: `[string, any]`.
     */
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
/**
 * toJsonCompatible.
 * @param value - Type: `unknown`.
 * @returns Type: `unknown`.
 */
export function toJsonCompatible(value: unknown): unknown {
  if (value && typeof value === 'object' && !Buffer.isBuffer(value)) {
    if (Array.isArray(value)) {
      return value.map((v) => {
        return toJsonCompatible(v);
      });
    }
    /**
     * out.
     * @remarks Type: `Record<string, unknown>`.
     * @defaultValue `{}`
     */
    const out: Record<string, unknown> = {};
    /**
     * [k, v].
     * @remarks Type: `[string, any]`.
     */
    for (const [k, v] of Object.entries(value)) {
      out[String(toJsonCompatible(k))] = toJsonCompatible(v);
    }
    return out;
  }
  if (Buffer.isBuffer(value) || value instanceof Uint8Array) {
    /**
     * b.
     * @remarks Type: `Buffer<ArrayBuffer>`.
     * @defaultValue `Buffer.from(value)`
     */
    const b = Buffer.from(value);
    /**
     * s.
     *
     * Decode to UTF-8 string and verify round-trip fidelity; if bytes change, it's not safe text.
     *
     * @remarks Type: `string`.
     * @defaultValue `b.toString('utf-8')`
     */
    const s = b.toString('utf-8');
    /**
     * roundtrip.
     * @remarks Type: `Buffer<ArrayBuffer>`.
     * @defaultValue `Buffer.from(s, 'utf-8')`
     */
    const roundtrip = Buffer.from(s, 'utf-8');
    if (roundtrip.equals(b)) {
      return s;
    }
    return 'base64:' + b.toString('base64');
  }
  return value;
}
