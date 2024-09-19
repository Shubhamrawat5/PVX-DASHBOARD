import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { ReactNode } from "react";
import { LiaBirthdayCakeSolid } from "react-icons/lia";
import { MdOutlineCurrencyRupee, MdGroup, MdDashboard } from "react-icons/md";
import { FaUser } from "react-icons/fa6";

import Header from "@/components/organisms/Header";
import Sidebar from "@/components/organisms/Sidebar";
import LoginPage from "@/components/pages/LoginPage";
import GroupsPage from "@/components/pages/GroupsPage";
import MembersPage from "@/components/pages/MembersPage";
import BirthdaysPage from "@/components/pages/BirthdaysPage";
import DonationsPage from "@/components/pages/DonationsPage";
import DashboardPage from "./components/pages/DashboardPage";

export interface Routes {
  name: string;
  path: string;
  element: JSX.Element;
  icon?: ReactNode;
}

function App() {
  const routes: Routes[] = [
    {
      name: "Dashboard",
      path: "/dashboard",
      element: <DashboardPage />,
      icon: <MdDashboard size={"30px"} />,
    },
    {
      name: "Members",
      path: "/dashboard/members",
      element: <MembersPage />,
      icon: <FaUser size={"22px"} />,
    },
    {
      name: "Groups",
      path: "/dashboard/groups",
      element: <GroupsPage />,
      icon: <MdGroup size={"30px"} />,
    },
    {
      name: "Birthdays",
      path: "/dashboard/birthdays",
      element: <BirthdaysPage />,
      icon: <LiaBirthdayCakeSolid size={"30px"} />,
    },
    {
      name: "Donations",
      path: "/dashboard/donations",
      element: <DonationsPage />,
      icon: <MdOutlineCurrencyRupee size={"30px"} />,
    },
  ];

  function Layout() {
    return (
      <>
        <div className="flex min-h-screen">
          <Sidebar routes={routes} />
          <div className="flex flex-col w-full">
            <Header />
            <div className="p-8 bg-primary h-full">
              <Outlet />
            </div>
          </div>
        </div>
      </>
    );
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <LoginPage />,
    },
    {
      element: <Layout />,
      children: routes.map((route) => {
        return { path: route.path, element: route.element };
      }),
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
