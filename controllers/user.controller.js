const UserModel = require("../models/user.model")

async function getUserInfo(req, res){
    const users = await UserModel.find({})
    res.json(users)
}

async function getSpecificUserInfo(req, res){
    const { id } = req.params
    const users = await UserModel.findById(id)
    res.json(users)
}

async function addUserInfo(req, res){
    const {email, firstname, lastname} = req.body;
    await UserModel.create({email, firstname, lastname})
    res.json({
        ...req.body
    })
}

module.exports = {
    getUserInfo,
    addUserInfo,
    getSpecificUserInfo
}