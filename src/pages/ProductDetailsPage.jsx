import { useParams } from "react-router";
import Container from "../components/ui/Container";
import Typography from "../components/ui/Typography";
import { products } from "../data/products";

export default function ProductDetailsPage() {
  const { id } = useParams();

  const product = products.find((product) => product.id === Number(id));

  if (!product) {
    return (
      <Container>
        <div className="py-12">
          <Typography variant="h1">Product Not Found</Typography>

          <Typography>The requested product does not exist.</Typography>
        </div>
      </Container>
    );
  }

  return (
    <Container>
      <div className="grid gap-12 py-12 lg:grid-cols-2">
        <img
          src={product.image}
          alt={product.title}
          className="border-border w-full rounded-lg border"
        />

        <div className="space-y-4">
          <Typography variant="h1">{product.title}</Typography>

          <Typography>₹{product.price.toLocaleString()}</Typography>

          <Typography>This is a placeholder product description.</Typography>
        </div>
      </div>
    </Container>
  );
}
