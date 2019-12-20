FROM node:12

WORKDIR /usr/src/app

COPY . .

RUN npm i -g typescript nodemon ts-node typeorm

EXPOSE 3000
EXPOSE 7878

CMD npm run dev
