/**
 * ApiResponse.
 *
 * Minimal API response wrapper used by API route handlers.
 *
 * This mirrors the shape commonly used in Lambda/API-Gateway style handlers,
 * but is also convenient for the local Express adapter in `src/api/index.ts`.
 */
export class ApiResponse {
  /**
   * constructor.
   * @param statusCode - Type: `number`.
   * @param body - Type: `Record<string, unknown>`.
   * @param headers - Type: `Record<string, string> | undefined`.
   * @param cookies - Type: `string[] | undefined`.
   * @returns Type: `ApiResponse`.
   */
  constructor(
    public statusCode: number,
    public body: Record<string, unknown>,
    public headers?: Record<string, string>,
    public cookies?: string[],
  ) {}

  /**
   * execute.
   *
   * Convert the response into a JSON HTTP response object.
   * `body` is serialized to a JSON string.
   *
   * @returns Type: `{ statusCode: number; headers: Record<string, string>; cookies: string[]; body: string; }`.
   */
  execute(): {
    statusCode: number;
    headers: Record<string, string>;
    cookies: string[];
    body: string;
  } {
    return {
      statusCode: this.statusCode,
      headers: {
        'Content-Type': 'application/json',
        ...this.headers,
      },
      cookies: this.cookies ?? [],
      body: JSON.stringify(this.body),
    };
  }
}

/**
 * getErrorMessage.
 *
 * Extract a stable error message from unknown caught values.
 *
 * @param e - Type: `unknown`.
 * @returns Type: `string`.
 */
export function getErrorMessage(e: unknown): string {
  if (e instanceof Error && typeof e.message === 'string' && e.message.length > 0) {
    return e.message;
  }
  if (e && typeof e === 'object' && 'message' in e) {
    /**
     * maybeMessage.
     * @remarks Type: `unknown`.
     * @defaultValue `(e as { message?: unknown }).message`
     */
    const maybeMessage = (e as { message?: unknown }).message;
    if (typeof maybeMessage === 'string' && maybeMessage.length > 0) {
      return maybeMessage;
    }
  }
  return String(e);
}
