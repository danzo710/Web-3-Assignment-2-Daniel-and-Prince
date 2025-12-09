import { useState } from 'react';
import ShoppingCartTable from './shoppingcartTable';
import ShoppingCartSummary from './shoppingcartSummary';
import Shipping from './shoppingcartShipping';

const ShoppingCartApp = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=400',
      color: 'Black',
      size: 'L',
      price: 49.99,
      quantity: 2,
      subtotal: 99.98,
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400',
      color: 'White',
      size: 'M',
      price: 79.99,
      quantity: 1,
      subtotal: 79.99,
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400',
      color: 'Blue',
      size: 'XL',
      price: 89.99,
      quantity: 1,
      subtotal: 89.99,
    },
  ]);

  const handleRemoveItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const merchandiseSubtotal = cartItems.reduce((sum, item) => sum + item.subtotal, 0);
  const shipping = 15.00;
  const tax = merchandiseSubtotal * 0.13;
  const total = merchandiseSubtotal + shipping + tax;

  return (
    <div className="min-h-screen bg-sky-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Shopping Cart</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <ShoppingCartTable cartItems={cartItems} onRemoveItem={handleRemoveItem} />
          </div>
          <div className="space-y-6">
            <ShoppingCartSummary
              merchandiseSubtotal={merchandiseSubtotal}
              shipping={shipping}
              tax={tax}
              total={total}
            />
            <Shipping />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCartApp;