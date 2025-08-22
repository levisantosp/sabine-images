FROM node:lts
WORKDIR /app
COPY . .
RUN npm run build
CMD ["node", "dist/src/index.js"]