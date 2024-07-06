import React from "react";
import { Link as ScrollLink } from "react-scroll";
import logoSvg from "../assets/Frame 140.svg";

const Header = () => {
  return (
    <section className="w-full flex items-center justify-center">
      <div className="w-[1512px] h-[108px] p-[20px_100px] flex justify-between items-center">
        <div className="flex items-center w-[697px] h-[68px] gap-[154px]">
          <img
            src={logoSvg}
            alt="Logo"
            className="w-[62px] h-[68px] p-[10px]"
          />
          <nav className="flex gap-[30px]">
            <NavLink to="home" text="Home" />
            <NavLink to="contact" text="Contact Us" />
            <NavLink to="about" text="About Us" />
            <NavLink to="product" text="Product" />
          </nav>
        </div>
        <div className="flex items-center w-[560px] h-[60px] gap-[33px]">
          <input
            type="text"
            placeholder="Search..."
            className="w-[362px] h-[58px] p-[10px_15px] border border-[#B7B3B3] rounded-[40px]"
          />
          <button className="w-[165px] h-[60px] p-[12px_40px] bg-[#1A1B4B] text-white rounded-[30px]">
            Sign In
          </button>
        </div>
      </div>
    </section>
  );
};

// Custom NavLink component for smooth scrolling using react-scroll
const NavLink = ({ to, text }) => (
  <ScrollLink
    to={to}
    smooth={true}
    duration={500}
    className="text-gray-800 hover:text-blue-500 transition duration-300 cursor-pointer"
  >
    {text}
  </ScrollLink>
);

export default Header;
