import React from "react";
import contactImage from "../assets/images/qws 1.png";
import backgroundImg from "../assets/images/Line 28.png";
import { FaApple, FaGooglePlay } from "react-icons/fa";

const ContactUs = () => {
  return (
    <section
      id="contact"
      className="w-full justify-center flex items-center mt-10 lg:mt-[200px]"
    >
      <div className="relative w-full lg:w-auto bg-[#1A1B4B] rounded-[2px] py-10 px-4 lg:py-2">
        <div className="relative w-full justify-between items-center flex flex-col lg:flex-row rounded-[5px]">
          <div className="flex flex-col w-full lg:w-1/2 py-2 lg:py-20 px-10 ">
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
              <div className="flex items-center gap-2 p-[7px] lg:p-[18p_36px] w-auto lg:w-[220px] h-[50px] bg-black text-white rounded-[2px]">
                <FaApple size={24} />
                <div className="flex flex-col">
                  <p className="text-xs">Download on the</p>
                  <h3 className="text-sm font-semibold">App Store</h3>
                </div>
              </div>
              <div className="flex items-center gap-2 p-[7px] lg:p-[18p_36px] w-auto lg:w-[210px] h-[50px] bg-black text-white rounded-[2px]">
                <FaGooglePlay size={24} />
                <div className="flex flex-col">
                  <p className="text-xs">Get it on</p>
                  <h3 className="text-sm font-semibold">Google Play</h3>
                </div>
              </div>
            </div>
          </div>

          <div className="w-auto h-auto flex flex-col px-4 mt-8 py-4 ">
            <img
              src={contactImage}
              alt="Contact"
              className="w-full h-full lg:mt-[-250px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
