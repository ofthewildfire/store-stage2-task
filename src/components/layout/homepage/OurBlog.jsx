/* eslint-disable react/prop-types */
const OurBlog = (props) => {
  return (
    <>
      {/* Desktop version */}
      <div className="grid blog-card place-content-center">
        <div className="image">
          <img src={props.data.img} alt="" />
        </div>
        <div>
          <h3 className="text-[#1E1E1E] text-[1.5rem] font-bold  max-md:text-[.95rem] max-sm:text-[.95rem]">
            {props.data.title}
          </h3>
          <p className="text-[#8F8F8F] font-medium text-[1.25rem]  max-md:text-[.75rem] max-sm:text-[.75rem]">
            {props.data.author}
          </p>
          <p className="text-[#383838] font-medium  max-md:text-[.65rem] max-sm:text-[.65rem]">
            {props.data.post}
          </p>
        </div>
      </div>{" "}
    </>
  );
};

export default OurBlog;
