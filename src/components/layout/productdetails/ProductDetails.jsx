import Footer from "../Footer";
import Header from "../Header";
import Description from "./Description";
import Recommedation from "./Recommedation";

const ProductDetails = () => {
  return (
    <>
      <Header />
      <main className="bg-[#F1F1F1] p-5">
        <h2 className="text-[#383838] text-center font-bold text-[2.25rem]">
          Product List
        </h2>
        <div className="listing-details grid grid-cols-2 gap-3 py-9 max-sm:flex max-sm:flex-col">
          <div className="img">
            <img src="pot-details.png" alt="Red pot image" />
            <div className="previews grid grid-cols-3 py-2">
              <img src="bread-prev.png" alt="" />
              <img src="prev-2.png" alt="" />
              <img src="prev-3.png" alt="" />
            </div>
          </div>
          <div className="text flex flex-col">
            <div className="flex justify-between">
              <div className="title flex gap-1 items-center ">
                <h3 className="text-[#000000] text-[2.25rem] font-bold">
                  Ceramic Pot
                </h3>
                <span className="text-[#5B5B5B] text-[.625rem]">
                  (In stock)
                </span>
              </div>
            </div>
            <div className="desc">
              <p className="text-[#383838] font-medium text-[1.5rem]">
                Recycled Ceramic made with natural benzonite clay
              </p>
              <div className="reviews flex items-center gap-3">
                <div className="stars flex gap-1 flex-col items-center justify-center py-2">
                  <img
                    src="threestar_rating.png"
                    alt="Star rating of the ceramic pots"
                  />
                </div>
                <p className="text-[#969696] text-[.625rem]">2.3k Reviews</p>
              </div>
              <div className="full-desc">
                <p>
                  Elevate your culinary experience with our premium ceramic
                  cooking pot, meticulously crafted to enhance the flavors and
                  textures of your favorite dishes. Made from high-quality
                  ceramic, this versatile pot combines elegance with exceptional
                  performance, making it a must-have for every kitchen.
                </p>
              </div>
            </div>
            <div className="use-coupon flex items-center justify-between py-5">
              <div className="colors flex gap-2 items-center">
                <div
                  style={{ backgroundColor: "#EC432A" }}
                  className="rounded-[50%] border-[3px] h-[1.875rem] w-[1.875rem]"></div>
                <div
                  style={{ backgroundColor: "#383838" }}
                  className="rounded-[50%] border-[3px] h-[1.875rem] w-[1.875rem]"></div>
                <div
                  style={{ backgroundColor: "#1D3B4A" }}
                  className="rounded-[50%] border-[3px] h-[1.875rem] w-[1.875rem]"></div>
                <p className="text-[#969696] text-[.625rem]">
                  Colors Available
                </p>
              </div>
              <p className="text-[#3A83A1] font-semibold flex items-center gap-2">
                {" "}
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M18.125 8.75C18.2908 8.75 18.4497 8.68415 18.5669 8.56694C18.6842 8.44973 18.75 8.29076 18.75 8.125V5C18.75 4.66848 18.6183 4.35054 18.3839 4.11612C18.1495 3.8817 17.8315 3.75 17.5 3.75H2.5C2.16848 3.75 1.85054 3.8817 1.61612 4.11612C1.3817 4.35054 1.25 4.66848 1.25 5V8.125C1.25 8.29076 1.31585 8.44973 1.43306 8.56694C1.55027 8.68415 1.70924 8.75 1.875 8.75C2.20652 8.75 2.52446 8.8817 2.75888 9.11612C2.9933 9.35054 3.125 9.66848 3.125 10C3.125 10.3315 2.9933 10.6495 2.75888 10.8839C2.52446 11.1183 2.20652 11.25 1.875 11.25C1.70924 11.25 1.55027 11.3158 1.43306 11.4331C1.31585 11.5503 1.25 11.7092 1.25 11.875V15C1.25 15.3315 1.3817 15.6495 1.61612 15.8839C1.85054 16.1183 2.16848 16.25 2.5 16.25H17.5C17.8315 16.25 18.1495 16.1183 18.3839 15.8839C18.6183 15.6495 18.75 15.3315 18.75 15V11.875C18.75 11.7092 18.6842 11.5503 18.5669 11.4331C18.4497 11.3158 18.2908 11.25 18.125 11.25C17.7935 11.25 17.4755 11.1183 17.2411 10.8839C17.0067 10.6495 16.875 10.3315 16.875 10C16.875 9.66848 17.0067 9.35054 17.2411 9.11612C17.4755 8.8817 17.7935 8.75 18.125 8.75ZM17.5 12.4188V15H13.125V13.125H11.875V15H2.5V12.4188C3.035 12.2789 3.50854 11.9657 3.84651 11.528C4.18449 11.0903 4.36782 10.553 4.36782 10C4.36782 9.44703 4.18449 8.90966 3.84651 8.472C3.50854 8.03434 3.035 7.72108 2.5 7.58125V5H11.875V6.875H13.125V5H17.5V7.58125C16.965 7.72108 16.4915 8.03434 16.1535 8.472C15.8155 8.90966 15.6322 9.44703 15.6322 10C15.6322 10.553 15.8155 11.0903 16.1535 11.528C16.4915 11.9657 16.965 12.2789 17.5 12.4188Z"
                    fill="#3A83A1"
                  />
                  <path
                    d="M11.875 8.125H13.125V11.875H11.875V8.125Z"
                    fill="#3A83A1"
                  />
                </svg>
                Use Coupon
              </p>
            </div>

            <div className="price flex justify-between">
              <div className="flex flex-col">
                <span className="text-[#969696] text-[.75rem]">Price</span>
                <p className="text-[#383838] text-[1.5rem] font-bold mx-2">
                  {"₦ 29,999.99"}
                </p>
              </div>
              <div className="add-to-cart flex flex-col items-center justify-center gap-2">
                <div className="control flex items-center gap-2">
                  <span className="text-[#969696] text-[.875rem]">
                    Quantity
                  </span>
                  <span className="bg-[#3A83A1] text-white h-[1.875rem] w-[1.875rem] flex items-center justify-center">
                    -
                  </span>
                  <span className="text-[#8F8F8F] text-[1.25rem] font-semibold">
                    1
                  </span>
                  <span className="text-[#3A83A1] bg-white border border-[#3A83A1] h-[1.875rem] w-[1.875rem] flex items-center justify-center">
                    +
                  </span>
                </div>
              </div>
            </div>
            <div className="buttons py-5 flex gap-3 justify-end">
              <button className="product-details-add-to-cart-btn">
                Add to Cart
              </button>
              <button className="product-details-buy-now-btn">Buy Now</button>
            </div>
          </div>
        </div>
        <Recommedation />
        <Description />
      </main>
      <Footer />
    </>
  );
};

export default ProductDetails;
