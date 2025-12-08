import { Checkbox } from "@/components/ui/checkbox";
import { allFilters } from "../../../utils/filterHelper";

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
    <div>
      {allFilters.categories.map((category) => (
        <div key={category} className="flex items-center gap-2">
          <Checkbox
            checked={selectedCategories.includes(category)}
            onCheckedChange={() => handleToggle(category)}
          />
          <span>{category}</span>
        </div>
      ))}
    </div>
  );
};

export { CategoryFilter };
