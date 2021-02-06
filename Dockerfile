FROM node:14.15.4-alpine3.12

LABEL maintainer="ramona"
RUN adduser ramona

WORKDIR /src
COPY package*.json ./
COPY . .
RUN npm install

EXPOSE 8080

USER ramona

CMD [ "npm", "start" ]

