import React from "react";
const SearchBox = ({ gray = false }) => {
  if (gray) {
    return (
      <div className="flex items-center px-4 py-2 rounded-3xl bg-[#D1DFEA] drop-shadow">
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent font-semibold w-full"
        />
        <img src="assets/search.svg" alt="" className="max-h-4" />
      </div>
    );
  }
  return (
    <div className="flex items-center px-4 py-2 rounded bg-white rounded drop-shadow">
      <input
        type="text"
        placeholder="Search..."
        className="bg-transparent font-semibold w-full"
      />
      <img src="assets/search.svg" alt="" className="max-h-5" />
    </div>
  );
};

export default SearchBox;
