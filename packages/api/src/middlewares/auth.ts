import Elysia from 'elysia';
import type { Locals } from '../types/locals';

export function auth(locals: Locals) {
    return new Elysia({ name: 'auth' })
        .decorate('user', locals.user)
        .decorate('session', locals.session);
}
