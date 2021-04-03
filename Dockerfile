FROM node:14

WORKDIR /usr/src/app

COPY . .

RUN npm i -g typescript@^4.2.0 nodemon ts-node

