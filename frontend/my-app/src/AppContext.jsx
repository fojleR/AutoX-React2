import React, { createContext, useState } from "react";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [info, setInfo] = useState({
    type: "",
    name: "",
    email: "",
    password: "",
    isLoged: false,
    storeName: "",
    totProduct: "",
    productCategory: "",
  });

  return (
    <AppContext.Provider value={{ info, setInfo }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
