import { Link } from "react-router";
import Container from "../components/ui/Container";
import Typography from "../components/ui/Typography";
import Button from "../components/ui/Button";

export default function NotFoundPage() {
  return (
    <Container>
      <div className="flex flex-col items-center justify-center py-32 text-center">
        <Typography variant="h1" className="mb-4 text-9xl">
          404
        </Typography>
        <Typography variant="h2" className="mb-8">
          Page Not Found
        </Typography>
        <Typography className="mb-12 max-w-md">
          Oops! The page you are looking for doesn't exist or has been moved.
        </Typography>
        <Link to="/">
          <Button>Return to Home</Button>
        </Link>
      </div>
    </Container>
  );
}
