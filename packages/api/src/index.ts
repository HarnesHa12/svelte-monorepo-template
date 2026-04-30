import Elysia from 'elysia';
import { example } from './routes/example';
import type { Locals } from './types/locals';

// todo:
// im not sure I want to continue with elysia
// using auth() to inject decorators into every instance feels like unnecessary boilerplate
// on top of that having to pass user and session into each route adds even more boilerplate
// might be better to stick with tRPC instead?
export function createAPI(locals: Locals) {
    return new Elysia({ prefix: '/api/v1' }).use(example(locals));
}

export type API = ReturnType<typeof createAPI>;
