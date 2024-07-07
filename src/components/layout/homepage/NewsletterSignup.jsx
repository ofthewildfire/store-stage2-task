import React from "react";

const NewsletterSignup = () => {
  return (
    <div className="bg-white grid grid-cols-2">
      <div className="text-signup grid place-content-center gap-3">
        <h2 className="font-semibold text-[2rem] text-[#1E1E1E]">
          Sign Up for Our Newsletter
        </h2>
        <p className="text-[#383838]">
          To be the first to receive updates and <br />
          plenty of bonus gifts
        </p>
        <form action="#" className="flex gap-3">
          <label htmlFor="emailinput border border-[#D9D9D9]">
            <input
              type="text"
              name="emailinput"
              id="emailinput"
              placeholder="Your email"
              className="p-2 border h-10 w-full"
            />
          </label>
          <button className="bg-[#3A83A1] text-white font-medium p-2 h-10">
            Sign Up
          </button>
        </form>
      </div>
      <div className="image">
        <img src="newsletterimg.png" alt="Newsletter img" />
      </div>
    </div>
  );
};

export default NewsletterSignup;
