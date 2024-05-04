import { useGlobalState } from "@/context/StateProvider";
import { RxHamburgerMenu } from "react-icons/rx";
import Image from "next/image";
import React, { use, useEffect } from "react";

const FlotingNavBar = () => {
  const { setMenu } = useGlobalState() as any;
  const handleMenu = () => {
    setMenu("active");
  };
  const [scrollY, setScrollY] = React.useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  return (
    <nav
      className={`absolute top-0 left-0 z-1000 w-full flex items-center justify-between font-nb px-12 py-3 text-xs ${
        scrollY > 1 ? "" : "hidden"
      }`}
      onScroll={() => {
        handleScroll();
        alert("scrolling");
      }}
    >
      <h2>
        <Image
          src="/Assets/brand-logo.svg"
          alt="logo"
          height={10}
          width={180}
          className="z-10 absolute top-5 left-5 cursor-pointer mt-6 ml-4 text-black bg-black"
        />
      </h2>

      <h2 id="menu" className="relative">
        <a href="#" onClick={handleMenu}>
          <RxHamburgerMenu className="text-3xl" />
        </a>
        <span
          className="absolute bottom-0 left-0 w-full h-0.5 bg-white origin-bottom-right transition-transform duration-350 ease-out transform scale-x-0"
          aria-hidden="true"
        ></span>
      </h2>
    </nav>
  );
};

export default FlotingNavBar;
