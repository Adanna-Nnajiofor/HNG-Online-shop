// src/components/Home.js
import React from "react";
import HeroSection from "./hero-section";
import Product from "./product";
import AboutUs from "./about-us";
import ContactUs from "./contact-us";
import backgroundImg from "../assets/images/Meliuk-liuk.png";

const Home = () => {
  return (
    <div className="relative overflow-hidden" style={{ minHeight: "100vh" }}>
      <img
        src={backgroundImg}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover z-[-1] opacity-10"
        style={{
          width: "1531.38px",
          height: "1804.89px",
          top: "1973px",
          left: "1142.77px",
          border: "1.03px solid #0C16FA",
          transform: "rotate(-50.5deg)",
        }}
      />
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
