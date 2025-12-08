import { useContext } from "react";
import { LoginContext } from "../../context/loginContext"; 
import { AboutUsDialog } from "../aboutUsDialog";
import { Link } from "react-router";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink
} from "@/components/ui/navigation-menu";

const HeaderMenu = () => {
  const { isLoggedIn } = useContext(LoginContext);

  return (
    <NavigationMenu>
      <NavigationMenuList className="flex gap-4">
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link to="/">Home</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link to="/product/men">Men</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link to="/product/women">Women</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link to="/browse">Browse</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <AboutUsDialog />
        </NavigationMenuItem>

        {isLoggedIn && (
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link to="/dashboard/sales">Sales Dashboard</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        )}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default HeaderMenu;
