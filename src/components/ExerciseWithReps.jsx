import React from "react";
import { Link } from "react-router-dom";

const ExerciseWithReps = ({ exercise }) => {
  return (
    <div className="flex flex-col gap-8">
      <p className=" text-6xl fond-extrabold">{exercise.reps} x</p>
      <h1>{exercise.exercise.name}</h1>
      <Link
        to={`/complete/${exercise.id}`}
        className="redgradient mx-auto shadow-lg shadow[box-shadow: 0px 3px 10px 0px #00000059;
          ] rounded-3xl px-4 py-3 w-36"
      >
        <p className="text-center">geschafft</p>
      </Link>
    </div>
  );
};

export default ExerciseWithReps;
