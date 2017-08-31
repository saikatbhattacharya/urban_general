FROM node:6-alpine
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . /usr/src/app
RUN yarn install \
    && yarn cache clean \
    && yarn test \
    && yarn build
    && mkdir /tmp
    && mv -f package.json src/server /tmp/ \
    && rm -rf *
    && mv /tmp .
    && rm -rf /tmp
    && yarn install --prod
CMD yarn serve