FROM oven/bun:1-alpine

WORKDIR /app

COPY package.json bun.lock /app/
COPY . .

RUN bun i --frozen-lockfile
RUN bun compile
RUN rm -rf output && mkdir output
RUN node dist/scripts/genCards.js

CMD ["bun", "start"]