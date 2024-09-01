const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  isDriver: Boolean
});

module.exports = mongoose.model('User', userSchema);
