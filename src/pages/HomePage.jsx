import Container from "../components/ui/Container";
import Typography from "../components/ui/Typography";

export default function HomePage() {
  return (
    <Container>
      <Typography variant="h1">SkyMart</Typography>

      <Typography variant="body">
        Welcome to your production React project.
      </Typography>

      <Typography variant="caption">Version 1 Design System</Typography>
    </Container>
  );
}
