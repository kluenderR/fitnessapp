import React from "react";
import ExerciseNavbar from "../components/ExerciseNavbar";

const ExerciseLayout = ({ children, exercise }) => {
  return (
    <div className="relative pb-14">
      {children}
      <ExerciseNavbar exercise={exercise} />
    </div>
  );
};

export default ExerciseLayout;
