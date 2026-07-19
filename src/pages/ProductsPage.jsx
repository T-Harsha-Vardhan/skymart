import Container from "../components/ui/Container";
import Typography from "../components/ui/Typography";
import ProductGrid from "../components/product/ProductGrid";

const products = [
  {
    id: 1,
    title: "Wireless Headphones",
    price: 4999,
    image: "https://placehold.co/400x400?text=Headphones",
  },
  {
    id: 2,
    title: "Smart Watch",
    price: 8999,
    image: "https://placehold.co/400x400?text=Watch",
  },
  {
    id: 3,
    title: "Gaming Mouse",
    price: 2499,
    image: "https://placehold.co/400x400?text=Mouse",
  },
  {
    id: 4,
    title: "Mechanical Keyboard",
    price: 5999,
    image: "https://placehold.co/400x400?text=Keyboard",
  },
];

export default function ProductsPage() {
  return (
    <Container>
      <div className="space-y-8 py-12">
        <div>
          <Typography variant="h1">Products</Typography>

          <Typography>Browse our collection of products.</Typography>
        </div>

        <ProductGrid products={products} />
      </div>
    </Container>
  );
}
