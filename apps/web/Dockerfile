FROM oven/bun:latest AS base

FROM base AS builder

WORKDIR /app

RUN bun add --global turbo
COPY . .
RUN turbo prune @acme/web --docker

FROM base AS installer

WORKDIR /app

COPY --from=builder /app/out/json/ .

RUN bun install --frozen-lockfile

COPY --from=builder /app/out/full/ .
COPY --from=builder /app/scripts ./scripts

ENV SKIP_ENV_VALIDATION=1

RUN bun turbo build --filter=@acme/web

FROM base AS runner

WORKDIR /app

COPY --from=installer /app .

RUN chmod +x scripts/web.sh

EXPOSE 3000

ENTRYPOINT ["scripts/web.sh"]