const mongoose = require('mongoose');

const mongoInit = () => new Promise((res, rej)=>{
    mongoose.connect('mongodb://127.0.0.1:27017/kube').then((m)=>{
        console.log("DB Connected");
        res()
    }).catch(reason => {
        console.log(reason);
        rej(reason)
    });
})

function init(){
    const connectPromise = [mongoInit()]
    return Promise.all(connectPromise)
}

module.exports = init