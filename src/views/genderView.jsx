import { useContext } from "react";
import { useNavigate } from "react-router";
import { ProductsContext } from "../context/productsContext";
import { Button } from "@/components/ui/button";
import MenHero from "../assets/hero/Hero-Men.jpg";
import WomenHero from "../assets/hero/Women-Hero.jpg";

const GenderView = (props) => {
  const { products, setSelectedFilters } = useContext(ProductsContext);
  const navigate = useNavigate();

  const heroImages = {
    mens: MenHero,
    womens: WomenHero,
  };


  const genderCategories = [
    ...new Set(
      products
        .filter((p) => p.gender === props.gender)
        .map((p) => p.category)
    ),
  ];

  const handleCategoryClick = (category) => {
    setSelectedFilters({
      genders: [props.gender],
      categories: [category],
      sizes: [],
      colors: [],
    });
    navigate("/browse");
  };

  return (
    <div className="p-4">
      <div className="mb-8 relative h-150 rounded overflow-hidden">
        <img
          src={heroImages[props.gender]}
          alt={`${props.gender} hero`}
          className="w-full h-full object-fill"
        />
        <div className="absolute inset-0 bg-black/40" />

        <h1 className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-white capitalize">
          {props.gender}
        </h1>
      </div>


      <h2 className="text-xl font-bold mb-8 text-center">Categories</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {genderCategories.map((category) => (
          <div
            key={category}
            className="p-5 border rounded-lg shadow-sm flex flex-col items-center gap-4 bg-white"
          >

            <h3 className="text-lg font-semibold capitalize">{category}</h3>


            <Button
              onClick={() => handleCategoryClick(category)}
              variant="outline"
              className="w-full"
            >
              Browse {category}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export { GenderView };
