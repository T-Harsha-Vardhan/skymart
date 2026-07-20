import CartList from "../components/cart/CartList";
import CartSummary from "../components/cart/CartSummary";
import Container from "../components/ui/Container";
import Typography from "../components/ui/Typography";
import useCart from "../context/useCart";

export default function CartPage() {
  const { cart, subtotal } = useCart();

  return (
    <Container>
      <div className="pt-4 pb-8">
        <Typography variant="h2">Order Summary</Typography>
      </div>

      {cart && cart.length > 0 ? (
        <>
          <CartList cart={cart} fullWidth={true} />
          <CartSummary subtotal={subtotal} noViewCart />
        </>
      ) : (
        <Container>
          <Typography variant="h2">🛒 Your cart is empty.</Typography>
          <Typography variant="h3">Continue Shopping</Typography>
        </Container>
      )}
    </Container>
  );
}
