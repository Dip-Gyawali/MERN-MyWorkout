import axios from "axios";
import React, { useState } from "react";
import useWorkoutsContext from "../hooks/useWorkoutsContext";

export default function WorkoutForm() {
  const [title, setTitle] = useState("");
  const [weight, setWeight] = useState("");
  const [reps, setReps] = useState("");
  const [error, setError] = useState(null);
  const {dispatch} = useWorkoutsContext()

  async function handleSubmit(e) {
    e.preventDefault();

    const workout = { title, weight, reps };

    try {
      const response = await axios.post(
        "http://localhost:5000/api/workout",
        workout,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setTitle("");
      setWeight("");
      setReps("");
      setError(false);
      console.log("Workout Added", response.data);
      dispatch({type:"CREATE_WORKOUTS", payload: response.data})
    } catch (error) {
      if (error.response) {
        setError(error.response.data.err);
      } else if (error.request) {
        setError("No response from server");
      } else {
        setError(error.message);
      }

      console.error("Error adding workout:", error);
    }
  }

  return (
    <div className="flex flex-col items-center gap-5 mr-32 mt-5 overflow-x-hidden">
        <h1 className="font-bold text-xl text-green-600">Workout Form</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">

        <label>Workout Name:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Weight (in KG):</label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
  
        />

        <label>Reps Performed:</label>
        <input
          type="number"
          value={reps}
          onChange={(e) => setReps(e.target.value)}
        />

        <button className="border-1 bg-green-500 p-2 rounded-xl transition ease-in hover:bg-green-600">Add Workout</button>
        {error && <div className="border-2 border-red-500 p-3 text-center rounded-xl text-yellow-600 text-sm">{error}</div>}
      </form>
    </div>
  );
}
