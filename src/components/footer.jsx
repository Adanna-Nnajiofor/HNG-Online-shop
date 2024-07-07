import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaEnvelope } from "react-icons/fa";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import { LiaFlagUsaSolid } from "react-icons/lia";
import { MdKeyboardArrowRight } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="w-full bg-[#1A1B4B] mt-6 lg:mt-10 justify-center flex items-center">
      <div className="w-full max-w-[1512px] mx-auto flex flex-col gap-6 justify-between items-center py-4 px-6 lg:px-0">
        <div className="flex flex-col lg:flex-row w-full items-start justify-between px-[20px] lg:mt-10 lg:px-[50px]">
          {/* Footer Text */}
          <div className="flex flex-col w-full lg:w-[360px] lg:mr-8">
            <h3 className="text-white text-lg lg:text-2xl font-bold">
              WorkFlo
            </h3>
            <p className="text-white font-inter text-sm lg:text-base leading-6 lg:leading-7">
              Thanks for checking it out!
              <br />
              Interested in partnering with us? <br />
              Say hello at&nbsp;uchechukwuonubogu@gmail.com
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex gap-6 lg:gap-8 mt-2 lg:mt-0">
            <FaFacebook size={30} color="#FFFFFF" />
            <FaInstagram size={30} color="#FFFFFF" />
            <FaTwitter size={30} color="#FFFFFF" />
            <FaEnvelope size={30} color="#FFFFFF" />
          </div>

          {/* Footer Links */}
          <div className="flex flex-col gap-2 lg:gap-4 mt-2 lg:mt-0">
            {[
              "Contact Us",
              "About Us",
              "Project",
              "Sign In",
              "Q & A",
              "Sign Up",
            ].map((link, index) => (
              <a
                key={index}
                href="#"
                className="text-white text-sm lg:text-base font-normal leading-6 lg:leading-7"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Arrow and Flag */}
          <div className="flex flex-col gap-2 mt-0 lg:mt-0">
            <MdKeyboardDoubleArrowUp size={30} color="#FFFFFF" />
            <div className="flex items-center gap-2 lg:gap-4 bg-[#1A1B4B] rounded-md p-2 lg:p-3 mt-0 lg:mt-8">
              <LiaFlagUsaSolid size={30} color="#FFFFFF" />
              <span className="text-white text-sm lg:text-base">ENG</span>
              <MdKeyboardArrowRight size={30} color="#FFFFFF" />
            </div>
          </div>
        </div>

        {/* Border */}
        <div className="w-full lg:w-[1300px] h-0 border-t-2 border-[#D9DAF2] opacity-50 mt-0 lg:mt-8"></div>

        {/* Footer Below */}
        <div className="flex flex-col lg:flex-row justify-between w-full lg:w-[1180px] mt-0 lg:mt-6 pb-4 lg:pb-6">
          <div className="text-white text-sm lg:text-base">
            <span className="mr-4">Terms of Service</span>
            <span>|</span>
            <span className="ml-4">Privacy Policy</span>
          </div>
          <div className="text-white text-sm lg:text-base">
            Crazy Shopping App
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
