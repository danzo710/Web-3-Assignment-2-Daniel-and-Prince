const QuantitySelector = (props) => {
  return (
    <div className="mb-8">
      <label className="text-gray-900 font-semibold text-sm mb-3 block tracking-widest uppercase">
        Quantity
      </label>
      <div className="flex items-center space-x-4">
        <div className="flex items-center border border-gray-900 overflow-hidden">
          <button
            onClick={props.decrement}
            className="px-5 py-3 hover:bg-gray-100 text-gray-900 font-bold transition-colors"
          >
            −
          </button>
          <input
            type="number"
            min="1"
            value={props.quantity}
            onChange={props.handleChange}
            className="w-20 px-4 py-3 text-center text-lg font-semibold focus:outline-none border-l border-r border-gray-900"
          />
          <button
            onClick={props.increment}
            className="px-5 py-3 hover:bg-gray-100 text-gray-900 font-bold transition-colors"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuantitySelector;
