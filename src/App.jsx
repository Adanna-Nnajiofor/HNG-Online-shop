import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import AboutUs from "./components/about-us";
import ContactUs from "./components/contact-us";
import Product from "./components/product";
import RootPage from "./pages/rootpage";
import NotFound from "./pages/notfound";
import Cart from "./pages/cart";
import CheckOut from "./pages/checkout";

const App = () => {
  return (
    <Router>
      <div className="flex flex-col h-full w-full items-center justify-center">
        <Routes>
          <Route path="/" element={<RootPage />}>
            <Route index element={<Home />} />
            <Route path="product" element={<Product />} />
            <Route path="cart" element={<Cart />} />
            <Route path="checkout" element={<CheckOut />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
