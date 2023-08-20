const mongoose = require('mongoose');

// run docker mongo image with username and password passed in env and named as mongodb
const db_username = process.env.MONGO_INITDB_ROOT_USERNAME
const db_password = process.env.MONGO_INITDB_ROOT_PASSWORD
// while using docker compose, we can directly use service name
// while runing project locally, we need to provide local uri of mongo db
const serviceURI = process.env.NODE_ENV === "dev" ? "127.0.0.1:27017" : "mongodb"
const connectionURI = `mongodb://${db_username}:${db_password}@${serviceURI}`

const mongoInit = () =>
  new Promise((res, rej) => {
    mongoose
      .connect(connectionURI)
      .then((m) => {
        console.log('DB Connected');
        res();
      })
      .catch((reason) => {
        console.log(reason);
        rej(reason);
      });
  });

function init() {
  const connectPromise = [mongoInit()];
  return Promise.all(connectPromise);
}

module.exports = init;
