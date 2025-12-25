import { Router, Request, Response } from 'express';
import { loginPipeline } from '../pipelines';
import { sessionManager } from '../session/session-manager';

export const router = Router();

/**
 * POST `/login`
 *
 * Starts a server-side session and runs the login bootstrap pipeline:
 * `pre_signup → signup → start_session → load/index`.
 * Returns an opaque `session_id` and a success flag.
 *
 * @param req - Express `Request` with JSON body
 * @param req.body.steam_id - Steam identifier (required)
 * @param req.body.steam_session_ticket - Steam session ticket (optional)
 * @returns Express `Response` with status 200 and body `{ session_id, ok, error, created_at }`
 * @remarks The server persists `PipelineContext` and the last step internally; only the `session_id` is exposed.
 */
router.post('/login', async (req: Request, res: Response) => {
  try {
    console.log('Login request received');
    console.log('Request body:', req.body);
    const { steam_id = '', steam_session_ticket = '' } = req.body || {};
    const session = sessionManager.createSession(steam_id, steam_session_ticket, {
      steam_id,
    });
    const results = await session.runPipeline(loginPipeline);
    const failed = results.find((r) => r.error);
    res.json({
      session_id: session.id,
      ok: !failed,
      error: failed?.error ?? null,
      created_at: new Date(session.createdAt).toISOString(),
    });
  } catch (e: unknown) {
    res.status(500).json({
      error: 'login_failed',
      message: (e as Error).message || String(e),
    });
  }
});

export default router;
