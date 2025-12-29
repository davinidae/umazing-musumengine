import { ApiResponse, getErrorMessage } from '../utils';
import type { HttpEvent } from '../models';
import { UserSession } from '../services/user-session.service';

export async function loginHandler(_event: HttpEvent<unknown>): Promise<ApiResponse> {
  const startTimestamp = new Date().toISOString();
  try {
    const userSession = new UserSession();
    const client = await userSession.initialize();
    const results = await client.logIn();
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
      message: getErrorMessage(e),
    });
  }
}
