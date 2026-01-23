import { readFileSync, writeFileSync } from 'fs';
import { AuthMode, InitializedUserSession, RequestResult, UmaData, UserData } from '../models';
import { UserSession } from './user-session.service';
import { assertInitializedUserSession } from './user-session.service';
import { Client } from 'steamworks.js';

type DatabaseSchema = {
  umaData: UmaData;
  auth: AuthMode;
} & Partial<{
  lastResult: RequestResult;
}>;

class SessionManager {
  async getDatabase(): Promise<Map<string, DatabaseSchema>> {
    const database = new Map<string, DatabaseSchema>();
    const sessionData: Record<string, DatabaseSchema> = JSON.parse(
      await readFileSync('src/database/user-sessions.json', 'utf-8'),
    );
    for (const [userId, data] of Object.entries(sessionData)) {
      database.set(userId, data);
    }
    return database;
  }

  async getSession(userData: UserData, steamClient: Client): Promise<InitializedUserSession> {
    const database = await this.getDatabase();
    const sessionData = database.get(userData.userId);
    if (sessionData == null) {
      throw new Error('Session not found for userId: ' + userData.userId);
    }
    const session = new UserSession(
      sessionData.umaData,
      sessionData.auth,
      steamClient,
      userData.userId,
      sessionData.lastResult,
    );
    await session.initialize();
    assertInitializedUserSession(session);
    return session;
  }

  async addSession(userSession: UserSession): Promise<void> {
    if (userSession.userId == null) {
      throw new Error('Cannot add session: userId is null');
    }
    assertInitializedUserSession(userSession);
    const database = await this.getDatabase();
    database.set(userSession.userId, {
      umaData: userSession.umaData,
      auth: userSession.auth,
    });
    await writeFileSync(
      'src/database/user-sessions.json',
      JSON.stringify(Object.fromEntries(database), null, 2),
      'utf-8',
    );
  }

  async saveLastResult(userSession: UserSession): Promise<void> {
    if (userSession.userId == null) {
      throw new Error('Cannot save results: userId is null');
    }
    assertInitializedUserSession(userSession);
    const database = await this.getDatabase();
    const sessionData = database.get(userSession.userId);
    if (sessionData == null) {
      return;
    }
    sessionData.lastResult = userSession.client.results[userSession.client.results.length - 1];
    database.set(userSession.userId, sessionData);
    await writeFileSync(
      'src/database/user-sessions.json',
      JSON.stringify(Object.fromEntries(database), null, 2),
      'utf-8',
    );
  }
}

export const sessionManager = new SessionManager();
