import React from "react";
import { Link } from "react-router-dom";
import xclose, {
  ReactComponent as XcloseIcon,
} from "../images/svg/X-close.svg";

export const ProgramDetail = (props) => {
  const { name, id, focus, difficulty, duration, colorStyle, description } =
    props.program;
  // alternativ statt {(program)}Objekt (props)Array und dann program.props
  console.log(focus, difficulty, duration, description);
  return (
    <div>
      <Link to="/browser" className="fixed top-5 right-5">
        <XcloseIcon />
      </Link>
      <div className={`${colorStyle} h-[75vh] w-screen text-light`}>
        <h1 className=" text-center pt-60">{name}</h1>
        <div className="flex justify-around gap-5 pt-32 ">
          <div className="flex flex-col items-center">
            <img src="../images/svg/Ellipse 1.svg"></img>
            <p className="mb-4 mt-2 text-center uppercase">{focus}</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="../images/svg/Ellipse 1.svg"></img>
            <p className="mb-4 mt-2 text-center uppercase text-light">
              {difficulty}
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img src="../images/svg/Ellipse 1.svg"></img>
            <p className="mb-4 mt-2 text-center uppercase">{duration} Wochen</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <Link
          to={`/singleworkout/${id}`}
          className={`${colorStyle} rounded-3xl fixed px-4 py-3 bottom-8 shadow-md z-[12]`}
        >
          <p>jetzt starten</p>
        </Link>
      </div>
      <div className="bg-medium_dark">
        <p className="px-6 py-5 text-light">{description}</p>
      </div>
      <div className="px-6 mt-6 bg-dark text-light">
        <h3>So ist das Programm aufgeteilt:</h3>
        <div className="flex items-center mt-10 gap-5">
          <img src="../images/svg/Figpie.svg"></img>
          <div className="ml-6 flex flex-col gap-5">
            <div className="flex gap-3">
              <img src="../images/svg/Ellipse 6.svg"></img>
              <p className="text-xs">Krafttraining</p>
            </div>
            <div className="flex gap-3">
              <img src="../images/svg/Ellipse 6.svg"></img>
              <p className="text-xs">Koordination</p>
            </div>
            <div className="flex gap-3">
              <img src="../images/svg/Ellipse 6.svg"></img>
              <p className="text-xs">Cardio</p>
            </div>
            <div className="flex gap-3">
              <img src="../images/svg/Ellipse 6.svg"></img>
              <p className="text-xs">Beweglichkeit</p>
            </div>
          </div>
        </div>
      </div>
      </div>
  );
};

export default ProgramDetail;
