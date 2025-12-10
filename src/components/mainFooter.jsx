import { Button } from "@/components/ui/button";
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
export const MainFooter = () => {

  return (
    <footer className="mt-12 border-t py-6 text-center text-sm text-gray-500">
      © {new Date().getFullYear()} Shop Name. All rights reserved.
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
    </footer>
  );
};
