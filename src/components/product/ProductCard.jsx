import { Link } from "react-router";
import Button from "../ui/Button";
import Card from "../ui/Card";
import Typography from "../ui/Typography";

export default function ProductCard({ id, title, price, image }) {
  return (
    <Link to={`/products/${id}`} className="flex h-full flex-col">
      <Card>
        <img
          src={image}
          alt={title}
          className="aspect-square w-full border-4 border-border object-cover"
        />

        <div className="mt-4 flex flex-1 flex-col">
          <div>
            <Typography variant="h3">{title}</Typography>
          </div>

          <div className="mt-auto pt-6 flex flex-col gap-4">
            <Typography className="text-xl font-bold">₹{price.toLocaleString()}</Typography>
            <Button className="w-full">View Product</Button>
          </div>
        </div>
      </Card>
    </Link>
  );
}
