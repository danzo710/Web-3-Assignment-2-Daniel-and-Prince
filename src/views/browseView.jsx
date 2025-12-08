import { Filter } from "../components/browse/filter/filter";
import { Sort } from "../components/browse/sort";
import { ProductGrid } from "../components/browse/productGrid"; 
import { ProductsContext } from "../context/productsContext";
import { useContext, useState } from "react";
import { CurrentFilters } from "../components/browse/currentFilters";
import { filterProducts } from "../utils/filteredProducts";
import { sortProducts } from "../utils/sortProducts";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"

const BrowseView = () => {
  const { products, loading } = useContext(ProductsContext);
  const [currentFilters, setCurrentFilters] = useState({
    genders: [],
    categories: [],
    sizes: [],
    colors: [],
  });
  const [sortOption, setSortOption] = useState("name");
  const filteredProducts = filterProducts(products, currentFilters);
  const sortedProducts = sortProducts(filteredProducts, sortOption);

  if (loading) return <p>Loading products...</p>;

  return (
    <div className="flex gap-4">
      <div className="w-1/4">
        <Filter 
          currentFilters={currentFilters} 
          setCurrentFilters={setCurrentFilters} 
        />
      </div>

      <div className="w-3/4">
        <Sort sortOption={sortOption} setSortOption={setSortOption} />
        <CurrentFilters
          currentFilters={currentFilters}
          setCurrentFilters={setCurrentFilters}
        />

        {filteredProducts.length === 0 ? (
          <Empty>
            <EmptyTitle>No products match the selected filters</EmptyTitle>
            <EmptyDescription>
              Try changing your filter selection to see products.
            </EmptyDescription>
          </Empty>
        ) : (
          <ProductGrid products={filteredProducts} />
        )}
      </div>
    </div>
  );
};

export { BrowseView };
