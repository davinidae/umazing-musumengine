import { Router, Request, Response } from 'express';

const router = Router();

/**
 * GET /health
 * Lightweight health probe for uptime checks.
 */
router.get('/health', (req: Request, res: Response) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    env: process.env.NODE_ENV || 'production',
  });
});

/**
 * GET /
 * Discovery endpoint listing minimal API metadata.
 */
router.get('/', (req: Request, res: Response) => {
  res.json({
    name: 'umazing-musumengine API',
    version: '1.0.0',
    endpoints: {
      'GET /health': 'Health check',
      'POST /login': 'Start a session',
    },
  });
});

export default router;
