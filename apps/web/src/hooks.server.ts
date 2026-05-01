import { appRouter, createTRPCContext } from '@acme/api/server';
import { auth } from '@acme/auth/server';
import type { Handle } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';
import { fetchRequestHandler } from '@trpc/server/adapters/fetch';
import { svelteKitHandler } from 'better-auth/svelte-kit';
import { building } from '$app/environment';

const authHandle: Handle = async ({ event, resolve }) => {
    const session = await auth.api.getSession({
        headers: event.request.headers,
    });

    if (session) {
        event.locals.session = session.session ?? null;
        event.locals.user = session.user ?? null;
    }

    return svelteKitHandler({ event, resolve, auth, building });
};

const apiHandle: Handle = ({ event, resolve }) => {
    if (event.url.pathname.startsWith('/api/v1')) {
        return fetchRequestHandler({
            endpoint: '/api/v1',
            req: event.request,
            router: appRouter,
            createContext: () => createTRPCContext(event.locals),
        });
    }

    return resolve(event);
};

// todo: maybe move these handlers to their respective packages
export const handle = sequence(authHandle, apiHandle);
