"use client";
import { FaCirclePlay } from "react-icons/fa6";
import { GoArrowUpRight } from "react-icons/go";
import { RxCross1 } from "react-icons/rx";
import { GoArrowRight } from "react-icons/go";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useGlobalState } from "@/context/StateProvider";
import "./styles.css";

const Navbar = () => {
  const video = useRef<HTMLVideoElement | null>(null);
  const playReel = useRef<HTMLDivElement | null>(null);
  const smallLinks = useRef<HTMLDivElement | null>(null);
  const smallLink = useRef<HTMLDivElement | null>(null);
  const border = useRef<HTMLDivElement | null>(null);
  const [hovering1, setHovering1] = useState(false);
  const [hovering2, setHovering2] = useState(false);
  const [hovering3, setHovering3] = useState(false);
  const [hoveringWomen, setHoveringWomen] = useState(false);
  const [hoveringMen, setHoveringMen] = useState(false);
  const [hoveringBags, setHoveringBags] = useState(false);
  const [hoveringWatches, setHoveringWatches] = useState(false);
  const [hoveringPerfumes, setHoveringPerfumes] = useState(false);

  const { menu, setMenu } = useGlobalState() as any;

  useGSAP(() => {
    gsap.from(video.current, {
      scale: 0.1,
      duration: 1,
      ease: "none",
    });
    gsap.from(playReel.current, {
      y: -100,
      duration: 1.1,
    });
    gsap.from(smallLinks.current, {
      x: 200,
      duration: 2,
      delay: -0.4,
    });
    gsap.from(smallLink.current, {
      x: 200,
      duration: 2,
      delay: -0.4,
    });
    gsap.to(border.current, {
      width: 95 + "vw",
      duration: 1.5,
      delay: -0.1,
    });
  }, [menu]);

  useGSAP(() => {
    gsap.from(" .Links ", {
      y: 100,
      duration: 0.7,
      stagger: 0.1,
    });
  }, [menu]);

  return (
    <div
      style={{
        maxHeight: menu === "active" ? "80vh" : "0",
        transition: "max-height 0.5s ease",
        overflow: "hidden",
        position: "absolute",
        zIndex: 10,
        width: "100vw",
      }}
    >
      <span ref={playReel}>
        <RxCross1
          className="absolute top-6 right-8 size-6"
          onClick={() => {
            setMenu("inactive");
          }}
        />
      </span>

      <div className="flex justify-around items-center bg-[#FEFAF6] w-full h-[70vh] ">
        <div className="flex flex-col -translate-x-[135px] mt-[-100px]">
          <h3 className="text-[20px]">LOUIS VUITTON </h3>
          <video
            ref={video}
            src="/Assets/LV-2.mp4"
            className="w-[22vw] h-auto rounded"
            loop
            muted
            autoPlay
          ></video>

          <div className="flex items-center justify-between mt-5">
            <div className="flex">
              <FaCirclePlay className="translate-y-1 mr-2" />
              <h4 className="inline relative" id="lined">
                Play reel
              </h4>
            </div>
            <h4>-01:18</h4>
          </div>
        </div>

        <div className="flex flex-col mr-[10rem] mt-[-10px] relative">
          <div
            className="relative flex items-start elem"
            onMouseEnter={() => setHoveringWomen(true)}
            onMouseLeave={() => setHoveringWomen(false)}
          >
            <div
              className="relative h-[3rem] overflow-hidden z-[99]"
              id="lined"
            >
              <h1 className="text-5xl">Women</h1>
              <h1 className="text-5xl">Women</h1>
            </div>
          </div>
          <div
            className="relative flex items-start elem"
            onMouseEnter={() => setHoveringMen(true)}
            onMouseLeave={() => setHoveringMen(false)}
          >
            <div
              className="relative h-[3rem] overflow-hidden z-[99] "
              id="lined"
            >
              <h1 className="text-5xl">Men</h1>
              <h1 className="text-5xl">Men</h1>
            </div>
          </div>
          <div
            className="relative flex items-start elem"
            onMouseEnter={() => setHoveringBags(true)}
            onMouseLeave={() => setHoveringBags(false)}
          >
            <div
              className="relative h-[3.3rem] overflow-hidden z-[99]"
              id="lined"
            >
              <h1 className="text-5xl">Bags</h1>
              <h1 className="text-5xl">Bags</h1>
            </div>
          </div>
          <div
            className="relative flex items-start elem"
            onMouseEnter={() => setHoveringWatches(true)}
            onMouseLeave={() => setHoveringWatches(false)}
          >
            <div
              className="relative h-[3rem] overflow-hidden z-[99]"
              id="lined"
            >
              <h1 className="text-5xl">Watches</h1>
              <h1 className="text-5xl">Watches</h1>
            </div>
          </div>
          <div
            className="relative flex items-start elem"
            onMouseEnter={() => setHoveringPerfumes(true)}
            onMouseLeave={() => setHoveringPerfumes(false)}
          >
            <div
              className="relative h-[3rem] overflow-hidden z-[99]"
              id="lined"
            >
              <h1 className=" text-5xl">Perfumes</h1>
              <h1 className="text-5xl">Perfumes</h1>
            </div>
          </div>
          <Button
            variant="outline"
            className="Link border-black bg-[#FEFAF6] discover-btn  flex elem hover:text-white mt-5 "
          >
            <div className="relative h-[2rem] overflow-hidden z-[99] ">
              <h1 className="text-lg">Discover Collections</h1>
              <h1 className="text-lg ">Discover Collections</h1>
            </div>
          </Button>
        </div>
      </div>

      <div ref={border} className="bg-black w-[97%] h-[1px] mx-auto"></div>

      <div className="flex items-center py-2 justify-between mx-0 bg-[#FEFAF6]">
        <h2
          ref={smallLink}
          className="font-light ml-5 text-[16px] text-black font-serif"
        >
          Shop Smart, Live Well.™
        </h2>
        <div ref={smallLinks} className="flex items-center gap-2 mr-5 ">
          <h2
            className="flex relative"
            onMouseEnter={() => setHovering1(true)}
            onMouseLeave={() => setHovering1(false)}
          >
            <p className="relative inline" id="lined">
              X{" "}
            </p>
            <GoArrowUpRight
              className={`translate-y-1 transition-all ease-in-out duration-1000 ${
                hovering1
                  ? "transform rotate-45 transition-all duration-1000"
                  : ""
              }`}
            />
          </h2>

          <h2
            className="flex"
            onMouseEnter={() => setHovering2(true)}
            onMouseLeave={() => setHovering2(false)}
          >
            <p className="relative inline" id="lined">
              Instagram{" "}
            </p>

            <GoArrowUpRight
              className={`translate-y-1  transition-all  duration-500${
                hovering2
                  ? "transform rotate-45  transition-all  duration-500"
                  : ""
              }`}
            />
          </h2>
          <h2
            className="flex relative"
            onMouseEnter={() => setHovering3(true)}
            onMouseLeave={() => setHovering3(false)}
          >
            <p className="relative inline" id="lined">
              Linkedin{" "}
            </p>
            <GoArrowUpRight
              className={`translate-y-1 transition-all ease-in-out duration-500${
                hovering3
                  ? "transform rotate-45 transition-all duration-500"
                  : ""
              }`}
            />
          </h2>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
