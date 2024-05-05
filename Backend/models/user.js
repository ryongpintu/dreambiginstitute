const Joi = require('joi');
// const jwt = require('jsonwebtoken');
// const config = require('config');
const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		minlength: 5,
		maxlength: 255
	},
	email: {
		type: String,
		unique: true,
		minlength: 5,
		maxlength: 255,
		required: true
	},
	phone: {
		type: String,
		required: true
	},
	subjectChoice: {
		type: String
	},

	message: {
		type: String
	}
});

// userSchema.methods.generateAuthToken = function () {

// 	const token = jwt.sign({ _id: this._id, name: this.name, isAdmin: this.isAdmin }, config.get('jwtPrivateKey'));
// 	return token;
// }
const User = mongoose.model('students', userSchema, 'students');


function validateUser(userData) {
	const schema = Joi.object({
		name: Joi.string().min(5).max(255).required(),
		email: Joi.string().min(5).max(255).required().email(),
		phone: Joi.string().min(10).max(10).required(),
		subjectChoice: Joi.string().required(),
		message: Joi.string()
	})

	return schema.validate(userData);
}

exports.User = User;
exports.validate = validateUser;