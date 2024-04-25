import React from "react";
import Image from "next/image";

const Page3 = () => {
  const carouselRef = React.useRef(null);

  const imageSrc = [
    {
      index: 1,
      imgUrl: "/Assets/img-1.webp",
      title: "Men's Shoes",
      subtitle: "Explore the Selection",
    },
    {
      index: 1,
      imgUrl: "/Assets/img-2.webp",
      title: "Men's Shoes",
      subtitle: "Explore the Selection",
    },
    {
      index: 1,
      imgUrl: "/Assets/img-3.webp",
      title: "Men's Shoes",
      subtitle: "Explore the Selection",
    },
    {
      index: 1,
      imgUrl: "/Assets/img-4.webp",
      title: "Men's Shoes",
      subtitle: "Explore the Selection",
    },
    {
      index: 1,
      imgUrl: "/Assets/img-5.webp",
      title: "Men's Shoes",
      subtitle: "Explore the Selection",
    },
    {
      index: 1,
      imgUrl: "/Assets/img-6.webp",
      title: "Men's Shoes",
      subtitle: "Explore the Selection",
    },
  ];

  const flickityOptions = {
    initialIndex: 0,
    wrapAround: true,
    autoPlay: 3000,
    pageDots: false,
    prevNextButtons: false,
    draggable: true,
    pauseAutoPlayOnHover: false,
    selectedAttraction: 0.01,
    friction: 0.15,
    ParallaxSlider: true,
    vertical: true,
  };
  return (
    <div className="flex item-center justify-center  relative min-h-100vh my-10 ">
      <div
        className="absolute inset-0  z-10 text-[100px] text-black font-bold"
        style={{ fontFamily: "rejo" }}
      >
        Trending
      </div>

      <div className="absolute right-[100px] z-10 w-[20%] text-[27px] ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, iusto.
        Eos vitae fugiat modi temporibus voluptates quo.
        <br />
        <br />
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        <br />
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </div>

      <div className="border-4 border-black p-10 min-h-100vh w-auto">
        <Image
          src="/Assets/img-7.webp"
          alt="demo"
          height={1000}
          width={400}
        ></Image>
      </div>
    </div>
  );
};

export default Page3;
