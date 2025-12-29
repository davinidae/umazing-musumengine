/**
 * Minimal API response wrapper used by API route handlers.
 *
 * This mirrors the shape commonly used in Lambda/API-Gateway style handlers,
 * but is also convenient for the local Express adapter in `src/api/index.ts`.
 */
export class ApiResponse {
  constructor(
    public statusCode: number,
    public body: Record<string, unknown>,
    public headers?: Record<string, string>,
    public cookies?: string[],
  ) {}

  /**
   * Convert the response into a JSON HTTP response object.
   * `body` is serialized to a JSON string.
   */
  execute() {
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
