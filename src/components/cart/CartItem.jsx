import useCart from "../../context/useCart";
import QuantitySelector from "./QuantitySelector";

export default function CartItem({ item, fullWidth }) {
  const { decreaseQuantity, increaseQuantity, removeFromCart } = useCart();

  return (
    <div className="flex gap-3">
      <img
        src={item.product.images?.[0]}
        alt={item.product.title}
        className="h-16 w-16 rounded-md object-cover"
      />

      <div
        className={`flex min-w-0 flex-1 gap-4 ${fullWidth ? "flex-col sm:flex-row sm:justify-between" : "flex-col"}`}
      >
        <div>
          <h3 className="mb-2 truncate font-medium">{item.product.title}</h3>
          <p className="font-semibold">
            ₹{item.product.price.toLocaleString()}
          </p>
        </div>
        <QuantitySelector
          quantity={item.quantity}
          onIncrease={() => increaseQuantity(item.product.id)}
          onDecrease={() => decreaseQuantity(item.product.id)}
          onRemove={() => removeFromCart(item.product.id)}
        />
      </div>
    </div>
  );
}
