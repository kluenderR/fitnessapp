import React from "react";
// import Dashboard from "./app/Dashboard.jsx";

const Navbar = () =>  {
  return (
    <div>
      <nav className=" flex flex-row justify-around bg-dark40 gap-2 py-2.5 mt-2 rounded-tl-3xl rounded-tr-3xl border-spacing-2 hover:border-indigo-800 ">
        <a href="#">
          <img src="./images/svg/Home.svg"></img>
        </a>
        <a href="#">
          <img src="./images/svg/Hantel.svg"></img>
        </a>
        <a href="#">
          <img src="./images/svg/Person.svg"></img>
        </a>
      </nav>
    </div>
  );
}

export default Navbar;
