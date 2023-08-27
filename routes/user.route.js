const express = require('express');
const { getUserInfo, addUserInfo, getSpecificUserInfo, updateUserInfo, deleteUserInfo } = require('../controllers/user.controller');

const userRoute = express.Router();

userRoute.get('/', getUserInfo);

userRoute.get('/:id', getSpecificUserInfo);

userRoute.post('/', addUserInfo);

userRoute.put('/:id', updateUserInfo);

userRoute.delete('/:id', deleteUserInfo);

module.exports = userRoute;
