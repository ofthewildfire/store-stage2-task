import { Link } from "react-router-dom";

const OrderSummaryCard = () => {
  return (
    <div className="w-[25rem] max-sm:w-full max-md:w-full">
      <h3 className="flex items-center gap-2 text-white font-bold justify-center text-[1.5rem] bg-[#3A83A1] p-2">
        Order Summary{" "}
      </h3>
      <ul className="bg-white grid gap-5 p-2">
        <li className="text-[#383838] font-bold text-[1.5rem]  flex justify-between">
          Sub-Total:
          <span className="text-[1.25rem] font-normal">₦ 29,999.99</span>
        </li>
        <li className="text-[#383838] font-bold text-[1.5rem]  flex justify-between">
          Coupon:
          <span className="text-[1.25rem] font-normal">- ₦ 999.99</span>
        </li>
        <li className="text-[#383838] font-bold text-[1.5rem]  flex justify-between">
          Shipping:
          <span className="text-[1.25rem] font-normal">₦ 2,000.00</span>
        </li>
        <li className="text-[#383838] font-bold text-[1.5rem]  flex justify-between">
          Total:
          <span className="text-[1.25rem] font-normal">₦ 31,999.99</span>
        </li>
      </ul>
      <Link to={"/checkout"}>
        <button className="bg-[#3A83A1] font-bold text-white text-[1.5rem] w-[25rem] mt-4 p-2 max-sm:w-full max-md:w-full">
          Check Out
        </button>
      </Link>
    </div>
  );
};

export default OrderSummaryCard;
