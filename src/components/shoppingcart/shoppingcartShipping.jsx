import { useState } from "react";

const ShoppingCartShipping = () => {
  const [shippingMethod, setShippingMethod] = useState("standard");
  const [destination, setDestination] = useState("canada");

  return (
    <>
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Shipping</h2>
        <div className="space-y-4">
          <div>
            <label
              htmlFor="shipping-method"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Method
            </label>
            <select
              id="shipping-method"
              value={shippingMethod}
              onChange={(e) => setShippingMethod(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-colors"
            >
              <option value="standard">Standard</option>
              <option value="express">Express</option>
              <option value="priority">Priority</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="destination"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Destination
            </label>
            <select
              id="destination"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-colors"
            >
              <option value="canada">Canada</option>
              <option value="united-states">United States</option>
              <option value="international">International</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShoppingCartShipping;
