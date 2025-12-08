import { randomUUID } from 'node:crypto';
import type { PipelineContext, StepPrevResult } from '../models';
import { UserSession } from './user-session';

/**
 * Simple in-memory session manager to keep server-only data between endpoint calls.
 * Not for production multi-process use without an external store.
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

  create(ctx: PipelineContext, meta: Record<string, unknown>): UserSession {
    const id = randomUUID();
    const session = new UserSession(id, Date.now(), meta, ctx);
    this.sessions.set(id, session);
    this.deleteInactiveSessions();
    return session;
  }

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

  setContext(id: string, ctx: PipelineContext): void {
    const s = this.getSession(id);
    if (!s) {
      throw new Error('session_not_found');
    }
    s.getPipeline().setContext(ctx);
  }

  getContext(id: string): PipelineContext | undefined {
    return this.getSession(id)?.getPipeline().getContext();
  }

  setLastStep(id: string, step: StepPrevResult | undefined): void {
    const s = this.getSession(id);
    if (!s) {
      throw new Error('session_not_found');
    }
    s.setLastStep(step);
  }

  getLastStep(id: string): StepPrevResult | undefined {
    return this.getSession(id)?.getLastStep();
  }

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
