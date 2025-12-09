import { Checkbox } from "@/components/ui/checkbox";
import { allFilters } from "../../../utils/filter/filterHelper";

const SizeFilter = (props) => {
  const { currentFilters, setCurrentFilters } = props;
  const selectedSizes = currentFilters?.sizes || [];

  const handleToggle = (size) => {
    setCurrentFilters((prev) => ({
      ...prev,
      sizes: prev.sizes.includes(size)
        ? prev.sizes.filter((s) => s !== size)
        : [...prev.sizes, size],
    }));
  };

  return (
    <div>
      {allFilters.sizes.map((size) => (
        <div key={size} className="flex items-center gap-2">
          <Checkbox
            checked={selectedSizes.includes(size)}
            onCheckedChange={() => handleToggle(size)}
          />
          <span>{size}</span>
        </div>
      ))}
    </div>
  );
};

export { SizeFilter };
