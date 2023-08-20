FROM node:18-alpine

# we are going to add env in docker compose file
# ENV MONGO_DB_USERNAME=admin \
    # MONGO_DB_PWD=password

RUN mkdir -p /app

COPY . /app

WORKDIR /app

CMD ["node", "."]