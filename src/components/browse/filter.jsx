import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Checkbox } from "@/components/ui/checkbox";
import { allFilters } from "../../utils/filterHelper";

const Filter = () => {
  return (
    <Accordion type="multiple">


      <AccordionItem value="gender">
        <AccordionTrigger>Gender</AccordionTrigger>
        <AccordionContent>
          {allFilters.genders.map((gender) => (
            <div key={gender}>
              <Checkbox />
              <span>{gender}</span>
            </div>
          ))}
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="category">
        <AccordionTrigger>Category</AccordionTrigger>
        <AccordionContent>
          {allFilters.categories.map((category) => (
            <div key={category}>
              <Checkbox />
              <span>{category}</span>
            </div>
          ))}
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="size">
        <AccordionTrigger>Size</AccordionTrigger>
        <AccordionContent>
          {allFilters.sizes.map((size) => (
            <div key={size}>
              <Checkbox />
              <span>{size}</span>
            </div>
          ))}
        </AccordionContent>
      </AccordionItem>


      <AccordionItem value="color">
  <AccordionTrigger>Colors</AccordionTrigger>
  <AccordionContent>
    <div className="flex flex-wrap gap-3">
      {allFilters.colors.map((color) => (
        <div
          key={color.name}
          className="flex items-center gap-2 w-[30%]"
        >
          <Checkbox />

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
  </AccordionContent>
</AccordionItem>

    </Accordion>
  );
};

export {Filter};
