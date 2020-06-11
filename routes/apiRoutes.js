const apiiRouter = require('express').Router();
const Workout = require('../models/Workout');

/**
 * Get Route. Returns all the worksouts in the DB
 */
apiiRouter.get('/api/workouts', async (req, res) => {
  try {
    let allWorkouts = await Workout.find({});
    allWorkouts.forEach((workout) => {
      workout.totalDuration = workout.exercises.reduce(
        (totalTime, currentExercise) => {
          return totalTime + currentExercise.duration;
        },
        0
      );
    });
    res.json(allWorkouts);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

/**
 * Route for creating a new workout
 */

apiiRouter.post('/api/workouts', async (req, res) => {
  try {
    const newWorkout = new Workout(req.body);
    const createdWorkout = await newWorkout.save();
    // console.log(createdWorkout);
    res.status(201).json(createdWorkout);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

/**
 * Route for updating an existing workout
 * Adds the given exercise to current array of exercies.
 */
apiiRouter.put('/api/workouts/:id', async (req, res) => {
  try {
    const workoutToUpdate = await Workout.findById(req.params.id);
    // console.log(req.body);
    workoutToUpdate.exercises.push(req.body);
    const updatedWorkout = await workoutToUpdate.save();
    res.status(200).json(updatedWorkout);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

apiiRouter.get('/api/workouts/range', (req, res) => {
  res.status(307).redirect('/api/workouts');
});

module.exports = apiiRouter;
