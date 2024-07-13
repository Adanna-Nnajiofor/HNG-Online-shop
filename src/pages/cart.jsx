import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext"; // Import cart context

const Cart = () => {
  const { cartItems, removeFromCart, clearCart, updateQuantity } = useCart();
  const navigate = useNavigate();

  const handleAddToCart = () => {
    navigate("/checkout");
  };

  const handleIncrease = (id) => {
    updateQuantity(id, 1);
  };

  const handleDecrease = (id) => {
    updateQuantity(id, -1);
  };

  const calculateTotalPrice = () => {
    return cartItems.reduce(
      (total, item) =>
        total + item.quantity * Math.ceil(item.current_price[0]?.LRD[0]),
      0
    );
  };

  return (
    <section
      id="cart"
      className="w-full px-6 md:px-8 py-10 flex flex-col items-center"
    >
      <div className="w-full lg:max-w-[1512px] flex flex-col items-center gap-6 lg:gap-10">
        <h1 className="text-3xl md:text-4xl font-bold text-[#0C092A] mb-4">
          Your Cart
        </h1>

        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center bg-white border border-gray-300 rounded-lg p-4 shadow-md"
                >
                  <img
                    src={
                      item.photos[0]?.url || "/path/to/placeholder-image.jpg"
                    } // Fallback image
                    alt={item.title}
                    className="w-24 h-24 object-cover rounded-md"
                  />
                  <div className="ml-4 flex-1">
                    <h2 className="text-lg font-bold text-[#303030]">
                      {item.name}
                    </h2>
                    <p className="text-md text-[#303030]">
                      {Math.ceil(item.current_price[0]?.LRD[0]) * item.quantity}
                    </p>
                    <div className="flex items-center mt-2">
                      <button
                        onClick={() => handleDecrease(item.id)}
                        className="py-1 px-2 bg-gray-300 rounded hover:bg-gray-400"
                      >
                        -
                      </button>
                      <p className="mx-4">{item.quantity}</p>
                      <button
                        onClick={() => handleIncrease(item.id)}
                        className="py-1 px-2 bg-gray-300 rounded hover:bg-gray-400"
                      >
                        +
                      </button>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="mt-2 py-1 px-2 bg-red-500 text-white rounded hover:bg-red-600"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="w-full flex items-center justify-between mt-6">
              <button
                onClick={clearCart}
                className="py-2 px-4 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Clear Cart
              </button>
              <div className="text-lg font-bold">
                Total: {Math.ceil(calculateTotalPrice())}
              </div>
              <button
                onClick={handleAddToCart}
                className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Cart;
