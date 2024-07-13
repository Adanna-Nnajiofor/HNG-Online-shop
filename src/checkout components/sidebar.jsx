import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";

const Sidebar = () => {
  return (
    <div className="w-full h-full p-4 lg:p-6 flex flex-col gap-6 lg:gap-8">
      <div className="bg-blue-500 text-white rounded-lg p-4 flex items-center mt-32">
        <FaShoppingCart size={30} />
        <p className="ml-2 text-lg font-bold">Checkout</p>
      </div>
      <div className="flex flex-col gap-10">
        <SidebarItem icon={<FaRegEnvelope size={25} />} text="Message" />
        <SidebarItem icon={<IoCartOutline size={25} />} text="Cart" />
        <SidebarItem icon={<FaRegEnvelope size={25} />} text="Home" />
        <SidebarItem
          icon={<IoIosNotificationsOutline size={25} />}
          text="Notification"
        />
        <SidebarItem icon={<IoSettingsOutline size={25} />} text="Setting" />
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
