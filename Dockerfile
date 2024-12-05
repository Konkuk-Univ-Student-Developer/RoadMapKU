FROM node:22 AS build
WORKDIR /RoadMapKU
COPY package.json ./
COPY yarn.lock ./
RUN yarn install
COPY . ./
RUN yarn build
EXPOSE 3000
CMD ["yarn", "serve", "-s", "build"]