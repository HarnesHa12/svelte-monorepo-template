#!/bin/sh
set -e

pnpm run db:deploy

exec node apps/web/build