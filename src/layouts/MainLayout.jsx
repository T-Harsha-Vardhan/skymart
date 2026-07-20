import { Outlet } from "react-router";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import CartSidebar from "../components/cart/CartSidebar";

export default function MainLayout() {
  return (
    <>
      <div className="flex min-h-screen">
        <div className="flex flex-1 flex-col">
          <Header />
          <main className="flex flex-1 flex-col">
            <Outlet />
          </main>
          <Footer />
        </div>
        <CartSidebar />
      </div>
    </>
  );
}
