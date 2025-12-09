const ProductImageSection = (props) => {
  const product = props.product;

  if (!product) return null;

  return (
    <div className="relative bg-gray-100 p-8 sm:p-12">
      <img
        src="https://placehold.co/600x400?text=placeholder"
        alt={product.name}
        className="w-full h-auto max-h-96 object-contain transform hover:scale-105 transition-transform duration-500"
      />
    </div>
  );
};

export default ProductImageSection;
