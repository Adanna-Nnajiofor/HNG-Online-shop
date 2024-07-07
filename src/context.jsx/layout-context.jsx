import React, { createContext, useContext, useState } from "react";

const LayoutContext = createContext();

export const LayoutProvider = ({ children }) => {
  const [showFooter, setShowFooter] = useState(true);
  const [navbarCustomizations, setNavbarCustomizations] = useState({});

  return (
    <LayoutContext.Provider
      value={{
        showFooter,
        setShowFooter,
        navbarCustomizations,
        setNavbarCustomizations,
      }}
    >
      {children}
    </LayoutContext.Provider>
  );
};

export const useLayout = () => useContext(LayoutContext);
