import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";

const CategoryCard = (props) => {
  return (
    <div className="flex flex-col gap-3 text-center">
      <AspectRatio ratio={3 / 4} className="rounded-xl overflow-hidden shadow-md">
        <img
          src={props.category.image}
          alt={props.category.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </AspectRatio>

      <h3 className="text-lg font-semibold capitalize">{props.category.name}</h3>

      <Button
        variant="outline"
        className="mx-auto w-40"
        onClick={() => props.onClick(props.category.name)}
      >
        Browse {props.category.name}
      </Button>
    </div>
  );
};

export { CategoryCard };
