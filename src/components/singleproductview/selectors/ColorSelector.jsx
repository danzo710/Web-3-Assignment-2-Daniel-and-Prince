const ColorsSelector = (props) => {
  if (!props.colors || props.colors.length === 0) return null;

  return (
    <div className="mb-4">
      <span className="font-semibold text-gray-900">Colors: </span>
      <div className="flex space-x-2 mt-1">
        {props.colors.map((c, idx) => (
          <button
            key={idx}
            title={c.name}
            onClick={() => props.setSelectedColor(c.hex)}
            className={`w-6 h-6 border rounded-full transition-transform transform ${
              props.selectedColor === c.hex
                ? "ring-2 ring-offset-1 ring-gray-900 scale-110"
                : "border-gray-300"
            }`}
            style={{ backgroundColor: c.hex }}
          />
        ))}
      </div>
    </div>
  );
};

export default ColorsSelector;
