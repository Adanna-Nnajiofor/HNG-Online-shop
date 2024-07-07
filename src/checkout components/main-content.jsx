import React from "react";
import { FaCheck } from "react-icons/fa";
import Summary from "./summary";

const MainContent = () => {
  return (
    <div className="w-[1139px] h-full top-[50px] left-[373px] p-[33px 50px 19px 50px] bg-[#FFFFFF] flex flex-col items-center justify-center relative mb-[50px]">
      {/* Checkout Main A */}
      <div className="w-[1039px] h-[816px] top-[33px] left-[50px] gap-[0px] justify-between flex flex-row">
        {/* Checkout Main A1 */}
        <div className="w-[510px] h-[816px] gap-[12px] flex flex-col">
          {/* Checkout Main A1 Text */}
          <div className="w-[510px] h-[100px] gap-[0px]">
            <p className="font-family-Inter text-lg font-bold text-[#343697]">
              Step 01
            </p>
            <h1 className="font-family-Inter text-4xl font-bold text-left text-[#0C092A]">
              Shipping
            </h1>
          </div>
          {/* Checkout Main A1 Input */}
          <div className="w-[510px] h-[704px] gap-[30px] flex flex-col">
            {/* Input 1 - Full Name */}
            <div className="flex flex-col gap-[10px]">
              <label className="font-family-Inter text-[20px] font-[700] leading-[36px]">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Chika Obi"
                className="input-style rounded-[20px] border-[1px] p-[10px] gap-[10px] border-[#6B6B6B]"
              />
            </div>
            {/* Input 2 - Country */}
            <div className="flex flex-col gap-[10px]">
              <label className="font-family-Inter text-[20px] font-[700] leading-[36px]">
                Country
              </label>
              <select className="input-style rounded-[20px] border-[1px] p-[10px] gap-[10px] border-[#6B6B6B]">
                <option value="Nigeria">Nigeria</option>
                {/* Add more country options here */}
              </select>
            </div>
            {/* Input 3 - Address */}
            <div className="flex flex-col gap-[10px]">
              <label className="font-family-Inter text-[20px] font-[700] leading-[36px]">
                Address
              </label>
              <input
                type="text"
                placeholder="Chika Obi"
                className="input-style rounded-[20px] border-[1px] p-[10px] gap-[10px] border-[#6B6B6B]"
              />
              <input
                type="text"
                placeholder="Select State"
                className="input-style rounded-[20px] border-[1px] p-[10px] gap-[10px] border-[#6B6B6B]"
              />
              <input
                type="text"
                placeholder="City"
                className="input-style rounded-[20px] border-[1px] p-[10px] gap-[10px] border-[#6B6B6B]"
              />
            </div>
            {/* Input 4 - Postal Code */}
            <div className="flex flex-col gap-[10px]">
              <label className="font-family-Inter text-[20px] font-[700] leading-[36px]">
                Postal Code
              </label>
              <input
                type="text"
                placeholder="........"
                className="input-style rounded-[20px] border-[1px] p-[10px] gap-[10px] border-[#6B6B6B]"
              />
            </div>
            {/* Input 5 - Phone Number */}
            <div className="flex flex-col gap-[10px]">
              <label className="font-family-Inter text-[20px] font-[700] leading-[36px]">
                Phone Number
              </label>
              <input
                type="text"
                placeholder="+234"
                className="input-style rounded-[20px] border-[1px] p-[10px] gap-[10px] border-[#6B6B6B]"
              />
            </div>
            {/* Check Good */}
            <div className="flex flex-row items-center gap-[10px] ">
              <FaCheck size={24} />
              <p className="font-family-Inter text-lg font-medium ">
                Use as billing address
              </p>
            </div>
          </div>
        </div>
        <Summary />
      </div>
    </div>
  );
};

export default MainContent;
