import React from "react";

const SectionTwo = () => {
  return (
    <div className="grid grid-cols-2 gap-5 place-content-center py-8">
      <div className="text-container">
        <img
          src="vector2.png"
          alt="Blue arrow vecotor image"
          width={447}
          height={447}
        />
        <h3 className="text-[#383838] font-bold text-center text-[1.5rem]">
          Our Commitment to Sustainability
        </h3>
        <p className="text-[#5B5B5B]  text-center">
          Beauty is at the heart of our design philosophy. <br /> Each piece of
          cookware is thoughtfully crafted <br />
          not only for its functionality but also for its <br /> aesthetic
          appeal. Whether you prefer sleek <br /> modern designs or timeless
          classics, our <br /> collections are curated to complement your <br />
          kitchen and elevate your cooking experience.
        </p>
      </div>
      <div className="image-container flex items-center justify-center relative px-5">
        <img src="section2img1.png" alt="Red tools with bread" />
        <img
          src="sectiontwoimg2.png"
          alt="Pasta pog, some pasta and other things"
          className="absolute right-0 bottom-0 w-auto"
          width={371}
          height={392}
        />
      </div>
    </div>
  );
};

export default SectionTwo;
