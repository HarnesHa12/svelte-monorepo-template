import type { Session, User } from '@acme/auth/server';

declare global {
    namespace App {
        // interface Error {}
        interface Locals {
            session: Session | null;
            user: User | null;
        }
        // interface PageData {}
        // interface PageState {}
        // interface Platform {}
    }
}
