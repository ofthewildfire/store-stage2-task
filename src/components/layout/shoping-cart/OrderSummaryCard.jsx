const OrderSummaryCard = () => {
  return (
    <div className="w-[20rem]">
      <h3 className="flex items-center gap-2 text-white font-bold text-[1.5rem] bg-[#3A83A1] p-2">
        Order Summary{" "}
      </h3>
      <ul className="bg-white grid gap-5 p-2 grid-cols-2 grid-flow-dense"></ul>
    </div>
  );
};

export default OrderSummaryCard;
