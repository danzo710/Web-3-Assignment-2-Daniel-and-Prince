import { XMarkIcon } from '@heroicons/react/24/outline';
import { Button } from "@/components/ui/button";

const CurrentFilters = (props) => {
  const { currentFilters, setCurrentFilters } = props;

  const hasFilters = Object.values(currentFilters).some(
    (arr) => arr.length > 0
  );

  if (!hasFilters) return null;

  const removeFilter = (type, value) => {
    setCurrentFilters((prev) => ({
      ...prev,
      [type]: prev[type].filter((item) => item !== value),
    }));
  };

  const clearAll = () => {
    setCurrentFilters({
      genders: [],
      categories: [],
      sizes: [],
      colors: [],
    });
  };

  return (
    <div className="mb-4 p-3 border rounded-md">
      <div className="flex flex-wrap gap-2 mb-2">
        {Object.entries(currentFilters).map(([type, values]) =>
          values.map((value) => (
            <span
              key={`${type}-${value}`}
              className="flex items-center gap-1 bg-gray-200 px-2 py-1 rounded text-sm"
            >
              {value}
              <button onClick={() => removeFilter(type, value)}>
                <XMarkIcon className="h-4 w-4" />
              </button>
            </span>
          ))
        )}
      </div>

      <Button variant="destructive" size="sm" onClick={clearAll}>
        Clear All
      </Button>
    </div>
  );
};

export { CurrentFilters };
