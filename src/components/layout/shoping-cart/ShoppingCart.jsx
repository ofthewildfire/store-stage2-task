import Header from "../Header";
import Footer from "../Footer";
import ShoppingProductCard from "./ShoppingProductCard";

const ShoppingCart = () => {
  return (
    <>
      <Header />
      <main>
        <h2>Shopping Cart(2)</h2>
        <ShoppingProductCard />
      </main>
      <Footer />
    </>
  );
};

export default ShoppingCart;
