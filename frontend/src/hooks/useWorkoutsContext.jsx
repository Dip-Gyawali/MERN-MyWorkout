import React, { useContext } from 'react'
import { WorkoutsContext } from '../context/WorkoutContext';


export default function useWorkoutsContext() {
    const context = useContext(WorkoutsContext);

    if(!context){
        throw Error("custom hook must be inside context api")
    }
  return context
}
