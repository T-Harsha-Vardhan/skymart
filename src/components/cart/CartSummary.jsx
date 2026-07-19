import { useNavigate } from "react-router";
import Button from "../ui/Button";

export default function CartSummary({ subtotal, noViewCart = false }) {
  const navigate = useNavigate();

  return (
    <div className="mt-8 border-t pt-6">
      <div className="mb-4 flex justify-between">
        <span>Subtotal</span>

        <span className="font-semibold">₹{subtotal.toLocaleString()}</span>
      </div>

      {!noViewCart && (
        <Button onClick={() => navigate("/cart")} className="w-full">
          View Cart
        </Button>
      )}
    </div>
  );
}
