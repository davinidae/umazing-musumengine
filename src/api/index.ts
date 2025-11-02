/**
 * Minimal Express API for umazing-musumengine.
 * Provides HTTP endpoints for encode/decode operations and strategy analysis.
 */
import express, { Request, Response, NextFunction } from 'express';
import endpoints from './endpoints';
const app = express();
const port = process.env.PORT || 4000;

// Middleware
app.use(
  express.json({
    limit: '10mb',
  }),
);
app.use(
  express.urlencoded({
    extended: true,
  }),
);

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

// Mount API endpoints (keeps handlers out of this file)
app.use(endpoints);

// Error handling middleware
app.use((error: any, req: Request, res: Response, _next: NextFunction) => {
  console.error('API Error:', error);
  res.status(500).json({
    error: 'Internal server error',
    message: error.message,
  });
});

// 404 handler (after all endpoints)
app.use((req: Request, res: Response) => {
  res.status(404).json({
    error: 'Endpoint not found',
  });
});

// Start server
app.listen(port, () => {
  console.log(`🚀 umazing-musumengine API server running on port ${port}`);
  console.log(`📖 API docs: http://localhost:${port}/`);
  console.log(`❤️  Health check: http://localhost:${port}/health`);
});

export default app;
