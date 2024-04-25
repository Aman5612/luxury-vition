import React, { useEffect, useState } from "react";
import { useGlobalState } from "@/context/StateProvider";
import { RxHamburgerMenu } from "react-icons/rx";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { CiSearch } from "react-icons/ci";
import { Button } from "./ui/button";

const HomePage = () => {
  const { setMenu } = useGlobalState() as any;
  const btnRef = React.useRef<HTMLButtonElement>(null);
  const cursorRef = React.useRef<HTMLDivElement>(null);
  const [hoverPlay, setHoverPlay] = useState(false);

  useGSAP(() => {
    gsap.to(" .Links ", {
      y: 1000,
      duration: 1,
      delay: 0.1,
      stagger: 0.1,
    });
    gsap.from(btnRef.current, {
      y: 1000,
      duration: 1,
      delay: 0.1,
      stagger: 0.1,
    });
  }, []);

  const handleMenu = () => {
    setMenu("active");
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const cursor = cursorRef.current;
    gsap.to(cursor, {
      x: e.clientX,
      y: e.clientY,
    });
  };

  const handleMouseEnter = () => {
    const cursor = cursorRef.current;
    gsap.to(cursor, {
      scale: 1,
      opacity: 1,
    });
  };

  const handleMouseLeave = () => {
    const cursor = cursorRef.current;
    gsap.to(cursor, {
      scale: 0,
      opacity: 0,
    });
  };

  const handleCursorClick = () => {
    const cursor = cursorRef.current;
    cursor?.addEventListener("click", () => {
      alert("play reel");
    });
    gsap.to(cursor, {
      scale: 0,
      opacity: 0,
    });
  };
  return (
    <div className="page1 w-full h-[100vh] ">
      <div onClick={handleCursorClick} className="cursor" ref={cursorRef}>
        <span>
          <h4
            onMouseEnter={() => setHoverPlay(true)}
            onMouseLeave={() => setHoverPlay(false)}
            onClick={() => {
              alert("play reel");
            }}
          >
            Play Reel
          </h4>
          <div
            className={`absolute bottom-[2px] left-0 bg-black h-[1.5px] transform transition-all ease duration-500 ${
              hoverPlay ? "w-[45%]" : "w-0"
            }`}
          ></div>
        </span>
      </div>

      <video
        autoPlay
        loop
        muted
        src="/Assets/LV-1-vmake.mp4"
        className="w-[100vw] h-[100vh] object-contain"
      ></video>

      <div
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="inner-content h-full w-full text-white relative flex items-center justify-between flex-col z-5"
      >
        <nav className="w-full flex items-center justify-between font-nb px-12 py-3 text-xs">
          <h2>
            <Image
              src="/Assets/brand-logo.svg"
              alt="logo"
              height={10}
              width={180}
              className="z-10 absolute top-5 left-5 cursor-pointer mt-6 ml-4"
            />
          </h2>

          {/* <span className="relative flex  gap-2 -translate-x-[300px] opacity-30 hover:opacity-100">
            <CiSearch className="my-auto size-5 mt-2" />
            <input
              type="text"
              id="search"
              placeholder="Search..."
              className="text-white p-3 px-1 bg-transparent outline-none border-b-[1px] border-white w-30 h-3 "
            />
          </span> */}

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

        {/* <h2 className="text-center text-[230px] font-bold  leading-none mb-[180px] ">
          <span className="inline-block  Links" style={{ fontFamily: "rejo" }}>
            s
          </span>
          <span className="inline-block Links" style={{ fontFamily: "rejo" }}>
            t
          </span>
          <span className="inline-block Links" style={{ fontFamily: "rejo" }}>
            a
          </span>
          <span className="inline-block Links" style={{ fontFamily: "rejo" }}>
            y
          </span>
          <span className="inline-block Links" style={{ fontFamily: "rejo" }}>
            &nbsp;
          </span>
          <span className="inline-block Links" style={{ fontFamily: "rejo" }}>
            c
          </span>
          <span className="inline-block Links" style={{ fontFamily: "rejo" }}>
            l
          </span>
          <span className="inline-block Links" style={{ fontFamily: "rejo" }}>
            a
          </span>
          <span className="inline-block Links" style={{ fontFamily: "rejo" }}>
            s
          </span>
          <span className="inline-block Links" style={{ fontFamily: "rejo" }}>
            s
          </span>
          <span className="inline-block Links" style={{ fontFamily: "rejo" }}>
            y
          </span>
        </h2> */}

        <Button
          ref={btnRef}
          variant="outline"
          className="absolute text-[12px] z-10 bottom-0 translate-y-[160px] text-white outline-black border-white bg-transparent rounded-[50px] px-8  mb-[200px] hover:bg-transparent hover:text-white backdrop-filter backdrop-blur-lg"
        >
          Discover Collections
        </Button>
      </div>
    </div>
  );
};

export default HomePage;
