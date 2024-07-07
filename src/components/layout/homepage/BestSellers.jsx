import React from "react";

const BestSellers = (props) => {
  console.log(props);
  return (
    <div className="bg-white p-5 w-[22.5rem] grid gap-3">
      <img src={props.data.img} alt="Red Pot" />
      <div className="flex justify-between">
        <div className="title flex gap-1 items-center ">
          <h3 className="text-[#1E1E1E] text-[1.5rem] font-bold">
            {props.data.productTitle}
          </h3>
          <span className="text-[#5B5B5B] text-[.625rem]">
            {props.data.availability}
          </span>
        </div>
        <div className="reviews">
          <div className="stars flex gap-1 flex-col items-center justify-center py-2">
            <img
              src={props.data.rating}
              alt="Star rating of the ceramic pots"
            />
          </div>
          <p className="text-[#969696] text-[.625rem]">2.3k Reviews</p>
        </div>
      </div>
      <div className="desc">
        <p className="text-[#383838] font-medium">{props.data.productDesc}</p>
      </div>
      <div className="colors flex gap-2 items-center">
        <div
          style={{ backgroundColor: props.data.colorChoices[0] }}
          className="rounded-[50%] border-[3px] h-[1.875rem] w-[1.875rem]"></div>
        <div
          style={{ backgroundColor: props.data.colorChoices[1] }}
          className="rounded-[50%] border-[3px] h-[1.875rem] w-[1.875rem]"></div>
        <div
          style={{ backgroundColor: props.data.colorChoices[2] }}
          className="rounded-[50%] border-[3px] h-[1.875rem] w-[1.875rem]"></div>
        <p className="text-[#969696] text-[.625rem]">Colors Available</p>
      </div>
      <div className="price flex justify-between">
        <div className="flex flex-col">
          <span className="text-[#969696] text-[.75rem]">Price</span>
          <p className="text-[#383838] text-[1.5rem] font-bold mx-2">
            {props.data.price}
          </p>
        </div>
        <div className="add-to-cart flex flex-col items-center justify-center gap-2">
          <button className="bg-[#3A83A1] h-[2.8rem] w-[2.8rem] flex items-center justify-center">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M4.5 4.5H22.5L20.25 14.25H6.75M20.25 17.25H7.5L3.75 1.5H1.5"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M18.75 21.75C19.5784 21.75 20.25 21.0784 20.25 20.25C20.25 19.4216 19.5784 18.75 18.75 18.75C17.9216 18.75 17.25 19.4216 17.25 20.25C17.25 21.0784 17.9216 21.75 18.75 21.75Z"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M9 21.75C9.82843 21.75 10.5 21.0784 10.5 20.25C10.5 19.4216 9.82843 18.75 9 18.75C8.17157 18.75 7.5 19.4216 7.5 20.25C7.5 21.0784 8.17157 21.75 9 21.75Z"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <span className="text-[#3A83A1] text-[.625rem] text-center">
            Add to cart
          </span>
        </div>
      </div>
    </div>
  );
};

export default BestSellers;
