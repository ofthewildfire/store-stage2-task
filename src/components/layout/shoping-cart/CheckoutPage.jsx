import Header from "../Header";
import Footer from "../Footer";
import { useState } from "react";
import CheckOutModal from "./CheckOutModal";

const CheckoutPage = () => {
  const [paid, setPaid] = useState(false);

  const toggleModal = (e) => {
    e.preventDefault();
    setPaid((prev) => !prev);
    return <CheckOutModal />;
  };

  return (
    <>
      <Header />
      <main className="bg-[#f1f1f1] grid grid-cols-5 checkout-page-forms max-sm:flex max-sm:flex-col">
        <form
          action="#"
          className="checkout-form flex flex-col gap-5 form-left p-8">
          <h2 className="text-[#383838] text-[2.25rem] font-bold">
            Delivery Information
          </h2>
          <div className="flex items-start gap-2 flex-col">
            <label htmlFor="name" className="flex flex-col items-start">
              Name:
              <input
                type="text"
                name="name"
                id="name"
                className="h-[3rem] indent-1 "
                placeholder="Fathia Alliu"
              />
            </label>
            <label htmlFor="phone" className="flex items-start flex-col">
              Phone:
              <input
                className="h-[3rem] indent-1"
                type="text"
                name="phone"
                id="phone"
                placeholder="0000000000000"
              />
            </label>
            <label htmlFor="address" className="flex items-start flex-col">
              Delivery Address:
              <textarea
                name="address"
                id="address"
                className="resize-none h-[7rem] indent-1 w-[30rem] max-sm:w-full max-md:w-full"></textarea>
            </label>
          </div>

          <div className="flex items-center gap-2 max-sm:flex-col max-md:flex-col">
            <label htmlFor="state" className="flex items-start flex-col">
              State:
              <input
                type="text"
                name="state"
                id="state"
                className="h-[3rem] indent-1"
                placeholder="Lagos"
              />
            </label>
            <label htmlFor="country" className="flex items-start flex-col">
              Country:
              <input
                type="text"
                name="country"
                id="country"
                className="h-[3rem] indent-1"
                placeholder="Country"
              />
            </label>
          </div>
          <label
            htmlFor="default"
            className="flex items-center gap-2 text-[#5B5B5B]">
            <input type="checkbox" name="default" id="default" checked />
            Set as Default Address
          </label>
          <div className="buttons flex gap-4 items-center justify-end">
            <button className="flex gap-2 items-center text-[#3A83A1] font-semibold text-[1.5rem] h-[2.5rem]">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M18 6L6 18M6 6L18 18"
                  stroke="#3A83A1"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              Cancel
            </button>
            <button className="bg-[#3A83A1] font-bold text-white text-[1.5rem] h-[2.5rem] w-[12rem]">
              Save
            </button>
          </div>
        </form>
        <form action="#" className="form-right bg-[#FAFAFA] p-8 ">
          <h3 className="text-[#383838] text-[2rem] font-semibold">
            Card Details
          </h3>
          <div className="grid gap-8">
            <label htmlFor="card-name" className="flex flex-col items-start">
              Card Name:
              <input
                type="text"
                name="card-name"
                id="card-name"
                className="h-[3rem] indent-1 border w-full"
                placeholder="Fathia Alliu"
              />
            </label>
            <label htmlFor="card-num" className="flex flex-col items-start">
              Card Number:
              <input
                type="text"
                name="card-num"
                id="card-num"
                className="h-[3rem] indent-1 border w-full"
                placeholder="0000-0000-0000-0000"
              />
            </label>
            <div className="flex items-center gap-2 grid-cols-2">
              <label htmlFor="state" className="flex items-start flex-col ">
                Expiration Number:
                <input
                  type="text"
                  name="Expiration Number"
                  id="Expiration Number"
                  className="h-[3rem] indent-1 border w-full"
                  placeholder="Expiration Number"
                />
              </label>
              <label htmlFor="country" className="flex items-start flex-col ">
                CVC:
                <input
                  type="text"
                  name="cvc"
                  id="cvc"
                  className="h-[3rem] indent-1 border w-full "
                  placeholder="CVC"
                />
              </label>
            </div>
          </div>
          <button
            onClick={toggleModal}
            className="bg-[#3A83A1] font-bold text-white text-[1.5rem] w-full mt-8 p-2">
            Check Out
          </button>
        </form>
        <div
          className={`${
            paid ? "fixed" : "hidden"
          } inset-0 bg-white bg-opacity-95 z-20 flex flex-col items-center justify-center space-y-4`}>
          <CheckOutModal />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default CheckoutPage;
