import { useState, useEffect } from "react";

const useWindowWidth = () => {
  const [value, setValue] = useState(undefined);
  useEffect(() => {
    const getWidth = () => {
      setValue(window.innerWidth);
    };
    window.addEventListener("resize", getWidth);
    return () => window.removeEventListener("resize", getWidth);
  });
  return [value, setValue];
};

export default useWindowWidth;
