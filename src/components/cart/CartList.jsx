import CartItem from "./CartItem";

export default function CartList({ cart, fullWidth }) {
  return (
    <div className="flex-1 space-y-4 overflow-y-auto">
      {cart.map((item) => (
        <CartItem key={item.product.id} item={item} fullWidth={fullWidth} />
      ))}
    </div>
  );
}
