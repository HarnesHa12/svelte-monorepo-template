FROM node:lts-alpine AS base

FROM base AS builder

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME/bin:$PATH"

RUN corepack enable

RUN apk update
RUN apk add --no-cache libc6-compat

WORKDIR /app

RUN pnpm add --global turbo
COPY . .
RUN turbo prune @acme/web --docker

FROM base AS installer

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME/bin:$PATH"

RUN corepack enable

RUN apk update
RUN apk add --no-cache libc6-compat

WORKDIR /app

COPY --from=builder /app/out/json/ .

RUN pnpm install --frozen-lockfile

COPY --from=builder /app/out/full/ .
COPY --from=builder /app/scripts ./scripts

ENV SKIP_ENV_VALIDATION=true

RUN pnpm run db:generate
RUN pnpm turbo build --filter=@acme/web

FROM base AS runner

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME/bin:$PATH"

RUN corepack enable

RUN apk --no-cache add curl

WORKDIR /app

COPY --from=installer /app .

RUN chmod +x scripts/web.sh

EXPOSE 3000

ENTRYPOINT ["scripts/web.sh"]