import AuthLayout from "../layouts/AuthLayout";
import DashboardLayout from "../layouts/DashboardLayout";
import ErrorPage from "../pages/404";
import SignUp from "../pages/auth/SignUp";
import Page1 from "../pages/page1";
import Page2 from "../pages/page2";


const routes = [
  {
    layout: DashboardLayout,
    routes: [
      {
        path: "/dashboard",
        element: <Page1 />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/dashboard/analytics",
        element: <Page2 />,
        errorElement: <ErrorPage />,
      },
      // Add more dashboard routes here
    ],
  },
  {
    layout: AuthLayout,
    routes: [
      {
        path: "/auth/login",
        element: <SignUp />,
        errorElement: <ErrorPage />,
      },
      // Add more authentication routes here
    ],
  },
];

export default routes;
