import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({
  image,
  title,
  description,
  price,
  buttonText,
  onAddToCart,
}) => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    if (onAddToCart) {
      onAddToCart();
    }
    navigate("/cart");
  };

  return (
    <div className="w-full h-[500px] flex flex-col rounded-[20px] border border-solid border-[#948E8E] p-4 bg-white hover:border-2 border-[#1A1B4B]">
      <div className="w-full h-[250px] rounded-[20px] overflow-hidden">
        <img
          src={`https://api.timbu.cloud/images/${image}`}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-full h-auto flex flex-col justify-between flex-grow">
        <div>
          <h2 className="font-inter text-2xl font-bold leading-9 text-[#303030]">
            {title}
          </h2>
          <p className="font-inter text-lg font-normal leading-7 text-[#303030]">
            {description}
          </p>
          <p className="font-inter text-xl font-medium leading-9 text-[#F7A400]">
            ${price}
          </p>
        </div>
        <button
          onClick={handleButtonClick}
          className="w-full py-3 rounded-[30px] bg-[#1A1B4B] text-white mt-4"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default Card;
