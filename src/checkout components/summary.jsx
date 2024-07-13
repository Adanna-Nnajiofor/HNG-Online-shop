import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Summary = () => {
  const { cartItems } = useCart();
  const navigate = useNavigate();

  const calculateTotalAmount = () => {
    return cartItems.reduce((acc, item) => {
      const itemPrice = Math.ceil(item.current_price[0]?.LRD[0] || 0);
      return acc + itemPrice * item.quantity;
    }, 0);
  };

  const totalAmount = Math.ceil(calculateTotalAmount());

  const handleProceedToPayment = (e) => {
    e.preventDefault();
    navigate("/payment");
  };

  return (
    <div className="w-full h-auto gap-6 flex flex-col ">
      <div className="w-auto lg:w-full h-auto flex flex-row lg:flex-row justify-between items-center">
        <StepIndicator step="02" title="Payment" />
        <StepIndicator step="03" title="Review" />
      </div>
      <div className="w-full h-auto p-6 gap-4 rounded-xl bg-gray-100 flex flex-col">
        <h2 className="text-4xl font-bold mb-4">Summary</h2>
        <div className="w-full flex flex-col gap-6">
          {cartItems.map((item) => (
            <div key={item.id} className="w-full flex items-center gap-4">
              <div className="w-[80px] h-[80px] overflow-hidden rounded-lg">
                <img
                  src={
                    `https://api.timbu.cloud/images/${item.photos[0]?.url}` ||
                    "/path/to/placeholder-image.jpg"
                  }
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <p className="text-lg font-medium">{item.name}</p>
                <p className="text-2xl font-bold">
                  ${Math.ceil(item.current_price[0]?.LRD[0])}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full h-auto p-4 rounded-xl bg-white flex flex-col items-center">
          <p className="text-gray-600 text-lg font-semibold">Total Amount</p>
          <p className="text-4xl font-bold text-gray-900 mb-4">
            ${totalAmount.toFixed(2)}
          </p>
          <button
            onClick={handleProceedToPayment}
            className="w-full lg:w-[286px] h-[51px] bg-blue-900 rounded-full text-white text-lg font-semibold"
          >
            Proceed to Payment
          </button>
        </div>
      </div>
    </div>
  );
};

const StepIndicator = ({ step, title }) => (
  <div className="w-auto flex items-center">
    <div className="bg-blue-500 rounded-full flex items-center justify-center w-12 h-12">
      <p className="text-lg font-bold text-white">{step}</p>
    </div>
    <div className="w-auto flex flex-col ml-3">
      <p className="text-lg font-bold text-blue-700">Step {step}</p>
      <p className="text-2xl font-bold text-gray-600">{title}</p>
    </div>
  </div>
);

export default Summary;
