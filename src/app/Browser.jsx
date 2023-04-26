import DefaultLayout from "../layouts/DefaultLayout";

const Browser = () => {
  return (
    <DefaultLayout>
      <div className="py-8 px-3 flex-col space-y-8 bg-bgdark text-dark">
        <h2 className="text-2xl font-bold">Browse</h2>
      </div>
    </DefaultLayout>
  );
};

export default Browser;
