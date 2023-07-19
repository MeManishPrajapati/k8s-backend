const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    email: String,
    firstname: String,
    lastname: String
})

mongoose.model('User', userSchema);