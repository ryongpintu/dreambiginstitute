const auth = require('../middleware/auth');
const { User, validate } = require('../models/user');
const config = require('config');
const jwt = require('jsonwebtoken');
const express = require('express');
const _ = require('lodash');
const router = express.Router();

router.get('/me', async (req, res) => {

	res.send("server is up");
});
router.post('/', async (req, res) => {
	console.log("Backend Body " + JSON.stringify(req.body));
	const { error } = validate(req.body);

	if (error) return res.status(404).send(error.details[0].message);
	let user = await User.findOne({ email: req.body.email });
	if (user) return res.status(400).send('User already Exist');
	user = await User(
		{
			name: req.body.name,
			email: req.body.email,
			phone: req.body.phone,
			subjectChoice: req.body.subjectChoice,
			message: req.body.message
		}
	);
	await user.save();

	res.send({ "message": "request has been sent" })

});


module.exports = router;
