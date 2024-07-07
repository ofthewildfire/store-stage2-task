import React from "react";
import SectionOne from "./WhyChooseUsSections/SectionOne";
import SectionTwo from "./WhyChooseUsSections/SectionTwo";

const WhyChoseUs = () => {
  return (
    <>
      {" "}
      <section className="grid gap-2 py-3">
        <h2 className="text-[#383838] text-center font-bold text-[2.25rem]">
          Why Choose Us?
        </h2>
        <p className="text-center max-w-[46rem] m-auto text-[#5B5B5B] text-[1.25rem]">
          At Cookware, we believe that cooking should be an experience that not
          only delights the senses but also nurtures our planet. Our journey
          began with a simple yet powerful idea: to create cookware that
          embodies both sustainability and aesthetic appeal.
        </p>
      </section>
      <SectionOne />
      <SectionTwo />
      <p className="text-[#5B5B5B] text-[1.25rem] text-center py-10">
        When you choose{" "}
        <span className="text-[#3A83A1] font-medium">Acookware</span>, you're
        not just choosing quality cookware; <br />
        you're joining us in our mission to create a more sustainable future. We{" "}
        <br />
        invite you to explore our collections, discover the perfect pieces for{" "}
        <br />
        your kitchen, and experience the harmony of beauty and eco-friendliness{" "}
        <br />
        in every meal you prepare.
      </p>
    </>
  );
};

export default WhyChoseUs;
