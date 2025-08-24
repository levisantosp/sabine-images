FROM node:lts
WORKDIR /app
COPY . .
RUN npm i
RUN npm run build
RUN rm -rf output && mkdir output
RUN node dist/scripts/genCards.js
CMD ["node", "dist/src/index.js"]