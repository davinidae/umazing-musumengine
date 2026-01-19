import { ApiResponse, getErrorMessage } from '../utils';
import { AttestationType, AuthModeKind, DeviceType, type HttpEvent, type UmaData } from '../models';
import { UserSession } from '../services/user-session.service';

/**
 * loginHandler (async).
 * @param _event - Type: `HttpEvent<unknown>`.
 * @returns Type: `Promise<ApiResponse>`.
 */
export async function loginHandler(event: HttpEvent<UmaData>): Promise<ApiResponse> {
  const body = event.body || {};
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
     * @defaultValue `new UserSession(undefined, undefined, viewerId)`
     */
    const steamLogin = {
      kind: AuthModeKind.STEAM,
      deviceType: DeviceType.PC,
      attestationType: AttestationType.PC,
    };
    const mobileLogin = {
      kind: AuthModeKind.MOBILE,
      deviceType: DeviceType.ANDROID,
      attestationType: AttestationType.Mobile,
    };
    const userSession = new UserSession(body, body.steamId != null ? steamLogin : mobileLogin);
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
    await client.logIn();
    return new ApiResponse(200, {
      umaData: client.getUmaData(),
      userId: userSession.userId,
      startTimestamp,
      endTimestamp: new Date().toISOString(),
      results: client.results,
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
