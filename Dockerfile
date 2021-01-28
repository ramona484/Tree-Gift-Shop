FROM node:15.7.0-alpine3.10
WORKDIR /src
COPY package*.json ./
COPY . .
RUN npm install

EXPOSE 8080
CMD [ "npm", "start" ]