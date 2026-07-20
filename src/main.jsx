import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router";
import { router } from "./app/router";
import "./index.css";
import CartProvider from "./context/CartProvider";
import AuthProvider from "./context/AuthProvider";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <CartProvider>
      <Toaster 
        toastOptions={{
          style: {
            border: '4px solid black',
            borderRadius: '0',
            boxShadow: '4px 4px 0px 0px #000',
            fontWeight: 'bold',
            textTransform: 'uppercase'
          },
        }}
      />
      <RouterProvider router={router} />
    </CartProvider>
  </AuthProvider>
);
