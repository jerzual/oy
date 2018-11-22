FROM node

WORKDIR /opt/oy

COPY package.json .

RUN npm install

COPY . .

EXPOSE 8080

CMD [ "npm", "start" ]