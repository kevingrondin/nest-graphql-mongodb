FROM node:14

RUN mkdir /usr/src/app
WORKDIR /usr/src/app
COPY . /usr/src/app

RUN npm run-script build

EXPOSE 3000