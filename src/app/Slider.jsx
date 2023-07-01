import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import { useQuery, gql } from "@apollo/client";
import { useParams } from "react-router-dom";
import ExerciseWithReps from "../components/ExerciseWithReps";
import ExerciseWithDuration from "../components/ExerciseWithDuration";
import "swiper/swiper.css";
import "swiper/swiper-bundle.css";
import ExerciseLayout from "../layouts/ExerciseLayout";

const GET_WORKOUTS = gql`
  query getWorkouts($workoutId: ID!, $programId: ID!) {
    program(where: { id: $programId }) {
      name
      colorStyle
      workoutsWithDay(where: { workout: { id: $workoutId } }) {
        day
        workout {
          category
          colorStylew
          id
          duration
          exercises {
            ... on ExerciseWithDuration {
              id
              duration
              exercise {
                name
                type
                description
              }
            }
            ... on ExerciseWithReps {
              id
              reps
              exercise {
                description
                id
                name
                type
              }
            }
          }
        }
      }
    }
  }
`;

const Slider = () => {
  const { programId, workoutId } = useParams();
  const [currentExercise, setCurrentExercise] = useState();
  const { data, loading, error } = useQuery(GET_WORKOUTS, {
    variables: { workoutId, programId },
    onCompleted: (programData) => {
      setCurrentExercise(
        programData.program.workoutsWithDay[0].workout.exercises[0]
      );
    },
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

  const { exercises } = data.program.workoutsWithDay[0].workout;
  return (
    <ExerciseLayout exercise={currentExercise}>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation={true}
        pagination={{
          type: "progressbar",
        }}
        onSlideChange={(swiper) => {
          setCurrentExercise(exercises[swiper.activeIndex]);
        }}
        speed={600}
        slidesPerView={1}
        loop={false}
        className="mySwiper h-full w-full mt-28"
      >
        {exercises.map((exercise, i) => {
          return (
            <SwiperSlide key={`exerciseSlide-${i}`}>
              <div className=" mt-36 mb-52 m-auto text-center">
                {exercise.exercise.type === "reps" ? (
                  <ExerciseWithReps exercise={exercise} />
                ) : (
                  <ExerciseWithDuration
                    slideChange={currentExercise !== i}
                    exercise={exercise}
                  />
                )}
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </ExerciseLayout>
  );
};

export default Slider;

// eslint-disable-next-line no-lone-blocks
{
  /* name={`${exercise.name}`} */
}
// eslint-disable-next-line no-lone-blocks
{
  /* exercises.map((exercise, index) => {
      ({description} = exercise.exercise.description)
    } */
}
