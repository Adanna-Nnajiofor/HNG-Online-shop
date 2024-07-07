import React from "react";
import Sidebar from "../checkout components/sidebar";
import MainContent from "../checkout components/main-content";

const Checkout = () => {
  return (
    <section className=" w-full justify-center flex flex-col items-center">
      <Sidebar />
      <MainContent />
    </section>
  );
};

export default Checkout;
