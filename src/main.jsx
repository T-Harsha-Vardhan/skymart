import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router";
import { router } from "./app/router";
import "./index.css";
import CartProvider from "./context/CartProvider";
import AuthProvider from "./context/AuthProvider";
import { Toaster } from "react-hot-toast";

import { ThemeProvider } from "./context/ThemeContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <AuthProvider>
      <CartProvider>
        <Toaster 
          toastOptions={{
            style: {
              border: '4px solid var(--border-color)',
              borderRadius: '0',
              boxShadow: 'var(--shadow-sm)',
              fontWeight: 'bold',
              textTransform: 'uppercase',
              background: 'var(--surface-color)',
              color: 'var(--text-color)',
            },
          }}
        />
        <RouterProvider router={router} />
      </CartProvider>
    </AuthProvider>
  </ThemeProvider>
);
