import type { Session, User } from '@acme/auth/server';
import Elysia from 'elysia';

export function auth(user?: User | null, session?: Session | null) {
    return new Elysia({ name: 'auth' })
        .decorate('user', user)
        .decorate('session', session);
}
