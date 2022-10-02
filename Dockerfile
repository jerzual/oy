FROM node:16

WORKDIR /usr/src/app

COPY . .

RUN npm i -g typescript nodemon ts-node

RUN npm run build
