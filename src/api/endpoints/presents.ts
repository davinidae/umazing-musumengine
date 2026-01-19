import { ApiResponse, getErrorMessage } from '../utils';
import { type HttpEvent, type UserData } from '../models';
import { sessionManager } from '../services/session-manager.service';

/**
 * presentsHandler (async).
 * @param _event - Type: `HttpEvent<unknown>`.
 * @returns Type: `Promise<ApiResponse>`.
 */
export async function presentsHandler(event: HttpEvent<UserData>): Promise<ApiResponse> {
  const body = event.body;
  const startTimestamp = new Date().toISOString();
  try {
    if (body?.userId == null) {
      throw new Error('userId is required in the request body. Check login payload.');
    }
    const userSession = sessionManager.getSession(body);
    const results = await userSession.client.collectPresents();
    return new ApiResponse(200, {
      umaData: userSession.client.getUmaData(),
      startTimestamp,
      endTimestamp: new Date().toISOString(),
      results,
    });
  } catch (e: unknown) {
    /**
     * catch (e).
     * @remarks Type: `unknown`.
     */
    return new ApiResponse(500, {
      startTimestamp,
      endTimestamp: new Date().toISOString(),
      error: 'presents_failed',
      message: getErrorMessage(e),
    });
  }
}
