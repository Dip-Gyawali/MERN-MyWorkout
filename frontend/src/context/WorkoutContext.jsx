import React, { createContext, useReducer } from 'react'

export const WorkoutsContext = createContext();

export function workoutsReducer(state,action){
    switch(action.type){
        case 'SET_WORKOUTS':
            return {
                workouts: action.payload
            }
        case 'CREATE_WORKOUTS':
            return {
                workouts: [action.payload, ...state.workouts]
            }
        case 'DELETE_WORKOUTS':
            return{
                workouts : state.workouts.filter((ele)=> ele._id!== action.payload._id)
            }
        default:
            return state
    }
}

export default function WorkoutContext({children}) {
    const [state,dispatch] = useReducer(workoutsReducer,{workouts: null})
  return (
    <WorkoutsContext.Provider value={{...state,dispatch}}>
        {children}
    </WorkoutsContext.Provider>
  )
}
