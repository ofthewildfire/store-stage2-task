import Header from "../Header";
import Footer from "../Footer";
import ShoppingProductCard from "./ShoppingProductCard";
import OrderSummaryCard from "./OrderSummaryCard";

const ShoppingCart = () => {
  return (
    <>
      <Header />
      <main className="shopping-cart grid grid-cols-5 p-10 gap-4 bg-[#f1f1f1]">
        <h2 className="text-[#383838] text-[2.25rem] font-bold">
          Shopping Cart(2)
        </h2>
        <div className="cart">
          <ShoppingProductCard />
        </div>
        <div className="panel">
          <OrderSummaryCard />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ShoppingCart;
