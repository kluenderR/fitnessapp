import React from "react";
import { useNavigate } from "react-router";
import backbtn, { ReactComponent as Backbtn } from "../images/svg/Backbtn.svg";

const Workout = () => {
  const navigate = useNavigate();
  return (
    <>
      <button onClick={() => navigate(-1)} className="fixed top-5 right-5">
        <Backbtn />
      </button>
      <h1 className="text-light">Workout</h1>
    </>
  );
};

export default Workout;
