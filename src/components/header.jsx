import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useNavigate, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logoSvg from "../assets/Frame 140.svg";

const Header = () => {
  const [isMobileNavVisible, setIsMobileNavVisible] = useState(false);
  const location = useLocation();
  const isCheckoutPage = location.pathname === "/checkout";

  const handleMobileNavToggle = () => {
    setIsMobileNavVisible(!isMobileNavVisible);
  };

  return (
    <header className="w-full flex items-center justify-center relative">
      <div className="w-full max-w-[1512px] h-[108px] p-[20px_100px] flex justify-between items-center">
        <div className="flex items-center w-full lg:w-[697px] gap-[154px]">
          <img
            src={logoSvg}
            alt="Logo"
            className="w-[62px] h-[68px] p-[10px]"
          />
          <nav className="hidden lg:flex gap-[30px]">
            <NavLink to="home" text="Home" type="scroll" />
            <NavLink to="/cart" text="Cart" type="route" />
            <NavLink to="/checkout" text="Check Out" type="route" />
            <NavLink to="product" text="Product" type="scroll" />
          </nav>
        </div>
        <div
          className={`hidden lg:flex items-center w-[560px] h-[60px] gap-[33px] ${
            isCheckoutPage ? "justify-center" : ""
          }`}
        >
          <input
            type="text"
            placeholder="Search..."
            className="w-[362px] h-[58px] p-[10px_15px] border border-[#B7B3B3] rounded-[40px]"
          />
          {!isCheckoutPage && (
            <button className="w-[165px] h-[60px] p-[12px_40px] bg-[#1A1B4B] text-white rounded-[30px]">
              Sign In
            </button>
          )}
        </div>
        <div className="lg:hidden flex items-center relative z-50">
          <button onClick={handleMobileNavToggle}>
            {isMobileNavVisible ? (
              <FaTimes size={30} className="text-gray-800" />
            ) : (
              <FaBars size={30} className="text-gray-800" />
            )}
          </button>
        </div>
      </div>
      {isMobileNavVisible && (
        <div className="fixed inset-0 top-[108px] bg-gray-300 flex flex-col items-center lg:hidden p-[20px] z-50">
          <nav className="flex flex-col gap-[20px]">
            <NavLink to="home" text="Home" type="scroll" />
            <NavLink to="/cart" text="Cart" type="route" />
            <NavLink to="/checkout" text="Check Out" type="route" />
            <NavLink to="product" text="Product" type="scroll" />
          </nav>
          <div className="flex flex-col items-center w-full gap-[20px] mt-[20px]">
            <input
              type="text"
              placeholder="Search..."
              className="w-full max-w-[362px] h-[58px] p-[10px_15px] border border-[#B7B3B3] rounded-[40px]"
            />
            {!isCheckoutPage && (
              <button className="w-full max-w-[165px] h-[60px] p-[12px_40px] bg-[#1A1B4B] text-white rounded-[30px]">
                Sign In
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

const NavLink = ({ to, text, type }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = () => {
    if (type === "scroll") {
      if (location.pathname !== "/") {
        navigate("/", { replace: true, state: { target: to } });
      } else {
        document.getElementById(to)?.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate(to);
    }
  };

  return (
    <div
      onClick={handleClick}
      className="text-gray-800 hover:text-blue-500 transition duration-300 cursor-pointer"
    >
      {text}
    </div>
  );
};

export default Header;
