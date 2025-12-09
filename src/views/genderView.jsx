import { useContext } from "react";
import { useNavigate } from "react-router";
import { ProductsContext } from "../context/productsContext";
import { ProductCard } from "../components/productCard";
import { Button } from "@/components/ui/button";
import MenHero from "../assets/Hero-Men.jpg"
import WomenHero from "../assets/Women-Hero.jpg"
//TODO
// 1. add hero images for men and women view
// 2. fix the product showcase.
// 3. find more images for each category in unsplash
// 4. organize images in simple lay out shadcn has a component for this
// 5. add the category button for each photo. photo should click too
// gender should be done
// TODO
// 1. add chart to admin product view. look at prince code or ask him.
// 2. make logo for headerbar
// 3. finish log in form with the small alert.
// 4. fix layout in browse
// 5. fix layout for about us dialog
// 6. go over components and split them properly.
// 7. should be all or one more thing
// 8. possibly handle homeview if prince can't do it.

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
