import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import { Outlet, useLocation } from "react-router-dom";

const RootPage = () => {
  const location = useLocation();
  const isCheckoutPage = location.pathname === "/checkout";

  return (
    <div className="flex flex-col h-full w-full items-center justify-center">
      <Header />
      <main>
        <Outlet />
      </main>
      {!isCheckoutPage && <Footer />}
      {isCheckoutPage && (
        <div className="lg:hidden">
          <Footer />
        </div>
      )}
    </div>
  );
};

export default RootPage;
