import features from "./FeaturesData";
import ReviewsProductCard from "./ReviewsProductCard";

const featuresElemements = features.map((el) => {
  return (
    <li key={el.span} className="text-[#5B5B5B] text-[1.25rem] flex gap-2">
      <span className="text-[#5B5B5B] font-medium text-[1.25rem]">
        {el.span}
      </span>
      {el.li}
    </li>
  );
});

const Description = () => {
  return (
    <div className="grid gap-5">
      <div className="flex gap-3 flex-col items-start justify-around mt-5">
        <h3 className="product-details-buy-now-btn">Description</h3>
      </div>
      <h4 className="text-[#5B5B5B] font-semibold text-[1.25rem]">
        Key Features:
      </h4>
      <ul className="features-list grid gap-4">{featuresElemements}</ul>
      <h4 className="text-[#5B5B5B] font-semibold text-[1.25rem]">
        Why Choose Our Ceramic Cooking Pot?
      </h4>
      <p className="text-[#5B5B5B] text-[1.25rem]">
        Our ceramic cooking pot is more than just a cooking vessel; it's a
        reflection of our commitment to quality and culinary excellence. Whether
        you're simmering soups, braising meats, or preparing delicate sauces,
        its superior heat distribution ensures consistent cooking results every
        time. The non-porous surface also makes it resistant to stains and
        odors, preserving the integrity of your dishes.
      </p>
      <h5 className="text-[#5B5B5B] text-[1.25rem] font-medium">
        Care and Maintenance:
      </h5>
      <p className="text-[#5B5B5B] text-[1.25rem]">
        To maintain its pristine condition, hand wash with mild soap and avoid
        harsh abrasives. The ceramic material is dishwasher-safe for added
        convenience, ensuring effortless cleanup after every use.
      </p>
      <p className="text-[#5B5B5B] text-[1.25rem]">
        Transform your kitchen into a culinary haven with our premium ceramic
        cooking pot. Designed to meet the demands of professional chefs and home
        cooks alike, it combines functionality with timeless elegance, making it
        an essential addition to your cookware collection.
      </p>
      <div className="flex gap-3 flex-col items-start justify-around mt-5">
        <h3 className="product-details-buy-now-btn">Reviews</h3>
      </div>
      <ReviewsProductCard />
    </div>
  );
};

export default Description;
