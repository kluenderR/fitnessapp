import { useParams } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import { ProgramDetail } from "../components/ProgramDetail";
import { QueryResults } from "../components/QueryResults";

// const PROGRAMS = gql`
export const GET_PROGRAMS = gql`
  query getProgram($programId: ID!) {
    programs(id: $programId) {
      name
      id
      duration
      focus
      colorStyle
    }
  }
`;

const Program = () => {
  const programId = useParams();
  console.log(programId);

  const { data, loading, error } = useQuery(GET_PROGRAMS, {
    variables: { programId },
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
// {program.name}
/* const program = programs.find((programs) => programs.id === programsId); */
// className="text-light mb-4 pt-16 rounded-2xl px-4 py-3 shadow-light
// h-48 text-center"
/* className={`${program.colorStyle} text-light mb-4 pt-16 rounded-2xl px-4 py-3 shadow-light h-48 text-center`} */
/* className={`${program.colorStyle} text-light mb-4 pt-16 rounded-2xl px-4 py-3 shadow-light h-48 text-center`} */
/* >
      Programm{" "}
      <Link to="/browser" className="fixed top-5 right-5">
        <XcloseIcon />
      </Link>
    </div> */
// const program = data.program.find((programs) => programs.id === programsId);

// eslint-disable-next-line no-shadow
// const program = data.programs.find(
// (GET_PROGRAMS) => data.programs.id === programId
// );
// eslint-disable-next-line no-shadow
// {
/* const program = data.programs.filter(() => {
    if (data.programs.id === programId) {
      return program;
    }
  })[0]; 
  } */
/*  fetch specific product id from url
const urlParams = new URLSearchParams(window.location.search);
const programId = urlParams.get("id");
 filter all products for product from id
const program = programs.filter((PROGRAMS) => {
  if (program.id === programId) {
    return program;
  }
})[0]; */
