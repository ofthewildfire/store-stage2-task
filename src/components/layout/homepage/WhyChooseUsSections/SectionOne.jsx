import React from "react";

const SectionOne = () => {
  return (
    <div className="grid grid-cols-2 gap-5 place-content-center py-8 max-sm:grid-cols-1">
      <div className="image-container flex items-center justify-center relative">
        <img
          src="whychooseus/redwithbread.png"
          alt="Red tools with bread"
          // width={371}
          // height={392}
        />
        <img
          src="whychooseus/pastapot.png"
          alt="Pasta pog, some pasta and other things"
          className="absolute right-0 bottom-0 max-sm:hidden"
          // width={371}
          // height={392}
        />
      </div>
      <div className="text-container">
        <img
          src="whychooseus/vector.png"
          alt="Blue arrow vecotor image"
          width={447}
          height={447}
        />
        <h3 className="text-[#383838] font-bold text-center text-[1.5rem]">
          Our Commitment to Sustainability
        </h3>
        <p className="text-[#5B5B5B]  text-center">
          We are committed to sustainability in every aspect of our business.{" "}
          <br />
          From sourcing eco-friendly materials to reducing our carbon footprint,{" "}
          <br />
          we strive to make a positive impact on the environment. Our cookware{" "}
          <br />
          is crafted from recycled stainless steel, non-toxic ceramic coatings{" "}
          <br />
          to ensure durability without compromising our planet's well-being.
        </p>
      </div>
    </div>
  );
};

export default SectionOne;
