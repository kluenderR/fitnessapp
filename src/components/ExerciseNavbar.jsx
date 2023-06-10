import React from "react";
import { Link, NavLink } from "react-router-dom";
import xclose, {
  ReactComponent as XcloseIcon,
} from "../images/svg/X-close.svg";
import info, { ReactComponent as InfoIcon } from "../images/svg/Info.svg";

const ExerciseNavbar = () => {
  return (
    <>
      <Link to="/browser" className="fixed top-5 right-5">
        <XcloseIcon />
      </Link>

      <div className="fixed bottom-0 left-0 w-full z-50">
        <nav className="flex flex-row justify-end bg-dark40 py-2.5 mt-2 rounded-tl-3xl rounded-tr-3xl ">
          <NavLink to="/browser" className="mr-5">
            <InfoIcon />
          </NavLink>
        </nav>
      </div>
    </>
  );
};

export default ExerciseNavbar;
