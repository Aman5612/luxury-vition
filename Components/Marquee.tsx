import React, { useEffect, useState } from "react";
import LocomotiveScroll from "locomotive-scroll";

const Marquee = () => {
  const [directionElement, setDirectionElement] = useState<HTMLElement | null>(
    null
  );

  useEffect(() => {
    const element = document.querySelector("#direction") as HTMLElement;
    setDirectionElement(element);
  }, []);

  useEffect(() => {
    if (directionElement) {
      const scroll = new LocomotiveScroll({
        el: directionElement,
        smooth: true,
      });

      return () => {
        scroll.destroy();
      };
    }
  }, [directionElement]);

  return (
    <section className="min-h-screen  md:w-90vw mx-auto flex justify-center items-center relative w-screen overflow-hidden z-10000">
      <div
        id="direction"
        className="min-h-screen flex flex-col justify-center md:justify-evenly items-center"
      >
        <h1 className="text-5xl md:text-3xl whitespace-nowrap uppercase">
          <span
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="8"
            data-scroll-target="#direction"
            className="block text-white text-[60px] bg-black py-4 px-8"
          >
            Fashon is an armour
          </span>
        </h1>
        <h1 className="text-5xl md:text-3xl whitespace-nowrap uppercase">
          <span
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="-6"
            data-scroll-target="#direction"
            className="block text-white text-[60px] bg-black py-4 px-8"
            style={{ fontFamily: "rejo" }}
          >
            To survive everyday life
          </span>
        </h1>
        <h1 className="text-5xl md:text-3xl whitespace-nowrap uppercase">
          <span
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="6"
            data-scroll-target="#direction"
            className="block text-white text-[60px] bg-black py-4 px-8"
            style={{ fontFamily: "rejo" }}
          >
            One is never over-dressed or
          </span>
        </h1>
        <h1 className="text-5xl md:text-3xl whitespace-nowrap uppercase">
          <span
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="-4"
            data-scroll-target="#direction"
            className="block text-white text-[60px] bg-black py-4 px-8"
            style={{ fontFamily: "rejo" }}
          >
            under-dressed
          </span>
        </h1>
        <h1 className="text-5xl md:text-3xl whitespace-nowrap uppercase">
          <span
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="6"
            data-scroll-target="#direction"
            className="block text-white text-[60px] bg-black py-4 px-8"
            style={{ fontFamily: "rejo" }}
          >
            with a Little Black Dress.
          </span>
        </h1>
      </div>
    </section>
  );
};

export default Marquee;
