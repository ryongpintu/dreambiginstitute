const Joi = require('joi');
// const jwt = require('jsonwebtoken');
// const config = require('config');
const mongoose = require('mongoose');
const suggestionSchema = new mongoose.Schema({
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
  suggestion: {
    type: String,
    required: true,
  },
});

// suggestionSchema.methods.generateAuthToken = function () {

// 	const token = jwt.sign({ _id: this._id, name: this.name, isAdmin: this.isAdmin }, config.get('jwtPrivateKey'));
// 	return token;
// }
const Suggestion = mongoose.model('suggestion', suggestionSchema, 'suggestion');

function validateSuggestion(suggestionData) {
  const schema = Joi.object({
    name: Joi.string().min(5).max(255).required(),
    phone: Joi.string().min(10).max(10).required(),
    suggestion: Joi.string().required(),
  });

  return schema.validate(suggestionData);
}

exports.Suggestion = Suggestion;
exports.validateSuggestion = validateSuggestion;
