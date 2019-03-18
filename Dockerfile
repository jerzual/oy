FROM node:11

WORKDIR /usr/src/app

COPY . .

RUN npm i -g typescript@^3.2.0 nodemon ts-node

