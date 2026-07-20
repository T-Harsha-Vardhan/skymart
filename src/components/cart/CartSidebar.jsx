import useCart from "../../context/useCart";
import CartList from "./CartList";
import CartSummary from "./CartSummary";

export default function CartSidebar() {
  const { cart, totalItems, subtotal } = useCart();

  if (cart.length === 0) {
    return null;
  }

  return (
    <aside className="hidden lg:block border-border bg-background w-80 shrink-0 border-l-4">
      <div className="sticky top-0 flex h-screen max-h-screen flex-col p-6">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-black uppercase">Shopping Cart</h2>

          <span className="bg-primary border-2 border-border px-2 py-1 text-xs font-bold text-black! shadow-sm">
            {totalItems}
          </span>
        </div>

        <CartList cart={cart} />

        <CartSummary subtotal={subtotal} />
      </div>
    </aside>
  );
}
