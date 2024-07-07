import React from "react";
import { FaCheck } from "react-icons/fa";
import shoe1 from "../assets/images/Rectangle 1041.png";
import shoe2 from "../assets/images/Rectangle 1043.png";

const Summary = () => {
  const summaryItems = [
    { id: 1, image: shoe1, name: "Canvas Shoe", price: "$1,120" },
    { id: 2, image: shoe2, name: "Canvas Shoe", price: "$1,120" },
    { id: 3, image: shoe1, name: "Canvas Shoe", price: "$1,120" },
  ];

  return (
    <div className="w-full lg:w-[460px] h-auto lg:h-[754px] gap-[43px] flex flex-col mt-10 lg:mt-0">
      <div className="w-full lg:w-[460px] h-auto lg:h-[66px] gap-[5px] flex flex-row justify-between">
        <div className="flex flex-row items-center">
          <div className="w-[20px] h-[20px] bg-blue-500 rounded-full flex items-center justify-center">
            <p className="font-family-Inter text-lg font-bold text-white">02</p>
          </div>
          <div className="flex flex-col ml-3">
            <p className="font-family-Inter text-lg font-bold text-[#343697]">
              Step 02
            </p>
            <p className="font-family-Inter text-2xl font-bold text-[#6B6B6B]">
              Payment
            </p>
          </div>
        </div>
        <div className="flex flex-row items-center ml-10">
          <div className=" bg-blue-500 rounded-full flex items-center justify-center">
            <p className="font-family-Inter text-lg font-bold text-white">03</p>
          </div>
          <div className="flex flex-col ml-3">
            <p className="font-family-Inter text-lg font-bold text-[#343697]">
              Step 03
            </p>
            <p className="font-family-Inter text-2xl font-bold text-[#6B6B6B]">
              Review
            </p>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-[460px] h-auto lg:h-[645px] p-[11px] gap-[10px] rounded-[30px] bg-[#F2F2F7] items-center justify-center flex flex-col">
        <div className="w-full lg:w-[386px] h-auto lg:h-[386px] gap-[20px] flex flex-col">
          <h2 className="font-family-Inter text-4xl font-bold">Summary</h2>
          <div className="flex flex-col gap-[30px] justify-between">
            {summaryItems.map((item) => (
              <div
                key={item.id}
                className="flex flex-row items-center gap-[20px] justify-between"
              >
                <div className="w-[76px] h-[74px] rounded-[10px] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-[76px] h-[74px] object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <p className="font-inter text-lg font-medium">{item.name}</p>
                  <p className="font-inter text-2xl font-bold">{item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full lg:w-[385px] h-auto lg:h-[204px] p-[20px_0px] gap-[40px] border-t-[1px solid #000000] flex flex-col items-center justify-between">
          <div className="flex flex-row justify-between items-center gap-4 lg:gap-[100px]">
            <div className="flex">
              <FaCheck size={24} />
              <p className="font-family-Inter text-[24px] font-bold leading-[28px] text-[#6B6B6B]">
                Total
              </p>
            </div>
            <div className="w-full lg:w-[173px] h-[64px] gap-[0px] flex flex-col items-end">
              <p className="font-family-Inter text-[24px] leading-[28px] text-right font-bold text-[#343697]">
                $ 4,500.00
              </p>
              <p className="font-family-Inter text-[16px] font-medium leading-[36px] text-right">
                Import duties included
              </p>
            </div>
          </div>
          <button className="w-full lg:w-[385px] h-[60px] p-[12px 40px] gap-[10px] rounded-[30px] bg-[#272971] text-white">
            Proceed to Payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Summary;
