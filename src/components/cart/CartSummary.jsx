import Button from "../ui/Button";

export default function CartSummary({ subtotal }) {
  return (
    <div className="mt-8 border-t pt-6">
      <div className="mb-4 flex justify-between">
        <span>Subtotal</span>

        <span className="font-semibold">₹{subtotal.toLocaleString()}</span>
      </div>

      <Button className="w-full">View Cart</Button>
    </div>
  );
}
