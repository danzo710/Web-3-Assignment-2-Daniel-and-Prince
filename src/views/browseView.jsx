import {Filter} from "../components/browse/filter";
import {Sort} from "../components/browse/sort";
import { ProductCard } from "../components/productCard";
import { ProductsContext } from "../context/productsContext";
import { useContext } from "react";

const BrowseView = () => {
  const { products, loading } = useContext(ProductsContext);

  if (loading) return <p>Loading products...</p>;

  return (
    <div className="flex gap-4">

      <div className="w-1/4">
        <Filter />
      </div>


      <div className="w-3/4">
        <Sort />


        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              viewType="browse"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrowseView;
