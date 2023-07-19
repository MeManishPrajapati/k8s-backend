const express = require("express");
const { getUserInfo } = require("../controllers/user.controller");

const userRoute = express.Router();

userRoute.get('/', getUserInfo)

module.exports = userRoute