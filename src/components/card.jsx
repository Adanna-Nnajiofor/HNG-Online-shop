import React from "react";

const Card = ({ image, title, description, price, buttonText }) => {
  return (
    <div className="foot-wears-1Aa border-0.5 w-[313px] h-[478px] gap-4 flex flex-col rounded-[20px] border-solid border-2 border-[#948E8E] p-4 bg-[#FFFFFF]">
      <div className="foot-wears-1Aa-image w-full h-[278px] rounded-[20px] overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="foot-wears-1Aa-text w-full flex flex-col justify-between flex-grow">
        <div>
          <h2 className="font-inter text-[26px] font-bold leading-[36px] text-left text-[#303030]">
            {title}
          </h2>
          <p className="font-inter text-[20px] font-normal leading-[28px] text-left text-[#303030]">
            {description}
          </p>
          <p className="font-inter text-[24px] font-medium leading-[36px] text-left text-[#F7A400]">
            {price}
          </p>
        </div>
        <button className="w-full py-3 rounded-[30px] bg-[#1A1B4B] text-white mt-4">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default Card;
