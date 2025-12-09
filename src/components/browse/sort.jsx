import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { sortOptions } from "../../utils/sort/sortHelp";

const Sort = (props) => {
  const { sortOption, setSortOption } = props;

  return (
    <div className="mb-4 flex items-center gap-2">
      <span className="whitespace-nowrap">Sort:</span>
      <Select
        value={sortOption}
        onValueChange={(value) => setSortOption(value)}
      >
        <SelectTrigger>
          <SelectValue placeholder="Select option" />
        </SelectTrigger>
        <SelectContent>
          {sortOptions.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export { Sort };
