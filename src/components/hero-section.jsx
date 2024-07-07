import React from "react";
import heroImage from "../assets/images/Rectangle 80.png";

const HeroSection = () => {
  return (
    <section id="home" className="w-full items-center justify-center flex">
      <div className="w-full lg:max-w-[1512px] flex flex-col py-2 lg:py-10 px-6 lg:px-20 gap-6 rounded-lg mt-0 lg:flex-row lg:mt-10">
        {/* Hero1 */}
        <div className="w-full  h-auto gap-6 text-[#0C092A] flex flex-col">
          <div className="w-full h-auto gap-4">
            <h1 className="w-full font-inter text-4xl lg:text-6xl font-bold lg:leading-[72px] text-left text-[#0C092A]">
              Grazy E-commerce Website
            </h1>
            <p className="w-full py-3">
              An e-commerce platform that sells shoes operates as an online
              where customers can browse, select, and purchase various types of
              foot wears. Strategic marketing to provide a seamless shopping
              experience.
            </p>
          </div>
          <button className=" w-full lg:w-[219px] h-[60px] px-6 bg-[#1A1B4B] text-white rounded-[30px]">
            Get started
          </button>
        </div>

        {/* Hero2 */}
        <div className="w-full  h-auto px-6 py-8 lg:px-10 lg:py-4 gap-4 rounded-lg bg-[#5A19654D]">
          <img
            src={heroImage}
            alt="Hero"
            className="w-full h-auto  rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
