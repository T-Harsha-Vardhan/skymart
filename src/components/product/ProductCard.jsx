import Button from "../ui/Button";
import Card from "../ui/Card";
import Typography from "../ui/Typography";

export default function ProductCard({ title, price, image }) {
  return (
    <Card>
      <img
        src={image}
        alt={title}
        className="aspect-square w-full rounded-md object-cover"
      />

      <div className="mt-4 space-y-3">
        <Typography variant="h3">{title}</Typography>

        <Typography>₹{price.toLocaleString()}</Typography>

        <Button>Add to Cart</Button>
      </div>
    </Card>
  );
}
