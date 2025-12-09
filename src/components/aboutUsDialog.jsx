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
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';

const AboutUsDialog = () => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="font-medium">
          About Us
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold">
            About Us
          </DialogTitle>

          <DialogDescription className="space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>
              Welcome to our store! We offer a curated selection of items for
              both men and women. Not interested in our featured picks? Feel
              free to browse through our full catalogue.
            </p>

            <p>
              We offer flexible ways to sort and filter products so you can
              easily find the perfect item.
            </p>

            <p>
              This project was proudly created by{" "}
              <span className="font-medium text-foreground">
                Daniel Anzola
              </span>{" "}
              and{" "}
              <span className="font-medium text-foreground">
                Prince Manzano
              </span>
              . We hope you enjoy your stay!
            </p>

            <div className="pt-2">
              <Button
                variant="secondary"
                size="sm"
                className="flex items-center gap-2"
                 onClick={() =>
                window.open(
                  "https://github.com/danzo710/Web-3-Assignment-2-Daniel-and-Prince/tree/main",
                  "_blank"
                )
              }
              >
                GitHub Repository:<ArrowTopRightOnSquareIcon/>
              </Button>
            </div>
          </DialogDescription>
        </DialogHeader>

        <div className="mt-6 flex justify-end">
          <DialogClose asChild>
            <Button variant="ghost" className="px-4">
              Close
            </Button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export { AboutUsDialog };
