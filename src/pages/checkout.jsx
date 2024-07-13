import React from "react";
import Sidebar from "../checkout components/sidebar";
import MainContent from "../checkout components/main-content";

const Checkout = () => {
  return (
    <section className=" w-full max-w-full justify-center flex  items-center ">
      <Sidebar />
      <MainContent />
    </section>
  );
};

export default Checkout;
