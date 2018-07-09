FROM alpine
COPY repositories /etc/apk/repositories 
WORKDIR /puppeteer

RUN apk update && \ 
    apk add nodejs yarn chromium && \
    export PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=1 && \
    yarn add puppeteer

COPY example.js /puppeteer
RUN adduser -D puppeteer && \
    chown -R puppeteer /puppeteer
USER puppeteer
