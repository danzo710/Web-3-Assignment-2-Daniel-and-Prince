const ShoppingCartTable = ({ cartItems, onRemoveItem }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-sky-50 border-b border-gray-200">
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Item</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Color</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Size</th>
              <th className="px-6 py-4 text-right text-sm font-semibold text-gray-700">Price</th>
              <th className="px-6 py-4 text-center text-sm font-semibold text-gray-700">Quantity</th>
              <th className="px-6 py-4 text-right text-sm font-semibold text-gray-700">Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center space-x-4">
                    <img
                      src={item.image}
                      alt="Product"
                      className="w-20 h-20 object-cover rounded-lg border border-gray-200"
                    />
                    <button
                      onClick={() => onRemoveItem(item.id)}
                      className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 hover:bg-red-50 hover:border-red-300 hover:text-red-600 transition-colors"
                    >
                      −
                    </button>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-700">{item.color}</td>
                <td className="px-6 py-4 text-sm text-gray-700">{item.size}</td>
                <td className="px-6 py-4 text-right text-sm font-medium text-gray-900">
                  ${item.price.toFixed(2)}
                </td>
                <td className="px-6 py-4 text-center text-sm font-medium text-gray-900">
                  {item.quantity}
                </td>
                <td className="px-6 py-4 text-right text-sm font-bold text-gray-900">
                  ${item.subtotal.toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ShoppingCartTable;