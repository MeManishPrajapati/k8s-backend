const mongoose = require('mongoose');

const connectionURILocal = 'mongodb://admin:password@127.0.0.1:27017'

const connectionURIContainer = 'mongodb://admin:password@mongodb'

const mongoInit = () =>
  new Promise((res, rej) => {
    mongoose
      .connect(connectionURIContainer)
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
