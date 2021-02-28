FROM node:14

WORKDIR /usr/src/app

COPY . .

RUN npm i -g typescript@^3.9.0 nodemon ts-node

