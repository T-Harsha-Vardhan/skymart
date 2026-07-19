import Container from "../ui/Container";
import Typography from "../ui/Typography";
import ProductGrid from "../product/ProductGrid";
import { products } from "../../data/products";

export default function FeaturedProducts() {
  return (
    <section className="py-20">
      <Container>
        <div className="space-y-10">
          <Typography variant="h2">Featured Products</Typography>

          <ProductGrid products={products} />
        </div>
      </Container>
    </section>
  );
}
