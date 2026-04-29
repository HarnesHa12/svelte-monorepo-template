import { auth } from '@acme/auth/server';
import { svelteKitHandler } from 'better-auth/svelte-kit';
import { building } from '$app/environment';

export async function handle({ event, resolve }) {
    const session = await auth.api.getSession({
        headers: event.request.headers,
    });

    if (session) {
        event.locals.session = session.session ?? null;
        event.locals.user = session.user ?? null;
    }

    return svelteKitHandler({ event, resolve, auth, building });
}
