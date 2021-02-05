FROM node:latest

LABEL maintainer="ramona"
RUN adduser ramona

WORKDIR src
ADD package*.json ./
ADD . .
RUN npm install

EXPOSE 8080

USER ramona

CMD [ "npm", "start" ]

