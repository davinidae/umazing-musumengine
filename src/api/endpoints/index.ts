import { loginHandler } from './login';
import { healthHandler, rootHandler } from './misc';
import type { HttpEvent } from '../models';
import { ApiResponse } from '../utils';
import { collectPresentsHandler } from './collect-presents';
import { playTeamTrialsHandler } from './play-team-trials';
import { Client } from 'steamworks.js';

/**
 * routes.
 * @remarks Type: `{ method: string; path: string; handler: (event: HttpEvent<unknown>) => Promise<ApiResponse>; }[]`.
 * @defaultValue `[ { method: 'GET', path: '/', handler: rootHandler, }, { method: 'GET', path: '/health', handler: healthHandler, }, { method: 'POST', path:…`
 */
export const routes: Array<{
  method: string;
  path: string;
  handler: (event: HttpEvent<any>, steamClient: Client) => Promise<ApiResponse>;
}> = [
  {
    method: 'GET',
    path: '/',
    handler: rootHandler,
  },
  {
    method: 'GET',
    path: '/health',
    handler: healthHandler,
  },
  {
    method: 'POST',
    path: '/login',
    handler: loginHandler,
  },
  {
    method: 'POST',
    path: '/presents/collect',
    handler: collectPresentsHandler,
  },
  {
    method: 'POST',
    path: '/team-trials/play',
    handler: playTeamTrialsHandler,
  },
];
