import useCart from "../../context/useCart";
import QuantitySelector from "./QuantitySelector";

export default function CartItem({ item }) {
  const { decreaseQuantity, increaseQuantity, removeFromCart } = useCart();

  return (
    <div className="flex gap-3">
      <img
        src={item.product.image}
        alt={item.product.title}
        className="h-16 w-16 rounded-md object-cover"
      />

      <div className="min-w-0 flex-1">
        <h3 className="truncate font-medium">{item.product.title}</h3>

        <p className="font-semibold">₹{item.product.price.toLocaleString()}</p>
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
