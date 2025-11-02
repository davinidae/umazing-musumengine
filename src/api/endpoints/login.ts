import { Router, Request, Response } from 'express';
import { createHash } from 'node:crypto';
import { RuntimeClient } from '../../lib';
import { DETERMINISTIC_ENC_SECRET } from '../../variables';
import { runPipeline } from '../pipeline/run';
import { PreSignupService } from '../pipeline/services/pre_signup.service';
import { SignupService } from '../pipeline/services/signup.service';
import { StartSessionService } from '../pipeline/services/start_session.service';
import { LoadIndexService } from '../pipeline/services/load_index.service';

const router = Router();

/**
 * POST /login
 * Orchestrates the Main Screen Start Up Bootstrap sequence (pre_signup -> signup -> start_session -> load/index)
 * See: docs/umamusume_api_info/behavior/MAIN_SCREEN.md and INTERACTION.md
 */
router.post('/login', async (req: Request, res: Response) => {
  try {
    const { steam_id, steam_session_ticket = '' } = req.body || {};
    if (!steam_id || typeof steam_id !== 'string') {
      return res.status(400).json({
        error: 'steam_id (string) is required',
      });
    }
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
    const results = await runPipeline([
      new PreSignupService(ctx),
      new SignupService(ctx),
      new StartSessionService(ctx),
      new LoadIndexService(ctx),
    ]);
    console.log('results:', results);
    res.json({
      timestamp: new Date().toISOString(),
    });
  } catch (e: any) {
    res.status(500).json({
      error: 'login_failed',
      message: e?.message || String(e),
    });
  }
});

export default router;
