import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import DesignSystemPage from "../pages/DesignSystemPage";
import HomePage from "../pages/HomePage";
import ProductsPage from "../pages/ProductsPage";
import ProductDetailsPage from "../pages/ProductDetailsPage";
import CartPage from "../pages/CartPage";
import ProductsbyCategoryPage from "../pages/ProductsbyCategoryPage";
import CategoriesPage from "../pages/CategoriesPage";

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
        path: "/categories",
        element: <CategoriesPage />,
      },
      {
        path: "/categories/:category",
        element: <ProductsbyCategoryPage />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
      {
        path: "/products/:id",
        element: <ProductDetailsPage />,
      },
      {
        path: "/design-system",
        element: <DesignSystemPage />,
      },
    ],
  },
]);
