import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import AboutUs from "./components/about-us";
import ContactUs from "./components/contact-us";
import Product from "./components/product";
import RootPage from "./pages/rootpage";
import NotFound from "./pages/notfound";

const App = () => {
  return (
    <Router>
      <div className="flex flex-col w-full">
        <Routes>
          <Route path="/" element={<RootPage />}>
            <Route index element={<Home />} />
            <Route path="product" element={<Product />} />
            <Route path="about" element={<AboutUs />} />
            <Route path="contact" element={<ContactUs />} />

            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
