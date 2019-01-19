FROM node:10

WORKDIR /usr/src/app

COPY package.json .

COPY . .

RUN npm ci

RUN npm run build

EXPOSE 3000
EXPOSE 4000

CMD [ "npm", "start" ]