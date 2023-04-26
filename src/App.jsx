import { Routes, Route } from "react-router-dom";
import Dashboard from "./app/Dashboard";
import Browser from "./app/Browser";
import Profile from "./app/Profile";
import NoMatch from "./app/NoMatch";

function App() {
  return (
    <Routes>
      <Route path="/profile" element={<Profile />} />
      <Route path="/browser" element={<Browser />} />
      <Route path="/" element={<Dashboard />} />

      {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
}
export default App;
