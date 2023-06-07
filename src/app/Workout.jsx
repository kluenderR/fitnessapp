import React, { Component } from "react";
// import { useNavigate } from "react-router";
import { useQuery, gql } from "@apollo/client";
import { Link, useParams } from "react-router-dom";
import backbtn, { ReactComponent as Backbtn } from "../images/svg/Backbtn.svg";

const GET_WORKOUTS = gql`
  query getWorkouts($id: ID!, $programId: ID!) {
    program(where: { id: $programId }) {
      name
      workoutsWithDay(where: { workout: { id: $id } }) {
        day
        workout {
          category
          colorStylew
          id
          duration
        }
      }
    }
  }
`;

const Workout = () => {
  const { Id, programId } = useParams();
  console.log(Id);
  const { data, loading, error } = useQuery(GET_WORKOUTS, {
    variables: { id: Id, programId },
  });
  console.log(data, loading, error);
  if (loading) {
    return (
      <div
        className="text-light mb-4 pt-16 px-4 py-3 shadow-light
    text-center"
      >
        LOADING
      </div>
    );
  }
  if (error) {
    return (
      <p
        className="text-light mb-4 pt-16 px-4 py-3 shadow-light
    text-center"
      >
        ERROR: {error.message}
      </p>
    );
  }
  if (!data) {
    return <p>Nothing to show...</p>;
  }
  const { program } = data;
  const workoutWithDay = program.workoutsWithDay[0];
  const { day, workout } = workoutWithDay;
  console.log(workoutWithDay);
  return (
    <>
      <div>
        <Link to="/program" className="fixed top-5 right-5">
          <Backbtn />
        </Link>
      </div>
      <p className="text-light text-xs text-center mt-5">{program.name}</p>
      <div className="text-light flex flex-col gap-52 mt-60">
        <div>
          <h1 className="text-center">TAG {day}</h1>
          <div className=" flex justify-center items-baseline gap-4">
            <p className="text-xs">{workout.duration} Min.</p>
            <p className="text-xs">{workout.category}</p>
          </div>
        </div>
        <Link
          to={`/swipero/${workout.id}`}
          className={`${workout.colorStylew} mx-auto shadow-lg shadow[box-shadow: 0px 3px 10px 0px #00000059;
          ] rounded-3xl px-4 py-3 w-20`}
        >
          <p>los!</p>
        </Link>
      </div>
    </>
  );
};

export default Workout;

/* const GET_WORKOUTS = gql`
  query getWorkout($id: ID!) {
    workout(where: { id: $id }) {
      id
      category
      duration
      colorStylew
    }
  }
`;

const Workout = () => {
  const { workoutId } = useParams();
  console.log(workoutId);
  const { data, loading, error } = useQuery(GET_WORKOUTS, {
    variables: { id: workoutId },
  });
  console.log(data, loading, error);
  if (loading) {
    return (
      <div
        className="text-light mb-4 pt-16 px-4 py-3 shadow-light
    text-center"
      >
        LOADING
      </div>
    );
  }
  if (error) {
    return (
      <p
        className="text-light mb-4 pt-16 px-4 py-3 shadow-light
    text-center"
      >
        ERROR: {error.message}
      </p>
    );
  }
  if (!data) {
    return <p>Nothing to show...</p>;
  }
  const { workout } = data;
  const navigate = useNavigate();
  return (
    <>
      <button onClick={() => navigate(-1)} className="fixed top-5 right-5">
        <Backbtn />
      </button>
     
  </>
  );
};

export default Workout; */
