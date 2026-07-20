import Container from "../ui/Container";
import Input from "../ui/Input";
import Typography from "../ui/Typography";
import Navbar from "./Navbar";
import useCart from "../../context/useCart";
import { Link, useNavigate } from "react-router";
import { ShoppingCartIcon, User } from "lucide-react";
import Button from "../ui/Button";
import { useContext, useState } from "react";
import AuthContext from "../../context/AuthContext";

export default function Header() {
  const { cart } = useCart();
  const { user, logoutUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const [searchQuery, setSearchQuery] = useState("");

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  const handleUserClick = () => {
    if (user) {
      setIsDropdownOpen(!isDropdownOpen);
    } else {
      navigate("/login");
    }
  };

  const handleLogout = () => {
    logoutUser();
    setIsDropdownOpen(false);
    navigate("/login");
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <header className="border-border bg-background border-b-4 relative z-50">
      <Container>
        <div className="flex items-center justify-between gap-6 py-4">
          {/* Logo */}
          <Link to={"/"}>
            <Typography variant="h1">SkyMart</Typography>
          </Link>

          {/* Search */}
          <div className="hidden max-w-lg flex-1 md:block">
            <form onSubmit={handleSearch}>
              <Input 
                placeholder="Search products..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </form>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4 text-2xl">
            <Link to={`/cart`}>
              <div className="relative flex items-center gap-2">
                <ShoppingCartIcon size={24} />

                <span className="bg-primary absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center border-2 border-black p-2 text-xs font-bold text-black shadow-[2px_2px_0px_0px_#000]">
                  {cartCount}
                </span>
              </div>
            </Link>

            <div className="relative">
              <Button 
                variant="ghost" 
                size="icon" 
                aria-label="Profile"
                onClick={handleUserClick}
              >
                <User />
              </Button>

              {isDropdownOpen && user && (
                <div className="absolute right-0 top-full mt-2 w-48 bg-white border-4 border-black shadow-[8px_8px_0px_0px_#000] flex flex-col p-2">
                  <Link 
                    to="/profile" 
                    className="p-2 font-bold uppercase hover:bg-primary border-2 border-transparent hover:border-black transition-all"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    My Profile
                  </Link>
                  <button 
                    onClick={handleLogout}
                    className="p-2 font-bold uppercase hover:bg-primary border-2 border-transparent hover:border-black transition-all text-left"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        <Navbar />
      </Container>
    </header>
  );
}
