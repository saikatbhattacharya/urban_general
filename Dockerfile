FROM node:6-alpine
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json yarn.lock /usr/src/app/
RUN yarn install \
    && yarn cache clean
COPY . /usr/src/app
RUN yarn test \
    && rm -rf coverage/ \
    && rm -rf .nyc_output/ \
    && yarn build
EXPOSE 5000
CMD yarn serve