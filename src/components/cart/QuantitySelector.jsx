import Button from "../ui/Button";

export default function QuantitySelector({
  quantity,
  onIncrease,
  onDecrease,
  onRemove,
}) {
  return (
    <>
      <div className="flex items-center gap-2">
        <Button size="sm" variant="icon" onClick={onDecrease}>
          -
        </Button>

        <span>{quantity}</span>

        <Button size="sm" variant="icon" onClick={onIncrease}>
          +
        </Button>
      </div>

      <Button variant="ghost" color="danger" onClick={onRemove}>
        Remove
      </Button>
    </>
  );
}
