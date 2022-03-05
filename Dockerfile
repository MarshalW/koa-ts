FROM node:17.6.0-alpine3.15

RUN set -eux && sed -i 's/dl-cdn.alpinelinux.org/mirrors.ustc.edu.cn/g' /etc/apk/repositories

RUN \
    apk --no-cache add \
    tini 

WORKDIR /usr/src/app

ENV APP_PORT 4000
EXPOSE ${APP_PORT}

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

CMD [ "node", "dist/server" ]

# CMD [ "tail", "-f", "." ]

# ENTRYPOINT [ "tini","--"] 

# CMD [ "node", "app" ]