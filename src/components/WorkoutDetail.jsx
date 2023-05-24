import React from "react";
import { useNavigate } from "react-router-dom";
import backbtn, { ReactComponent as Backbtn } from "../images/svg/Backbtn.svg";

const WorkoutDetail = () => {
  const navigate = useNavigate();
  return (
    <>
      <button onClick={() => navigate(-1)} className="fixed top-5 right-5">
        <Backbtn />
      </button>
      <div>WorkoutDetail</div>
    </>
  );
};

export default WorkoutDetail;
