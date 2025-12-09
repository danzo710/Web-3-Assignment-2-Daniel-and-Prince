import React, { useState } from 'react';
import SingleProductRelated from "./singleproductRelated";

const SingleProductMenu = () => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value);
    if (value > 0) {
      setQuantity(value);
    }
  };

  const incrementQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-none overflow-hidden">
          {/* Product Image Section */}
          <div className="relative bg-gray-100 p-8 sm:p-12">
            <img 
              src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80" 
              alt="Product" 
              className="w-full h-auto max-h-96 object-contain transform hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Product Details Section */}
          <div className="p-8 sm:p-10">
            {/* Title */}
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Premium Running Shoes
            </h1>
            
            {/* Placeholder Image
            <div className="mb-8">
              <img 
                src={productImage}
                alt="Product Detail" 
                className="w-full h-64 object-cover rounded-lg"
              />
            </div> */}
            
            {/* Subtitle */}
            <p className="text-lg text-gray-500 mb-6">Ultimate Comfort & Performance</p>

            {/* Rating */}
            <div className="flex items-center space-x-3 mb-6">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-6 h-6 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm text-gray-600 font-medium">(247 reviews)</span>
            </div>

            {/* Price */}
            <div className="mb-8">
              <span className="text-5xl font-bold text-gray-900">$89.99</span>
            </div>

            {/* Description */}
            <div className="bg-gray-50 p-6 mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-3 tracking-wide uppercase text-sm">Product Description</h3>
              <p className="text-gray-700 leading-relaxed">
                Experience ultimate comfort and performance with our premium running shoes. 
                Engineered with advanced cushioning technology and breathable materials, 
                these shoes provide exceptional support for your active lifestyle. Perfect 
                for runners, athletes, and anyone who values quality footwear.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-center space-x-3 border border-gray-200 p-4">
                <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm font-medium text-gray-700">Free Shipping</span>
              </div>
              <div className="flex items-center space-x-3 border border-gray-200 p-4">
                <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm font-medium text-gray-700">1 Year Warranty</span>
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="mb-8">
              <label className="text-gray-900 font-semibold text-sm mb-3 block tracking-widest uppercase">Quantity</label>
              <div className="flex items-center space-x-4">
                <div className="flex items-center border border-gray-900 overflow-hidden">
                  <button
                    onClick={decrementQuantity}
                    className="px-5 py-3 hover:bg-gray-100 text-gray-900 font-bold transition-colors"
                  >
                    −
                  </button>
                  <input
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={handleQuantityChange}
                    className="w-20 px-4 py-3 text-center text-lg font-semibold focus:outline-none border-l border-r border-gray-900"
                  />
                  <button
                    onClick={incrementQuantity}
                    className="px-5 py-3 hover:bg-gray-100 text-gray-900 font-bold transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button className="flex-1 bg-gray-900 text-white py-4 px-8 font-semibold text-sm tracking-widest uppercase hover:bg-gray-800 transition-all duration-300">
                Add to Cart
              </button>
              <button className="sm:w-auto px-6 py-4 border border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300">
                <svg className="w-6 h-6 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>
            </div>

            {/* Categories */}
            <div className="border-t border-gray-200 pt-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-gray-900 font-semibold text-sm tracking-widest uppercase">Categories:</span>
                <a href="#" className="text-gray-700 text-sm hover:text-gray-900 transition-colors uppercase tracking-wide">
                  Footwear
                </a>
                <span className="text-gray-400">·</span>
                <a href="#" className="text-gray-700 text-sm hover:text-gray-900 transition-colors uppercase tracking-wide">
                  Sports
                </a>
                <span className="text-gray-400">·</span>
                <a href="#" className="text-gray-700 text-sm hover:text-gray-900 transition-colors uppercase tracking-wide">
                  Running
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProductMenu;