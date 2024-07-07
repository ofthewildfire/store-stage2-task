import React from "react";

const ShoppingProductCard = () => {
  return (
    <div className="flex items-center gap-5 p-5 bg-white">
      <div className="flex items-center gap-2">
        <img src="redpot.png" alt="Red pot" width={137} height={105} />
        <div className="text">
          <h4>Ceramic Set</h4>
          <p>Recycled Ceramic made with natural benzonite clay</p>
        </div>
      </div>
      <div>
        <h4>₦ 129,999.99</h4>
        <div className="control">
          <span>Quantity</span>
          <span>-</span>
          <span>1</span>
          <span>+</span>
        </div>
      </div>
    </div>
  );
};

export default ShoppingProductCard;
