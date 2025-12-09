import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { GenderFilter } from "./genderFilter";
import { CategoryFilter } from "./categoryFilter";
import { SizeFilter } from "./sizeFilter";
import { ColorFilter } from "./colorFilter";

const Filter = (props) => {
  const { currentFilters, setCurrentFilters } = props;

  return (
    <Accordion type="multiple">
      <AccordionItem value="gender">
        <AccordionTrigger>Gender</AccordionTrigger>
        <AccordionContent>
          <GenderFilter
            currentFilters={currentFilters}
            setCurrentFilters={setCurrentFilters}
          />
        </AccordionContent>
      </AccordionItem>


      <AccordionItem value="category">
        <AccordionTrigger>Category</AccordionTrigger>
        <AccordionContent>
          <CategoryFilter
            currentFilters={currentFilters}
            setCurrentFilters={setCurrentFilters}
          />
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="size">
        <AccordionTrigger>Size</AccordionTrigger>
        <AccordionContent>
          <SizeFilter
            currentFilters={currentFilters}
            setCurrentFilters={setCurrentFilters}
          />
        </AccordionContent>
      </AccordionItem>


      <AccordionItem value="color">
        <AccordionTrigger>Colors</AccordionTrigger>
        <AccordionContent>
          <ColorFilter
            currentFilters={currentFilters}
            setCurrentFilters={setCurrentFilters}
          />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export { Filter };
