FROM node:lts-alpine

WORKDIR /src

COPY package*.json ./
COPY . .

RUN npm ci --only=production


EXPOSE 8080

CMD [ "npm", "start" ]
