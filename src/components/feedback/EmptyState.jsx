import Container from "../ui/Container";
import Typography from "../ui/Typography";

const EmptyState = ({ title, subTitle }) => {
  return (
    <Container>
      <div className="space-y-4 py-20 text-center">
        <Typography variant="h1">{title}</Typography>

        <Typography>{subTitle}</Typography>
      </div>
    </Container>
  );
};

export default EmptyState;
