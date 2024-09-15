import React from 'react'
import WorkoutForm from '../Components/WorkoutForm'
import WorkoutSec from '../Components/WorkoutSec'

export default function Home() {
  return (
    <div className='flex justify-between bg-gray-200 h-[100vh]'>
      <WorkoutSec/>
      <WorkoutForm/>
    </div>
  )
}
