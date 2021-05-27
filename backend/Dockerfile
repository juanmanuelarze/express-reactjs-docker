FROM node:15-alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8081
CMD [ "node_modules/nodemon/bin/nodemon.js", "app.js" ]
