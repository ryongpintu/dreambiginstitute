const express = require('express');
const user = require('../routes/users');
const resHeader = require('../middleware/resHeader')
const error = require('../middleware/error');

module.exports = function (app) {
	app.use(express.json());
	app.use(resHeader);
	app.use('/api/users', user);
	app.use(error);

}