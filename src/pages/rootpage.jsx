import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Home from "../components/home";
import AboutUs from "../components/about-us";
import ContactUs from "../components/contact-us";
import Product from "../components/product";

const RootPage = () => {
  return (
    <div className="flex flex-col h-full w-full">
      <Header />
      <main>
        <section id="home">
          <Home />
        </section>
        <section id="product">
          <Product />
        </section>
        <section id="about">
          <AboutUs />
        </section>
        <section id="contact">
          <ContactUs />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default RootPage;
