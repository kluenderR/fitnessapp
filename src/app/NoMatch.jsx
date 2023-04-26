import DefaultLayout from "../layouts/DefaultLayout";
import { Link } from "react-router-dom";

const NoMatch = () => {
  return (
    <DefaultLayout>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </DefaultLayout>
  );
};

export default NoMatch;
