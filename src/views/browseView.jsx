import { Filter } from "../components/browse/filter/filter";
import { Sort } from "../components/browse/sort";
import { ProductGrid } from "../components/browse/productGrid"; 
import { ProductsContext } from "../context/productsContext";
import { useContext, useState } from "react";
import { CurrentFilters } from "../components/browse/currentFilters";
import { filterProducts } from "../utils/filter/filteredProducts";
import { sortProducts } from "../utils/sort/sortProducts";
import {
  Empty,
  EmptyDescription,
  EmptyTitle,
} from "@/components/ui/empty";

const BrowseView = () => {
  const { products, loading, selectedFilters, setSelectedFilters } = useContext(ProductsContext);
  const [sortOption, setSortOption] = useState("name");

  const filteredProducts = filterProducts(products, selectedFilters);
  const sortedProducts = sortProducts(filteredProducts, sortOption);

  if (loading) return <p>Loading products...</p>;

  return (
    <div className="flex gap-4">
      <div className="w-1/4">
        <Filter
          currentFilters={selectedFilters} 
          setCurrentFilters={setSelectedFilters} 
        />
      </div>

      <div className="w-3/4">
        <Sort sortOption={sortOption} setSortOption={setSortOption} />
        <CurrentFilters
          currentFilters={selectedFilters}
          setCurrentFilters={setSelectedFilters}
        />

        {sortedProducts.length === 0 ? (
          <Empty>
            <EmptyTitle>No products match the selected filters</EmptyTitle>
            <EmptyDescription>
              Try changing your filter selection to see products.
            </EmptyDescription>
          </Empty>
        ) : (
          <ProductGrid products={sortedProducts} />
        )}
      </div>
    </div>
  );
};

export { BrowseView };
