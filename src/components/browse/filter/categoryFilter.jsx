import { Checkbox } from "@/components/ui/checkbox";
import { allFilters } from "../../../utils/filter/filterHelper";

const CategoryFilter = (props) => {
  const { currentFilters, setCurrentFilters } = props;
  const selectedCategories = currentFilters?.categories || [];

  const handleToggle = (category) => {
    setCurrentFilters((prev) => ({
      ...prev,
      categories: prev.categories.includes(category)
        ? prev.categories.filter((c) => c !== category)
        : [...prev.categories, category],
    }));
  };

  return (
    <div className="flex flex-wrap gap-3">
      {allFilters.categories.map((category) => (
        <div
          key={category}
          className="flex items-center gap-2 w-[45%] sm:w-[30%]"
        >
          <Checkbox
            checked={selectedCategories.includes(category)}
            onCheckedChange={() => handleToggle(category)}
          />
          <span className="truncate">{category}</span>
        </div>
      ))}
    </div>
  );
};

export { CategoryFilter };
