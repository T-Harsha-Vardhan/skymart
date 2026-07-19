import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import DesignSystemPage from "../pages/DesignSystemPage";
import HomePage from "../pages/HomePage";
import ProductsPage from "../pages/ProductsPage";

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/products",
        element: <ProductsPage />,
      },
      {
        path: "/design-system",
        element: <DesignSystemPage />,
      },
    ],
  },
]);
