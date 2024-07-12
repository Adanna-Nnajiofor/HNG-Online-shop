import React from "react";

const CustomerCard = ({ image, name, review }) => {
  return (
    <div className="customer-card w-full h-auto p-[10px_20px] flex flex-col gap-[10px] rounded-[20px] border-2 border-[#948E8E] bg-[#FFFFFF] ">
      <div className="customer-card-1 w-full h-auto flex flex-col gap-[10px] justify-center items-center">
        <img
          src={image}
          alt={name}
          className="w-full h-auto object-cover rounded-[20px]"
        />
        <div className="customer-card-1-text w-full h-auto flex flex-col gap-[2px] ">
          <p className="font-inter text-[26px] font-bold leading-[36px] text-left text-[#303030]">
            {name}
          </p>
          <p className="font-inter text-[16px] font-medium leading-[20px] text-left text-[#898989]">
            {review}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CustomerCard;
