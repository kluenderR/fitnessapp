import React from "react";
import ExerciseNavbar from "../components/ExerciseNavbar";

const ExerciseLayout = ({ children }) => {
  return (
    <div className="relative pb-12">
      {children}
      <ExerciseNavbar />
    </div>
  );
};

export default ExerciseLayout;
