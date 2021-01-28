FROM node:14
WORKDIR /src
COPY package*.json ./
COPY . .
RUN npm install

EXPOSE 8080
CMD [ "npm", "start" ]