import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "@fontsource-variable/montserrat";
import "./index.css";
import ProductList from "./components/layout/productpage/ProductList.jsx";
import ShoppingCart from "./components/layout/shoping-cart/ShoppingCart.jsx";
import CheckoutPage from "./components/layout/shoping-cart/CheckoutPage.jsx";
import ProductDetails from "./components/layout/productdetails/ProductDetails.jsx";
import Blog from "./components/layout/Blog.jsx";
import About from "./components/layout/About.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/products",
    element: <ProductList />,
  },
  {
    path: "/cart",
    element: <ShoppingCart />,
  },

  { path: "/checkout", element: <CheckoutPage /> },
  { path: "/details", element: <ProductDetails /> },
  { path: "/blog", element: <Blog /> },
  { path: "/about", element: <About /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
