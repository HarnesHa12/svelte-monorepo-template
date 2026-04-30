import { treaty } from '@elysia/eden';
import type { API } from '.';

// todo: maybe I should create a separate env variable?
export const api = treaty<API>('http://127.0.0.1:5173').api.v1;
