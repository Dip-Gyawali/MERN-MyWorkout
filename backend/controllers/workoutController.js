const Workout = require("../models/workoutModel");
const mongoose = require("mongoose");

//get app workouts
const getAllWorkouts = async (req, res) => {
  const workout = await Workout.find({}).sort({ createdAt: -1 });
  res.status(200).json(workout);
};

const getSingleWorkout = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).json({ message: "Invalid Id" });
  }
  //this is same as findOne({_id: ObjectId(id)}) here mongoose puts automatic objectid and _id when findById is used
  const workout = await Workout.findById(id);
  if (!workout) {
    return res.status(400).json({ message: `Cannot Find Workout with ${id}` });
  }
  res.status(200).json(workout);
};

const addWorkout = async (req, res) => {
  const { title, weight, reps } = req.body;
  try {
    //Workout.create is same as db.workouts.insertOne({})
    let workout = await Workout.create({ title, weight, reps });
    res.status(201).json(workout);
  } catch (err) {
    res.status(400).json({ err: "Cannot Add New Workout" });
  }
};

const deleteWorkout = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).json({ message: "Invalid Id" });
  }
  const workout = await Workout.findByIdAndDelete({ _id: id });
  if (!workout) {
    return res.status(400).json({ message: `Cannot Find Workout with ${id}` });
  }
  res.status(200).json(workout);
};

const updateWorkout = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).json({ message: "Invalid Id" });
  }
  const workout = await Workout.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );
  if (!workout) {
    return res.status(400).json({ message: `Cannot Find Workout with ${id}` });
  }
  res.status(200).json(workout);
};

module.exports = {
  getAllWorkouts,
  getSingleWorkout,
  addWorkout,
  deleteWorkout,
  updateWorkout,
};
