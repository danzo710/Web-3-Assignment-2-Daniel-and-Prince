import { CategoryCard } from "./CategoryCard";

const GenderCategories = (props) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {props.categories.map((category) => (
        <CategoryCard
          key={category.name}
          category={category}
          onClick={props.handleCategoryClick}
        />
      ))}
    </div>
  );
};

export { GenderCategories };
