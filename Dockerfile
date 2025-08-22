FROM node:lts
WORKDIR /app
COPY . .
RUN npm i
RUN npm run build
RUN rm -rf output
RUN mkdir output
CMD ["node", "dist/src/index.js"]