import Container from "../components/ui/Container";
import Typography from "../components/ui/Typography";

export default function ProductsPage() {
  return (
    <Container>
      <div className="space-y-4 py-12">
        <Typography variant="h1">Products</Typography>

        <Typography>Browse our collection of products.</Typography>
      </div>
    </Container>
  );
}
