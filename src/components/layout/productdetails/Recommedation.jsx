import React from "react";
import BestSellers from "../homepage/BestSellers";
import recData from "./RecData";
import reviewsOnProductData from "./reviewsOnProductData";
import ReviewsProductCard from "./ReviewsProductCard";

const recElements = recData.map((el) => {
  return <BestSellers key={el.title} data={el} />;
});

const reviewElemets = reviewsOnProductData.map((el) => {
  return <ReviewsProductCard key={el.name} el={el} />;
});

const Recommedation = () => {
  return (
    <div>
      <h2 className="text-[#383838] text-center font-bold text-[2.25rem] mb-5">
        You may also like this
      </h2>
      <div className="recs-cards flex gap-3 items-center justify-center">
        {recElements}
      </div>
    </div>
  );
};

export default Recommedation;
