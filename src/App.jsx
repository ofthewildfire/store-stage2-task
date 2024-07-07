import { BrowserRouter, Router, Route, Routes } from "react-router-dom";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Homepage from "./components/layout/homepage/Homepage";
import ProductList from "./components/layout/productpage/ProductList";

function App() {
  return (
    <body>
      <Header />
      <main className="bg-[#F1F1F1]">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/products" element={<ProductList />} />
        </Routes>
      </main>
      <Footer />
    </body>
  );
}

export default App;
