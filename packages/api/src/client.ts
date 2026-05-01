import { createTRPCClient, httpBatchLink } from '@trpc/client';
import superjson from 'superjson';
import type { AppRouter } from './router';

export const api = createTRPCClient<AppRouter>({
    links: [
        httpBatchLink({
            url: 'http://127.0.0.1:5173/api/v1',
            transformer: superjson,
        }),
    ],
});
