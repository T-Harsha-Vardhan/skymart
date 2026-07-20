import useCart from "../../context/useCart";
import CartList from "./CartList";
import CartSummary from "./CartSummary";

export default function CartSidebar() {
  const { cart, totalItems, subtotal } = useCart();

  if (cart.length === 0) {
    return null;
  }

  return (
    <aside className="border-border bg-background w-80 shrink-0 border-l">
      <div className="sticky top-0 flex h-screen max-h-screen flex-col p-6">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-semibold">Shopping Cart</h2>

          <span className="bg-primary rounded-full px-2 py-1 text-xs text-white">
            {totalItems}
          </span>
        </div>

        <CartList cart={cart} />

        <CartSummary subtotal={subtotal} />
      </div>
    </aside>
  );
}
