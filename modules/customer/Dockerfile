FROM node:18.8.0-alpine3.16 AS builder

WORKDIR /app/
COPY ./ /app/
RUN yarn install
RUN yarn run build

FROM nginx:stable-alpine

COPY --from=builder /app/build/ /usr/share/nginx/html

#  RUN sed -i -e 's/listen.*/listen 3000;/g' /etc/nginx/conf.d/default.conf
