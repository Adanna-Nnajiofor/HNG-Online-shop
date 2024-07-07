import React from "react";
import HeroSection from "./hero-section";
import Product from "./product";
import AboutUs from "./about-us";
import ContactUs from "./contact-us";

const Home = () => {
  return (
    <div className="relative overflow-hidden" style={{ minHeight: "100vh" }}>
      <div className="flex flex-col items-center relative z-10">
        <HeroSection />
        <section id="product">
          <Product />
        </section>
        <section id="about">
          <AboutUs />
        </section>
        <section id="contact">
          <ContactUs />
        </section>
      </div>
    </div>
  );
};

export default Home;
