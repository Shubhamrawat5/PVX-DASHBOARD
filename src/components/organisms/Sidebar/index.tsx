import { Routes } from "@/App";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { IconContext } from "react-icons";
import { Link, useLocation } from "react-router-dom";

interface Props {
  routes: Routes[];
}

export default function Sidebar(props: Props) {
  const { routes } = props;
  const location = useLocation();

  return (
    <div className="border-r border-r-indigo-950 py-12 px-3">
      <div className="h-12"></div>
      <NavigationMenu>
        <NavigationMenuList className="flex-col gap-4">
          {routes.map((route) => {
            return (
              <Link to={route.path} key={route.name}>
                <NavigationMenuItem
                  className={
                    "min-w-20 text-center p-2 rounded w-full " +
                    (location.pathname === route.path ? "bg-indigo-800" : "")
                  }
                >
                  <IconContext.Provider value={{ size: "30px" }}>
                    <div className="flex items-center justify-center mb-2">
                      {route.icon}
                    </div>
                  </IconContext.Provider>
                  <p>{route.name}</p>
                </NavigationMenuItem>
              </Link>
            );
          })}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
