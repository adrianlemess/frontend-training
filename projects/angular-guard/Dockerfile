FROM node:10.16.0-alpine

ADD package.json package-lock.json /tmp/build/

WORKDIR /tmp/build/

RUN npm install && npm install -g pm2

ADD ./dist /tmp/build
ADD ./server.js   /tmp/build/

EXPOSE 8080

CMD ["pm2", "start", "server.js", "--no-daemon"]
