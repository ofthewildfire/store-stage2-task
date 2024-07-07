import Header from "../Header";
import Footer from "../Footer";
import ProductCategory from "./ProductCategory";
import MaterialSelection from "./MaterialSelection";
import PriceRange from "./PriceRange";
import BestSellers from "../homepage/BestSellers";
import productData from "./ProductData";

const productElements = productData.map((el) => {
  return <BestSellers key={el.title} data={el} />;
});

const ProductList = () => {
  return (
    <>
      <Header />
      <div className="grid grid-cols-6 p-2 product-listing bg-[#F1F1F1]">
        <h2 className="text-[#383838] text-center font-bold text-[2.25rem]">
          Product List
        </h2>
        <aside className="grid">
          <ProductCategory />
          <MaterialSelection />
          <PriceRange />
        </aside>
        <main className="grid grid-cols-2 gap-3 place-content-center">
          {productElements}
        </main>
      </div>{" "}
      <div className="pagination flex items-center gap-4 bg-[#F1F1F1] justify-end p-4 *:font-semibold *:text-[1.25rem]">
        <svg
          width="18"
          height="14"
          viewBox="0 0 18 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0.470073 7.52997C0.329622 7.38934 0.250732 7.19872 0.250732 6.99997C0.250732 6.80122 0.329622 6.61059 0.470073 6.46997L6.47007 0.469968C6.53873 0.396281 6.62153 0.337179 6.71353 0.296187C6.80553 0.255196 6.90485 0.233154 7.00555 0.231378C7.10625 0.229601 7.20628 0.248125 7.29967 0.285846C7.39306 0.323566 7.47789 0.379712 7.54911 0.450931C7.62033 0.522149 7.67647 0.606983 7.7142 0.700372C7.75192 0.79376 7.77044 0.893787 7.76866 0.994491C7.76689 1.09519 7.74485 1.19451 7.70385 1.28651C7.66286 1.37851 7.60376 1.46131 7.53007 1.52997L2.81007 6.24997L17.0001 6.24997C17.199 6.24997 17.3898 6.32899 17.5304 6.46964C17.6711 6.61029 17.7501 6.80106 17.7501 6.99997C17.7501 7.19888 17.6711 7.38965 17.5304 7.5303C17.3898 7.67095 17.199 7.74997 17.0001 7.74997L2.81007 7.74997L7.53007 12.47C7.60376 12.5386 7.66286 12.6214 7.70385 12.7134C7.74485 12.8054 7.76689 12.9047 7.76866 13.0054C7.77044 13.1061 7.75192 13.2062 7.7142 13.2996C7.67647 13.393 7.62033 13.4778 7.54911 13.549C7.47789 13.6202 7.39306 13.6764 7.29967 13.7141C7.20628 13.7518 7.10625 13.7703 7.00555 13.7686C6.90485 13.7668 6.80553 13.7447 6.71353 13.7037C6.62153 13.6628 6.53873 13.6037 6.47007 13.53L0.470073 7.52997Z"
            fill="#8F8F8F"
          />
        </svg>

        <span className="h-[2.68rem] w-[2.68rem] flex items-center justify-center text-[#8F8F8F]">
          1
        </span>
        <span className="bg-[#3A83A1] h-[2.68rem] w-[2.68rem] flex items-center justify-center text-white">
          2
        </span>
        <span className="h-[2.68rem] w-[2.68rem] flex items-center justify-center text-[#8F8F8F]">
          3
        </span>
        <span className="h-[2.68rem] w-[2.68rem] flex items-center justify-center text-[#8F8F8F]">
          4
        </span>
        <span className="h-[2.68rem] w-[2.68rem] flex items-center justify-center text-[#8F8F8F]">
          5
        </span>
        <svg
          width="18"
          height="14"
          viewBox="0 0 18 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M17.5299 6.47003C17.6704 6.61066 17.7493 6.80128 17.7493 7.00003C17.7493 7.19878 17.6704 7.38941 17.5299 7.53003L11.5299 13.53C11.4613 13.6037 11.3785 13.6628 11.2865 13.7038C11.1945 13.7448 11.0952 13.7668 10.9944 13.7686C10.8937 13.7704 10.7937 13.7519 10.7003 13.7142C10.6069 13.6764 10.5221 13.6203 10.4509 13.5491C10.3797 13.4779 10.3235 13.393 10.2858 13.2996C10.2481 13.2062 10.2296 13.1062 10.2313 13.0055C10.2331 12.9048 10.2552 12.8055 10.2961 12.7135C10.3371 12.6215 10.3962 12.5387 10.4699 12.47L15.1899 7.75003L0.999928 7.75003C0.801016 7.75003 0.610249 7.67101 0.469597 7.53036C0.328945 7.38971 0.249928 7.19894 0.249928 7.00003C0.249928 6.80112 0.328945 6.61035 0.469597 6.4697C0.610249 6.32905 0.801016 6.25003 0.999928 6.25003L15.1899 6.25003L10.4699 1.53003C10.3962 1.46137 10.3371 1.37857 10.2961 1.28657C10.2552 1.19457 10.2331 1.09526 10.2313 0.994554C10.2296 0.893851 10.2481 0.793822 10.2858 0.700434C10.3235 0.607045 10.3797 0.522212 10.4509 0.450993C10.5221 0.379774 10.6069 0.32363 10.7003 0.285909C10.7937 0.248188 10.8937 0.229663 10.9944 0.23144C11.0952 0.233217 11.1945 0.255258 11.2865 0.29625C11.3785 0.337242 11.4613 0.396344 11.5299 0.470031L17.5299 6.47003Z"
            fill="#8F8F8F"
          />
        </svg>
      </div>
      <Footer />
    </>
  );
};

export default ProductList;
