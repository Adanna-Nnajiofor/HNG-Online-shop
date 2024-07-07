import React from "react";
import AboutImage from "../assets/images/Rectangle 82.png";
import AboutBrand from "./about-brand";
import Customers from "./customer";

const About = () => {
  return (
    <section
      id="about"
      className="w-full justify-center flex flex-col items-center"
    >
      <div className="about-1 w-full lg:max-w-[1512px] mt-0 lg:mt-4 py-0 lg:py-8 px-6 lg:px-20 gap-6">
        <h2 className=" text-2xl lg:text-4xl font-bold text-gray-800">
          About Us
        </h2>
        <div className="about-2 grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6 lg:mt-10">
          <div className="about-1-text">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4">
              About our Brand
            </h3>
            <p className="text-base lg:text-lg text-gray-700 ">
              Grazy is a dynamic and innovative e-commerce shoe brand dedicated
              to offering a diverse range of stylish and high-quality foot wears
              for both men and women. Our collection features a blend of classic
              designs and the latest fashion trends, ensuring that every
              customer finds the perfect pair for any occasion. At Grazy, we
              prioritize comfort, durability, and affordability, making us the
              go-to destination for shoe enthusiasts who value both fashion and
              function. Whether you’re looking for sleek formal shoes,
              comfortable casual wear, or trendy athletic footwear, Grazy has
              something for everyone.
            </p>
            <button className="w-full lg:w-[219px] h-[60px] py-[12px] px-[40px] rounded-[30px] bg-[#1A1B4B] text-white mt-6">
              Learn more
            </button>
          </div>
          <div className="about-1-image w-full h-auto">
            <img
              src={AboutImage}
              alt="About Us Image"
              className="w-full h-auto lg:h-[498px] object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
      <AboutBrand />
      <Customers />
    </section>
  );
};

export default About;
