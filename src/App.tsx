import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "@/components/organisms/Header";
import Sidebar from "@/components/organisms/Sidebar";
import LoginPage from "@/pages/LoginPage";
import GroupsPage from "@/pages/GroupsPage";
import MembersPage from "@/pages/MembersPage";
import BirthdaysPage from "./pages/BirthdaysPage";

function Layout() {
  return (
    <>
      <div className="flex min-h-screen">
        <Sidebar />
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

function App() {
  const paths = {
    members: {
      path: "/dashboard/members",
      element: <MembersPage />,
    },
    groups: {
      path: "/dashboard/groups",
      element: <GroupsPage />,
    },
    birthdays: {
      path: "/dashboard/birthdays",
      element: <BirthdaysPage />,
    },
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <LoginPage />,
    },
    {
      element: <Layout />,
      children: [
        {
          path: paths.members.path,
          element: paths.members.element,
        },
        {
          path: paths.groups.path,
          element: paths.groups.element,
        },
        {
          path: paths.birthdays.path,
          element: paths.birthdays.element,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
