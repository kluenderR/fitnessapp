import { Routes, Route } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import Dashboard from "./app/Dashboard";
import Browser from "./app/Browser";
import Profile from "./app/Profile";
import Program from "./app/Program";
import SingleWorkout from "./app/SingleWorkout";
import NoMatch from "./app/NoMatch";


const PROGRAMS = gql`
  query Programs {
    programs {
      name
      id
      duration
      focus
    }
  }
`;

const App = () => {
  const { data, loading, error } = useQuery(PROGRAMS);
  console.log(data, loading, error);

  if (loading) {
    return <div>LOADING</div>;
  }

  if (error) {
    return <div>FEHLER</div>;
  }
  return (
    <Routes>
      <Route path="/profile" element={<Profile />} />
      <Route path="/browser" element={<Browser />} />
      <Route path="/" element={<Dashboard />} />
      <Route path="program/:programId" element={<Program />} />
     {/* <Route
      //  path={`/program/${data.programs.id}`}
       // element={<SingleWorkout />}
  // /> */}

      {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for.
      <Route path="*" element={<NoMatch />} />  */}
    </Routes>
  );
}
export default App;
// {`/program/${data.programs.id}`}
