import React from "react";
import { Link } from "react-router-dom";
import xclose, {
  ReactComponent as XcloseIcon,
} from "../images/svg/X-close.svg";

export const ProgramDetail = ({program}) => {
  const { name, id, duration, focus, colorStyle } = program;
  return (
    <div className="text-light mb-4 pt-16 rounded-2xl px-4 py-3 shadow-light h-48 text-center">
      {name}
      <Link to="/browser" className="fixed top-5 right-5">
        <XcloseIcon />
      </Link>
    </div>
  );
};

export default ProgramDetail;
