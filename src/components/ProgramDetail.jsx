import React from "react";
import { Link } from "react-router-dom";
import xclose, {
  ReactComponent as XcloseIcon,
} from "../images/svg/X-close.svg";

export const ProgramDetail = ({ program }) => {
  const { name, id, focus, difficulty, duration, colorStyle } = program;
  // alternativ statt {(program)}Objekt (props)Array und dann program.props
  console.log(focus, difficulty, duration);
  return (
    <>
      <Link to="/browser" className="fixed top-5 right-5">
        <XcloseIcon />
      </Link>
      <div className={`${colorStyle} h-[75vh] w-screen text-light`}>
        <h1 className=" text-center pt-60">{name}</h1>
        <div className="flex justify-around gap-5">
          <div className="flex flex-col items-center">
            <img src="../images/svg/Ellipse 1.svg"></img>
            <p className="mb-4 mt-2 text-center uppercase">{focus}</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="../images/svg/Ellipse 1.svg"></img>
            <p className="mb-4 mt-2 text-center uppercase">{difficulty}</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="../images/svg/Ellipse 1.svg"></img>
            <p className="mb-4 mt-2 text-center uppercase">{duration} Wochen</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProgramDetail;
