import React from 'react'
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import WorkoutContext from './context/WorkoutContext'

const router = createBrowserRouter([
  {
    path:'/',
    element:<Navbar/>,
    children:[
      {
        path:'/',
        element:<Home/>
      }
    ]
  }
])
export default function App() {
  return (
    <WorkoutContext>
        <RouterProvider router={router}/>
    </WorkoutContext>
  )
}
