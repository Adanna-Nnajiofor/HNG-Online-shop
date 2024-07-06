import React from "react";
import { Link } from "react-router-dom";

import logoSvg from "../assets/Frame 140.svg";

const Header = () => {
  return (
    <section className="w-full h-full flex items-center justify-center">
      <div className="w-[1512px] h-[108px] p-[20px_100px] flex justify-between items-center">
        <div className="flex items-center w-[697px] h-[68px] gap-[154px]">
          <img
            src={logoSvg}
            alt="Logo"
            className="w-[62px] h-[68px] p-[10px]"
          />
          <nav className="flex gap-[30px]">
            <NavLink to="/" text="Home" className="hover:underline">
              Home
            </NavLink>
            <NavLink
              to="/contact"
              text="Contact Us"
              className="hover:underline"
            >
              Contact Us
            </NavLink>
            <NavLink to="/about" text="About Us" className="hover:underline">
              About Us
            </NavLink>
            <NavLink to="/product" text="Product" className="hover:underline">
              Product
            </NavLink>
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

// Custom NavLink component for routing with react-router-dom
const NavLink = ({ to, text }) => (
  <Link
    to={to}
    className="text-gray-800 hover:text-blue-500 transition duration-300"
  >
    {text}
  </Link>
);

export default Header;
