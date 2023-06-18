const express = require('express');

const auth = require('./middlewares/auth');
const validateDifficulty = require('./middlewares/validateDifficulty');
const validateRating = require('./middlewares/validateRating');
const validateCreatedAt = require('./middlewares/validateCreatedAt');
const validateDescription = require('./middlewares/validateDescription');
const validatePrice = require('./middlewares/validatePrice');
const validateName = require('./middlewares/validateName');
const generateToken = require('./utils/generateToken');

const app = express();

app.use(express.json());

app.post('/activities',
  auth,
  validateName,
  validatePrice,
  validateDescription,
  validateCreatedAt,
  validateRating,
  validateDifficulty,
  (_req, res) => {
  res.status(201).json({ message: 'atividade registrada com sucesso!' });
});

app.post('/signup', (_req, res) => {
  const { email, password, firstName, phone } = _req.body;
  if ([email, password, firstName, phone].includes(undefined)) {
    return res.status(400).json({ message: 'Campos ausentes!' });
  }
  const token = generateToken();
  return res.status(200).json({ token });
});

module.exports = app;