// src/context/shippingContext.jsx
import { createContext, useContext, useState, useEffect } from "react";

const ShippingContext = createContext(undefined);

export const ShippingProvider = ({ children }) => {
  const [shippingMethod, setShippingMethod] = useState("standard");
  const [destination, setDestination] = useState("canada");
  const [shippingCost, setShippingCost] = useState(5.0);

  useEffect(() => {
    let cost = 0;
    switch (shippingMethod) {
      case "standard":
        cost = 5.0;
        break;
      case "express":
        cost = 10.0;
        break;
      case "priority":
        cost = 20.0;
        break;
      default:
        console.log("Error in shipping selection");
    }
    setShippingCost(cost);
  }, [shippingMethod]);

  const value = {
    shippingMethod,
    setShippingMethod,
    destination,
    setDestination,
    shippingCost,
  };

  return (
    <ShippingContext.Provider value={value}>
      {children}
    </ShippingContext.Provider>
  );
};

export const useShipping = () => {
  const context = useContext(ShippingContext);
  return context;
};
