FROM node:18-alpine

RUN mkdir - /app

COPY . /app

RUN cd /app

CMD ['node', "."]