import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "@/components/organisms/Header";
import Sidebar from "@/components/organisms/Sidebar";
import LoginPage from "@/components/pages/LoginPage";
import GroupsPage from "@/components/pages/GroupsPage";
import MembersPage from "@/components/pages/MembersPage";
import BirthdaysPage from "@/components/pages/BirthdaysPage";
import DonationsPage from "@/components/pages/DonationsPage";

function App() {
  const routes = [
    {
      name: "Members",
      path: "/dashboard/members",
      element: <MembersPage />,
    },
    {
      name: "Groups",
      path: "/dashboard/groups",
      element: <GroupsPage />,
    },
    {
      name: "Birthdays",
      path: "/dashboard/birthdays",
      element: <BirthdaysPage />,
    },
    {
      name: "Donations",
      path: "/dashboard/donations",
      element: <DonationsPage />,
    },
  ];

  function Layout() {
    return (
      <>
        <div className="flex min-h-screen">
          <Sidebar routes={routes} />
          <div className="w-full">
            <Header />
            <div className="p-8">
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
