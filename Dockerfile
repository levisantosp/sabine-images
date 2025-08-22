FROM node:lts
WORKDIR /app
COPY . .
RUN npm i
RUN npm run build
CMD ["node", "dist/src/index.js"]