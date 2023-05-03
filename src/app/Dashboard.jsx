import { useQuery, gql } from "@apollo/client";
import DefaultLayout from "../layouts/DefaultLayout";

const PROGRAMS = gql`
  query Programs {
    programs {
      name
      id
    }
  }
`;

const Dashboard = () => {
  const { data, loading, error } = useQuery(PROGRAMS);
  console.log(data, loading, error);

  if (loading) {
    return <div>LOADING</div>;
  }

  if (error) {
    return <div>FEHLER</div>;
  }

  return (
    <DefaultLayout>
      <h1 className=" text-4xl , font-bold , text-light , px-6 , pt-5, m-0, pt-6">
        Hi Name!
      </h1>
      <img
        src="./images/img/Layer 11 1.png"
        className=" mx-auto , my-0, px-6, scale-75"
      />
      <div className="flex space-x-8 py-0">
        <h2 className=" inline-block text-1xl sm:text-xl font-bold text-light ml-6 pb-0">
          Dein Workout heute
        </h2>
        <p className="  inline-block text-xs sm:text-xl font-normal text-light pb-0 pt-1.5 pl-4">
          Trainingsplan
        </p>
      </div>
      <div className=" h-48 px-6 bg-medium_dark rounded-3xl mx-5">
        <div className="h-full flex flex-col text-light ">
          <h3 className="text-lg font-normal">Tag 2</h3>
          <h2 className="text-2xl sm:text-xl font-bold">
            {data.programs[0].name}
          </h2>
          <div className="flex row mb-5"></div>
          <p className="text-xs font normal text-light">
            {data.programs[0].duration} Min.
          </p>
          <p className="text-xs font normal text-light">
            {data.programs[0].focus}
          </p>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Dashboard;
