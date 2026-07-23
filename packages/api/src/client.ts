import { createTRPCClient, httpBatchLink } from '@trpc/client';
import superjson from 'superjson';
import type { AppRouter } from './router';

export const api = createTRPCClient<AppRouter>({
    links: [
        httpBatchLink({
            // todo: fix
            url: 'http://localhost:5173/api/v1',
            transformer: superjson,
        }),
    ],
});
