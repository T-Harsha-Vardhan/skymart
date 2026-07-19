import Button from "../components/ui/Button";
import Container from "../components/ui/Container";
import Typography from "../components/ui/Typography";

export default function HomePage() {
  return (
    <Container>
      <Typography variant="h1">SkyMart</Typography>

      <div className="mt-6 flex gap-4">
        <Button>Buy Now</Button>

        <Button variant="secondary">Cancel</Button>

        <Button disabled>Processing...</Button>
      </div>
    </Container>
  );
}
