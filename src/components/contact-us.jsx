import React from "react";
import contactImage from "../assets/images/qws 1.png";
import backgroundImg from "../assets/images/Line 28.png";
import { FaApple, FaGooglePlay } from "react-icons/fa";

const ContactUs = () => {
  return (
    <section
      id="contact"
      className="w-full justify-center flex items-center mt-20 lg:mt-[250px]"
    >
      <div className="relative w-full bg-[#1A1B4B] rounded-[2px]">
        <div className="relative w-full  mx-auto flex flex-col lg:flex-row rounded-[5px]">
          <div className="flex flex-col w-full lg:w-[full] py-20 px-10 lg:px-12">
            <div className="flex flex-col gap-8">
              <h1 className="text-3xl lg:text-5xl font-bold leading-[1.3] text-white">
                Maximize the efficiency of your workforce today!
              </h1>
              <p className="text-base lg:text-lg font-medium leading-[1.4] text-white">
                Our mobile app fosters flexible and convenient connectivity for
                employers and employees, enhancing productivity.
              </p>
            </div>
            <div className="flex flex-row gap-4 mt-8">
              <div className="flex items-center gap-2 p-[7px] lg:p-[18px 36px] w-[full] lg:w-[220px] h-[50px] bg-black text-white rounded-[2px]">
                <FaApple size={24} />
                <div className="flex flex-col">
                  <p className="text-xs">Download on the</p>
                  <h3 className="text-sm font-semibold">App Store</h3>
                </div>
              </div>
              <div className="flex items-center gap-2 p-[7px] lg:p-[18px 36px] w-[full] lg:w-[210px] h-[50px] bg-black text-white rounded-[2px]">
                <FaGooglePlay size={24} />
                <div className="flex flex-col">
                  <p className="text-xs">Get it on</p>
                  <h3 className="text-sm font-semibold">Google Play</h3>
                </div>
              </div>
            </div>
          </div>

          <div className="relative flex-shrink-0">
            <img
              src={contactImage}
              alt="Contact"
              className="w-full h-auto relative lg:mt-[-180px] lg:w-[698.34px] lg:h-[520px] object-cover"
            />
            <img
              src={backgroundImg}
              alt="Background"
              className="absolute inset-0 w-full h-full object-cover transform rotate-[-81.42deg] opacity-10"
              style={{ border: "1.03px solid #D9DAF2" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
