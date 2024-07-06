import React from "react";
import heroImage from "../assets/images/Rectangle 80.png";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="w-full h-full items-center justify-center flex"
    >
      <div className="flex flex-col py-[20px] px-[100px] mt-[147px] gap-[16px] rounded-[20px] w-[1512px] h-[560px] max-w-full lg:flex-row">
        {/* Hero1 */}
        <div className="w-[656px] h-[276px] gap-[20px] text-[#0C092A] flex flex-col">
          <div className="w-[656px] h-[196px] gap-[12px]">
            <h1 className="w-[656px] h-[72px] font-inter text-[48px] font-bold leading-[72px] text-left text-[#0C092A]">
              Grazy E-commerce Website
            </h1>
            <p className="w-[597px] h-[112px] gap-[10px]">
              An e-commerce platform that sells shoes operates as an online
              where customers can browse, select, and purchase various types of
              foot wears. Strategic marketing to provide a seamless shopping
              experience.
            </p>
          </div>
          <div>
            <button className="w-[219px] h-[60px] p-[12px_40px] bg-[#1A1B4B] text-white rounded-[30px]">
              Get started
            </button>
          </div>
        </div>

        {/* Hero2 */}
        <div className="w-[640px] h-[520px] px-[10px] py-[0] gap-[10px] rounded-[20px] bg-[#5A19654D]">
          <div className="w-[620px] h-auto p-[10px] gap-[10px]">
            <img
              src={heroImage}
              alt="Hero"
              className="w-[600px] h-[500px] rounded-[20px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
