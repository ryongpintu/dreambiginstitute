const auth = require('../middleware/auth');
const { User, validate } = require('../models/user');
const { Faculty, ValidateFaculty } = require('../models/faculty');
const { Suggestion, validateSuggestion } = require('../models/suggestion');
const config = require('config');
const jwt = require('jsonwebtoken');
const express = require('express');
const _ = require('lodash');
const router = express.Router();

router.get('/me', async (req, res) => {
  res.send('server is up');
});
router.post('/', async (req, res) => {
  const { error } = validate(req.body);

  if (error) return res.status(404).send(error.details[0].message);
  let user = await User.findOne({ phone: req.body.phone });
  if (user) return res.status(400).send('Phone number already exist');
  user = await User({
    name: req.body.name,
    phone: req.body.phone,
    subjectChoice: req.body.subjectChoice,
    board: req.body.board,
    presentClass: req.body.presentClass,
  });
  await user.save();

  res.send({ result: 'success' });
});

router.post('/faculty', async (req, res) => {
  const { error } = ValidateFaculty(req.body);

  if (error) return res.status(404).send(error.details[0].message);
  let user = await Faculty.findOne({ phone: req.body.phone });
  if (user) return res.status(400).send('Phone already Exist');

  let userEmail = await Faculty.findOne({ email: req.body.email });
  if (userEmail) return res.status(400).send('Email already Exist');

  let faculty = await Faculty({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    board: req.body.board,
    address: req.body.address,
    qualification: req.body.qualification,
  });
  await faculty.save();

  res.send({ result: 'success' });
});

router.post('/add/suggestion', async (req, res) => {
  const { error } = validateSuggestion(req.body);

  if (error) return res.status(404).send(error.details[0].message);

  let suggestion = await Suggestion({
    name: req.body.name,
    phone: req.body.phone,
    suggestion: req.body.suggestion,
  });
  await suggestion.save();

  res.send({ result: 'success' });
});

module.exports = router;
