import Container from "../ui/Container";
import Input from "../ui/Input";
import Typography from "../ui/Typography";
import Navbar from "./Navbar";
import useCart from "../../context/useCart";

export default function Header() {
  const { cart } = useCart();

  return (
    <header className="border-border bg-background border-b">
      <Container>
        <div className="flex items-center justify-between gap-6 py-4">
          {/* Logo */}
          <Typography variant="h2">🛒 SkyMart</Typography>

          {/* Search */}
          <div className="hidden max-w-lg flex-1 md:block">
            <Input placeholder="Search products..." />
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4 text-2xl">
            <button aria-label="Wishlist">❤️</button>

            <div className="flex items-center gap-2">
              <span>🛒</span>

              <span className="text-sm font-medium">{cart.length}</span>
            </div>

            <button aria-label="Profile">👤</button>
          </div>
        </div>

        <Navbar />
      </Container>
    </header>
  );
}
