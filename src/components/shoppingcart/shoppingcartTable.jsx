import ShoppingCartTableRow from "./shoppingcartTableRow";

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
              <ShoppingCartTableRow
                key={item.id}
                id={item.id}
                image={item.image}
                color={item.color}
                size={item.size}
                price={item.price}
                quantity={item.quantity}
                subtotal={item.subtotal}
                onRemoveItem={onRemoveItem}
                />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ShoppingCartTable;