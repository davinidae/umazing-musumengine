/**
 * Local API server entrypoint.
 *
 * This file starts an Express server and adapts the repo's route handlers (which
 * are written in a Lambda-ish style) to Express.
 *
 * Notes:
 * - This module is intentionally NOT re-exported from `src/index.ts` because it
 *   has side effects (it starts a server on import).
 */
import express from 'express';
import type { HttpEvent } from './models';
import { routes } from './endpoints';
import { ApiResponse, getErrorMessage } from './utils';

type NormalizedRequest = express.Request & {
  normalizedHeaders: Record<string, string>;
  normalizedQuery: Record<string, string>;
};

function applyResponseHeaders(
  res: express.Response,
  headers: Record<string, unknown> | undefined,
): void {
  if (!headers) {
    return;
  }
  for (const [key, value] of Object.entries(headers)) {
    if (value != null) {
      res.setHeader(key, String(value));
    }
  }
}

function applyResponseCookies(res: express.Response, cookies: string[] | undefined): void {
  if (cookies && cookies.length > 0) {
    res.setHeader('set-cookie', cookies);
  }
}

function sendLambdaResult(res: express.Response, response: ApiResponse): void {
  const result = response.execute();
  applyResponseHeaders(res, result.headers);
  applyResponseCookies(res, result.cookies);
  res.status(result.statusCode ?? 200);

  // Most handlers return JSON string bodies (ApiResponse). Preserve as-is.
  if (typeof result.body === 'string') {
    res.send(result.body);
    return;
  }
  res.json(result.body ?? null);
}

function normalizeHeaders(headers: express.Request['headers']): Record<string, string> {
  // Normalize headers to string values (Express already lowercases keys)
  const out: Record<string, string> = {};
  for (const [key, value] of Object.entries(headers)) {
    if (typeof value === 'string') {
      out[key] = value;
      continue;
    }
    if (Array.isArray(value)) {
      out[key] = value[0] ?? '';
      continue;
    }
    if (value == null) {
      out[key] = '';
      continue;
    }
    out[key] = String(value);
  }
  return out;
}

function normalizeQuery(query: unknown): Record<string, string> {
  // Normalize query params to string values (first value wins)
  const obj = query && typeof query === 'object' ? (query as Record<string, unknown>) : {};
  const out: Record<string, string> = {};
  for (const [key, value] of Object.entries(obj)) {
    if (typeof value === 'string') {
      out[key] = value;
      continue;
    }
    if (Array.isArray(value)) {
      out[key] = String(value[0] ?? '');
      continue;
    }
    if (value == null) {
      out[key] = '';
      continue;
    }
    out[key] = String(value);
  }
  return out;
}

function rawQueryStringFromUrl(url: string): string {
  return url.includes('?') ? (url.split('?')[1] ?? '') : '';
}

function buildRequestContext(
  req: express.Request,
  normalizedHeaders: Record<string, string>,
  timeIso: string,
  timeEpoch: number,
): HttpEvent<unknown>['requestContext'] {
  return {
    accountId: 'offline',
    apiId: 'offline',
    domainName: 'localhost',
    domainPrefix: 'localhost',
    requestId: 'offline',
    routeKey: `${req.method} ${req.path}`,
    stage: 'local',
    time: timeIso,
    timeEpoch,
    http: {
      method: req.method,
      path: req.path,
      protocol: req.protocol.toUpperCase(),
      sourceIp: req.ip ?? '',
      userAgent: normalizedHeaders['user-agent'] ?? '',
    },
  };
}

function normalizedHttpEvent(req: express.Request): HttpEvent<unknown> {
  const r = req as NormalizedRequest;
  const queryStringParameters =
    Object.keys(r.normalizedQuery).length > 0 ? r.normalizedQuery : undefined;

  const now = new Date();
  const timeIso = now.toISOString();
  const timeEpoch = now.getTime();

  const event: HttpEvent<unknown> = {
    version: '2.0',
    routeKey: `${req.method} ${req.path}`,
    rawPath: req.path,
    rawQueryString: rawQueryStringFromUrl(req.url),
    headers: r.normalizedHeaders,
    queryStringParameters,
    cookies: [],
    pathParameters: undefined,
    stageVariables: undefined,
    requestContext: buildRequestContext(req, r.normalizedHeaders, timeIso, timeEpoch),
    body: req.body ?? null,
    isBase64Encoded: false,
  };

  return event;
}

const app = express();

app.use((req, _res, next) => {
  const r = req as NormalizedRequest;
  r.normalizedHeaders = normalizeHeaders(req.headers);
  r.normalizedQuery = normalizeQuery(req.query);
  next();
});
for (const route of routes) {
  const method = route.method.toLowerCase();
  const register = (handler: express.RequestHandler) => {
    if (method === 'any' || method === 'all') {
      app.all(route.path, handler);
      return;
    }
    switch (method) {
      case 'get':
        app.get(route.path, handler);
        return;
      case 'post':
        app.post(route.path, handler);
        return;
      case 'put':
        app.put(route.path, handler);
        return;
      case 'patch':
        app.patch(route.path, handler);
        return;
      case 'delete':
        app.delete(route.path, handler);
        return;
      case 'options':
        app.options(route.path, handler);
        return;
      case 'head':
        app.head(route.path, handler);
        return;
      default:
        throw new Error(`Unsupported HTTP method for route ${route.method} ${route.path}`);
    }
  };
  register(async (req, res) => {
    try {
      const event = normalizedHttpEvent(req);
      const result = await route.handler(event);
      sendLambdaResult(res, result);
    } catch (e: unknown) {
      res.status(500).json({
        error: 'internal_error',
        message: getErrorMessage(e),
      });
    }
  });
}

const port = Number(process.env.PORT ?? 4000);
const host = process.env.HOST ?? 'localhost';

app.listen(port, host, () => {
  console.log(`API listening on http://${host}:${port}`);
});
