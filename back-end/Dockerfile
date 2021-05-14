# specify the node base image with your desired version node:<version>
FROM node:16-alpine3.11

# create & set working directory
RUN mkdir -p /home/node/app

WORKDIR /home/node/app

COPY package.json package.json

# install dependencies
RUN yarn install && yarn cache clean

COPY . .

# replace this with your application's default port
EXPOSE 3000

CMD yarn start 