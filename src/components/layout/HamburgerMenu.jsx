// src/HamburgerMenu.js

import { useState } from "react";
import { Link } from "react-router-dom";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex justify-between items-center w-full px-3 max-md:hidden ">
      <div className="relative min-[767px]:hidden">
        <button
          className="text-gray-700 hover:text-gray-900 focus:outline-none focus:text-gray-900"
          onClick={toggleMenu}>
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>
        </button>

        {/* Full-screen overlay menu */}
        <div
          className={`${
            isOpen ? "fixed" : "hidden"
          } inset-0 bg-white bg-opacity-95 z-20 flex flex-col items-center justify-center space-y-4`}>
          <button
            className="absolute top-4 right-4 text-blue-500 hover:text-white focus:outline-none"
            onClick={toggleMenu}>
            <svg
              className="h-8 w-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <ul className="*:text-[1.25rem] grid gap-14 font-bold *:text-[#3A83A1]">
            <Link
              to={"/"}
              className="hover:border-b-2 hover:border-grey-900 hover:text-[#3A83A1]">
              <a href="#">Home</a>
            </Link>
            <Link
              to={"/about"}
              className="hover:border-b-2 hover:border-grey-900 hover:text-[#3A83A1]">
              <a href="#">About Us</a>
            </Link>
            <Link
              to={"/products"}
              className="hover:border-b-2 hover:border-grey-900 hover:text-[#3A83A1]">
              <a href="#">Our Products</a>
            </Link>
            <Link to={"/blog"}>
              {" "}
              <li className="hover:border-b-2 hover:border-grey-900 hover:text-[#3A83A1]">
                <a href="#">Blog</a>
              </li>
            </Link>
          </ul>
        </div>
      </div>
      {/* Icon */}
      <Link
        to={"/cart"}
        className="flex gap-2 items-center max-md:hidden border">
        <img
          src="cart.png"
          alt="Cart icon"
          height={24}
          width={24}
          className="object-contain max-md:hidden "
        />

        <span className="text-[#B5B5B5] text-[.75rem] max-md:hidden ">
          Cart(2)
        </span>
      </Link>
    </div>
  );
};

export default HamburgerMenu;
