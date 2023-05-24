import React from "react";
// import styled from '"@emotion/styled"';
// import { LoadingSpinner } from "@apollo/space-kit/Loaders/LoadingSpinner";

// eslint-disable-next-line consistent-return
export const QueryResults = ({ loading, error, data, children }) => {
  if (error) {
    return (
      <p
        className="text-light mb-4 pt-16 px-4 py-3 shadow-light
    text-center"
      >
        ERROR: {error.message}
      </p>
    );
  }
  if (loading) {
    return (
      <div
        className="text-light mb-4 pt-16 px-4 py-3 shadow-light
    text-center"
      >
        LOADING
      </div>
    );
  }
  if (!data) {
    return <p>Nothing to show...</p>;
  }
  if (data) {
    return children;
  }
};
console.log(QueryResults);
export default QueryResults;

/*     <div className=" flex justify-center align-middle w-3 h-3">
        <LoadingSpinner data-testid="spinner" size="large" theme="grayscale" />;
      </div> */
