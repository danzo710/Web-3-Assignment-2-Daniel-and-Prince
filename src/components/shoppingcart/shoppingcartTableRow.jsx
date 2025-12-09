

const ShoppingCartTableRow = (props) => {
  return (
    <>
      <tr key={props.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
      >
        <td className="px-6 py-4">
          <div className="flex items-center space-x-4">
            <img
              src={props.image}
              alt="Product"
              className="w-20 h-20 object-cover rounded-lg border border-gray-200"/>
            <button
              onClick={() => props.onRemoveItem(props.id)}
              className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 hover:bg-red-50 hover:border-red-300 hover:text-red-600 transition-colors"
            >−
            </button>
          </div>
        </td>
        <td className="px-6 py-4 text-sm text-gray-700">{props.color}</td>
        <td className="px-6 py-4 text-sm text-gray-700">{props.size}</td>
        <td className="px-6 py-4 text-right text-sm font-medium text-gray-900">
          ${props.price.toFixed(2)}
        </td>
        <td className="px-6 py-4 text-center text-sm font-medium text-gray-900">
          {props.quantity}
        </td>
        <td className="px-6 py-4 text-right text-sm font-bold text-gray-900">
          ${props.subtotal.toFixed(2)}
        </td>
      </tr>
    </>
  );
};
export default ShoppingCartTableRow;
