import { ApiResponse, getErrorMessage } from '../utils';
import { type HttpEvent, type UserData } from '../models';
import { sessionManager } from '../services/session-manager.service';

/**
 * playTeamTrialsHandler (async).
 * @param _event - Type: `HttpEvent<unknown>`.
 * @returns Type: `Promise<ApiResponse>`.
 */
export async function playTeamTrialsHandler(event: HttpEvent<UserData>): Promise<ApiResponse> {
  const body = event.body;
  const startTimestamp = new Date().toISOString();
  try {
    if (body?.userId == null) {
      throw new Error('userId is required in the request body. Check login payload.');
    }
    const userSession = sessionManager.getSession(body);
    await userSession.client.playTeamTrials();
    return new ApiResponse(200, {
      umaData: userSession.client.getUmaData(),
      startTimestamp,
      endTimestamp: new Date().toISOString(),
      results: userSession.client.results,
    });
  } catch (e: unknown) {
    /**
     * catch (e).
     * @remarks Type: `unknown`.
     */
    return new ApiResponse(500, {
      startTimestamp,
      endTimestamp: new Date().toISOString(),
      error: 'team_trials_failed',
      message: getErrorMessage(e),
    });
  }
}
