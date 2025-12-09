const AddToCartButton = (props) => {
  const product = props.product;

  const handleClick = () => {
    if (!props.selectedSize) {
      alert("Please select a size");
      return;
    }
    if (!props.selectedColor) {
      alert("Please select a color");
      return;
    }

    console.log("Adding to cart:", {
      productId: product.id,
      name: product.name,
      price: product.price,
      quantity: props.quantity,
      size: props.selectedSize,
      color: props.selectedColor,
    });

    alert(
      `Added ${props.quantity}x ${product.name} (${props.selectedSize}, ${props.selectedColor}) to cart`
    );
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-8">
      <button
        onClick={handleClick}
        className="flex-1 bg-gray-900 text-white py-4 px-8 font-semibold text-sm tracking-widest uppercase hover:bg-gray-800 transition-all duration-300"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default AddToCartButton;
