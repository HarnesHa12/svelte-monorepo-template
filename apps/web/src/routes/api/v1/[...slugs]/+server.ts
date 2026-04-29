import { createAPI } from '@acme/api/server';
import type { RequestHandler } from './$types';

export const fallback: RequestHandler = ({ request, locals }) =>
    createAPI(locals.user, locals.session).handle(request);
