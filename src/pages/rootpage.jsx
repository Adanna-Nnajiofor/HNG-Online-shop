import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import { Outlet, useLocation } from "react-router-dom";

const RootPage = () => {
  const location = useLocation();
  const isCheckoutPage = location.pathname === "/checkout";

  return (
    <div className="flex flex-col w-full">
      <Header />
      <main>
        <Outlet />
      </main>
      {!isCheckoutPage && <Footer />}
    </div>
  );
};

export default RootPage;
