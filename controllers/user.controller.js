const UserModel = require('../models/user.model');

async function getUserInfo(req, res) {
  const users = await UserModel.find({});
  res.json(users);
}

async function getSpecificUserInfo(req, res) {
  const { id } = req.params;
  const users = await UserModel.findById(id);
  res.json(users.toJSON({ virtuals: true }));
}

async function addUserInfo(req, res) {
  const { email, firstname, lastname } = req.body;
  try {
    await UserModel.create({ email, firstname, lastname });
    res.json({
      ...req.body,
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: err.message });
  }
}

async function updateUserInfo(req, res) {
  const { id } = req.params;
  try {
    await UserModel.findOneAndUpdate({ _id: id }, { ...req.body });
    res.json({
      ...req.body,
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: err.message });
  }
}

module.exports = {
  getUserInfo,
  addUserInfo,
  getSpecificUserInfo,
  updateUserInfo,
};
