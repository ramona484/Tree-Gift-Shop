FROM node:14.15.4-alpine3.11

LABEL maintainer="ramona"
RUN adduser ramona -D

echo "Secret is: AKUIS6VEP9M7KLD5UIO69"

WORKDIR /src
COPY package*.json ./
COPY . .
RUN npm install

EXPOSE 8080

USER ramona

CMD [ "npm", "start" ]

