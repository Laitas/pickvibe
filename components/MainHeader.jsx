import React from "react";
import Path from "./Path";
import SearchBox from "./SearchBox";

const MainHeader = () => {
  return (
    <header className="flex flex-col md:flex-row items-center justify-between pb-4 border-b">
      <Path />
      <div className="flex my-4 md:my-0">
        <SearchBox gray={true} />
        <div className="relative mx-4 flex">
          <div className="absolute top-3 right-0 bg-red-600 p-1 rounded-full"></div>
          <img src="assets/bell.svg" alt="" />
        </div>
        <img
          src="assets/userimg.jpg"
          alt=""
          className="ml-4 h-12 w-12 rounded-full"
        />
      </div>
    </header>
  );
};

export default MainHeader;
