import { useContext } from "react";
import { useNavigate } from "react-router";
import { ProductsContext } from "../context/productsContext";
import { ProductCard } from "../components/productCard";
import { Button } from "@/components/ui/button";
import MenHero from "../assets/Hero-Men.jpg"
import WomenHero from "../assets/Women-Hero.jpg"

const GenderView = (props) => {
  const { products, setSelectedFilters } = useContext(ProductsContext);
  const navigate = useNavigate();
  const heroImages = {
    mens: MenHero,
    womens: WomenHero,
  };

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
      <div className="mb-8 relative h-64 rounded overflow-hidden">
    <img
      src={heroImages[props.gender]}
      alt={`${props.gender} hero`}
      className="w-full h-full object-cover"
    />
      <div className="absolute inset-0 bg-black/40" />

      <h1 className="absolute inset-0 flex items-center justify-center text-3xl font-bold text-white capitalize">
        {props.gender}
      </h1>
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
