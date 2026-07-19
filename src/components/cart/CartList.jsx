import CartItem from "./CartItem";

export default function CartList({ cart }) {
  return (
    <div className="flex-1 space-y-4">
      {cart.map((item) => (
        <CartItem key={item.product.id} item={item} />
      ))}
    </div>
  );
}
