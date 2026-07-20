import Container from "../ui/Container";
import Typography from "../ui/Typography";

const LoadingState = ({ loadingText }) => {
  return (
    <Container>
      <div className="py-12 text-center">
        <Typography>{loadingText}</Typography>
      </div>
    </Container>
  );
};

export default LoadingState;
