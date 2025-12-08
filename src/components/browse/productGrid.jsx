import { ProductCard } from "../productCard";

const ProductGrid = ({ products }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          viewType="browse"
        />
      ))}
    </div>
  );
};

export { ProductGrid };