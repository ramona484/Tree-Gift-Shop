FROM node:15.8.0-alpine3.10

LABEL maintainer="ramona"
RUN adduser ramona -D

ENV AWS_KEY=AKUIS6VEP9M7KLD5UIO69

WORKDIR /src
COPY package*.json ./
COPY . .
RUN npm install

EXPOSE 8080

USER ramona

CMD [ "npm", "start" ]

