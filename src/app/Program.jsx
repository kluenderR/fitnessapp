import React from "react";
import { useQuery, gql } from "@apollo/client";

const PROGRAMS = gql`
  query Programs {
    programs {
      name
      id
      duration
      focus
      colorStyle
    }
  }
`;

const Program = () => {
  const { data, loading, error } = useQuery(PROGRAMS);
  console.log(data, loading, error);

  if (loading) {
    return <div>LOADING</div>;
  }

  if (error) {
    return <div>FEHLER</div>;
  }
  return (
    <div
      className={`${PROGRAMS.colorStyle} mb-4 pt-16 rounded-2xl px-4 py-3 shadow-light h-48 text-center`}
    >
      Program{" "}
    </div>
  );
};

export default Program;
