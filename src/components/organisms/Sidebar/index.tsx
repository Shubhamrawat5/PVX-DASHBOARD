import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="border-r border-r-slate-800 py-12 px-8">
      <NavigationMenu>
        <NavigationMenuList className="flex-col gap-8">
          <NavigationMenuItem>
            <Link to="/dashboard/groups">
              <NavigationMenuLink>Groups</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link to="/dashboard/members">
              <NavigationMenuLink>Members</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link to="/dashboard/birthdays">
              <NavigationMenuLink>Birthdays</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
