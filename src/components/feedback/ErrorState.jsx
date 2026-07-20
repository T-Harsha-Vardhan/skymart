import Container from "../ui/Container";
import Typography from "../ui/Typography";

const ErrorState = ({ error }) => {
  return (
    <Container>
      <div className="py-12 text-center">
        <Typography>{error.message}</Typography>
      </div>
    </Container>
  );
};

export default ErrorState;
