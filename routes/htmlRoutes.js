const htmlRouter = require('express').Router();
const path = require('path');

// Send the exercise html file
htmlRouter.get('/exercise', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../public', 'exercise.html'));
});

// Send hte stats html file
htmlRouter.get('/stats', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../public', 'stats.html'));
});

module.exports = htmlRouter;
