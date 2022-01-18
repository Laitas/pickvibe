import { useState } from "react";

const dropdown = () => {
  const [active, setActive] = useState(false);
  return (
    <div className="flex flex-col my-4">
      <div
        onClick={() => setActive(!active)}
        className="flex py-2 px-4 cursor-pointer"
      >
        <img src="assets/box.svg" alt="" />
        <div className="flex ml-4 items-center w-full justify-between">
          <p className="text-white">Menu Item</p>
          <img
            src="assets/chevron-down.svg"
            alt=""
            className={`w-3 h-3 brightness-0 invert transition ${
              !active ? "rotate-90" : "-rotate-90"
            }`}
          />
        </div>
      </div>
      <div
        className={`py-2 px-4 bg-blue-900 rounded-xl overflow-hidden text-gray-400 ${
          active ? "h-fit" : "h-0 py-0"
        }`}
      >
        <div className="flex">
          <img src="assets/activity.svg" alt="" />
          <p className="ml-4 my-2">Sub menu item 1</p>
        </div>
        <div className="flex">
          <img src="assets/activity.svg" alt="" />
          <p className="ml-4 my-2">Sub menu item 2</p>
        </div>
        <div className="flex">
          <img src="assets/activity.svg" alt="" />
          <p className="ml-4 my-2">Sub menu item 3</p>
        </div>
      </div>
    </div>
  );
};

export default dropdown;
