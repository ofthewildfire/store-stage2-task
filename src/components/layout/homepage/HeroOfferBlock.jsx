import React from "react";

const HeroOfferBlock = ({ img, title, desc }) => {
  return (
    <div className="bg-white flex flex-col items-center justify-center text-center gap-2 shadow-lg p-5 min-h-[12.5rem] relative top-[-5rem]">
      <img src={img} alt="A picture of a pot" height={40} width={40} />
      <h2 className="text-[#383838] font-bold text-[1.25rem]">{title}</h2>
      <p className="text-[#8F8F8F] text-[.6875rem]">{desc}</p>
    </div>
  );
};

export default HeroOfferBlock;
