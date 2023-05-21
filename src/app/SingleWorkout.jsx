import React from "react";
import { Link } from "react-router-dom";
import xclose, {
  ReactComponent as XcloseIcon,
} from "../images/svg/X-close.svg";

const SingleWorkout = () => {
  return (
    <section className="section workout text-light">
        <Link to="/browser" className="fixed top-5 right-5">
        <XcloseIcon />
      </Link>
      <h2>single Workout</h2>
    </section>
  );
};

export default SingleWorkout;
