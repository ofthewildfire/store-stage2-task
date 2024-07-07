import React from "react";

const Reviews = (data) => {
  return (
    <div className="bg-white p-5 max-w-fit text-center relative">
      <img
        src={data.data.avatar}
        alt="Reviewer avatar"
        width={137}
        height={137}
        className="rounded-[50%] block m-auto absolute top-[-5rem] left-0 right-0"
      />
      <div className="reviewer-details flex flex-col gap-8 mt-10">
        <div>
          <h3 className="text-[#1E1E1E] font-bold text-[1.5rem]">
            Adeola Babalola
          </h3>
          <p className="text-[#383838] font-medium">{data.data.title}</p>
        </div>
        <div>
          <p className="text=[#5B5B5B] text-[.875rem] max-w-[18rem]">
            {data.data.review}
          </p>
        </div>
        <img
          className=" block m-auto"
          src={data.data.rating}
          alt="Five star rating"
        />
      </div>
    </div>
  );
};

export default Reviews;
