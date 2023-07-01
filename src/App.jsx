import { Routes, Route } from "react-router-dom";
import { gql } from "@apollo/client";
import Dashboard from "./app/Dashboard";
import Browser from "./app/Browser";
import Profile from "./app/Profile";
import Program from "./app/Program";
import Workout from "./app/Workout";
import NoMatch from "./app/NoMatch";
import Slider from "./app/Slider";
import Complete from "./app/Complete";

const App = () => {
  return (
    <Routes>
      <Route path="/profile" element={<Profile />} />
      <Route path="/browser" element={<Browser />} />
      <Route path="/" element={<Dashboard />} />
      <Route path="program/:programId" element={<Program />} />
      <Route
        path="/program/:programId/workout/:Id/start"
        element={<Workout />}
      />
      <Route
        path="/program/:programId/workout/:workoutId"
        element={<Slider />}
      />
      <Route path="/complete/:id" element={<Complete />} />

      {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for.  */}
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
};
export default App;
