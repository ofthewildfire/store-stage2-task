import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "@fontsource-variable/montserrat";
import "./index.css";
import ProductList from "./components/layout/productpage/ProductList.jsx";
import ShoppingCart from "./components/layout/shoping-cart/ShoppingCart.jsx";

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
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
