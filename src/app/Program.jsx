import { useParams } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import { ProgramDetail } from "../components/ProgramDetail";
import { QueryResults } from "../components/QueryResults";

// const PROGRAMS = gql`
export const GET_PROGRAMS = gql`
  query getProgram($id: ID!) {
    program(where: { id: $id }) {
      id
      name
      colorStyle
      description
      focus
      duration
      difficulty
      workouts {
        category
      }
      image {
        url
      }
    }
  }
`;

const Program = () => {
  const { programId } = useParams();
  console.log(programId);

  const { data, loading, error } = useQuery(GET_PROGRAMS, {
    variables: { id: programId },
  });
  console.log(data);
  console.log(data, loading, error);

  return (
    <QueryResults error={error} loading={loading} data={data}>
      <ProgramDetail program={data?.program} />
    </QueryResults>
  );
};
console.log(Program);
export default Program;
