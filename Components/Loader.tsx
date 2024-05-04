"use client";
import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Loader = () => {
  useGSAP(() => {
    var tl = gsap.timeline();
    tl.from(".loader  span", {
      x: 100,
      duration: 1.2,
      stagger: 0.03,
      delay: 0.1,
      opacity: 0,
      display: "none",
    });

    tl.to(".loader  span", {
      x: -100,
      duration: 0.6,
      opacity: 0,
      stagger: 0.03,
    });

    tl.from(" .loader span", {
      y: 60,
      duration: 0.5,
      delay: -0.3,
      stagger: 0.05,
    });

    tl.to(".loader", {
      duration: 0.5,
      opacity: 0,
      display: "none",
    });
  });

  return (
    <div className="loader bg-black absolute top-0 left-0 h-screen w-screen z-50 overflow-hidden flex items-center justify-center transition-all duration-400 ease-in-out">
      <span className="inline-block text-white font-light mr-1">Shop</span>
      <span className="inline-block text-white font-light mr-1">Smart,</span>
      <span className="inline-block text-white font-light mr-1">Live</span>
      <span className="inline-block text-white font-light mr-1">Well.™</span>
    </div>
  );
};

export default Loader;
