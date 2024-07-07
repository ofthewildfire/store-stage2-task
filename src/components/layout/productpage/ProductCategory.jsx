import React from "react";

const ProductCategory = () => {
  return (
    <div className=" w-[20rem]">
      <h3 className="flex items-center gap-2 text-white font-bold text-[1.5rem] bg-[#3A83A1] p-2">
        Product Category{" "}
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M5.83329 8.33333L9.99996 12.5L14.1666 8.33333"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </h3>
      <ul className="bg-white grid gap-5 p-2">
        <li>Pots</li>
        <li>Pans</li>
        <li>Cutlery</li>
        <li>Tablecloth</li>
        <li>Knives</li>
      </ul>
    </div>
  );
};

export default ProductCategory;
