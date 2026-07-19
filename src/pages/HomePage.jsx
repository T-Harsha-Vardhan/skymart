import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import Container from "../components/ui/Container";
import Typography from "../components/ui/Typography";

export default function HomePage() {
  return (
    <Container>
      <Card>
        <Typography variant="h2">iPhone 17 Pro</Typography>

        <Typography>₹89,999</Typography>

        <div className="mt-4">
          <Button>Add to Cart</Button>
        </div>
      </Card>
    </Container>
  );
}
