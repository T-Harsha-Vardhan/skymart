import { useParams } from "react-router";
import Container from "../components/ui/Container";
import Typography from "../components/ui/Typography";

export default function ProductDetailsPage() {
  const { id } = useParams();

  return (
    <Container>
      <div className="space-y-4 py-12">
        <Typography variant="h1">Product Details</Typography>

        <Typography>Product ID: {id}</Typography>
      </div>
    </Container>
  );
}
