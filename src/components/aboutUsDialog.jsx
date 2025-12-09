import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const AboutUsDialog = () => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>

      <DialogTrigger asChild>
        <Button variant="outline">About Us</Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>About Us</DialogTitle>
          <DialogDescription>
            Welcome to our store! This web store is very simple we hold many fabolous items for btoh men and women.
            Not interested in one of our featured product? Feel free to Browse thrugh our catelougue.
            We got many ways for you to sort and filter our catalougue for your special gift.

            This was made as a collaboration between Daniel Anzola and Prince Manzano. We hope you enjoy your stay!
            Github Link: 
          </DialogDescription>
        </DialogHeader>

        <div className="mt-4 flex justify-end">
          <DialogClose asChild>
            <Button variant="ghost">Close</Button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export { AboutUsDialog };
