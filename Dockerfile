FROM node:latest
WORKDIR src
ADD package*.json ./
ADD . .
RUN npm install

EXPOSE 8080
CMD [ "npm", "start" ]

  AKUIS6VEP9M7KLD5UIO69