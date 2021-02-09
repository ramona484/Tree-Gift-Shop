FROM node:lts-alpine3.12

WORKDIR /src

COPY package*.json ./
COPY . .

RUN npm ci --only=production

EXPOSE 8080

CMD [ "npm", "start" ]