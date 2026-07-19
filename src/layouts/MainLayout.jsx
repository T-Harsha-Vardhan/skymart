import { Outlet } from "react-router";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import CartSidebar from "../components/cart/CartSidebar";

export default function MainLayout() {
  return (
    <>
      <Header />

      <main className="flex">
        <section className="min-w-0 flex-1">
          <Outlet />
        </section>

        <CartSidebar />
      </main>

      <Footer />
    </>
  );
}
