import { createHash, randomUUID } from 'node:crypto';
import { DeviceType, StoredData, type PipelineContext, type StepPrevResult } from '../models';
import { UserSession } from './user-session';
import { DETERMINISTIC_ENC_SECRET } from '../../variables';
import { RuntimeClient } from '../../lib';
import { networkInterfaces } from 'node:os';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'node:url';

const moduleDir = path.dirname(fileURLToPath(import.meta.url));

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
  generateCtx(
    steam_id: string,
    steam_session_ticket: string,
    storedData: StoredData,
  ): PipelineContext {
    console.log('Generating PipelineContext');
    const nets = networkInterfaces();
    const networks: Record<string, string[]> = {};
    for (const name of Object.keys(nets)) {
      for (const net of nets[name] || []) {
        // Skip over non-IPv4 and internal (i.e. 127.0.0.1) addresses
        // 'IPv4' is in Node <= 17, from 18 it's a number 4 or 6
        const familyV4Value = typeof net.family === 'string' ? 'IPv4' : 4;
        if (net.family === familyV4Value && !net.internal) {
          if (!networks[name]) {
            networks[name] = [];
          }
          networks[name].push(net.address);
        }
      }
    }
    console.log(networks);
    const viewerId = storedData?.viewerId ?? 0;
    const udid = storedData?.udid ?? randomUUID();
    const obj: PipelineContext = {
      runtime: new RuntimeClient({
        DETERMINISTIC_ENC_SECRET,
      }),
      // Upstream base URL (used by services via StepService.callUpstream). It should be set to the actual UmaMusume API in production.
      upstreamBase: 'https://api.games.umamusume.com/umamusume',
      blob1: {
        prefix_hex: 'aa55',
        udid_raw_hex: createHash('sha256')
          .update(viewerId + udid + DETERMINISTIC_ENC_SECRET, 'utf8')
          .digest()
          .subarray(0, 16)
          .toString('hex'),
        session_id_hex: createHash('sha256')
          .update('sid:' + udid, 'utf8')
          .digest()
          .subarray(0, 16)
          .toString('hex'),
        response_key_hex: createHash('sha256')
          .update('resp:' + udid, 'utf8')
          .digest()
          .toString('hex'),
        auth_key_hex: storedData?.authKey ?? '',
      },
      clientData: {
        // Common
        viewer_id: viewerId,
        device_id: randomUUID(),
        ip_address: networks['eth0']?.[0] ?? '',
        platform_os_version: 'Windows 10  (10.0.26200) 64bit',
        carrier: '',
        keychain: 0,
        locale: 'JPN',
        dmm_viewer_id: null,
        dmm_onetime_token: null,
        // Environment dependant (set below)
        device: DeviceType.ANDROID,
        device_name: '',
        graphics_device_name: '',
      },
    };
    if (steam_id.length > 0) {
      obj.clientData.steam_id = steam_id;
      obj.clientData.device = DeviceType.PC;
      obj.clientData.device_name = 'System Product Name (ASUS)';
      obj.clientData.graphics_device_name = 'NVIDIA GeForce RTX 3080';
      // obj.clientData.platform_os_version = 'Windows 10  (10.0.26200) 64bit';
      if (steam_session_ticket.length > 0) {
        obj.clientData.steam_session_ticket = steam_session_ticket;
      }
    } else {
      obj.clientData.device = DeviceType.ANDROID;
      obj.clientData.device_name = 'OnePlus HD 542';
      obj.clientData.graphics_device_name = 'Adreno (TM) 640';
      // obj.clientData.platform_os_version = 'Android OS 7.1.2 / API-25 (N2G48H/rel.se.infra.20200730.150525)';
    }
    console.log('Generated PipelineContext:', obj);
    return obj;
  }

  /**
   * Create a new server-side session and store it in memory.
   * @param steam_id Steam identifier.
   * @param steam_session_ticket Steam session ticket.
   * @param meta Arbitrary metadata associated with the session.
   * @returns Created `UserSession`.
   */
  async createSession(
    steam_id: string,
    steam_session_ticket: string,
    prevSessionId: number | undefined,
  ): Promise<UserSession> {
    console.log('Creating session');
    const storedData = await this.getStoredData(prevSessionId);
    const ctx = this.generateCtx(steam_id, steam_session_ticket, storedData);
    const id = randomUUID();
    const session = new UserSession(id, Date.now(), storedData, ctx);
    this.sessions.set(id, session);
    this.deleteInactiveSessions();
    console.log('Session created with ID:', session.id);
    return session;
  }

  async getStoredData(prevSessionId: number | undefined): Promise<StoredData> {
    if (prevSessionId == null) {
      return;
    }
    const file = fs.readFileSync(path.resolve(moduleDir, '../../assets/storedData.json'), 'utf-8');
    const data = JSON.parse(file) as Record<string, StoredData>;
    return data[prevSessionId.toString()];
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
