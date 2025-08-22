FROM node:lts
WORKDIR /app
COPY . .
RUN npm run build
RUN npm i
CMD ["node", "dist/src/index.js"]