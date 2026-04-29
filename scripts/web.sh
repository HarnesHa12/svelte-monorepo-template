#!/bin/sh
set -e

bun run db:deploy

exec bun apps/web/build/index.js