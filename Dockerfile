FROM node:18

# Create app directory
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install
RUN npm ci --only=production

# Bundle app source
COPY src .

EXPOSE 8080
CMD [ "node", "index.js" ]
