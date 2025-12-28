import { ApiResponse } from '../utils';
import { HttpEvent } from '../models';
import { Client } from '../services/client';

export async function loginHandler(
  _event: HttpEvent<
    Partial<{
      steam_id: string;
      steam_session_ticket: string;
      prevSessionId: string | number;
    }>
  >,
): Promise<ApiResponse> {
  try {
    const client = new Client();
    await client.initialize();
    return new ApiResponse(200, {
      ok: true,
      created_at: new Date().toISOString(),
    });
  } catch (e: unknown) {
    return new ApiResponse(500, {
      error: 'login_failed',
      message: (e as Error).message || String(e),
    });
  }
}
