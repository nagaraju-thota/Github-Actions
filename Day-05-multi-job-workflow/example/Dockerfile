FROM node:16-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY dist/index.js .
CMD ["node", "index.js"]