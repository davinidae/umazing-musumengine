import { Router, Request, Response } from 'express';
import { createHash } from 'node:crypto';
import { RuntimeClient } from '../../lib';
import { DETERMINISTIC_ENC_SECRET } from '../../variables';
import {
  PreSignupService,
  SignupService,
  StartSessionService,
  LoadIndexService,
} from '../pipelines';
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

    const ctx = {
      runtime: new RuntimeClient({
        DETERMINISTIC_ENC_SECRET,
      }),
      // Upstream base URL (used by services via StepService.callUpstream). It should be set to the actual UmaMusume API in production.
      upstreamBase: '',
      blob1: {
        prefix_hex: 'aa55',
        // Derive deterministic device UDID (16 bytes) from steam_id for reproducible requests
        udid_raw_hex: createHash('sha256')
          .update(String(steam_id), 'utf8')
          .digest()
          .subarray(0, 16)
          .toString('hex'),
        // Session id (16 bytes hex) derived deterministically
        session_id_hex: createHash('sha256')
          .update('sid:' + steam_id, 'utf8')
          .digest()
          .subarray(0, 16)
          .toString('hex'),
        // Response key for blob1; deterministic for dev
        response_key_hex: createHash('sha256')
          .update('resp:' + steam_id, 'utf8')
          .digest()
          .toString('hex'),
        // Auth key for blob1; deterministic for dev
        auth_key_hex: createHash('sha512')
          .update('auth:' + steam_id, 'utf8')
          .digest()
          .subarray(0, 48)
          .toString('hex'),
      },
      // Device/environment placeholders (Windows PC defaults)
      clientData: {
        viewer_id: 0,
        device: 4,
        device_id: createHash('sha256')
          .update('dev:' + steam_id, 'utf8')
          .digest('hex'),
        device_name: 'Windows PC',
        graphics_device_name: 'GPU',
        ip_address: '127.0.0.1',
        platform_os_version: process.platform + ' ' + process.version,
        carrier: '',
        keychain: 0,
        locale: 'en',
        dmm_viewer_id: null,
        dmm_onetime_token: null,
        steam_id,
        steam_session_ticket,
      },
    };
    const session = sessionManager.create(ctx, {
      steam_id,
    });
    session.setContext(ctx);

    const results = await session.runPipeline([
      PreSignupService,
      SignupService,
      StartSessionService,
      LoadIndexService,
    ]);

    // Minimal response: only return a session identifier
    const failed = results.find((r) => r.error);
    res.json({
      session_id: session.id,
      ok: !failed,
      error: failed?.error ?? null,
      created_at: new Date(session.createdAt).toISOString(),
    });
  } catch (e: any) {
    res.status(500).json({
      error: 'login_failed',
      message: e?.message || String(e),
    });
  }
});

export default router;
