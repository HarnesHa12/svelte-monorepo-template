import type { Session, User } from '@acme/auth/server';
import Elysia from 'elysia';
import { auth } from '../middlewares/auth';

export function example(user?: User | null, session?: Session | null) {
    return new Elysia().use(auth(user, session)).get('/example', () => {
        return {
            message: 'example',
        };
    });
}
