import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import {AdminTable} from "../components/singleproductview/adminTable";
const AdminProductView = (props) => {
  if (!props.product) return null;

  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="secondary">Admin View</Button>
        </SheetTrigger>
        <div className="flex flex-col">
          <SheetContent position="right" size="lg">
            <SheetHeader>
              <SheetTitle>Admin Product View</SheetTitle>
            </SheetHeader>
            <AdminTable product={props.product} />
          </SheetContent>
        </div>
      </Sheet>
    </>
  );
};

export { AdminProductView };
