import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

export const Header = () => {
  const css =
    "border bg-blue-300 w-full h-20 py-2 px-4 flex justify-center items-center fixed top-0 transition duration-300";
  const [state, setState] = useState(css);
  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      if (window.scrollY === 0) {
        setState(css);
      } else {
        setState(css.concat(" opacity-0 transition duration-300"));
      }
    });
  }, []);
  return (
    <div className={state}>
      <span className="transition duration-300">Header</span>
    </div>
  );
};
