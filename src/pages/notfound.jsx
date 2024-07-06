import React from "react";
import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-3xl font-bold mb-4">Page not found!</h2>
      <p className="text-lg mb-4">
        Sorry, the page you are looking for does not exist.
      </p>
      <p className="text-lg mb-4">
        Go to the{" "}
        <NavLink to="/" className="text-blue-600 hover:underline">
          Homepage
        </NavLink>
        .
      </p>
    </div>
  );
};

export default NotFound;
