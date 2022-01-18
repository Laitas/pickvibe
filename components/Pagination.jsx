import React from "react";

const Pagination = () => {
  return (
    <div className="flex">
      <button>
        <img src="assets/chevrons-right.svg" alt="" className="rotate-180" />
      </button>
      <button className="mx-4">
        <img src="assets/chevron-down.svg" alt="" className="rotate-180" />
      </button>
      <button className="md:p-4 mx-2  font-semibold">...</button>
      <button className="md:p-4 mx-2  font-semibold">1</button>
      <button className="md:px-6 px-2 mx-2  rounded bg-white drop-shadow font-semibold">
        2
      </button>
      <button className="md:p-4 mx-2  font-semibold">3</button>
      <button className="md:p-4 mx-2 font-semibold">...</button>
      <button className="mx-4">
        <img src="assets/chevron-down.svg" alt="" />
      </button>
      <button>
        <img src="assets/chevrons-right.svg" alt="" />
      </button>
    </div>
  );
};

export default Pagination;
