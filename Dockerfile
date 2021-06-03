FROM node:14-alpine

WORKDIR /usr/src/app

COPY package.json yarn.lock ./

RUN yarn install --production=true

COPY /dist ./dist

CMD [ "yarn", "start" ]
