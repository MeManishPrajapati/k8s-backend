const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, trim: true, required: true },
  firstname: String,
  lastname: String,
});

// todo: Add plugins
// hooks
// pre [before event complete]
// post [after event complete]

userSchema.pre('validate', async function (next) {
  console.log('Validating data:', JSON.stringify(this));
  next();
});

userSchema.post('validate', async function (error, doc, next) {
  if (error) console.log('Error while validating data:', JSON.stringify(this));
  else console.log('Validated data:', JSON.stringify(this));
  next();
});

// you can send event based on document creation
// Ex. Can add some checks/validations
userSchema.pre('save', async function (next) {
  var current_data = this;
  console.log('Got request to store data:', JSON.stringify(current_data));
  const userExist = await this.constructor.findOne({ email: this.email });
  if (userExist) {
    next(new Error('User already exist.'));
  }
  next();
});

// Ex. when new user created, we can send analytical data OR send an email
userSchema.post('save', function (doc) {
  // todo: add kafka event
  console.log('Data has been stored:', doc);
});

userSchema.pre('findOneAndUpdate', function (next) {
  console.log(
    `Got request to find: ${JSON.stringify(this.getFilter())} and update: ${JSON.stringify(this.getUpdate())}`,
  );
  next();
});
userSchema.post('findOneAndUpdate', function () {
  console.log(`Updated in: ${JSON.stringify(this.getFilter())} changes: ${JSON.stringify(this.getUpdate())}`);
});

const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;
