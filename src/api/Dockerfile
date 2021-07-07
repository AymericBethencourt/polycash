FROM node:alpine

RUN mkdir -p /app
WORKDIR /app
COPY . /app
RUN cd /app

ENV CHROME_BIN="/usr/bin/chromium-browser" \
    PUPPETEER_SKIP_CHROMIUM_DOWNLOAD="true"
RUN set -x \
    && apk update \
    && apk upgrade \
    && apk add --no-cache \
    udev \
    ttf-freefont \
    chromium \
    && yarn install \
    && yarn add puppeteer

RUN yarn build
CMD ["node", "dist/index.js"]
