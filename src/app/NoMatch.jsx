import { Link } from "react-router-dom";
import DefaultLayout from "../layouts/DefaultLayout";
import Navbar from "../components/Navbar";

const NoMatch = () => {
  return (
    <DefaultLayout>
      <h2 className="text-2xl font-bold text-light mx-5 pt-6 pl-5">
        Nothing to see here!
      </h2>
      <div className="py-1 px-3 flex-col space-y-4 text-light my-16">
        <Link to="/" className="text-center text-light mx-5 pt-6 pl-5">
          Go to the home page
        </Link>
        <div className=" mx-auto">
          <img
            src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
            className="h-52 w-52"
            alt="not found"
          />
        </div>
      </div>
    </DefaultLayout>
  );
};

export default NoMatch;
