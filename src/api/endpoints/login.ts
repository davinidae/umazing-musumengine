import { Router, Request, Response } from 'express';
import { loginPipeline } from '../pipelines';
import { sessionManager } from '../session/session-manager';

const router = Router();

/**
 * POST /login
 *
 * Orchestrates the Main Screen Start Up Bootstrap sequence
 * (pre_signup -> signup -> start_session -> load/index).
 * Creates a server-only user session and returns an opaque session_id for subsequent calls.
 *
 * @route POST /login
 * @param req.body.steam_id string Steam identifier (required)
 * @param req.body.steam_session_ticket string Steam session ticket (optional)
 * @returns 200 JSON { session_id, ok, error, created_at }
 * @remarks The server stores PipelineContext and last step internally; no sensitive data is returned.
 */
router.post('/login', async (req: Request, res: Response) => {
  try {
    const { steam_id, steam_session_ticket = '' } = req.body || {};
    if (!steam_id || typeof steam_id !== 'string') {
      return res.status(400).json({
        error: 'steam_id (string) is required',
      });
    }
    // Create a server-side session and attach context there
    const session = sessionManager.createSession(steam_id, steam_session_ticket, {
      steam_id,
    });
    const results = await session.runPipeline(loginPipeline);
    // Minimal response: only return a session identifier
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
