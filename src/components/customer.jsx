// src/components/Customers.js
import React from "react";
import CustomerCard from "./customer-card";
import CustomerReviews from "./customer-reviews";

const Customers = () => {
  return (
    <div className="customers max-w-[1512px] mx-auto px-6 lg:px-20 py-8 flex flex-col gap-6 lg:gap-10 border-b-[0.5px] border-solid border-[#E5E5E5] mt-10">
      <h2 className="text-2xl lg:text-4xl font-bold text-gray-800 text-left">
        Customers Reviews
      </h2>
      <div className="customers-1 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:gap-8 mt-6 lg:mt-10">
        {CustomerReviews.map((review, index) => (
          <CustomerCard
            key={index}
            image={review.image}
            name={review.name}
            review={review.review}
          />
        ))}
      </div>
    </div>
  );
};

export default Customers;