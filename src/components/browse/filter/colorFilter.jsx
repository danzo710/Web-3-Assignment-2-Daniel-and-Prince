import { Checkbox } from "@/components/ui/checkbox";
import { allFilters } from "../../../utils/filter/filterHelper";

const ColorFilter = (props) => {
  const { currentFilters, setCurrentFilters } = props;
  const selectedColors = currentFilters?.colors || [];

  const handleToggle = (color) => {
    setCurrentFilters((prev) => ({
      ...prev,
      colors: prev.colors.includes(color)
        ? prev.colors.filter((c) => c !== color)
        : [...prev.colors, color],
    }));
  };

  return (
    <div className="flex flex-wrap gap-3">
      {allFilters.colors.map((color) => (
        <div
          key={color.name}
          className="flex items-center gap-2 w-[30%]"
        >
          <Checkbox
            checked={selectedColors.includes(color.name)}
            onCheckedChange={() => handleToggle(color.name)}
          />
          <div
            style={{
              width: "14px",
              height: "14px",
              backgroundColor: color.hex,
              borderRadius: "50%",
              border: "1px solid black",
            }}
          />
          <span>{color.name}</span>
        </div>
      ))}
    </div>
  );
};

export { ColorFilter };
