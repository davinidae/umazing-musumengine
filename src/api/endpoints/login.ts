import { ApiResponse } from '../utils';
import { loginPipeline, signupPipeline } from '../pipelines';
import { sessionManager } from '../session/session-manager';
import { HttpEvent } from '../models';

export async function loginHandler(
  event: HttpEvent<
    Partial<{
      steam_id: string;
      steam_session_ticket: string;
      prevSessionId: number;
    }>
  >,
): Promise<ApiResponse> {
  try {
    const { steam_id = '', steam_session_ticket = '', prevSessionId } = event.body || {};
    const session = await sessionManager.createSession(
      steam_id,
      steam_session_ticket,
      prevSessionId,
    );
    const storedData = session.getStoredData();
    const results = await session.runPipeline(storedData == null ? signupPipeline : loginPipeline);
    const failed = results.find((r) => r.error);
    return new ApiResponse(200, {
      session_id: session.id,
      ok: !failed,
      error: failed?.error ?? null,
      created_at: new Date(session.createdAt).toISOString(),
    });
  } catch (e: unknown) {
    return new ApiResponse(500, {
      error: 'login_failed',
      message: (e as Error).message || String(e),
    });
  }
}
