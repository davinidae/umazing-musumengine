/**
 * Minimal Express API for umazing-musumengine.
 * Provides HTTP endpoints for encode/decode operations and strategy analysis.
 */
import express, { Request, Response, NextFunction } from 'express';
import { RuntimeClient } from '../lib/runtime-client';
import type { EncodeRequestInput, DecodeResponseInput } from '../lib/models/runtime.model';
import { DETERMINISTIC_ENC_SECRET } from '../variables';

const app = express();
const port = process.env.PORT || 4000;

// Middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// CORS for development
app.use((req: Request, res: Response, next: NextFunction) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
  } else {
    next();
  }
});

const runtimeClient = new RuntimeClient({
  DETERMINISTIC_ENC_SECRET: DETERMINISTIC_ENC_SECRET,
});

// Health check
app.get('/health', (req: Request, res: Response) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    env: process.env.NODE_ENV || 'production',
  });
});

// API info
app.get('/', (req: Request, res: Response) => {
  res.json({
    name: 'umazing-musumengine API',
    version: '1.0.0',
    endpoints: {
      'GET /health': 'Health check',
      'POST /login': 'Start a session',
    },
  });
});

app.post('/login', (req: Request, res: Response) => {
  res.json({
    message: 'Login endpoint - implementation pending',
    timestamp: new Date().toISOString(),
  });
});

// Error handling middleware
app.use((error: any, req: Request, res: Response, _next: NextFunction) => {
  console.error('API Error:', error);
  res.status(500).json({
    error: 'Internal server error',
    message: error.message,
  });
});

// 404 handler
app.use((req: Request, res: Response) => {
  res.status(404).json({ error: 'Endpoint not found' });
});

// Start server
app.listen(port, () => {
  console.log(`🚀 umazing-musumengine API server running on port ${port}`);
  console.log(`📖 API docs: http://localhost:${port}/`);
  console.log(`❤️  Health check: http://localhost:${port}/health`);
});

export default app;
