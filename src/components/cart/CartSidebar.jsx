import useCart from "../../context/useCart";
import Button from "../ui/Button";

export default function CartSidebar() {
  const { cart, decreaseQuantity, increaseQuantity, removeFromCart } =
    useCart();

  if (cart.length === 0) {
    return null;
  }

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  const subtotal = cart.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  );

  return (
    <aside className="border-border bg-background w-80 shrink-0 border-l">
      <div className="sticky top-0 flex h-screen flex-col p-6">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-semibold">Shopping Cart</h2>

          <span className="bg-primary rounded-full px-2 py-1 text-xs text-white">
            {totalItems}
          </span>
        </div>

        <div className="flex-1 space-y-4">
          {cart.map((item, idx) => (
            <div key={idx} className="flex gap-3">
              <img
                src={item.product.image}
                alt={item.product.title}
                className="h-16 w-16 rounded-md object-cover"
              />

              <div className="min-w-0 flex-1">
                <h3 className="truncate font-medium">{item.product.title}</h3>

                <div className="flex items-center gap-2">
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => decreaseQuantity(item.product.id)}
                  >
                    -
                  </Button>

                  <span>{item.quantity}</span>

                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => increaseQuantity(item.product.id)}
                  >
                    +
                  </Button>
                </div>

                <Button
                  variant="ghost"
                  onClick={() => removeFromCart(item.product.id)}
                >
                  Remove
                </Button>

                <p className="font-semibold">
                  ₹{item.product.price.toLocaleString()}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 border-t pt-6">
          <div className="mb-4 flex justify-between">
            <span>Subtotal</span>

            <span className="font-semibold">₹{subtotal.toLocaleString()}</span>
          </div>

          <Button className="w-full">View Cart</Button>
        </div>
      </div>
    </aside>
  );
}
