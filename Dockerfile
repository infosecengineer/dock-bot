FROM node:current-alpine3.14

WORKDIR /usr/src/app

COPY Discord-Bot/* /usr/src/app/

RUN npm install
RUN npm install discord.io winston -save
RUN npm install -g npm@8.5.3

COPY . .

CMD ls /usr/src/app/

CMD [ "node", "bot.js" ]
