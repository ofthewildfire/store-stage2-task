const CheckOutModal = () => {
  return (
    <main className="modal-container max-h-screen min-h-screen">
      <div className=" bg-white p-5 w-[40rem] max-sm:w-full max-md:w-full">
        <div className="img">
          <img src="credit-card-payment.png" alt="Checkout Modal" />
        </div>
        <div>
          {" "}
          <h2 className="text-[#1E1E1E] font-semibold text-[2rem]">
            Congratulations!
          </h2>
          <p className="text-[#5B5B5B] font-medium text-[1.25rem]">
            Your order has been confirmed.
          </p>
        </div>
      </div>
    </main>
  );
};

export default CheckOutModal;
