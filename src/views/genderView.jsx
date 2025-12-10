import { useContext } from "react";
import { useNavigate } from "react-router";
import { ProductsContext } from "../context/productsContext";
import { GenderHero } from "../components/gender/genderHero";
import { GenderCategories } from "../components/gender/genderCategories";
import { heroImages, categoryConfig } from "../utils/categoryData";

const GenderView = (props) => {
  const { setSelectedFilters } = useContext(ProductsContext);
  const navigate = useNavigate();

  const handleCategoryClick = (categoryName) => {
    setSelectedFilters({
      genders: [props.gender],
      categories: [categoryName],
      sizes: [],
      colors: [],
    });
    navigate("/browse");
  };

  return (
    <div className="p-4">
      <GenderHero heroImage={heroImages[props.gender]} gender={props.gender} />

      <h2 className="text-xl font-bold mb-8 text-center">Categories</h2>

      <GenderCategories
        categories={categoryConfig[props.gender]}
        handleCategoryClick={handleCategoryClick}
      />
    </div>
  );
};

export { GenderView };
