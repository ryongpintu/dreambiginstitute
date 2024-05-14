const Joi = require('joi');
// const jwt = require('jsonwebtoken');
// const config = require('config');
const mongoose = require('mongoose');
const facultySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255,
  },
  email: { type: String, default: '' },
  phone: {
    type: String,
    required: true,
  },
  board: {
    type: String,
  },

  address: {
    type: String,
  },

  qualification: {
    type: String,
    required: true,
  },
});

// facultySchema.methods.generateAuthToken = function () {

// 	const token = jwt.sign({ _id: this._id, name: this.name, isAdmin: this.isAdmin }, config.get('jwtPrivateKey'));
// 	return token;
// }
const Faculty = mongoose.model('faculty', facultySchema, 'faculty');

function ValidateFaculty(facultyData) {
  const schema = Joi.object({
    name: Joi.string().min(5).max(255).required(),
    phone: Joi.string().min(10).max(10).required(),
    board: Joi.string().required(),
    address: Joi.string(),
    email: Joi.optional(),
    qualification: Joi.string().required(),
  });

  return schema.validate(facultyData);
}

exports.Faculty = Faculty;
exports.ValidateFaculty = ValidateFaculty;
