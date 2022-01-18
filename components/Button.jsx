import React from "react";

const Button = ({ children }) => {
  return (
    <button className="bg-[#2141A8] text-white font-semibold p-2 rounded-md">
      {children}
    </button>
  );
};

export default Button;
