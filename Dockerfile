FROM node:12-slim 

WORKDIR /usr/src/app

COPY package.json ./
COPY yarn.lock ./
COPY tsconfig.json ./

# install dependencies
RUN yarn install

COPY . .

# build application
RUN yarn build

ENV NODE_ENV production
EXPOSE 3001

CMD ["yarn", "start"]