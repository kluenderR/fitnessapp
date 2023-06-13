import React from "react";
import ExerciseNavbar from "../components/ExerciseNavbar";

const ExerciseLayout = ({ children }) => {
  return (
    <div className="relative pb-14">
      {children}
      <ExerciseNavbar />
    </div>
  );
};

export default ExerciseLayout;
