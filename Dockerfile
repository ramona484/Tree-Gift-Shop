FROM node:14.15-alpine3.12
WORKDIR /src
COPY package*.json ./
COPY . .
RUN npm install

EXPOSE 8080
CMD [ "npm", "start" ]