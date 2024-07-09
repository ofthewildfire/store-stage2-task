import React from "react";

const PriceRange = () => {
  return (
    <div className="w-[20rem] max-sm:hidden max-md:hidden">
      <h3 className="flex items-center gap-2 text-white font-bold text-[1.5rem] bg-[#3A83A1] p-2">
        Price Range{" "}
      </h3>
      <div className="bg-white grid gap-5 p-2">
        <h4 className="text-[#383838] text-[1.25rem] font-bold">
          ₦9,457 - ₦99,999.99
        </h4>
        <input type="range" name="range" id="range" />
      </div>
    </div>
  );
};

export default PriceRange;
