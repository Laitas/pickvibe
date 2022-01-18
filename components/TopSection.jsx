import React from "react";
import Button from "./Button";
import PlusButton from "./PlusButton";
import SearchBox from "./SearchBox";

const TopSection = () => {
  return (
    <div className="flex flex-col mt-5 ">
      <h2 className="mb-8 font-semibold text-lg flex justify-center md:justify-start">
        Data List Layout
      </h2>
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="flex mb-6 md:mb-0">
          <Button>Add new product</Button>
          <div className="ml-2">
            <PlusButton />
          </div>
        </div>
        <p className="text-gray-600 mb-6 md:mb-0">
          Showing 1 to 10 of 150 entries
        </p>
        <SearchBox />
      </div>
    </div>
  );
};

export default TopSection;
