import type { Locals } from './types/locals';

export function createTRPCContext(locals: Locals) {
    return {
        user: locals.user,
        session: locals.session,
    };
}

export type Context = ReturnType<typeof createTRPCContext>;
