import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCart = localStorage.getItem("cartItems");
    if (storedCart) setCartItems(JSON.parse(storedCart));
  }, []);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addItemToCart = (product, quantity = 1, selectedSize = "", selectedColor = "") => {
    setCartItems(prev => {
      const existingIndex = prev.findIndex(
        item => item.id === product.id && item.size === selectedSize && item.color === selectedColor
      );
      if (existingIndex !== -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += quantity;
        updated[existingIndex].subtotal = updated[existingIndex].price * updated[existingIndex].quantity;
        return updated;
      }
      return [
        ...prev,
        {
          id: product.id,
          name: product.name,
          image: product.image || "https://placehold.co/200x200?text=placeholder",
          price: product.price,
          quantity,
          size: selectedSize,
          color: selectedColor,
          subtotal: product.price * quantity,
        },
      ];
    });
  };

  const removeItemFromCart = (id, size = "", color = "") => {
    setCartItems(prev =>
      prev.filter(item => !(item.id === id && item.size === size && item.color === color))
    );
  };

  const updateItemQuantity = (id, size, color, newQuantity) => {
    setCartItems(prev =>
      prev.map(item => item.id === id && item.size === size && item.color === color
        ? { ...item, quantity: newQuantity, subtotal: item.price * newQuantity }
        : item
      )
    );
  };


  const clearCart = () => {
    setCartItems([]);
  };

  const merchandiseSubtotal = cartItems.reduce((sum, item) => sum + item.subtotal, 0);

  const value = {
    cartItems,
    addItemToCart,
    removeItemFromCart,
    updateItemQuantity,
    clearCart,
    merchandiseSubtotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => useContext(CartContext);

export {CartProvider};
