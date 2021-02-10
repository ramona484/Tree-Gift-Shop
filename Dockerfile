FROM node:14.15.5-buster

WORKDIR /src

COPY package*.json ./
COPY . .

RUN npm ci --only=production

RUN adduser ramona -D
USER ramona

EXPOSE 8080

CMD [ "npm", "start" ]