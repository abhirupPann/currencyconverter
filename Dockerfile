FROM node:18-alpine

WORKDIR /react-app

COPY . .
RUN npm install


CMD ["npm", "run", "dev"]