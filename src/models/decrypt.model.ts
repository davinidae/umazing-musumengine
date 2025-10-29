export abstract class UnpackStrategy {
  abstract execute(buf: Buffer): unknown | undefined;

  /**
   * Normalize common response shape: if an object has data and flattened header-like keys,
   * wrap the headers under data_headers.
   */
  normalizeResponseShape(v: unknown): unknown {
    if (v && typeof v === 'object' && !Array.isArray(v)) {
      const o = v as Record<string, unknown>;
      const hasData = Object.prototype.hasOwnProperty.call(o, 'data');
      const hasHeaders = Object.prototype.hasOwnProperty.call(o, 'data_headers');
      const looksLikeHeaders =
        Object.prototype.hasOwnProperty.call(o, 'viewer_id') ||
        Object.prototype.hasOwnProperty.call(o, 'result_code') ||
        Object.prototype.hasOwnProperty.call(o, 'server_list') ||
        Object.prototype.hasOwnProperty.call(o, 'sid') ||
        Object.prototype.hasOwnProperty.call(o, 'servertime');
      if (hasData && !hasHeaders && looksLikeHeaders) {
        const { data, ...rest } = o;
        return { data_headers: rest, data };
      }
    }
    return v;
  }
}
