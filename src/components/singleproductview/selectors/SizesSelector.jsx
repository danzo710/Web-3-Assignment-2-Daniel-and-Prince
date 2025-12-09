const SizesSelector = (props) => {
  if (!props.sizes || props.sizes.length === 0) return null;

  return (
    <div className="mb-4">
      <span className="font-semibold text-gray-900">Sizes: </span>
      <div className="flex space-x-2 mt-1">
        {props.sizes.map((size, idx) => (
          <button
            key={idx}
            onClick={() => props.setSelectedSize(size)}
            className={`px-3 py-1 border rounded text-sm transition-colors ${
              props.selectedSize === size
                ? "bg-gray-900 text-white border-gray-900"
                : "bg-white text-gray-700 border-gray-300"
            }`}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SizesSelector;
