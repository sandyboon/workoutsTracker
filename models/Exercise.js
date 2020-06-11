const mongoose = require('mongoose');
const Schema = mongoose.Schema;
/**
 * This is not being used. I was hoping to establish a relation between workouts and Exercise models
 * But the given seed file, I changed my mind because the seed file doesn't add an id to exercises.
 */
const exerciseSchema = new Schema({
  type: String,
  name: String,
  duration: Number,
  weight: Number,
  sets: Number,
  reps: Number,
  distance: Number,
});

const Exercise = mongoose.model('Exercise', exerciseSchema);

module.exports = Exercise;
