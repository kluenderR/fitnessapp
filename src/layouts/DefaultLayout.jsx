import Navbar from "../components/Navbar";

const DefaultLayout = ({ children }) => {
  return (
    <div>
      {children}
      <Navbar />
    </div>
  );
};
export default DefaultLayout;
