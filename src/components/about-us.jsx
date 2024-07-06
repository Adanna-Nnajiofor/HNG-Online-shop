import React from "react";
import AboutImage from "../assets/images/Rectangle 82.png";

const About = () => {
  return (
    <section
      id="about"
      className="w-full h-full justify-center flex items-center"
    >
      <div className="about-1 w-[1512px] h-[634px] mt-[100px] py-[20px] px-[100px] gap-[20px]">
        <h2 className="w-[121px] h-[36px] font-inter text-[26px] font-bold leading-[36px] text-left text-[#303030] ">
          About Us
        </h2>
        <div className="about-2 flex-col w-[1312px] h-[538px] py-[20px] px-[0] gap-[20px] flex lg:flex-row">
          <div className="about-1-text w-[646px] h-[444px] gap-30">
            <h3 className="w-[646px] h-[36px] font-inter text-[26px] font-bold leading-[36px] text-left text-[#303030]">
              About our Brand
            </h3>
            <p className="w-[646px] h-[308px] font-inter text-[20px] font-normal leading-[28px] text-left text-[#232324] mt-[10px]">
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
            <button className="w-[219px] h-[60px] py-[12px] px-[40px] gap-[10px] rounded-[30px] bg-[#1A1B4B] text-white">
              Learn more
            </button>
          </div>
          <div className="about-1-image w-[646px] h-[498px] gap-[10px]">
            <img
              src={AboutImage}
              alt="About Us Image"
              className="w-[646px] h-[498px] object-cover rounded-[20px]"
            />
          </div>
        </div>
      </div>

      {/* <div className="about-1 w-[1512px] h-[634px] mt-[100px] py-[20px] px-[100px] gap-[20px]">
        <h2 className="w-[121px] h-[36px] font-inter text-[26px] font-bold leading-[36px] text-left text-[#303030] ">
          About Us
        </h2>
        <div className="about-2 flex-col w-[1312px] h-[538px] py-[20px] px-[0] gap-[20px] flex lg:flex-row"></div>
      </div> */}
    </section>
  );
};

export default About;
