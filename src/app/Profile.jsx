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
    </DefaultLayout>
  );
};
export default Profile;
/*   </div>
        <p className="font-normal text-m" >Aktueller Trainingsplan</p>
        <div className="bg-bgmedium m-0 pt-16 rounded-2xl px-4 pb-3 h-auto shadow-white flex gap-4">
            <img src="./img/profile_circle.jpg" className='w-18 h-18 '></img>
            <img src="./img/profile_circle.svg" className='w-18 h-18 '></img>
            <div>
                <p className="font-normal text-m pt-2" >Titel des Programms</p>
                <p className="font-normal text-sm pt-2" >1 von 8 geschafft</p>
                <p className="font-normal text-xs pt-2" >1 von 8 geschafft</p>
            </div> */
