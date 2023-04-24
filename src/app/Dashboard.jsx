/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
// eslint-disable-next-line import/extensions
import Navbar from "/components/Navbar";
const Dashboard = () => {
  return (
    <div>
      <h1 className=" text-4xl , font-bold , text-light , px-6 , pt-5, m-0, pt-6">
        Hi Name!
      </h1>
        <img
        src="./images/img/Layer 11 1.png"
        className=" mx-auto , my-0, px-6, scale-75"
        />
      <div className="flex space-x-8">
        <h2 className=" inline-block, text-1xl sm:text-xl, font-bold, text-light , ml-6">
          Dein Workout heute
        </h2>
        <p className="  inline-block text-xs sm:text-xl font-normal text-light pb-0 pt-1.5 pl-4">
          Trainingsplan
        </p>
      </div>
      <h2 className=" text-light text-center py-12 bg-medium_dark rounded-3xl mx-5">
        Hello World
      </h2>
      <div>
      <Navbar></Navbar>
      </div>
    </div>
  );
};

export default Dashboard;

/* import React from 'react'

export default function dashboard() {
  return (
    <div className="bg-black">
      <h1 className="font-bold, text-4xl, text-white">Hi Name!</h1>
      <Navbar></Navbar>
    </div>
  )
}

export default dashboard; */

/* import React from "react";
import WorkToday from "./WorkToday";

const Start = () => {
  return (
    <div className="bg-black">
      <h1 className="font-bold, text-4xl, text-white">Hi Name!</h1>
      <WorkToday></WorkToday>
    </div>
  );
};

export default Start; */
