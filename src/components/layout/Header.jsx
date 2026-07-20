import Container from "../ui/Container";
import Input from "../ui/Input";
import Typography from "../ui/Typography";
import Navbar from "./Navbar";
import useCart from "../../context/useCart";
import { Link } from "react-router";
import { ShoppingCartIcon, User } from "lucide-react";
import Button from "../ui/Button";

export default function Header() {
  const { cart } = useCart();

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="border-border bg-background border-b">
      <Container>
        <div className="flex items-center justify-between gap-6 py-4">
          {/* Logo */}
          <Link to={"/"}>
            <Typography variant="h1">SkyMart</Typography>
          </Link>

          {/* Search */}
          <div className="hidden max-w-lg flex-1 md:block">
            <Input placeholder="Search products..." />
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4 text-2xl">
            <Link to={`/cart`}>
              <div className="relative flex items-center gap-2">
                <ShoppingCartIcon size={24} />

                <span className="bg-primary absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full p-2 text-sm text-white">
                  {cartCount}
                </span>
              </div>
            </Link>

            <Button variant="ghost" size="icon" aria-label="Profile">
              <User />
            </Button>
          </div>
        </div>

        <Navbar />
      </Container>
    </header>
  );
}
