import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { SalesOverview } from "../components/salesOverview";

const AdminProductView = (props) => {
  if (!props.product) return null;

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="secondary">Admin View</Button>
      </SheetTrigger>

      <SheetContent position="right" size="lg">
        <SheetHeader>
          <SheetTitle>Admin Product View</SheetTitle>
        </SheetHeader>

        <div className="mt-4">
          <h2 className="text-xl font-semibold">{props.product.name}</h2>
          <p className="text-gray-600">Category: {props.product.category}</p>
        </div>

        <SalesOverview product={props.product} />
      </SheetContent>
    </Sheet>
  );
};

export { AdminProductView };
