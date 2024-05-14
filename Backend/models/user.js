const Joi = require('joi');
// const jwt = require('jsonwebtoken');
// const config = require('config');
const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255,
  },
  phone: {
    type: String,
    required: true,
  },
  subjectChoice: {
    type: String,
  },

  board: {
    type: String,
    required: true,
  },

  presentClass: {
    type: String,
    required: true,
  },
});

// userSchema.methods.generateAuthToken = function () {

// 	const token = jwt.sign({ _id: this._id, name: this.name, isAdmin: this.isAdmin }, config.get('jwtPrivateKey'));
// 	return token;
// }
const User = mongoose.model('students', userSchema, 'students');

function validateUser(userData) {
  const schema = Joi.object({
    name: Joi.string().min(5).max(255).required(),
    phone: Joi.string().min(10).max(10).required(),
    subjectChoice: Joi.string().required(),
    board: Joi.string().required(),
    presentClass: Joi.string().required(),
  });

  return schema.validate(userData);
}

exports.User = User;
exports.validate = validateUser;
