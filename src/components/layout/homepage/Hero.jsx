import React from "react";
import HeroOfferBlock from "./HeroOfferBlock";

const Hero = () => {
  return (
    <section id="hero relative">
      <div className="bg-[url(image.png)] bg-cover flex items-center justify-center h-screen text-center text-white gap-4 flex-col">
        <h1 className="text-[3rem] font-bold w-[30rem] text-center">
          Lets Help you Spice up your Kitchen
        </h1>
        <p className="text-[1.25rem] text-white font-medium w-[40rem]">
          We can help you create aesthetic and functional cooking spaces where
          you can accomplish your culinary dreams
        </p>
      </div>
    </section>
  );
};

export default Hero;
