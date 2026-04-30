import Elysia from 'elysia';
import { auth } from '../middlewares/auth';
import type { Locals } from '../types/locals';

export function example(locals: Locals) {
    return new Elysia().use(auth(locals)).get('/example', () => {
        return {
            message: 'example',
        };
    });
}
