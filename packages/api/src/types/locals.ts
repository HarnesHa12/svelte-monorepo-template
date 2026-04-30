import type { Session, User } from '@acme/auth/server';

export type Locals = {
    user: User | null;
    session: Session | null;
};
