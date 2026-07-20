import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import DesignSystemPage from "../pages/DesignSystemPage";
import HomePage from "../pages/HomePage";
import ProductsPage from "../pages/ProductsPage";
import ProductDetailsPage from "../pages/ProductDetailsPage";
import CartPage from "../pages/CartPage";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import ProtectedRoute from "../routes/ProtectedRoute";

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
        path: "/cart",
        element: (
          <ProtectedRoute>
            <CartPage />
          </ProtectedRoute>
        ),
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
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);
