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
    const out: Record<string, unknown> = {};
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

export function toJsonCompatible(value: unknown): unknown {
  if (value && typeof value === 'object' && !Buffer.isBuffer(value)) {
    if (Array.isArray(value)) {
      return value.map((v) => {
        return toJsonCompatible(v);
      });
    }
    const out: Record<string, unknown> = {};
    for (const [k, v] of Object.entries(value)) {
      out[String(toJsonCompatible(k))] = toJsonCompatible(v);
    }
    return out;
  }
  if (Buffer.isBuffer(value) || value instanceof Uint8Array) {
    const b = Buffer.from(value);
    const s = b.toString('utf-8');
    const roundtrip = Buffer.from(s, 'utf-8');
    if (roundtrip.equals(b)) {
      return s;
    }
    return 'base64:' + b.toString('base64');
  }
  return value;
}
