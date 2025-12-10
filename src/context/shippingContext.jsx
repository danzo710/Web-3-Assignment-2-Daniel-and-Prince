import { createContext, useContext, useState } from "react";

const ShippingContext = createContext(undefined);

export const ShippingProvider = ({ children }) => {
  const [shippingMethod, setShippingMethod] = useState("standard");
  const [destination, setDestination] = useState("canada");
  const [shippingCost, setShippingCost] = useState(0);

  const calculateShippingCost = (subtotal) => {
    if (subtotal > 500) return 0; // free shipping

    const rates = {
      standard: { canada: 10, "united-states": 15, international: 20 },
      express: { canada: 25, "united-states": 25, international: 30 },
      priority: { canada: 35, "united-states": 50, international: 50 },
    };

    return rates[shippingMethod][destination] || 0;
  };

  return (
    <ShippingContext.Provider
      value={{
        shippingMethod,
        setShippingMethod,
        destination,
        setDestination,
        shippingCost,
        setShippingCost,
        calculateShippingCost,
      }}
    >
      {children}
    </ShippingContext.Provider>
  );
};

export const useShipping = () => useContext(ShippingContext);
