import { exampleRoute } from './routes/example';
import { router } from './trpc';

export const appRouter = router({
    ...exampleRoute,
    // or
    // example: exampleRoute,
});

export type AppRouter = typeof appRouter;
