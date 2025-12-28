import { ApiResponse } from '../utils';
import { HttpEvent } from '../models';
import { UserSession } from '../services/user-session.service';

export async function loginHandler(
  _event: HttpEvent<
    Partial<{
      steam_id: string;
      steam_session_ticket: string;
      prevSessionId: string | number;
    }>
  >,
): Promise<ApiResponse> {
  const startTimestamp = new Date().toISOString();
  try {
    const client = new UserSession();
    const results = await client.initialize();
    return new ApiResponse(200, {
      startTimestamp,
      endTimestamp: new Date().toISOString(),
      results,
    });
  } catch (e: unknown) {
    return new ApiResponse(500, {
      startTimestamp,
      endTimestamp: new Date().toISOString(),
      error: 'login_failed',
      message: (e as Error).message || String(e),
    });
  }
}
