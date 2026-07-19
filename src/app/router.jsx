import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import DesignSystemPage from "../pages/DesignSystemPage";
import HomePage from "../pages/HomePage";

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/design-system",
        element: <DesignSystemPage />,
      },
    ],
  },
]);
