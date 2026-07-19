import { Outlet } from "react-router";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import CartSidebar from "../components/cart/CartSidebar";

export default function MainLayout() {
  return (
    <>
      <div className="flex">
        <div className="flex-1">
          <Header />
          <main className="flex">
            <Outlet />
          </main>
          <Footer />
        </div>
        <CartSidebar />
      </div>
    </>
  );
}
