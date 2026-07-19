import useCart from "../../context/useCart";

export default function CartSidebar() {
  const { cart } = useCart();

  if (cart.length === 0) {
    return null;
  }

  return (
    <aside className="border-border bg-background w-80 shrink-0 border-l">
      <div className="sticky top-0 h-[calc(100vh-4rem)] p-6">
        <h2 className="text-xl font-semibold">Shopping Cart</h2>

        <p className="text-muted-foreground mt-4">
          Cart sidebar coming soon...
        </p>
      </div>
    </aside>
  );
}
