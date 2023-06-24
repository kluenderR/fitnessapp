import React from "react";
import { Link } from "react-router-dom";
import xclose, {
  ReactComponent as XcloseIcon,
} from "../images/svg/X-close.svg";

const Complete = () => {
  return (
    <div className="text-light">
      <Link to="/browser" className="fixed top-5 right-5">
        <XcloseIcon />
      </Link>
    </div>
  );
};

export default Complete;
