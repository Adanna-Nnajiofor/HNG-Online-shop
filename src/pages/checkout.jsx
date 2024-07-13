import React from "react";
import Sidebar from "../checkout components/sidebar";
import MainContent from "../checkout components/main-content";
import Summary from "../checkout components/summary";

const Checkout = () => {
  return (
    <section className="w-full lg:max-w-[1512px] flex flex-col lg:flex-row lg:justify-between p-6 lg:p-10">
      {/* Sidebar - visible on large screens */}
      <div className="hidden lg:flex lg:w-[270px] lg:flex-shrink-0 lg:fixed top-0 left-0 h-full border-r border-gray-300 bg-gray-100">
        <Sidebar />
      </div>

      {/* MainContent and Summary - horizontally aligned on large screens */}
      <div className="lg:ml-[270px] flex flex-col lg:flex-row w-full gap-10 lg:gap-20">
        <div className="w-full lg:w-1/2">
          <MainContent />
        </div>
        <div className="w-full lg:w-1/2">
          <Summary />
        </div>
      </div>
    </section>
  );
};

export default Checkout;
