import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { GoArrowUpRight } from "react-icons/go";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "./styles.css";

const Footer = () => {
  const [scrollVal, setScrollVal] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const bottomPosition = window.innerHeight + window.scrollY;
      const documentHeight = Math.max(
        document.body.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.clientHeight,
        document.documentElement.scrollHeight,
        document.documentElement.offsetHeight
      );
      const isBottom = bottomPosition >= documentHeight - 1;

      if (isBottom) {
        setScrollVal(Math.random() * 1000);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useGSAP(() => {
    gsap.from(".Links", {
      y: 300,
      duration: 0.7,
      stagger: 0.1,
    });
  }, [scrollVal]);

  return (
    <div className="p-8 flex flex-col bg-black h-screen relative z-[-10] ">
      <div className="w-full h-10vh flex justify-between">
        <div className="flex flex-col gap-5">
          <h1 className="text-white text-[20px]">Live the Luxury.</h1>
          <Button className="hover:bg-white transform transition-all ease duration-300 hover:text-black font-medium hover:border-black bg-black border-[0.3px] border-gray-400 rounded-[20px]">
            Contact Us
          </Button>
        </div>

        <div className="flex gap-20 leading-none ">
          <ul className="flex flex-col gap-0.4">
            <span>
              <li className="text-white my-0.5 relative inline lined">Home</li>
            </span>
            <span>
              <li className="text-white my-0.5 relative inline lined">
                About{" "}
              </li>
            </span>
            <span>
              <li className="text-white my-0.5  relative lined ">Services</li>
            </span>
            <span>
              <li className="text-white my-0.5  relative inline lined ">
                Contact Us
              </li>
            </span>
          </ul>

          <ul className="flex flex-col">
            <span>
              <li className="text-white inline relative  my-0.5 lined ">X</li>
              <GoArrowUpRight className="mb-2 inline text-white" />
            </span>
            <span>
              <li className="text-white  my-0.5 inline relative lined">
                Instagram
              </li>
              <GoArrowUpRight className="mb-2 inline text-white" />
            </span>
            <span>
              <li className="text-white  my-0.5 inline relative lined">
                LinkedIn
              </li>
              <GoArrowUpRight className="mb-2 inline text-white" />
            </span>
          </ul>
        </div>
      </div>

      <div className="w-full flex flex-col text-white mt-[100px]">
        <div className="flex justify-between">
          <div>
            <ul className=" flex flex-col leading-none ">
              <li>San-Diego-California</li>
              <li className="inline">Paris-France</li>
            </ul>
          </div>

          <div className="mt-6">
            <ul className="flex gap-20">
              <li className="inline">contact@amantiwarii.tech</li>
              <li className="inline">©2024 legal</li>
            </ul>
          </div>
        </div>

        <h2 className="text-center text-[240px] font-bold  leading-none mt-[-100px] overflow-hidden pb-8">
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
        </h2>
      </div>
    </div>
  );
};

export default Footer;
