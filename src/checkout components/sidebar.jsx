import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";

const Sidebar = () => {
  return (
    <div className="w-full lg:w-[300px] h-[982px] left-[1px] p-[0px 60px 0px 60px] gap-[48px] border-[0px_1px_0px_0px] bg-[#E1E1E1] border-r-[1px solid #000000] hidden lg:flex lg:flex-col top-0 bottom-0 fixed ">
      {/* Sidebar 1 */}
      <div className="w-full lg:w-[276px] h-[488px] p-[60px] gap-[60px] mt-[150px]">
        {/* Sidebar 1A */}
        <div className="w-full lg:w-[200px] h-[48px] p-[10px] gap-[50px] rounded-[10px] bg-[#6769CA] text-white flex flex-row items-center mb-[60px]">
          <FaShoppingCart size={30} />
          <p className="font-family-Inter text-lg font-bold ml-2">Checkout</p>
        </div>
        {/* Sidebar 1B */}
        <div className="flex flex-col gap-[50px]">
          {/* Sidebar 1B Items */}
          <div className="flex flex-row items-center">
            <FaRegEnvelope size={30} />
            <p className="font-inter text-lg font-normal ml-2">Message </p>
          </div>
          <div className="flex flex-row items-center">
            <IoCartOutline size={30} />
            <p className="font-inter text-lg font-normal ml-2">Cart</p>
          </div>
          <div className="flex flex-row items-center">
            <FaRegEnvelope size={30} />
            <p className="font-inter text-lg font-normal ml-2">Home</p>
          </div>
          <div className="flex flex-row items-center">
            <IoIosNotificationsOutline size={30} />
            <p className="font-inter text-lg font-normal ml-2">Notification</p>
          </div>
          <div className="flex flex-row items-center">
            <IoSettingsOutline size={30} />
            <p className="font-inter text-lg font-normal ml-2">Setting</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
