import { createHash, randomUUID } from 'node:crypto';
import type { PipelineContext, StepPrevResult } from '../models';
import { UserSession } from './user-session';
import { DETERMINISTIC_ENC_SECRET } from '../../variables';
import { RuntimeClient } from '../../lib';

/**
 * Simple in-memory session manager to keep server-only data between endpoint calls.
 * Not for production multi-process use without an external store.
 * @public
 */
export class SessionManager {
  private readonly sessions = new Map<string, UserSession>();
  // TTL in ms; sessions older than this will be purged lazily
  private readonly ttlMs: number;

  constructor(
    opts?: Partial<{
      ttlMs: number;
    }>,
  ) {
    this.ttlMs = opts?.ttlMs ?? 30 * 60 * 1000; // 30 minutes
  }

  /**
   * Generate a default `PipelineContext` for a user based on Steam identifiers.
   * Uses deterministic derivations for development/testing.
   * @param steam_id Steam identifier.
   * @param steam_session_ticket Steam session ticket.
   * @returns Initialized `PipelineContext`.
   */
  generateCtx(steam_id: string, steam_session_ticket: string): PipelineContext {
    return {
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
  }

  /**
   * Create a new server-side session and store it in memory.
   * @param steam_id Steam identifier.
   * @param steam_session_ticket Steam session ticket.
   * @param meta Arbitrary metadata associated with the session.
   * @returns Created `UserSession`.
   */
  createSession(
    steam_id: string,
    steam_session_ticket: string,
    meta: Record<string, unknown>,
  ): UserSession {
    const ctx = this.generateCtx(steam_id, steam_session_ticket);
    const id = randomUUID();
    const session = new UserSession(id, Date.now(), meta, ctx);
    this.sessions.set(id, session);
    this.deleteInactiveSessions();
    return session;
  }

  /**
   * Retrieve a session by id. Applies TTL lazily and prunes expired entries.
   * @param id Session identifier.
   * @returns `UserSession` or `undefined` if not found/expired.
   */
  getSession(id: string): UserSession | undefined {
    const s = this.sessions.get(id);
    if (!s) {
      return undefined;
    }
    // Lazy TTL check
    if (Date.now() - s.createdAt > this.ttlMs) {
      this.sessions.delete(id);
      return undefined;
    }
    return s;
  }

  /**
   * Update the session's pipeline context.
   * @param id Session id.
   * @param ctx New `PipelineContext`.
   */
  setContext(id: string, ctx: PipelineContext): void {
    const s = this.getSession(id);
    if (!s) {
      throw new Error('session_not_found');
    }
    s.getPipeline().setContext(ctx);
  }

  /**
   * Access the current pipeline context for a session.
   * @param id Session id.
   * @returns `PipelineContext` or `undefined`.
   */
  getContext(id: string): PipelineContext | undefined {
    return this.getSession(id)?.getPipeline().getContext();
  }

  /**
   * Persist the last step result for a session.
   * @param id Session id.
   * @param step Last step or `undefined`.
   */
  setLastStep(id: string, step: StepPrevResult | undefined): void {
    const s = this.getSession(id);
    if (!s) {
      throw new Error('session_not_found');
    }
    s.setLastStep(step);
  }

  /**
   * Read the last step result for a session.
   * @param id Session id.
   * @returns `StepPrevResult` or `undefined`.
   */
  getLastStep(id: string): StepPrevResult | undefined {
    return this.getSession(id)?.getLastStep();
  }

  /**
   * Delete a session by id.
   * @param id Session id.
   */
  delete(id: string): void {
    this.sessions.delete(id);
  }

  private deleteInactiveSessions(): void {
    const now = Date.now();
    for (const [id, s] of this.sessions) {
      if (now - s.createdAt > this.ttlMs) {
        this.sessions.delete(id);
      }
    }
  }
}

export const sessionManager = new SessionManager();
