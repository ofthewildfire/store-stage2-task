import React from "react";

const OurBlog = (props) => {
  return (
    <div className="grid blog-card place-content-center">
      <div className="image">
        <img src={props.data.img} alt="" />
      </div>
      <div>
        <h3 className="text-[#1E1E1E] text-[1.5rem] font-bold">
          {props.data.title}
        </h3>
        <p className="text-[#8F8F8F] font-medium text-[1.25rem]">
          {props.data.author}
        </p>
        <p className="text-[#383838] font-medium">{props.data.post}</p>
      </div>
    </div>
  );
};

export default OurBlog;
