const router = require('express').Router();
const Workout = require('../models/Workout');
const Exercise = require('../models/Exercise');

router.get('/api/workouts', async (req, res, next) => {
  try {
    const workouts = await Workout.find({});
    console.log(workouts);
    res.json(workouts);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

module.exports = router;
