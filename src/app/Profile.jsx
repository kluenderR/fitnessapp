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

const Profile = () => {
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
      <h1 className=" text-2xl , font-bold , text-light , px-6 , pt-5, m-0, pt-6">
        Name
      </h1>
      <div className="h-full flex flex-col text-light justify-items-center">
        <img
          src="./images/img/Kreis.png"
          className="h-32 w-32 mx-auto mt-16"
          alt="Kreis"
        />
        <p className="text-xs font normal align-middle text-center">
          Profil bearbeiten
        </p>
        <p className="text-xs font normal mx-5 mt-9">Aktueller Trainingsplan</p>
        <div className=" h-32 px-6 bg-medium_dark rounded-3xl mx-5 flex flex-row text-light  items-center">
          <img
            src="./images/svg/Prozent.svg"
            className="text-base font normal text-light"
            alt=""
          />
          <img src="./images/svg/Group8.svg" alt="" />
          <div className="flex flex-col flex-nowrap"></div>
          <p className="text-base font normal text-light">
            {data.programs[0].name}
          </p>
          <p className="text-xs font normal text-light">
            {data.programs[0].focus}1 von 8 geschafft
          </p>
        </div>
      </div>
    </DefaultLayout>
  );
};
export default Profile;
/*  Titel des Programms */
