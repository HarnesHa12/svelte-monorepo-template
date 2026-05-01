import type { TRPCRouterRecord } from '@trpc/server';
import { protectedProcedure, publicProcedure } from '../trpc';

export const exampleRoute = {
    hello: publicProcedure.query(() => {
        return {
            message: 'hi',
        };
    }),
    helloProtected: protectedProcedure.query(({ ctx }) => {
        return {
            message: `hi ${ctx.user?.name}`,
        };
    }),
} satisfies TRPCRouterRecord;
