import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router";
import xclose, {
  ReactComponent as XcloseIcon,
} from "../images/svg/X-close.svg";
import info, { ReactComponent as InfoIcon } from "../images/svg/Info.svg";

const ExerciseNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      <div className="text-light">
        <button onClick={() => setIsOpen(true)} className="fixed top-5 right-5">
          <XcloseIcon />
        </button>

        {isOpen && (
          <div className=" w-full h-80 px-6 bg-medium_dark rounded-3xl mx-auto flex flex-col text-light justify-around items-center gap-4 fixed top-10 z-20">
            <h3 className="text-center">
              Möchtest du das Workout wirklich beenden?
            </h3>
            <div className="flex flex-row">
              <button onClick={() => setIsOpen(false)} className="text-xs mr-4">
                Nein, weiter machen!
              </button>
              <button
                onClick={() => navigate(-1)}
                className="text-xs rounded-full px-6 py-3 ml-4 bg-dark shadow[box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.35);]"
              >
                Ja, beenden!
              </button>
            </div>
          </div>
        )}
      </div>
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
