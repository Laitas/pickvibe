import { useState } from "react";
import Nav from "./Nav";
const HamburgerMenu = () => {
  const [active, setActive] = useState(false);
  return (
    <>
      <div
        onClick={() => setActive(!active)}
        className="fixed bg-gray-100 z-20 -left-5 -top-5 pr-4 pl-8 pt-8 pb-4 rounded-full cursor-pointer"
      >
        <img src="assets/hamburger.svg" alt="" className="w-6 h-6" />
      </div>
      <div
        className={`fixed bg-blue-600 transiiton duration-300 z-10 ${
          !active && "-translate-x-96"
        }`}
      >
        <Nav mobile={true} />
      </div>
    </>
  );
};

export default HamburgerMenu;
