import React from "react";
import { Link } from "react-router-dom";
// <Route index element={<Home />} />

/* <div>
  <Routes>
    <Route path="profile" element={<Profile />}>
      <Route path="Browser" element={<Browser />} />
      <Route path="Dashboard" element={<Dashboard />} /> */

      {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
     /*  <Route path="*" element={<NoMatch />} />
    </Route>
  </Routes>
</div>; */
const Navbar = () => {
  return (
    <div>
      <nav className=" flex flex-row justify-around bg-dark40 gap-2 py-2.5 mt-2 rounded-tl-3xl rounded-tr-3xl border-spacing-2 hover:border-indigo-800 ">
        <Link to="/">
          <img src="./images/svg/Home.svg"></img>
        </Link>
        <Link to="/browser">
          <img src="./images/svg/Hantel.svg"></img>
        </Link>
        <Link to="/profile">
          <img src="./images/svg/Person.svg"></img>
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
