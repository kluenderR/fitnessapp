import { useState } from "react";
import { useNavigate } from "react-router";
import xclose, {
  ReactComponent as XcloseIcon,
} from "../images/svg/X-close.svg";
import info, { ReactComponent as InfoIcon } from "../images/svg/Info.svg";

const ExerciseNavbar = ({ exercise }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      <div className="text-light">
        <button onClick={() => setIsOpen(true)} className="fixed top-5 right-5">
          <XcloseIcon />
        </button>

        {isOpen && (
          <div className="h-full w-full bg-dark40 fixed flex justify-center top-0 left-0 z-[500]">
            <div className=" w-full h-80 px-6 bg-medium_dark rounded-3xl mx-auto flex flex-col text-light justify-around items-center gap-4 fixed top-10">
              <h3 className="text-center">
                Möchtest du das Workout wirklich beenden?
              </h3>
              <div className="flex flex-row">
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-xs mr-4"
                >
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
          </div>
        )}
      </div>
      <div className="fixed bottom-0 left-0 w-full bg-dark40 z-50">
        <nav className="flex flex-row justify-end bg-medium_dark py-2.5 rounded-tl-3xl rounded-tr-3xl ">
          <button onClick={() => setIsOpen2(true)} className="mr-5">
            <InfoIcon />
          </button>
          {isOpen2 && (
            <div className="h-full w-full bg-dark40 fixed flex justify-center bottom-0 left-0 z-[500]">
              <div className=" w-full min-h-[300px] px-6 bg-medium_dark rounded-tl-3xl rounded-tr-3xl mx-auto flex flex-col text-light justify-around items-center gap-4 fixed bottom-0">
                <h1 className=" text-left mr-auto">{exercise.exercise.name}</h1>
                <p className="whitespace-pre-wrap">
                  {exercise.exercise.description}
                </p>

                <button
                  onClick={() => setIsOpen2(false)}
                  className="text-xs mr-4 rounded-full px-6 py-3 ml-4 mb-6 bg-dark shadow[box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.35);]"
                >
                  Ok
                </button>
              </div>
            </div>
          )}
        </nav>
      </div>
    </>
  );
};

export default ExerciseNavbar;
