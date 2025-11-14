FROM node:22-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY index.js ./
COPY bin.js ./

EXPOSE 3000

CMD ["node", "bin.js"]
