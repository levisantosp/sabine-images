FROM node:lts-alpine

RUN npm i -g pnpm

WORKDIR /app

COPY package.json pnpm-lock-yaml pnpm-workspace.yaml /app/
COPY . .

RUN pnpm i --fronze-lockfile
RUN pnpm build
RUN rm -rf output && mkdir output
RUN node dist/scripts/genCards.js

CMD ["pnpm", "start"]