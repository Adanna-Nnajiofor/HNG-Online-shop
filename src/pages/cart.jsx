import React from "react";
import { MdStarRate } from "react-icons/md";
import { GrStatusGood } from "react-icons/gr";
import { FaPlus } from "react-icons/fa6";
import { FaCircle } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaMinus } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import cartMain from "../assets/images/Frame.png";
import shoe1 from "../assets/images/shoe 1.png";
import shoe2 from "../assets/images/shoe 2.png";
import shoe3 from "../assets/images/shoe 3.png";

const Cart = () => {
  const newProducts = [
    { id: 1, img: shoe1 },
    { id: 2, img: shoe2 },
    { id: 3, img: shoe3 },
  ];

  const navigate = useNavigate();

  const handleAddToCart = () => {
    navigate("/checkout");
  };

  return (
    <section className="w-full flex items-center justify-center px-6 md:px-8">
      <div className="w-full max-w-[1312px] h-auto lg:mt-[40px] gap-[55px] flex flex-col items-center justify-center">
        <div className="w-full max-w-[1314px] h-auto gap-[16px] flex flex-col-reverse md:flex-row">
          <div className="w-full max-w-[649px] h-auto gap-0 lg:gap-[10px]">
            <img
              src={cartMain}
              alt="Product"
              className="w-full max-w-[649px] h-auto max-h-[604px] rounded-[20px]"
            />
          </div>
          <div className="w-full max-w-[649px] h-auto gap-[162px] flex flex-col justify-center items-center ">
            <div className="w-full h-auto gap-0">
              <p className="w-full h-auto font-inter text-[20px] font-[400] leading-[28px] text-left text-[#898989]">
                Classics
              </p>
              <h1 className="w-full h-auto font-inter text-[48px] font-[700] leading-[72px] text-left text-[#0C092A]">
                Genzy Shoes
              </h1>
              <div className="w-full h-auto max-w-[649px] gap-[47px] flex flex-row mt-[10px]">
                <div className="flex gap-[20px] flex-row">
                  <MdStarRate color="#F7A400" size={25} />
                  <MdStarRate color="#F7A400" size={25} />
                  <MdStarRate color="#F7A400" size={25} />
                  <MdStarRate color="#F7A400" size={25} />
                </div>
                <div>
                  <p className="font-inter text-[20px] font-[400] leading-[28px] text-left text-[#898989]">
                    4.768
                  </p>
                </div>
              </div>
              <div className="mt-4 lg:mt-[40px]">
                <h2 className="font-inter text-[26px] font-[700] leading-[36px] text-left text-[#F7A400]">
                  $20
                </h2>
                <p className="font-inter text-[20px] font-[400] leading-[28px] text-left text-[#4D4D4D] mt-[8px]">
                  An e-commerce platform that sells shoes operates as an online
                  where customers can browse, select, and purchase various types
                  of footwear. Strategic marketing to provide a seamless
                  shopping experience.
                </p>
              </div>
              <div className="w-full max-w-[521px] h-auto gap-2 lg:gap-[40px] flex flex-row mt-4 lg:mt-[40px]">
                <div className="w-full max-w-[112px] h-auto gap-[10px] flex flex-col">
                  <p>Order</p>
                  <div className="w-full max-w-[100px] h-auto p-[10px] gap-[10px] border-[0.5px] border-[#000000] rounded-[20px] flex flex-row">
                    <GrStatusGood color="green" />
                    <FaCircle color="black" />
                    <FaCircle color="red" />
                  </div>
                </div>
                <div className="w-full max-w-[112px] h-auto gap-[10px] flex flex-col">
                  <p>Size</p>
                  <div className="w-full max-w-[100px] h-auto p-[10px] gap-[10px] border-[0.5px] border-[#000000] rounded-[20px] flex flex-row">
                    <div className="rounded-[20px] border-[0.5px] border-[#000000] px-[5px] text-center">
                      42
                    </div>
                    <MdKeyboardArrowDown color="black" size={30} />
                  </div>
                </div>
                <div className="w-full max-w-[112px] h-auto gap-[10px] flex flex-col">
                  <p>Quality</p>
                  <div className="w-full max-w-[100px] h-auto p-[10px] gap-[10px] border-[0.5px] border-[#000000] rounded-[20px] flex flex-row">
                    <FaMinus color="black" size={20} />
                    <p>2</p>
                    <FaPlus size={20} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-full items-center md:items-start">
          <div className="w-full max-w-[1314px] h-auto gap-[19px] flex flex-col">
            <p className="font-inter text-[20px] font-[700] leading-[36px] text-left text-[#303030]">
              New Products
            </p>
            <div className="flex flex-col md:flex-row gap-[30px]">
              <div className="w-full max-w-[646.5px] h-auto gap-[23px] flex flex-row">
                {newProducts.map((product) => (
                  <div
                    key={product.id}
                    className="w-full max-w-[200px] h-auto gap-[10px]"
                  >
                    <img
                      src={product.img}
                      alt={`Product ${product.id}`}
                      className="w-full max-w-[200px] h-[126px] rounded-[20px]"
                    />
                  </div>
                ))}
              </div>

              <div className="w-full max-w-[646.5px] h-auto gap-1 lg:gap-[40px] flex flex-col lg:flex-row mt-0 lg:mt-[30px]">
                <button
                  className="w-full lg:max-w-[165px] h-[60px] p-[12px_40px] gap-[10px] rounded-[30px] bg-[#1A1B4B] text-white"
                  onClick={handleAddToCart}
                >
                  Add to Cart
                </button>
                <div className="flex gap-[10px] mt-[20px]">
                  <FaPlus />
                </div>
                <button className="h-[60px] p-[12px_40px] gap-[10px] rounded-[30px] border-[1px] border-[#504E4E]">
                  Add to Wishlist
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
