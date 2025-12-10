import React, { useContext } from "react";
import { ProductsContext } from "../../context/productsContext";
import {ProductCard} from "../productCard";

const SingleProductRelated = (props) => {
  const { products } = useContext(ProductsContext);
  const currentProductId = props.product?.id;

  if (!products || products.length === 0) return null;

  const relatedProducts = products
    .filter((p) => p.id !== currentProductId)
    .slice(0, 5);

  return (
    <div className="my-12">
      <h2 className="text-2xl font-bold mb-6 text-white">Related Products</h2>
      <div className="grid gap-6" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))" }}>
        {relatedProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            viewType="single"
          />
        ))}
      </div>
    </div>
  );
};

export default SingleProductRelated;
