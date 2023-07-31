const express = require("express");
const { getUserInfo, addUserInfo, getSpecificUserInfo } = require("../controllers/user.controller");

const userRoute = express.Router();

userRoute.get('/', getUserInfo)

userRoute.get('/:id', getSpecificUserInfo)

userRoute.post('/', addUserInfo)

module.exports = userRoute