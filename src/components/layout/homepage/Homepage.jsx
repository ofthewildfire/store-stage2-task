// import React from "react";
import WhyChoseUs from "./WhyChoseUs";
import NewsletterSignup from "./NewsletterSignup";
import BestSellers from "./BestSellers";
import Reviews from "./Reviews";
import HeroOfferBlock from "./HeroOfferBlock";
import OurBlog from "./OurBlog";
import bestSelling from "./BestSellersData";
import OurBlogData from "./OurBlogData";
import reviewsData from "./ReviewsData";
import data from "./HeroOffersData";
import Hero from "./Hero";

const Homepage = () => {
  const dataElements = data.map((el) => {
    return (
      <HeroOfferBlock
        key={el.title}
        title={el.title}
        desc={el.desc}
        img={el.img}
      />
    );
  });

  const bestSellingItems = bestSelling.map((el) => {
    return <BestSellers key={el.title} data={el} />;
  });

  const reviewElements = reviewsData.map((el) => {
    return <Reviews key={el.name} data={el} />;
  });

  const blogElements = OurBlogData.map((el) => {
    return <OurBlog key={el.title} data={el} />;
  });

  return (
    <>
      <Hero />
      <div className="p-2.5">
        <div className="grid grid-cols-4 gap-5 w-2/3 items-center m-auto">
          {dataElements}
        </div>
      </div>
      <WhyChoseUs />
      <section className="best-sellers">
        <h2 className="text-[#383838] font-bold text-[2rem] text-center">
          Our Best Sellers
        </h2>
        <span className="font-bold text-right block text-[#1D3B4A]">
          See All
        </span>
      </section>
      <div className="bestselling-sectiong flex items-center justify-center gap-3 py-5">
        {bestSellingItems}
      </div>
      <section className="reviews">
        <h2 className="text-[#383838] font-bold text-[2rem] text-center">
          Reviews
        </h2>
        <div className="reviews flex items-center justify-center gap-3 py-[10%]">
          {reviewElements}
        </div>
      </section>
      <section className="our-blog p-5">
        <h2 className="text-[#383838] font-bold text-[2rem] text-center">
          Our Blog
        </h2>
        <div className="flex gap-2 justify-end">{blogElements}</div>
      </section>
      <NewsletterSignup />
    </>
  );
};

export default Homepage;
