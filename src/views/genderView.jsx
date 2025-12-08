import { useContext } from "react";
import { useNavigate } from "react-router";
import { ProductsContext } from "../context/productsContext";
import { ProductCard } from "../components/productCard";
import { Button } from "@/components/ui/button";

const GenderView = (props) => {
  const { products, setSelectedFilters } = useContext(ProductsContext);
  const navigate = useNavigate();

  const genderProducts = products.filter(p => p.gender === props.gender);

  const handleCategoryClick = (category) => {
    setSelectedFilters({
      genders: [props.gender],
      categories: [category],
      sizes: [],
      colors: []
    });
    navigate("/browse");
  };

  return (
    <div className="p-4">
      <div className="mb-8 bg-gray-200 rounded h-64 flex items-center justify-center">
        <h1 className="text-3xl font-bold capitalize">{props.gender}</h1>
      </div>

      <h2 className="text-xl font-bold mb-4">Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {genderProducts.map(product => (
          <div key={product.id} className="flex flex-col gap-2">
            <ProductCard product={product} viewType="categoryOnly" />
            <Button
              onClick={() => handleCategoryClick(product.category)}
              variant="outline"
            >
              Browse {product.category}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export { GenderView };
