import React from "react";

const Reste = () => {
  return <div>Reste</div>;
};

export default Reste;
/* const GET_EXERCISES = gql`
  query getWorkouts($id: ID!) {
    workout(where: {id: §id}) {
      id
      exercises {
        ... on ExerciseWithDuration {
          id
          duration
          exercise {
            description
            id
            name
          }
        }
        ... on ExerciseWithReps {
          id
          exercise {
            description
            id
            name
          }
          reps
        }
      }
      colorStylew
    }
    exercise(where: {id: ""}) {
      description
    }
    exercises(where: {id: ""}) {
      id
    }
  }
`;
after return

const { Id, programId } = useParams();
  console.log(Id);
  const { data, loading, error } = useQuery(GET_EXERCISES, {
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
  const { exercise } = data;
  console.log(exercise);
*/