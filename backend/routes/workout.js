const express = require("express");
const route = express.Router();
const {
  getAllWorkouts,
  getSingleWorkout,
  addWorkout,
  deleteWorkout,
  updateWorkout,
} = require("../controllers/workoutController");

//get all workouts
route.get("/", getAllWorkouts);

//get single workout by id
route.get("/:id", getSingleWorkout);

//add new workout
route.post("/", addWorkout);

//delete workout
route.delete("/:id", deleteWorkout);

//update collection particular data
route.patch("/:id", updateWorkout);

module.exports = route;
