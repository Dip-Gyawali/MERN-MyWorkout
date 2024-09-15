import React from "react";
import { Outlet } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="pl-10 py-10 border-b-2 border-gray-600">
        <h1 className="text-5xl">MyWorkout</h1>
      </div>
      <Outlet />
    </>
  );
}
