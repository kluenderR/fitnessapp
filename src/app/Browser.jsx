import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useQuery, gql } from "@apollo/client";
import DefaultLayout from "../layouts/DefaultLayout";

const PROGRAMS = gql`
  query Programs {
    programs {
      name
      id
      duration
      focus
    }
  }
`;
const Browser = () => {
  const { data, loading, error } = useQuery(PROGRAMS);
  console.log(data, loading, error);

  if (loading) {
    return <div>LOADING</div>;
  }

  if (error) {
    return <div>FEHLER</div>;
  }
  const [items, setItems] = useState(Array.from({ length: 3 }));
  const fetchMoreData = () => {
    // a fake async api call like which sends
    // 20 more records in 1.5 secs
    setTimeout(() => {
      setItems(items.concat(Array.from({ length: 3 })));
    }, 1500);
  };

  return (
    <DefaultLayout>
      <div className="py-1 px-3 flex-col space-y-4 text-light">
        <h2 className="text-2xl font-bold text-light pt-5, m-0, pt-6">
          Browse
        </h2>
        <InfiniteScroll
          dataLength={items.length}
          next={fetchMoreData}
          hasMore={true}
          loader={<h4>Loading...</h4>}
        >
          {items.map((i, index) => (
            <div
              className="bg-gradient-to-br from-orange to-pink pt-16 rounded-2xl px-4 py-3 shadow-white h-48 text-center"
              key={index}
            >
              <h2 className="text-2xl font-bold"> {data.programs[0].name}</h2>
              #{index}
            </div>
        ))}
        </InfiniteScroll>
      </div>
    </DefaultLayout>
  );
};

export default Browser;

/*    <div className="bg-gradient-to-br from-orange to-pink pt-16 rounded-2xl   px-4 py-3 shadow-white h-48 text-center">  
          <h2 className="text-2xl font-bold">Titel des Programms</h2>
        </div> <div className="bg-gradient-to-br from-cyan to-yellowgreen pt-16 rounded-2xl px-4 py-3 shadow-white h-48 text-center">
        <h2 className="text-2xl font-bold">100 Push-Ups Challenge</h2>
        </div>
        <div className="bg-gradient-to-br from-greenblue to-seablue rounded-2xl px-4 py-3 shadow-white h-48 text-center">
        <h2 className="pt-16 text-2xl font-bold">Titel des Programms</h2>
        </div>
        <div className="bg-gradient-to-br from-orange to-pink pt-16 rounded-2xl px-4 py-3 shadow-white h-48 text-center">
        <h2 className="text-2xl font-bold">Stretch and Relax</h2>
        </div>
        <div className="bg-gradient-to-br from-cyan to-yellowgreen rounded-2xl px-4 py-3 shadow-white h-48 text-center">
        <h2 className="pt-16 text-2xl font-bold">Titel des Programms</h2>
        </div>
        <div className="bg-gradient-to-br from-orange to-pink pt-16 rounded-2xl px-4 py-3 shadow-white h-48 text-center">
          <h2 className="text-2xl font-bold">Titel des Programms</h2>
        </div>
        <div className="bg-gradient-to-br from-cyan to-yellowgreen pt-16 rounded-2xl px-4 py-3 shadow-white h-48 text-center">
          <h2 className="text-2xl font-bold">100 Push-Ups Challenge</h2>
        </div>
        <div className="bg-gradient-to-br from-greenblue to-seablue pt-16 rounded-2xl px-4 py-3 shadow-white h-48 text-center">
          <h2 className="text-2xl font-bold">Titel des Programms</h2>
        </div>
        <div className="bg-gradient-to-br from-orange to-pink pt-16 rounded-2xl px-4 py-3 shadow-white h-48 text-center">
          <h2 className="text-2xl font-bold">Stretch and Relax</h2>
        </div>
        <div className="bg-gradient-to-br from-cyan to-yellowgreen pt-16 rounded-2xl px-4 py-3 shadow-white h-48 text-center">
          <h2 className="text-2xl font-bold">Titel des Programms</h2>
        </div>*/
