import { ApiResponse, getErrorMessage } from '../utils';
import type { HttpEvent } from '../models';
import { UserSession } from '../services/user-session.service';

/**
 * loginHandler (async).
 * @param _event - Type: `HttpEvent<unknown>`.
 * @returns Type: `Promise<ApiResponse>`.
 */
export async function loginHandler(_event: HttpEvent<unknown>): Promise<ApiResponse> {
  /**
   * startTimestamp.
   * @remarks Type: `string`.
   * @defaultValue `new Date().toISOString()`
   */
  const startTimestamp = new Date().toISOString();
  try {
    /**
     * userSession.
     * @remarks Type: `UserSession`.
     * @defaultValue `new UserSession()`
     */
    const userSession = new UserSession();
    /**
     * client.
     * @remarks Type: `UmaClient`.
     * @defaultValue `await userSession.initialize()`
     */
    const client = await userSession.initialize();
    /**
     * results.
     * @remarks Type: `RequestResult[]`.
     * @defaultValue `await client.logIn()`
     */
    const results = await client.logIn();
    return new ApiResponse(200, {
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
      error: 'login_failed',
      message: getErrorMessage(e),
    });
  }
}
