FROM node:12.20.1-alpine3.10

WORKDIR /src

COPY package*.json ./
COPY . .

RUN npm ci --only=production

EXPOSE 8080

CMD [ "npm", "start" ]