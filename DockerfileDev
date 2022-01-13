FROM node:16-alpine

RUN mkdir -p /app

WORKDIR /app

COPY package*.json ./
COPY yarn.lock ./

RUN ls -la

RUN yarn install

RUN ls -la

EXPOSE 3000

COPY . ./

RUN ls -la

RUN yarn build

CMD ["yarn", "dev"]

