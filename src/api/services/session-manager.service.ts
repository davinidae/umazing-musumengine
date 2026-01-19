import { InitializedUserSession, UserData } from '../models';
import { type UserSession } from './user-session.service';
import { assertInitializedUserSession } from './user-session.service';

class SessionManager {
  sessions = new Map<string, InitializedUserSession>();

  getSession(userData: UserData): InitializedUserSession {
    const session = this.sessions.get(userData.userId);
    if (session == null) {
      throw new Error('Session not found for userId: ' + userData.userId);
    }
    assertInitializedUserSession(session);
    return session;
  }

  addSession(userSession: UserSession): void {
    if (userSession.userId == null) {
      throw new Error('Cannot add session: userId is null');
    }
    assertInitializedUserSession(userSession);
    this.sessions.set(userSession.userId, userSession);
  }
}

export const sessionManager = new SessionManager();
