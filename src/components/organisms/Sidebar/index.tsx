import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";

interface Props {
  routes: {
    name: string;
    path: string;
    element: JSX.Element;
  }[];
}

export default function Sidebar(props: Props) {
  const { routes } = props;

  return (
    <div className="border-r border-r-slate-800 py-12 px-8">
      <NavigationMenu>
        <NavigationMenuList className="flex-col gap-8">
          {routes.map((route) => {
            return (
              <NavigationMenuItem>
                <Link to={route.path}>
                  <NavigationMenuLink>{route.name}</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            );
          })}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
