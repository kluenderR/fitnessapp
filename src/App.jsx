import { Routes, Route } from "react-router-dom";
import { gql } from "@apollo/client";
import Dashboard from "./app/Dashboard";
import Browser from "./app/Browser";
import Profile from "./app/Profile";
import Program from "./app/Program";
import Workout from "./app/Workout";
import Swipero from "./app/Swipero";
import NoMatch from "./app/NoMatch";

const App = () => {
  return (
    <Routes>
      <Route path="/profile" element={<Profile />} />
      <Route path="/browser" element={<Browser />} />
      <Route path="/" element={<Dashboard />} />
      <Route path="program/:programId" element={<Program />} />
      <Route path="/program/:programId/workout/:Id" element={<Workout />} />
      <Route path="swipero/:Id" element={<Swipero />} />

      {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for.  */}
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
};
export default App;
