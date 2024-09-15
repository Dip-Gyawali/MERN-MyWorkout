import axios from "axios";
import React, { useEffect, useState } from "react";
import Allworkouts from "./Allworkouts";
import useWorkoutsContext from "../hooks/useWorkoutsContext";

export default function Home() {
  const {workouts,dispatch} = useWorkoutsContext();
  const apiURL = "http://localhost:5000/api/workout";

  async function getWorkouts() {
    let res = await axios.get(apiURL);
    //    console.log(res);
    dispatch({type:"SET_WORKOUTS", payload: res.data})
  }

  useEffect(() => {
    getWorkouts();
  }, []);

  return (
    <div className="my-10 mx-32 flex flex-col gap-5 w-[50%]">
      {workouts &&
        workouts.map((ele) => (
          <Allworkouts key={ele._id} workout = {ele}/>
        ))}
    </div>
  );
}
