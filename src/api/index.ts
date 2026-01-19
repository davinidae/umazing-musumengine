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

/**
 * applyResponseHeaders.
 * @param res - Type: `Response<any, Record<string, any>>`.
 * @param headers - Type: `Record<string, unknown> | undefined`.
 */
function applyResponseHeaders(
  res: express.Response,
  headers: Record<string, unknown> | undefined,
): void {
  if (!headers) {
    return;
  }
  /**
   * [key, value].
   * @remarks Type: `[string, unknown]`.
   */
  for (const [key, value] of Object.entries(headers)) {
    if (value != null) {
      res.setHeader(key, String(value));
    }
  }
}

/**
 * applyResponseCookies.
 * @param res - Type: `Response<any, Record<string, any>>`.
 * @param cookies - Type: `string[] | undefined`.
 */
function applyResponseCookies(res: express.Response, cookies: string[] | undefined): void {
  if (cookies && cookies.length > 0) {
    res.setHeader('set-cookie', cookies);
  }
}

/**
 * sendLambdaResult.
 * @param res - Type: `Response<any, Record<string, any>>`.
 * @param response - Type: `ApiResponse`.
 */
function sendLambdaResult(res: express.Response, response: ApiResponse): void {
  /**
   * result.
   * @remarks Type: `{ statusCode: number; headers: Record<string, string>; cookies: string[]; body: string; }`.
   * @defaultValue `response.execute()`
   */
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

/**
 * normalizeHeaders.
 *
 * Normalize headers to string values (Express already lowercases keys)
 *
 * @param headers - Type: `IncomingHttpHeaders`.
 * @returns Type: `Record<string, string>`.
 */
function normalizeHeaders(headers: express.Request['headers']): Record<string, string> {
  /**
   * out.
   * @remarks Type: `Record<string, string>`.
   * @defaultValue `{}`
   */
  const out: Record<string, string> = {};
  /**
   * [key, value].
   * @remarks Type: `[string, string | string[] | undefined]`.
   */
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

/**
 * normalizeQuery.
 * @param query - Type: `unknown`.
 * @returns Type: `Record<string, string>`.
 */
function normalizeQuery(query: unknown): Record<string, string> {
  /**
   * obj.
   *
   * Normalize query params to string values (first value wins)
   *
   * @remarks Type: `Record<string, unknown>`.
   * @defaultValue `query && typeof query === 'object' ? (query as Record<string, unknown>) : {}`
   */
  const obj = query && typeof query === 'object' ? (query as Record<string, unknown>) : {};
  /**
   * out.
   * @remarks Type: `Record<string, string>`.
   * @defaultValue `{}`
   */
  const out: Record<string, string> = {};
  /**
   * [key, value].
   * @remarks Type: `[string, unknown]`.
   */
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

/**
 * rawQueryStringFromUrl.
 * @param url - Type: `string`.
 * @returns Type: `string`.
 */
function rawQueryStringFromUrl(url: string): string {
  return url.includes('?') ? (url.split('?')[1] ?? '') : '';
}

/**
 * buildRequestContext.
 * @param req - Type: `Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>`.
 * @param normalizedHeaders - Type: `Record<string, string>`.
 * @param timeIso - Type: `string`.
 * @param timeEpoch - Type: `number`.
 * @returns Type: `APIGatewayEventRequestContextV2`.
 */
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

/**
 * normalizedHttpEvent.
 * @param req - Type: `Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>`.
 * @returns Type: `HttpEvent<unknown>`.
 */
function normalizedHttpEvent(req: express.Request): HttpEvent<unknown> {
  /**
   * r.
   * @remarks Type: `NormalizedRequest`.
   * @defaultValue `req as NormalizedRequest`
   */
  const r = req as NormalizedRequest;
  /**
   * queryStringParameters.
   * @remarks Type: `Record<string, string> | undefined`.
   * @defaultValue `Object.keys(r.normalizedQuery).length > 0 ? r.normalizedQuery : undefined`
   */
  const queryStringParameters =
    Object.keys(r.normalizedQuery).length > 0 ? r.normalizedQuery : undefined;

  /**
   * now.
   * @remarks Type: `Date`.
   * @defaultValue `new Date()`
   */
  const now = new Date();
  /**
   * timeIso.
   * @remarks Type: `string`.
   * @defaultValue `now.toISOString()`
   */
  const timeIso = now.toISOString();
  /**
   * timeEpoch.
   * @remarks Type: `number`.
   * @defaultValue `now.getTime()`
   */
  const timeEpoch = now.getTime();

  /**
   * event.
   * @remarks Type: `HttpEvent<unknown>`.
   * @defaultValue `{ version: '2.0', routeKey: `${req.method} ${req.path}`, rawPath: req.path, rawQueryString: rawQueryStringFromUrl(req.url), headers: r.norm…`
   */
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

/**
 * app.
 * @remarks Type: `Express`.
 * @defaultValue `express()`
 */
const app = express();

// Parse JSON bodies for local API calls.
// Without this, `req.body` stays undefined and handlers receive `event.body = null`.
app.use(
  express.json({
    // Keep this reasonably sized; this API isn't intended for large uploads.
    limit: '2mb',
    type: ['application/json', 'application/*+json'],
  }),
);
app.use(express.urlencoded({ extended: true }));

app.use((req, _res, next) => {
  /**
   * r.
   * @remarks Type: `NormalizedRequest`.
   * @defaultValue `req as NormalizedRequest`
   */
  const r = req as NormalizedRequest;
  r.normalizedHeaders = normalizeHeaders(req.headers);
  r.normalizedQuery = normalizeQuery(req.query);
  next();
});
/**
 * route.
 * @remarks Type: `{ method: string; path: string; handler: (event: HttpEvent<unknown>) => Promise<ApiResponse>; }`.
 */
for (const route of routes) {
  /**
   * method.
   * @remarks Type: `string`.
   * @defaultValue `route.method.toLowerCase()`
   */
  const method = route.method.toLowerCase();
  /**
   * register.
   * @remarks Type: `(handler: RequestHandler<ParamsDictionary, any, any, ParsedQs, Record<string, any>>) => void`.
   * @defaultValue `(handler: express.RequestHandler) => { if (method === 'any' || method === 'all') { app.all(route.path, handler); return; } switch (method) …`
   * @param handler - Type: `RequestHandler<ParamsDictionary, any, any, ParsedQs, Record<string, any>>`.
   */
  const register = (handler: express.RequestHandler) => {
    if (method === 'any' || method === 'all') {
      app.all(route.path, handler);
      return;
    }
    switch (method) {
      case 'get': {
        app.get(route.path, handler);
        return;
      }
      case 'post': {
        app.post(route.path, handler);
        return;
      }
      case 'put': {
        app.put(route.path, handler);
        return;
      }
      case 'patch': {
        app.patch(route.path, handler);
        return;
      }
      case 'delete': {
        app.delete(route.path, handler);
        return;
      }
      case 'options': {
        app.options(route.path, handler);
        return;
      }
      case 'head': {
        app.head(route.path, handler);
        return;
      }
      default: {
        throw new Error(`Unsupported HTTP method for route ${route.method} ${route.path}`);
      }
    }
  };
  register(async (req, res) => {
    try {
      /**
       * event.
       * @remarks Type: `HttpEvent<unknown>`.
       * @defaultValue `normalizedHttpEvent(req)`
       */
      const event = normalizedHttpEvent(req);
      /**
       * result.
       * @remarks Type: `ApiResponse`.
       * @defaultValue `await route.handler(event)`
       */
      const result = await route.handler(event);
      sendLambdaResult(res, result);
    } catch (e: unknown) {
      /**
       * catch (e).
       * @remarks Type: `unknown`.
       */
      res.status(500).json({
        error: 'internal_error',
        message: getErrorMessage(e),
      });
    }
  });
}

/**
 * port.
 * @remarks Type: `number`.
 * @defaultValue `Number(process.env.PORT ?? 4000)`
 */
const port = Number(process.env.PORT ?? 4000);
/**
 * host.
 * @remarks Type: `string`.
 * @defaultValue `process.env.HOST ?? 'localhost'`
 */
const host = process.env.HOST ?? 'localhost';

app.listen(port, host, () => {
  console.log(`API listening on http://${host}:${port}`);
});
