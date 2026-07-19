import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import Container from "../components/ui/Container";
import Input from "../components/ui/Input";
import Typography from "../components/ui/Typography";

export default function HomePage() {
  return (
    <Container>
      <Card>
        <Typography variant="h2">Sign In</Typography>

        <div className="mt-6 space-y-4">
          <Input placeholder="Email" />

          <Input type="password" placeholder="Password" />

          <Button>Login</Button>
        </div>
      </Card>
    </Container>
  );
}
