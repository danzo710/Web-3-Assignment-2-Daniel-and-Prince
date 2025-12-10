import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import ProductOptions from "./ProductOptions";

const ProductCard = ({ product, viewType }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="product-card relative">
      <Link to={`/product/${product.id}`}>
        <h2 className="text-white">{product.name}</h2>
        <img
          src={product.image || "https://placehold.co/200x200?text=placeholder"}
          alt={product.name}
          className="w-full h-48 object-cover"
        />
      </Link>

      {(viewType === "browse" || viewType === "single") && (
        <div className="mt-2 flex justify-between items-center">
          <span className="font-bold text-white">${product.price.toFixed(2)}</span>
          <Button onClick={() => setShowModal(true)}>Add to Cart</Button>
        </div>
      )}

      {showModal && (
        <ProductOptions
          product={product}
          open={showModal}
          setOpen={setShowModal}
        />
      )}
    </div>
  );
};

export { ProductCard };
