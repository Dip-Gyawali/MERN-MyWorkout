import React from "react";
import useWorkoutsContext from "../hooks/useWorkoutsContext";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import moment from 'moment';

export default function Allworkouts({ workout }) {
    const {dispatch} = useWorkoutsContext();
    async function handleDelete(){
        try{
         const response = await axios.delete('http://localhost:5000/api/workout/'+ workout._id);
         dispatch({type:"DELETE_WORKOUTS", payload:response.data})
        }
        catch(err){
            console.log(err);
        }
    }
  return (
      <div className="flex flex-col gap-5 p-5 border-green-600 rounded-xl border-2 w-[100%]">
        <div className="flex justify-between items-center">
        <h1 className="font-bold text-green-600 text-lg">{workout.title}</h1>
        <button onClick={handleDelete}>
            <FontAwesomeIcon icon={faTrash}/>
        </button>
        </div>
        <div>
          <h1 className="font-bold">
            Weights(KG): <span className="font-normal">{workout.weight}</span>
          </h1>
          <h1 className="font-bold">
            Reps: <span className="font-normal"> {workout.reps}</span>
          </h1>
          <h1 className="font-bold">
            Created: <span className="font-normal">{moment(workout.createdAt).fromNow()}</span>
          </h1>
        </div>
      </div>
  );
}
