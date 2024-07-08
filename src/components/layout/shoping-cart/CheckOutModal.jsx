const CheckOutModal = () => {
  return (
    <main className="modal-container">
      <div className=" bg-white p-5">
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
