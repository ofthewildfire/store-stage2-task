const ShoppingProductCard = (props) => {
  return (
    <div className="flex items-center justify-between gap-5 p-5 bg-white drop-shadow-lg max-sm:flex max-md:flex">
      <div className="flex items-center justify-between gap-2 max-sm:flex">
        <img
          src={props.data.img}
          alt="Red pot"
          width={137}
          height={105}
          className="max-sm:h-10 max-sm:w-10"
        />
        <div className="text">
          <h4 className="text-[#1E1E1E] font-semibold max-sm:text-[.9rem]">
            {props.data.title}
          </h4>
          <p className="text-[#383838] text-[.75rem] font-medium">
            {props.data.desc}
          </p>
        </div>
      </div>
      <div className="grid gap-3">
        <h4 className="text-[#1E1E1E] font-bold text-[1.5rem] max-sm:text-[.75rem]  max-md:text-[.75rem]">
          {props.data.price}
        </h4>
        <div className="control flex items-center gap-2">
          <span className="text-[#969696] text-[.875rem]">Quantity</span>
          <span className="bg-[#3A83A1] text-white h-[1.875rem] w-[1.875rem] flex items-center justify-center">
            -
          </span>
          <span className="text-[#8F8F8F] text-[1.25rem] font-semibold">1</span>
          <span className="text-[#3A83A1] bg-white border border-[#3A83A1] h-[1.875rem] w-[1.875rem] flex items-center justify-center">
            +
          </span>
        </div>
      </div>
    </div>
  );
};

export default ShoppingProductCard;
