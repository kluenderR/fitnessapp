import { Link, useParams } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import xclose, {
  ReactComponent as XcloseIcon,
} from "../images/svg/X-close.svg";

const PROGRAMS = gql`
  query Programs {
    programs {
      name
      id
      duration
      focus
      colorStyle
    }
  }
`;

/* // fetch specific product id from url
const urlParams = new URLSearchParams(window.location.search);
const programId = urlParams.get("id");
// filter all products for product from id
const program = programs.filter((PROGRAMS) => {
  if (program.id === programId) {
    return program;
  }
})[0]; */
const Program = () => {
  const programId = useParams();
  console.log(programId);
  /* const program = programs.find((programs) => programs.id === programsId); */
  const { data, loading, error } = useQuery(PROGRAMS);
  console.log(data, loading, error);
  // const program = data.program.find((programs) => programs.id === programsId);

  if (loading) {
    return <div>LOADING</div>;
  }

  if (error) {
    return <div>FEHLER</div>;
  }

  // eslint-disable-next-line no-shadow
  const program = data.programs.find(
    (program) => data.programs.id === programId
  );
  // eslint-disable-next-line no-shadow
  {
    /*const program = data.programs.filter(() => {
    if (data.programs.id === programId) {
      return program;
    }
  })[0];*/
  }
  console.log(program);
  return (
    <div
      className="text-light mb-4 pt-16 rounded-2xl px-4 py-3 shadow-light h-48 text-center"
      /* className={`${program.colorStyle} text-light mb-4 pt-16 rounded-2xl px-4 py-3 shadow-light h-48 text-center`} */
    >
      Programm{" "}
      <Link to="/browser" className="fixed top-5 right-5">
        <XcloseIcon />
      </Link>
    </div>
  );
};

export default Program;
// {program.name}
