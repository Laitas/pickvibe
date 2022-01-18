import React from "react";
import Dropdown from "../components/Dropdown";
const Nav = ({ mobile = false }) => {
  return (
    <nav className={`py-7 px-4 ${mobile && "h-screen"}`}>
      <div className="flex pb-6 border-b border-gray-500">
        <img src="assets/ionic-ios-apps.svg" alt="" />
        <h1 className="mx-4 font-semibold text-white text-lg">Admin</h1>
      </div>
      <div
        className={`bg-gray-100 py-2 px-4 my-4 ${
          !mobile && "-mr-8"
        } rounded-3xl flex relative`}
      >
        {!mobile && (
          <>
            <div
              className="absolute right-3 -top-4 h-4 w-4 bg-gray-100"
              style={{ clipPath: `polygon(100% 0, 0% 100%, 100% 100%)` }}
            ></div>
            <div
              className="absolute right-3 -bottom-4 h-4 w-4 bg-gray-100"
              style={{ clipPath: `polygon(100% 100%, 100% 0, 0 0)` }}
            ></div>
          </>
        )}
        <div className="absolute"></div>
        <img src="assets/home.svg" alt="" />
        <p className="ml-4 font-semibold">Crud example</p>
      </div>
      <Dropdown />
    </nav>
  );
};

export default Nav;
