import Navbar from "../components/Navbar";

const DefaultLayout = ({ children }) => {
  return (
    <div className="relative pb-12">
      {children}
      <Navbar />
    </div>
  );
};
export default DefaultLayout;
