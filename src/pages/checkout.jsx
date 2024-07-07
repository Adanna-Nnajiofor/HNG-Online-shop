import React from "react";
import Sidebar from "../checkout components/sidebar";
import MainContent from "../checkout components/main-content";

const Checkout = () => {
  return (
    <section className="flex w-full h-full">
      <Sidebar />
      <MainContent />
    </section>
  );
};

export default Checkout;
