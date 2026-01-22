import { ApiResponse, getErrorMessage } from '../utils';
import { type HttpEvent, type UserData } from '../models';
import { sessionManager } from '../services/session-manager.service';
import { Client } from 'steamworks.js';

/**
 * collectPresentsHandler (async).
 * @param _event - Type: `HttpEvent<unknown>`.
 * @returns Type: `Promise<ApiResponse>`.
 */
export async function collectPresentsHandler(
  event: HttpEvent<UserData>,
  steamClient: Client,
): Promise<ApiResponse> {
  const body = event.body;
  const startTimestamp = new Date().toISOString();
  try {
    if (body?.userId == null) {
      throw new Error('userId is required in the request body. Check login payload.');
    }
    const userSession = await sessionManager.getSession(body, steamClient);
    await userSession.client.collectPresents();
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
      error: 'presents_failed',
      message: getErrorMessage(e),
    });
  }
}
