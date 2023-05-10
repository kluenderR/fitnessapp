import { NavLink } from "react-router-dom";
import home, { ReactComponent as HomeIcon } from "../images/svg/Home.svg";
import hantel, { ReactComponent as HantelIcon } from "../images/svg/Hantel.svg";
import profil, { ReactComponent as ProfilIcon } from "../images/svg/Profil.svg";

const Navbar = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full">
      <nav className="flex flex-row justify-around bg-dark40 gap-2 py-2.5 mt-2 rounded-tl-3xl rounded-tr-3xl ">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "stroke-light" : "stroke-medium_dark"
          }
        >
          <HomeIcon />
        </NavLink>
        <NavLink
          to="/browser"
          className={({ isActive }) =>
            isActive ? "stroke-light" : "stroke-medium_dark"
          }
        >
          <HantelIcon />
        </NavLink>
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            isActive ? "stroke-light" : "stroke-medium_dark"
          }
        >
          <ProfilIcon />
        </NavLink>
      </nav>
    </div>
  );
};

export default Navbar;

/* https://github.com/pd4d10/vite-plugin-svgr
Befehl: yarn add vite-plugin-svgr */
