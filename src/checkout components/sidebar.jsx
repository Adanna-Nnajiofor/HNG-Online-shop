import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";

const Sidebar = () => {
  return (
    <div className="hidden lg:flex w-auto lg:w-[270px] h-auto lg:h-[982px] p-4 lg:p-6 gap-6 lg:gap-8 border-r border-gray-300 bg-gray-100 flex flex-col absolute top-0 left-0 ">
      <div className="flex flex-col gap-6 mt-8">
        <div className="w-full bg-blue-500 text-white rounded-lg p-4 flex items-center">
          <FaShoppingCart size={30} />
          <p className="ml-2 text-lg font-bold">Checkout</p>
        </div>
        <div className="flex flex-col gap-4">
          <SidebarItem icon={<FaRegEnvelope size={30} />} text="Message" />
          <SidebarItem icon={<IoCartOutline size={30} />} text="Cart" />
          <SidebarItem icon={<FaRegEnvelope size={30} />} text="Home" />
          <SidebarItem
            icon={<IoIosNotificationsOutline size={30} />}
            text="Notification"
          />
          <SidebarItem icon={<IoSettingsOutline size={30} />} text="Setting" />
        </div>
      </div>
    </div>
  );
};

const SidebarItem = ({ icon, text }) => (
  <div className="flex items-center">
    {icon}
    <p className="ml-2 text-lg font-normal">{text}</p>
  </div>
);

export default Sidebar;
