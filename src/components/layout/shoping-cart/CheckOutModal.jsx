const CheckOutModal = () => {
  return (
    <div className=" bg-white rounded-md w-[20rem] p-5 block absolute">
      <div className="img">
        <img src="credit-card-payment.png" alt="Checkout Modal" />
      </div>
      <h2 className="text-[#1E1E1E] font-semibold text-[2rem]">
        Congratulations!
      </h2>
      <p>Your order has been confirmed.</p>
    </div>
  );
};

export default CheckOutModal;
