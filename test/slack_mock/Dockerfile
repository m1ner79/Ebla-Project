FROM node:12-alpine

WORKDIR /app

# Install dependencies
COPY package*.json ./

RUN npm install

# Copy sources
COPY . .

ENTRYPOINT [ "node", "/app/index" ]