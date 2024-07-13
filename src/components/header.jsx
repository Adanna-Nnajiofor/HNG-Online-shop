import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useNavigate, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logoSvg from "../assets/Frame 140.svg";

const Header = () => {
  const [isMobileNavVisible, setIsMobileNavVisible] = useState(false);
  const location = useLocation();
  const isCheckoutPage = location.pathname === "/checkout";
  const navigate = useNavigate();

  const handleMobileNavToggle = () => {
    setIsMobileNavVisible(!isMobileNavVisible);
  };

  const handleNavLinkClick = (to, type) => {
    if (type === "scroll") {
      if (location.pathname !== "/") {
        navigate("/", { replace: true, state: { target: to } });
      } else {
        document.getElementById(to)?.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate(to);
    }
    setIsMobileNavVisible(false); // Close mobile nav after clicking link
  };

  return (
    <header className="w-full flex items-center justify-center relative">
      <div className="w-full lg:max-w-[1512px] h-[108px] p-[20px_100px]  flex justify-between items-center">
        <div className="flex items-center w-full   lg:gap-[145px]">
          {!isMobileNavVisible && (
            <img src={logoSvg} alt="Logo" className="w-[62px] h-[68px] " />
          )}
          <nav className="hidden lg:flex lg:gap-[30px]">
            <NavLink
              to="home"
              text="Home"
              type="scroll"
              onClick={handleNavLinkClick}
            />
            <NavLink
              to="product"
              text="Product"
              type="scroll"
              onClick={handleNavLinkClick}
            />
            <NavLink
              to="/cart"
              text="Cart"
              type="route"
              onClick={handleNavLinkClick}
            />
            <NavLink
              to="/checkout"
              text="Check Out"
              type="route"
              onClick={handleNavLinkClick}
            />
          </nav>
        </div>
        <div
          className={`hidden lg:flex items-center w-full lg:w-[560px] h-[60px] gap-[33px] ${
            isCheckoutPage ? "w-full justify-center items-center" : ""
          }`}
        >
          <input
            type="text"
            placeholder="Search..."
            className="w-full lg:w-[300px] h-[58px] p-[10px_15px] border border-[#B7B3B3] rounded-[40px]"
          />
          {!isCheckoutPage && (
            <button className="w-full lg:w-[165px] h-[60px] p-[12px_40px] bg-[#1A1B4B] text-white rounded-[30px]">
              Sign In
            </button>
          )}
        </div>
        <div className="lg:hidden flex  justify-between relative z-50">
          <button onClick={handleMobileNavToggle}>
            {isMobileNavVisible ? (
              <FaTimes size={30} className="text-gray-800 ml-auto mr-0" />
            ) : (
              <FaBars size={30} className="text-gray-800 ml-auto mr-0" />
            )}
          </button>
        </div>
      </div>
      {isMobileNavVisible && (
        <div className="fixed inset-0 top-[108px] bg-white flex flex-col items-left lg:hidden p-[40px] z-50">
          <nav className="flex flex-col gap-[20px] font-bold text-[16px] leading-8 text-[#1A1B4B]">
            <NavLink
              to="home"
              text="Home"
              type="scroll"
              onClick={handleNavLinkClick}
            />
            <NavLink
              to="product"
              text="Product"
              type="scroll"
              onClick={handleNavLinkClick}
            />
            <NavLink
              to="/cart"
              text="Cart"
              type="route"
              onClick={handleNavLinkClick}
            />
            <NavLink
              to="/checkout"
              text="Check Out"
              type="route"
              onClick={handleNavLinkClick}
            />
          </nav>
          <div className="flex flex-col items-center w-full gap-[20px] mt-[40px]">
            <input
              type="text"
              placeholder="Search..."
              className="w-full lg:max-w-[362px] h-[58px] p-[10px_15px] border border-[#B7B3B3] rounded-[40px]"
            />
            {!isCheckoutPage && (
              <button className="w-full h-[60px] p-[12p_40px] bg-[#1A1B4B] text-white rounded-[30px]">
                Sign In
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

const NavLink = ({ to, text, type, onClick }) => {
  const handleClick = () => {
    onClick(to, type);
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
