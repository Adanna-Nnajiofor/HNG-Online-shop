import React from "react";
import brandImage from "../assets/images/Rectangle brand.png"; // Adjust the path to your image

const AboutBrand = () => {
  return (
    <section
      id="about"
      className="w-full justify-center flex flex-col items-center"
    >
      <div className="about-brand max-w-[1512px] pt-10 px-6 lg:px-20 py-8 gap-6 border-b-[0.5px] border-solid border-[#E5E5E5]">
        <h3 className="w-auto text-2xl lg:text-4xl font-bold text-gray-800 text-left">
          Previous Products
        </h3>
        <div className="about-brand-1 flex flex-col lg:flex-row w-full mt-6 lg:mt-10 gap-6">
          <div className="about-brand-1-images w-full lg:max-w-[646px] h-auto">
            <img
              src={brandImage}
              alt="Brand"
              className="w-full h-auto lg:h-[498px] rounded-lg"
            />
          </div>
          <div className="about-brand-1-text w-full lg:max-w-[646px]">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4">
              About our brand
            </h2>
            <p className="text-base lg:text-lg text-gray-700 leading-7">
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
        </div>
      </div>
    </section>
  );
};

export default AboutBrand;
