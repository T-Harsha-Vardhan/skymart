import Container from "../ui/Container";
import Typography from "../ui/Typography";

const categories = [
  "Electronics",
  "Fashion",
  "Home & Kitchen",
  "Beauty",
  "Sports",
  "Books",
];

export default function Categories() {
  return (
    <section className="py-20">
      <Container>
        <div className="space-y-10">
          <Typography variant="h2">Shop by Category</Typography>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <div
                key={category}
                className="border-border bg-surface rounded-lg border p-8 text-center transition-shadow hover:shadow-md"
              >
                <Typography variant="h3">{category}</Typography>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
