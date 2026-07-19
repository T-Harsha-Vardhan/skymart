import Container from "../components/ui/Container";
import Typography from "../components/ui/Typography";
import ProductGrid from "../components/product/ProductGrid";
import { products } from "../data/products";

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
