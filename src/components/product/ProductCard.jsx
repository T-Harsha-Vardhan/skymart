import { Link } from "react-router";
import Button from "../ui/Button";
import Card from "../ui/Card";
import Typography from "../ui/Typography";

export default function ProductCard({ id, title, price, image }) {
  return (
    <Link to={`/products/${id}`}>
      <Card>
        <img
          src={image}
          alt={title}
          className="aspect-square w-full rounded-md object-cover"
        />

        <div className="mt-4 space-y-3">
          <Typography variant="h3">{title}</Typography>

          <Typography>₹{price.toLocaleString()}</Typography>

          <Button>View Product</Button>
        </div>
      </Card>
    </Link>
  );
}
