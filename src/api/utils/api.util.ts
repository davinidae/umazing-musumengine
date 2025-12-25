export class ApiResponse {
  constructor(
    public statusCode: number,
    public body: Record<string, unknown>,
    public headers?: Record<string, string>,
    public cookies?: string[],
  ) {}

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
