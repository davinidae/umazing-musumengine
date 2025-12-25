import express from 'express';
import type { HttpEvent } from './models';
import { routes } from './endpoints';
import { ApiResponse } from './utils';

function sendLambdaResult(res: express.Response, response: ApiResponse) {
  const result = response.execute();
  if (result.headers) {
    for (const [key, value] of Object.entries(result.headers)) {
      if (value != null) {
        res.setHeader(key, String(value));
      }
    }
  }
  if (result.cookies && result.cookies.length > 0) {
    res.setHeader('set-cookie', result.cookies);
  }
  res.status(result.statusCode ?? 200);
  // Most handlers return JSON string bodies (ApiResponse). Preserve as-is.
  if (typeof result.body === 'string') {
    res.send(result.body);
    return;
  }
  res.json(result.body ?? null);
}

function normalizedHttpEvent(req: express.Request): HttpEvent<any> {
  const normalizedHeaders =
    (req as unknown as { normalizedHeaders?: Record<string, string> }).normalizedHeaders ??
    ({} as Record<string, string>);
  const normalizedQuery =
    (req as unknown as { normalizedQuery?: Record<string, string> }).normalizedQuery ??
    ({} as Record<string, string>);
  return {
    version: '2.0',
    routeKey: `${req.method} ${req.path}`,
    rawPath: req.path,
    rawQueryString: req.url.includes('?') ? (req.url.split('?')[1] ?? '') : '',
    headers: normalizedHeaders,
    queryStringParameters:
      Object.keys(normalizedQuery).length > 0 ? (normalizedQuery as any) : undefined,
    requestContext: {
      accountId: 'offline',
      apiId: 'offline',
      domainName: 'localhost',
      domainPrefix: 'localhost',
      requestId: 'offline',
      routeKey: `${req.method} ${req.path}`,
      stage: 'local',
      time: new Date().toISOString(),
      timeEpoch: Date.now(),
      http: {
        method: req.method,
        path: req.path,
        protocol: req.protocol.toUpperCase(),
        sourceIp: req.ip,
        userAgent: normalizedHeaders['user-agent'] ?? '',
      },
    } as any,
    body: req.body ?? null,
    isBase64Encoded: false,
  } as unknown as HttpEvent<any>;
}

const app = express();

app.use((req, _res, next) => {
  // Normalize headers to string values (Express already lowercases keys)
  const normalizedHeaders: Record<string, string> = {};
  for (const [key, value] of Object.entries(req.headers)) {
    if (typeof value === 'string') {
      normalizedHeaders[key] = value;
      continue;
    }
    if (Array.isArray(value)) {
      normalizedHeaders[key] = value[0] ?? '';
      continue;
    }
    if (value == null) {
      normalizedHeaders[key] = '';
      continue;
    }
    normalizedHeaders[key] = String(value);
  }
  (
    req as unknown as {
      normalizedHeaders: Record<string, string>;
    }
  ).normalizedHeaders = normalizedHeaders;
  // Normalize query params to string values (first value wins)
  const normalizedQuery: Record<string, string> = {};
  for (const [key, value] of Object.entries(req.query ?? {})) {
    if (typeof value === 'string') {
      normalizedQuery[key] = value;
      continue;
    }
    if (Array.isArray(value)) {
      normalizedQuery[key] = String(value[0] ?? '');
      continue;
    }
    if (value == null) {
      normalizedQuery[key] = '';
      continue;
    }
    normalizedQuery[key] = String(value);
  }
  (
    req as unknown as {
      normalizedQuery: Record<string, string>;
    }
  ).normalizedQuery = normalizedQuery;
  next();
});
for (const route of routes) {
  const method = route.method.toLowerCase();
  const register = (handler: express.RequestHandler) => {
    if (method === 'any' || method === 'all') {
      app.all(route.path, handler);
      return;
    }
    const fn = (app as any)[method] as undefined | ((path: string, h: any) => unknown);
    if (!fn) {
      throw new Error(`Unsupported HTTP method for route ${route.method} ${route.path}`);
    }
    fn.call(app, route.path, handler);
  };
  register(async (req, res) => {
    try {
      const event = normalizedHttpEvent(req);
      const result = await route.handler(event);
      sendLambdaResult(res, result);
    } catch (e: unknown) {
      res.status(500).json({
        error: 'internal_error',
        message: (e as Error).message || String(e),
      });
    }
  });
}

const port = Number(process.env.PORT ?? 4000);
const host = process.env.HOST ?? 'localhost';

app.listen(port, host, () => {
  console.log(`API listening on http://${host}:${port}`);
});
