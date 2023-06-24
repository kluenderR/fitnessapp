import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import { useQuery, gql } from "@apollo/client";
import { Link, useParams, NavLink } from "react-router-dom";
import ExerciseWithReps from "../components/ExerciseWithReps";
import ExerciseWithDuration from "../components/ExerciseWithDuration";
import "swiper/swiper.css";
import "swiper/swiper-bundle.css";
import ExerciseLayout from "../layouts/ExerciseLayout";

const WORKOUT = gql`
  query Workout($id: ID!) {
    workout(where: { id: $id }) {
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
`;

const Slider = () => {
  const { id } = useParams();
  const { data, loading, error } = useQuery(WORKOUT, {
    variables: { id },
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

  const { exercises } = data.workout;
  return (
    <ExerciseLayout>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation={true}
        pagination={{
          type: "progressbar",
        }}
        speed={600}
        slidesPerView={1}
        loop={false}
        className="mySwiper h-full w-full mt-28"
      >
        {exercises.map((exercise, i) => (
          <SwiperSlide key={`exerciseSlide-${i}`}>
            <div className="pt-52 pb-56 m-auto text-center">
              {exercise.exercise.type === "reps" ? (
                <ExerciseWithReps exercise={exercise} />
              ) : (
                <ExerciseWithDuration exercise={exercise} />
              )}
            </div>
          </SwiperSlide>
        ))}
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
  /* const exercise = {
  name: "test"
   }; */
}
