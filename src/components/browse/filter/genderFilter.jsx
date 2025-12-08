import { Checkbox } from "@/components/ui/checkbox";
import { allFilters } from "../../../utils/filter/filterHelper";

const GenderFilter = (props) => {
  const { currentFilters, setCurrentFilters } = props;
  const selectedGenders = currentFilters?.genders || [];

  const handleToggle = (gender) => {
    setCurrentFilters((prev) => ({
      ...prev,
      genders: prev.genders.includes(gender)
        ? prev.genders.filter((g) => g !== gender)
        : [...prev.genders, gender],
    }));
  };

  return (
    <div>
      {allFilters.genders.map((gender) => (
        <div key={gender} className="flex items-center gap-2">
          <Checkbox
            checked={selectedGenders.includes(gender)}
            onCheckedChange={() => handleToggle(gender)}
          />
          <span>{gender}</span>
        </div>
      ))}
    </div>
  );
};

export { GenderFilter };
