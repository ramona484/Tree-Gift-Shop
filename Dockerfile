FROM node:14.15.4-alpine3.11

LABEL maintainer="ramona"
RUN adduser ramona -D

WORKDIR /src
COPY package*.json ./
COPY . .
RUN npm install

EXPOSE 8080

USER ramona

CMD [ "npm", "start" ]

